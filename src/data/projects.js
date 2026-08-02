// all project data lives here, components just read from this file
// images for the case studies are served from /public/assets/projects
// because they are webp files and don't need to go through webpack

import qrcodeImg from '../assets/qrcodework.png';
import todolistImg from '../assets/todolist.png';
import beyondnftImg from '../assets/beyondnft.png';

const caseImg = (slug, name) => `/assets/projects/${slug}/${name}.webp`;

export const projects = [
  // --- Baghlabs, the studio itself ---
  {
    slug: 'baghlabs',
    name: 'Baghlabs',
    tagline: 'From concept to product to impact.',
    description:
      'Baghlabs is the software studio I run. We take products from idea to production for clients across development, branding and AI.',
    category: 'dev',
    featured: false,
    year: '2025 - present',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'GSAP', 'Node.js'],
    hero: caseImg('baghlabs', 'hero'),
    gallery: [caseImg('baghlabs', 'hero')],
    websiteUrl: 'https://baghlabs.com',
  },

  // --- software / dev case studies ---
  {
    slug: 'dagontvangst',
    name: 'Dagontvangst',
    tagline: 'From paper chaos to a streamlined digital workflow.',
    description:
      'Dagontvangst is a SaaS tool that simplifies compliance for Belgian restaurants by replacing the traditional paper dagontvangstenboek with a sleek, affordable, legally compliant platform.',
    category: 'dev',
    featured: true,
    year: '2026',
    technologies: ['Laravel', 'React', 'PostgreSQL', 'Railway'],
    features: [
      'Multi location support',
      'Digital sales logbook',
      'Multilingual (NL/FR/EN)',
      'Digital signatures & audit trails',
    ],
    results: [
      '100% Belgian tax compliance',
      '80% reduction in paperwork time',
      'Trilingual interface (NL/FR/EN)',
      '500+ restaurant registrations',
    ],
    hero: caseImg('dagontvangst', 'hero'),
    gallery: [
      caseImg('dagontvangst', 'gallery-1'),
      caseImg('dagontvangst', 'gallery-2'),
      caseImg('dagontvangst', 'gallery-3'),
      caseImg('dagontvangst', 'gallery-4'),
    ],
    websiteUrl: 'https://dagontvangst.be/',
  },
  {
    slug: 'availly',
    name: 'Availly',
    tagline: 'Availability you share, privacy you keep.',
    description:
      'Availly is a lightweight tool for managing personal and business availability, with a sleek calendar UI and powerful sharing features.',
    category: 'dev',
    featured: true,
    year: '2025',
    technologies: ['React', 'Laravel', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Shareable booking links',
      'Calendar integrations (Google/CalDAV)',
      'Privacy-first, read-only calendar scopes',
      'AI powered smart scheduling',
    ],
    results: [
      '50% reduction in scheduling back-and-forth',
      'Sub-100ms availability checks',
      'Zero personal data exposure',
    ],
    hero: caseImg('availly', 'hero'),
    gallery: [
      caseImg('availly', 'gallery-1'),
      caseImg('availly', 'gallery-2'),
      caseImg('availly', 'gallery-3'),
    ],
  },
  {
    slug: 'delicebrugge',
    name: 'Délice Brugge',
    tagline: 'From zero to a complete digital experience for a Bruges restaurant.',
    description:
      'Full website build from the ground up, including a custom multilingual group booking system and a per-guest pre-ordering menu, in 4 languages.',
    category: 'dev',
    year: '2025',
    technologies: ['Next.js', 'Tailwind CSS'],
    features: [
      'Group booking flow for 6+ guests',
      'Per-guest pre-ordering menu',
      '4 language support (NL/EN/FR/DE)',
    ],
    results: [
      'Streamlined group booking',
      'Pre-order menu eliminates table waste',
      'Online bookings increased by 40%',
    ],
    hero: caseImg('delicebrugge', 'hero'),
    gallery: [
      caseImg('delicebrugge', 'gallery-1'),
      caseImg('delicebrugge', 'gallery-2'),
      caseImg('delicebrugge', 'gallery-3'),
    ],
    websiteUrl: 'https://www.delicebrugge.be',
  },
  {
    slug: 'calvarychurch',
    name: 'De Pelgrim, Calvary Chapel',
    tagline: 'Bilingual CMS website for independent management.',
    description:
      'Full website build for a church community: color palette, web design and a Next.js site with Sanity CMS, fully bilingual (NL/EN) so the team can manage everything themselves.',
    category: 'dev',
    year: '2026',
    technologies: ['Next.js', 'Sanity CMS', 'Tailwind CSS'],
    features: [
      'Sanity CMS with bilingual content types',
      'Event management',
      'Recurring events & ministries pages',
    ],
    results: [
      'Content manageable without technical knowledge',
      'Events & bible verses editable in real time',
      'Fast launch through a structured CMS',
    ],
    hero: caseImg('calvarychurch', 'hero'),
    gallery: [caseImg('calvarychurch', 'gallery-1'), caseImg('calvarychurch', 'gallery-2')],
  },
  {
    slug: 'supportportal',
    name: 'Support Portal',
    tagline: 'Streamlined client support, powered by transparency.',
    description:
      'A dedicated support portal for Baghlabs clients to submit tickets, track progress and stay in the loop, all synced with GitHub Issues behind the scenes.',
    category: 'dev',
    featured: true,
    year: '2026',
    technologies: ['Next.js', 'Supabase', 'GitHub API', 'Tailwind CSS'],
    features: [
      'Ticket management with client invitations',
      'Secure role-based authentication',
      'Real-time status updates via GitHub webhooks',
    ],
    results: [
      'Centralized client communication',
      'Seamless GitHub issue integration',
      'Reduced email back-and-forth',
    ],
    hero: caseImg('supportportal', 'hero'),
    gallery: [
      caseImg('supportportal', 'gallery-1'),
      caseImg('supportportal', 'gallery-2'),
      caseImg('supportportal', 'gallery-3'),
    ],
    websiteUrl: 'https://support.baghlabs.com',
  },
  {
    slug: 'project-alpha',
    name: 'Project Alpha',
    tagline: 'Mobile app for finance management for Belgian banks.',
    description: 'An AI/ML powered finance app for Belgians. Currently under NDA.',
    category: 'dev',
    year: 'coming soon',
    technologies: ['Kotlin', 'Spring Boot', 'ML', 'Cloud Functions'],
    comingSoon: true,
    hero: caseImg('project-alpha', 'hero'),
    gallery: [caseImg('project-alpha', 'gallery-1')],
  },

  // --- personal side projects ---
  {
    slug: 'qr-code-generator',
    name: 'QR Code Generator',
    tagline: 'Vanilla JS QR code generator.',
    description: 'A small vanilla JavaScript tool that generates QR codes straight in the browser.',
    category: 'dev',
    year: '2023',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    hero: qrcodeImg,
    gallery: [qrcodeImg],
    websiteUrl: 'https://qrfreecodegenerator.netlify.app/',
    sourceUrl: 'https://github.com/Swnzz/qrcodegenerator',
  },
  {
    slug: 'todo-list',
    name: 'To-Do List App',
    tagline: 'React Native to-do list app.',
    description: 'A React Native to-do list app built with Expo.',
    category: 'dev',
    year: '2022',
    technologies: ['React Native', 'Expo'],
    hero: todolistImg,
    gallery: [todolistImg],
    sourceUrl: 'https://github.com/Swnzz/rn-todolist',
  },
  {
    slug: 'beyondnft',
    name: 'BeyondNFT',
    tagline: 'React Native NFT marketplace concept.',
    description: 'A React Native NFT marketplace concept app built with Expo.',
    category: 'dev',
    year: '2022',
    technologies: ['React Native', 'Expo'],
    hero: beyondnftImg,
    gallery: [beyondnftImg],
    sourceUrl: 'https://github.com/Swnzz/beyondnft',
  },

  // --- design / creative case studies ---
  {
    slug: 'blurry-vintage',
    name: 'Blurry Vintage',
    tagline: 'Luxury thrift fashion with a personal story.',
    description:
      'Branding, photography and packaging design for a luxury thrift fashion store, balancing the luxury of vintage fashion with a personal narrative.',
    category: 'design',
    year: '2023',
    services: ['Branding', 'Photography', 'Packaging Design'],
    hero: caseImg('blurry-vintage', 'hero'),
    gallery: [
      caseImg('blurry-vintage', 'gallery-1'),
      caseImg('blurry-vintage', 'gallery-2'),
      caseImg('blurry-vintage', 'gallery-3'),
    ],
  },
  {
    slug: 'claymates',
    name: 'ClayMates Ceramic Atelier',
    tagline: 'Connecting through the craft of ceramics.',
    description:
      'Product photography and video for a ceramics studio, capturing the tactile beauty and serene atmosphere of the space.',
    category: 'design',
    year: '2023',
    services: ['Photography', 'Video Production'],
    hero: caseImg('claymates', 'hero'),
    gallery: [
      caseImg('claymates', 'gallery-1'),
      caseImg('claymates', 'gallery-2'),
      caseImg('claymates', 'gallery-3'),
    ],
  },
  {
    slug: 'ic-glowup',
    name: 'IC GlowUp Skyhome',
    tagline: 'From vision to brand identity.',
    description:
      'Brand identity and product design for Innovative Commerce, giving distinct identities to a main brand and its sub-brands.',
    category: 'design',
    year: '2023',
    services: ['Brand Identity', 'Product Design', 'Packaging Design'],
    hero: caseImg('ic', 'hero'),
    gallery: [caseImg('ic', 'gallery-1'), caseImg('ic', 'gallery-2'), caseImg('ic', 'gallery-3')],
  },
  {
    slug: 'rebelieve',
    name: 'Rebelieve by Nathan Nuyts',
    tagline: 'Empowering movement through imagery.',
    description:
      'Photography, video and online advertising for a clothing brand built around self-belief and empowerment.',
    category: 'design',
    year: '2023',
    services: ['Photography', 'Video Production', 'Online Advertising'],
    hero: caseImg('rebelieve', 'hero'),
    gallery: [
      caseImg('rebelieve', 'gallery-1'),
      caseImg('rebelieve', 'gallery-2'),
      caseImg('rebelieve', 'gallery-3'),
    ],
  },
  {
    slug: 'yokoso',
    name: 'Yokoso',
    tagline: 'Sushi crafted to your taste.',
    description:
      'Campaign photography and online advertising for a sushi restaurant that lets guests customize every roll.',
    category: 'design',
    year: '2022',
    services: ['Campaign Photography', 'Video Production'],
    hero: caseImg('yokoso', 'hero'),
    gallery: [
      caseImg('yokoso', 'gallery-1'),
      caseImg('yokoso', 'gallery-2'),
      caseImg('yokoso', 'gallery-3'),
    ],
  },
  {
    slug: 'poland-invest',
    name: 'Poland Invest ZEN',
    tagline: 'Investing in a visionary future.',
    description:
      'Photography, video and precision-targeted online ads for a real estate investment brand.',
    category: 'design',
    year: '2021',
    services: ['Photography', 'Video Production', 'Online Advertising'],
    hero: caseImg('poland-invest', 'hero'),
    gallery: [caseImg('poland-invest', 'gallery-1')],
  },
];

export const getProjectsByCategory = (category) => {
  if (category === 'all') return projects;
  return projects.filter((p) => p.category === category);
};

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
