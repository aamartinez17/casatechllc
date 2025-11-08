// src/components/data/ProjectData.js
//
// This file exports a modular array of all portfolio projects.
// This makes it easy to add, edit, or remove projects without
// touching the PortfolioView.vue component.

export const allProjects = [
  { 
    id: 1, 
    title: 'Local Restaurant Website', 
    title_es: 'Sitio Web de Restaurante Local',
    category: 'web', 
    description: 'A modern, responsive website for a New Haven restaurant.', 
    description_es: 'Un sitio web moderno y responsivo para un restaurante de New Haven.',
    imageUrl: 'https://placehold.co/600x400/036264/white?text=Project+1',
    projectUrl: 'https://www.example.com' // <-- Link to live site
  },
  { 
    id: 2, 
    title: 'Startup Tech Setup', 
    title_es: 'Configuración de Tecnología para Startup',
    category: 'smb', 
    description: 'Full tech stack setup for a new law firm.', 
    description_es: 'Configuración completa del stack tecnológico para un nuevo bufete de abogados.',
    imageUrl: 'https://placehold.co/600x400/ffab40/036264?text=Project+2',
    projectUrl: null // <-- No link, so no button will appear
  },
  { 
    id: 3, 
    title: 'On-Demand IT Support', 
    title_es: 'Soporte de IT Bajo Demanda',
    category: 'it', 
    description: 'Monthly retainer for IT support for a small business.', 
    description_es: 'Iguala mensual para soporte de IT para una pequeña empresa.',
    imageUrl: 'https://placehold.co/600x400/ad0505/white?text=Project+3',
    projectUrl: null
  },
  { 
    id: 4, 
    title: 'E-Commerce Store', 
    title_es: 'Tienda de E-Commerce',
    category: 'web', 
    description: 'Custom Vue.js e-commerce solution.', 
    description_es: 'Solución de e-commerce personalizada con Vue.js.',
    imageUrl: 'https://placehold.co/600x400/036264/white?text=Project+4',
    projectUrl: 'https://www.example.com' // <-- Link to live site
  },
  { 
    id: 5, 
    title: 'Google Workspace Migration', 
    title_es: 'Migración a Google Workspace',
    category: 'smb', 
    description: 'Migrated a 20-person team to Google Workspace.', 
    description_es: 'Migración de un equipo de 20 personas a Google Workspace.',
    imageUrl: 'https://placehold.co/600x400/ffab40/036264?text=Project+5',
    projectUrl: null
  },
  { 
    id: 6, 
    title: 'Network Overhaul', 
    title_es: 'Revisión de Red',
    category: 'it', 
    description: 'Upgraded office Wi-Fi and network security.', 
    description_es: 'Actualización de Wi-Fi de oficina y seguridad de red.',
    imageUrl: 'https://placehold.co/600x400/ad0505/white?text=Project+6',
    projectUrl: null
  },
];