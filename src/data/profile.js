// ─── Thông tin cá nhân ───────────────────────────────────────────────────────
export const ROLE = 'A SOFTWARE ENGINEER';

export const NAME = 'NGUYEN HOAI NAM';
export const LOCATION = 'HA NOI, VIETNAM';
export const AVAILABLE = true;

export const BIO = `I'm a Full-Stack Engineer who builds products end-to-end — from APIs and databases on the backend, to responsive interfaces on the frontend, and even Smart Contracts on the blockchain.
Over 4 years across 4 companies, I've shipped recruitment platforms, real-time voting systems, SocialFi apps, and business tools — always focused on code that performs and products that feel good to use.
Currently at SotaTek JSC. Always open to interesting problems.`;

export const STATS = [
  { value: '4+', label: 'YEARS EXP' },
  { value: '4', label: 'COMPANIES' },
  { value: '10+', label: 'PROJECTS' },
  { value: 'WEB2 + WEB3', label: 'DOMAIN' },
];

export const SOCIAL = [
  { label: 'GITHUB', href: 'https://github.com/hoainambeco' },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/namnguyen1024/' },
  { label: 'EMAIL', href: 'mailto:namxg1@gmail.com' },
];

// ─── Skills ──────────────────────────────────────────────────────────────────
export const SKILLS = [
  'NestJS',
  'Node.js',
  'Express',
  'Microservices',
  'WebSockets',
  'Kafka',
  'S3',
  'React.js',
  'Next.js',
  'TypeScript',
  'Ethers.js',
  'Web3.js',
  'Solidity',
  'Aptos',
  'BNB Chain',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Redis',
  'Oracle',
  'Elasticsearch',
  'Docker',
  'GitHub Actions',
  'AWS',
  'Linux',
  'Nginx',
  'GraphQL',
  'REST API',
  'CI/CD',
  'Redis Cluster',
  'OpenSearch',
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    name: 'CAREERVIET',
    sub: 'Recruitment Platform',
    period: '04/2025 – 04/2026',
    color: '#00F5FF',
    description:
      'Migration of a complex legacy PHP monolith to NestJS Microservices architecture. Engineered Event-Driven Architecture with Kafka and Saga Pattern for distributed transactions across PostgreSQL, MongoDB, and Oracle. Migrated from Solr to Elasticsearch and deployed Kong Gateway + Redis Cluster for high-availability caching.',
    tech: [
      'NestJS',
      'Microservices',
      'Kafka',
      'Redis Cluster',
      'Elasticsearch',
      'PostgreSQL',
      'MongoDB',
      'Oracle',
      'Kong Gateway',
      'Docker',
    ],
    link: 'https://careerviet.vn/',
  },
  {
    name: 'ACANET',
    sub: 'SocialFi & Telegram MiniApp',
    period: '07/2024 – 04/2025',
    color: '#FF9F43',
    description:
      'SocialFi network and Telegram mini-app to automate and manage high-volume airdrop campaigns. Developed and deployed Smart Contracts on BNB Chain and Aptos/Movement using Solidity. Built real-time features with WebSockets and Bull queue for token distribution.',
    tech: [
      'NestJS',
      'Next.js',
      'Solidity',
      'Web3',
      'PostgreSQL',
      'OpenSearch',
      'AWS',
      'EC2',
      'ECR',
      'S3',
    ],
    link: '',
    inactive: true,
    award: '🏆 Runner-up – Movement Olympus Hackathon',
  },
  {
    name: 'BOFFICE',
    sub: 'Business Management',
    period: '07/2022 – 07/2024',
    color: '#00F5FF',
    description:
      'Core modules for recruitment, timekeeping, and library functions for domestic and international markets. Implemented real-time updates using WebSockets, Swagger API documentation, and managed deployment with Docker, Nginx, and GitLab Runner.',
    tech: [
      'NestJS',
      'MySQL',
      'Redis',
      'WebSockets',
      'React.js',
      'Docker',
      'Nginx',
    ],
    link: 'https://boffice.bytesoft.vn/',
  },
  {
    name: 'BVOTE',
    sub: 'Online Voting Platform',
    period: '10/2022 – 12/2024',
    color: '#FF9F43',
    description:
      'Secure online General Meeting of Shareholders (GMS) platform with MERN stack. Engineered RBAC system and real-time voting with Socket.io and WebSockets for concurrent users.',
    tech: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Redux',
      'Node.js',
      'Socket.io',
      'Redis',
      'Docker',
      'Nginx',
    ],
    link: 'https://bvote.vn/',
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
export const EXPERIENCES = [
  {
    role: 'SOFTWARE ENGINEER',
    company: 'SOTATEK JSC',
    period: '04/2026 – PRESENT',
    color: '#00F5FF',
    bullets: [
      'I am currently employed at SotaTek, specializing in delivering high-quality software outsourcing solutions for Japanese enterprises.',
      'At SotaTek, I am responsible for developing and managing outsourcing projects, ensuring we meet the strict standards and requirements of our Japanese clients.',
    ],
    tech: [
      'NestJS',
      'PostgreSQL',
      'Kafka',
      'Redis Cluster',
      'Elasticsearch',
      'Docker',
      'Solidity',
      'AWS',
      'React.js',
      'Next.js',
    ],
  },
  {
    role: 'SOFTWARE ENGINEER',
    company: 'IGB SOFT JSC',
    period: '04/2025 – 04/2026',
    color: '#00F5FF',
    bullets: [
      'Migrating legacy PHP systems to Microservices architecture using NestJS, Kafka, and Redis.',
      'Optimizing API performance and system stability for a large-scale recruitment platform.',
    ],
    tech: [
      'NestJS',
      'PostgreSQL',
      'Kafka',
      'Redis Cluster',
      'Elasticsearch',
      'Docker',
    ],
  },
  {
    role: 'FULLSTACK WEB 3 ENGINEER',
    company: 'DATH SOLUTIONS JSC',
    period: '07/2024 – 04/2025',
    color: '#FF9F43',
    bullets: [
      'Developed SocialFi platforms and Telegram MiniApps with real-time features.',
      'Built and deployed Smart Contracts on BNB Chain and Aptos/Movement.',
    ],
    tech: [
      'NestJS',
      'Next.js',
      'Solidity',
      'Web3',
      'PostgreSQL',
      'AWS',
      'GitHub Actions',
    ],
  },
  {
    role: 'BACKEND ENGINEER',
    company: 'BYTESOFT VIETNAM JSC',
    period: '06/2022 – 07/2024',
    color: '#00F5FF',
    bullets: [
      'Developed business operation software (BOffice) focusing on recruitment and timekeeping modules.',
      'Implemented RESTful APIs, GraphQL, and WebSockets for international markets.',
    ],
    tech: ['NestJS', 'React.js', 'MySQL', 'MongoDB', 'Docker', 'CI/CD'],
  },
];
