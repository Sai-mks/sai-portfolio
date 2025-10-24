// Portfolio constants and configuration
export const PORTFOLIO_CONFIG = {
  name: 'VADTHYAVATH SAI KUMAR',
  title: 'Frontend Developer',
  email: 'saikumar1919.v@gmail.com',
  phone: '+91 8096594459',
  location: 'Hyderabad, India 500097',
  bio: 'Frontend Developer with 8 months of hands-on experience in developing web and mobile applications. Passionate about creating beautiful, functional, and user-friendly interfaces.',
  website: 'https://hifix.in/',
  
  social: {
    github: 'https://github.com/Sai-mks',
    linkedin: 'https://www.linkedin.com/in/vadthyavath-sai-kumar-41a459289',
    email: 'mailto:saikumar1919.v@gmail.com'
  }
};

export const NAVIGATION_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' }
];

export const SKILLS = [
  'JavaScript',
  'React.js',
  'React Native',
  'HTML',
  'CSS',
  'Expo',
  'Git',
  'GitHub'
];

export const PROJECTS = [
  {
    id: 1,
    title: 'HiFix Experts (Mobile App)',
    description: 'Developed a mobile application for service providers to register, manage tasks, track locations, and upload documents. Implemented multilingual UI and integrated GPS capabilities.',
    tech: ['React Native', 'Expo', 'GitHub', 'GPS Integration'],
    demo: 'https://play.google.com/store/apps/details?id=com.hifixexperts',
    github: '#',
    emoji: '🔧',
    featured: true,
    role: 'Front-end Developer',
    duration: 'Feb 2025 - Present',
    teamSize: '2 Members'
  },
  {
    id: 2,
    title: 'HiFix Partner (Mobile App)',
    description: 'Built a customer-facing mobile application that allows users to search for services, make bookings, and refer others using contact-based sharing with location-based service matching.',
    tech: ['React Native', 'Expo', 'Location API', 'Contacts Module'],
    demo: 'https://play.google.com/store/apps/details?id=com.hifixpartner',
    github: '#',
    emoji: '📱',
    featured: true,
    role: 'Front-end Developer',
    duration: 'Feb 2025 - Present',
    teamSize: '2 Members'
  },
  {
    id: 3,
    title: 'HiFix Website',
    description: 'Developed the static marketing and informational website for HiFix, designed to showcase services, onboard service providers/customers, and improve brand visibility.',
    tech: ['React.js', 'Responsive Design', 'Git'],
    demo: 'https://hifix.in',
    github: '#',
    emoji: '🌐',
    featured: true,
    role: 'Front-end Developer',
    duration: '1 Month',
    teamSize: '2 Members'
  },
  {
    id: 4,
    title: 'Rottiwala App',
    description: 'Developed a cross-platform mobile application for Rottiwala, a food delivery platform offering traditional and organic meals with smooth, responsive UI.',
    tech: ['React Native', 'Cross-platform', 'Food Delivery'],
    demo: 'https://play.google.com/store/apps/details?id=com.jawar',
    github: '#',
    emoji: '🍽️',
    featured: true,
    role: 'Front-end Developer',
    duration: '1 Month',
    teamSize: '2 Members'
  },
  {
    id: 5,
    title: 'Rottiwala Website',
    description: 'Developed a responsive website for Rottiwala food delivery platform, featuring menu display, online ordering system, and customer management interface.',
    tech: ['React.js', 'Responsive Design', 'E-commerce'],
    demo: 'https://rotiwala.org/',
    github: '#',
    emoji: '🌐',
    featured: true,
    role: 'Front-end Developer',
    duration: '1 Month',
    teamSize: '2 Members'
  }
];

export const EXPERIENCE = [
  {
    company: 'HiFix Innovatives & sneha and prahar consultancy',
    position: 'Frontend Developer',
    location: 'Hyderabad',
    duration: 'Feb 2025 - Current',
    description: 'Actively involved in design and development of multiple cutover\'s and major upgrades of our Application which includes Platform upgrades.',
    achievements: [
      'Involved in Full Stack Development using React JS, Node JS, Express and MongoDB',
      'Experience on AWS Deploying and maintenance',
      'Proficient in creating dynamic and responsive user interfaces using React JS',
      'Worked closely with other team members to identify and remove software bugs',
      'Communicated technical and design requirements to determine performance, reliability and accessibility'
    ]
  }
];

export const EDUCATION = {
  degree: 'Bachelor of Technology: CSE',
  institution: 'Nalla Malla Reddy Engineering College',
  location: 'Hyderabad',
  year: '2024'
};
