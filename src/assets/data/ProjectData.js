// src/components/data/ProjectData.js
//
// This file exports a modular array of all portfolio projects.
// This makes it easy to add, edit, or remove projects without
// touching the PortfolioView.vue component.

export const allProjects = [
  { 
    id: 1, 
    title: 'Cardoso Cleaning Services LLC', 
    title_es: 'Cardoso Cleaning Services LLC',
    category: 'web', 
    description: 'A clean and modern to help this Harrisonburg-based cleaning service build trust and generate new customer leads online.', 
    description_es: 'Un sitio web limpio y moderno diseñado para ayudar a este servicio de limpieza en Harrisonburg a generar confianza y atraer nuevos clientes potenciales en línea.',
    imageUrl: '/images/project-cardoso-cs.png',
    projectUrl: 'https://cardosocleaningservicesllc.netlify.app/' // <-- Link to live site
  },
  { 
    id: 2, 
    title: 'White Glove Assembly Co', 
    title_es: 'White Glove Assembly Co',
    category: 'web', 
    description: 'A professional, high-end website for a New Haven-based moving and furniture assembly company. The design focuses on conveying trust, reliability, and their premium "White Glove" service to attract discerning clients.', 
    description_es: 'Un sitio web profesional y de alta gama para una empresa de mudanzas y ensamblaje de muebles en New Haven. El diseño se enfoca en transmitir confianza, fiabilidad y su servicio premium "White Glove" (de guante blanco) para atraer a clientes exigentes.',
    imageUrl: '/images/project-whiteglove-assembly.png',
    projectUrl: 'https://whitegloveassembly.co/'
  },
  { 
    id: 3, 
    title: 'Omar\'s Barbershop and Hair Salon', 
    title_es: 'Omar\'s Barbershop and Hair Salon',
    category: 'Web', 
    description: 'A clean, modern website for a premier Harrisonburg barbershop and salon. The design focuses on easy appointment booking and highlights their talented team of barbers and stylists. It also serves as a hub, showcasing the collective of other beauty professionals in their suites.', 
    description_es: 'Un sitio web limpio y moderno para una barbería y salón premier en Harrisonburg. El diseño se centra en la facilidad para reservar citas y destaca a su talentoso equipo de barberos y estilistas. También funciona como un directorio central, presentando al colectivo de otros profesionales de la belleza que operan en sus suites.',
    imageUrl: '/images/project-omars-bas.png',
    projectUrl: 'https://omarsbarbershop.netlify.app/'
  },
  { 
    id: 4, 
    title: 'Latin Chamber of Commerce (CEL)', 
    title_es: 'Cámara de Comercio Latina (CEL)',
    category: 'web', 
    description: 'A robust, bilingual web application for Harrisonburg\'s Latin Chamber of Commerce. The project\'s core was security, featuring a full admin panel for user data management and personalized, editable profiles for each member business.', 
    description_es: 'Una aplicación web robusta y bilingüe para la Cámara de Comercio Latina de Harrisonburg. El núcleo del proyecto fue la seguridad, presentando un panel de administración completo para la gestión de datos de usuarios y perfiles personalizados y editables para cada negocio miembro.',
    imageUrl: '/images/project-CEL.png',
    projectUrl: 'https://celharrisonburg.org/' // <-- Link to live site
  },
  { 
    id: 5, 
    title: 'Clean Out Pros LLC', 
    title_es: 'Clean Out Pros LLC',
    category: 'web', 
    description: 'A professional, results-oriented website for a Harrisonburg-based junk removal and organization company. The site is designed to clearly showcase their full range of services, from storage cleanouts to move-in/out prep, building customer trust and making booking easy.', 
    description_es: 'Un sitio web profesional y orientado a resultados para una empresa de organización y eliminación de escombros en Harrisonburg. El sitio está diseñado para mostrar claramente su gama completa de servicios, desde limpieza de almacenes hasta preparación para mudanzas, generando confianza en el cliente y facilitando la reserva.',
    imageUrl: '/images/project-cleanoutpros.png',
    projectUrl: 'https://cleanoutprosllc.netlify.app/'
  },
  { 
    id: 6, 
    title: 'Bluestone Hills Tree Service', 
    title_es: 'Bluestone Hills Tree Service',
    category: 'web', 
    description: 'A professional website for a Waynesboro-based tree service company. The clean design clearly communicates their wide range of expertise, including tree removal, stump grinding, land clearing, and landscaping, making it easy for local residents to find help and request a quote.', 
    description_es: 'Un sitio web profesional para una empresa de servicios de árboles en Waynesboro. El diseño limpio comunica claramente su amplia gama de experiencia, incluyendo remoción de árboles, remoción de tocones, limpieza de terrenos y paisajismo, facilitando a los residentes locales encontrar ayuda y solicitar una cotización.',
    imageUrl: '/images/project-bluestone-hills-ts.png',
    projectUrl: 'https://bluestonehillstreet.netlify.app/'
  },
];