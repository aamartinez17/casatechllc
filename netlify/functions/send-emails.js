// netlify/functions/send-email.js
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const data = JSON.parse(event.body);

  // 1. Authenticate using your MAIN account (amartinez@)
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // amartinez@casatechllc.com
      pass: process.env.EMAIL_PASS, // its App Password
    },
  });

  try {
    // 2. Send the email to YOU (the admin)
    // This email is sent TO your info@ alias.
    // When you hit "Reply," it correctly replies TO the user.
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

    // 3. Send the auto-reply email to the USER
    // This email comes from your no-reply@ alias.
    // When they hit "Reply," it replies TO your info@ alias.
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

    // 4. Return success
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Emails sent successfully' }),
    };

  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email' }),
    };
  }
};