// netlify/functions/send-emails.js

// 1. Use ESM 'import' syntax
import nodemailer from 'nodemailer';

// 2. Use ESM 'export' syntax
export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body);

    // === 1. VERIFY THE reCAPTCHA TOKEN ===
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${data.recaptchaToken}`,
    });
    
    const recaptchaResult = await response.json();

    // 2. CHECK THE RESULT (v2 doesn't have a score)
    if (!recaptchaResult.success) {
      console.warn('Bot detected (reCAPTCHA v2 failed)', recaptchaResult['error-codes']);
      return {
        statusCode: 403, // Forbidden
        body: JSON.stringify({ message: 'reCAPTCHA verification failed. Please try again.' }),
      };
    }

    // 3. Authenticate using your MAIN account (amartinez@)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // amartinez@casatechllc.com
        pass: process.env.EMAIL_PASS, // its App Password
      },
    });

    // 4. Send the email to YOU (the admin)
    await transporter.sendMail({
      from: `"Casatech Website Form" <${process.env.EMAIL_USER}>`, // From: amartinez@casatechllc.com
      to: process.env.ADMIN_EMAIL,                                // To: info@casatechllc.com
      replyTo: `"${data.name}" <${data.email}>`,                   // Reply-To: The User
      subject: `[Casatech Lead] New Inquiry from ${data.name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject || 'No subject'}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // 5. Send the auto-reply email to the USER
    await transporter.sendMail({
      from: `"Casatech LLC" <${process.env.NOREPLY_ALIAS}>`, // From: no-reply@casatechllc.com
      to: data.email,                                      // To: The User
      replyTo: process.env.ADMIN_EMAIL,                    // Reply-To: info@casatechllc.com
      subject: 'Thank you for contacting Casatech LLC! / ¡Gracias por contactar a Casatech LLC!',
      html: `
        <h3>Hi ${data.name},</h3>
        <p>Thank you for getting in touch with Casatech LLC! This is an automatic confirmation that we have received your message.</p>
        <p>I'll review your inquiry and get back to you personally as soon as possible.</p>
        <p><strong>Please note:</strong> This is an automated message. If you have any follow-up questions, you can just reply to this email.</p>
        <hr>
        <p>Best regards,<br>Alex Martinez<br>Casatech LLC</p>
      `,
    });

    // 6. Return success
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Emails sent successfully' }),
    };

  } catch (error) {
    // This will now catch ANY error (reCAPTCHA, auth, or sending)
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error processing your request' }),
    };
  }
};