// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for every view (editor, terminal, command palette).
// ─────────────────────────────────────────────────────────────────────────────

export const PROFILE = {
  name: 'Nguyen Hoai Nam',
  handle: 'hoainambeco',
  role: 'Full-Stack Engineer',
  headline: 'Backend-heavy full-stack engineer — Node.js, microservices, Web3.',
  roles: [
    'Full-Stack Engineer',
    'NestJS / Node.js Backend',
    'Microservices & Event-Driven',
    'Web3 / Smart Contracts',
  ],
  location: 'Ha Noi, Vietnam',
  timezone: 'ICT (UTC+7)',
  email: 'namxg1@gmail.com',
  phone: '0383337842',
  available: true,
  availability: 'Open to interesting problems',
  company: 'SotaTek JSC',
  since: 2022,
  bio: [
    "I'm a Full-Stack Engineer who builds products end-to-end — APIs and databases on the backend, responsive interfaces on the frontend, and smart contracts on-chain.",
    "Over 4 years across 4 companies I've shipped recruitment platforms, real-time voting systems, SocialFi apps and internal business tools. Most of my time goes to backend architecture: service boundaries, event-driven flows with Kafka, caching, and search.",
    'Currently at SotaTek JSC, delivering outsourcing projects for Japanese enterprises.',
  ],
};

export const STATS = [
  { value: '4+', label: 'years experience' },
  { value: '4', label: 'companies' },
  { value: '10+', label: 'projects shipped' },
  { value: 'Web2 + Web3', label: 'domains' },
];

export const SOCIALS = [
  { id: 'github', label: 'GitHub', handle: '@hoainambeco', href: 'https://github.com/hoainambeco' },
  { id: 'linkedin', label: 'LinkedIn', handle: 'in/namnguyen1024', href: 'https://www.linkedin.com/in/namnguyen1024/' },
  { id: 'email', label: 'Email', handle: 'namxg1@gmail.com', href: 'mailto:namxg1@gmail.com' },
];

export const CV_URL = `${import.meta.env.BASE_URL}cv.html`;
export const CV_PDF = `${import.meta.env.BASE_URL}cv.pdf`;

export const EDUCATION = [
  {
    period: '2020 – 2025',
    school: 'University of Transport and Communications (UTC)',
    degree: 'Bachelor of Information Technology',
    note: 'Good degree',
  },
  {
    period: '2020 – 2022',
    school: 'FPT Polytechnic College',
    degree: 'Mobile Programming',
    note: 'Honors degree',
  },
];

export const SKILL_GROUPS = [
  {
    key: 'backend',
    label: 'Backend',
    summary:
      '3+ years building production APIs and distributed systems with Node.js. Microservices with clean boundaries, event-driven flows with Kafka (Saga, CQRS), realtime over WebSockets, background pipelines with Bull.',
    items: [
      'Node.js', 'NestJS', 'Express', 'Microservices', 'Event-Driven', 'Kafka',
      'WebSockets', 'Bull Queue', 'GraphQL', 'REST API', 'Kong Gateway',
    ],
  },
  {
    key: 'frontend',
    label: 'Frontend',
    summary:
      'SPA and SSR interfaces with React and Next.js, typed end-to-end. Wallet connections and on-chain reads/writes through Ethers.js and Web3.js.',
    items: ['React.js', 'Next.js', 'TypeScript', 'Redux', 'TailwindCSS', 'Vite', 'Telegram MiniApp'],
  },
  {
    key: 'blockchain',
    label: 'Blockchain',
    summary:
      'Smart contracts written, tested and deployed on BNB Chain and Aptos/Movement, integrated into production web apps.',
    items: ['Solidity', 'Ethers.js', 'Web3.js', 'BNB Chain', 'Aptos / Movement', 'Smart Contracts'],
  },
  {
    key: 'data',
    label: 'Data & Storage',
    summary:
      'Schema design across relational and NoSQL stores, Redis Cluster for high-availability caching, and a Solr → Elasticsearch search migration with multi-database sync.',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Oracle PL/SQL', 'Redis', 'Redis Cluster', 'Elasticsearch', 'OpenSearch'],
  },
  {
    key: 'devops',
    label: 'DevOps',
    summary:
      'Containerized services, CI/CD through GitHub Actions and GitLab Runner, deployments and monitoring on AWS, Nginx and Kong in front.',
    items: ['Docker', 'GitHub Actions', 'GitLab CI', 'AWS (EC2, ECR, S3, CloudWatch)', 'Linux', 'Nginx', 'CI/CD'],
  },
  {
    key: 'languages',
    label: 'Languages',
    summary:
      'Vietnamese native. English B1 certified — comfortable with technical docs, code review and written collaboration.',
    items: ['Vietnamese (native)', 'English (B1)'],
  },
];

export const PROJECTS = [
  {
    id: 'careerviet',
    name: 'CareerViet',
    sub: 'Recruitment platform',
    period: '04/2025 – 04/2026',
    role: 'Backend Engineer',
    status: 'live',
    link: 'https://careerviet.vn/',
    summary:
      'Migration of a large-scale legacy PHP monolith to a NestJS microservices platform.',
    bullets: [
      'Designed and led the migration of a PHP monolith to NestJS microservices, improving service isolation and independent deployability.',
      'Implemented event-driven architecture with Kafka + Saga pattern to keep distributed transactions consistent across PostgreSQL, MongoDB and Oracle PL/SQL.',
      'Moved search from Solr to Elasticsearch with real-time multi-database synchronization.',
      'Set up Redis Cluster for high-availability caching and Kong Gateway for centralized API traffic.',
    ],
    tech: ['NestJS', 'Microservices', 'Kafka (Saga)', 'Redis Cluster', 'Elasticsearch', 'PostgreSQL', 'MongoDB', 'Oracle PL/SQL', 'Kong Gateway', 'Docker'],
  },
  {
    id: 'acanet',
    name: 'Acanet',
    sub: 'SocialFi & Telegram MiniApp',
    period: '07/2024 – 04/2025',
    role: 'Fullstack & Blockchain Developer',
    status: 'archived',
    link: '',
    award: 'Runner-up — Movement Olympus Hackathon',
    awardLink:
      'https://movementlabs.notion.site/Olympus-Hackathon-Finalists-588d4533f53a4a32b0a67f7cb9846452',
    summary:
      'SocialFi network and Telegram mini-app automating high-volume airdrop campaigns.',
    bullets: [
      'Engineered a SocialFi network and Telegram mini-app to run and manage high-volume airdrop campaigns.',
      'Developed and deployed smart contracts on BNB Chain and Aptos/Movement using Solidity.',
      'Built real-time features over WebSockets and moved token distribution onto Bull background queues.',
    ],
    tech: ['NestJS', 'Next.js', 'Solidity', 'Web3', 'PostgreSQL', 'OpenSearch', 'AWS (EC2, ECR, S3)'],
  },
  {
    id: 'boffice',
    name: 'BOffice',
    sub: 'Business management suite',
    period: '07/2022 – 07/2024',
    role: 'Backend Engineer',
    status: 'live',
    link: 'https://boffice.bytesoft.vn/',
    summary:
      'Recruitment, timekeeping and library modules for domestic and international markets.',
    bullets: [
      'Developed core modules for recruitment, timekeeping and library management.',
      'Implemented real-time updates over WebSockets and documented the API surface with Swagger.',
      'Managed deployment and server infrastructure with Docker, Nginx and GitLab Runner.',
    ],
    tech: ['NestJS', 'MySQL', 'Redis', 'WebSockets', 'React.js', 'Docker', 'Nginx', 'Ubuntu'],
  },
  {
    id: 'bvote',
    name: 'Bvote',
    sub: 'Online voting platform',
    period: '10/2022 – 12/2024',
    role: 'Fullstack Engineer',
    status: 'live',
    link: 'https://bvote.vn/',
    summary:
      'Secure online General Meeting of Shareholders platform built on the MERN stack.',
    bullets: [
      'Built a secure GMS platform on the MERN stack for transparent, highly available voting sessions.',
      'Engineered a role-based access control system and admin modules for shareholder data and election content.',
      'Implemented live voting updates with Socket.io to handle concurrent users.',
      'Automated deployment on self-hosted servers with Docker, Nginx and GitLab Runner.',
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Redux', 'Node.js', 'Socket.io', 'Redis', 'Docker', 'Nginx'],
  },
];

export const EXPERIENCE = [
  {
    id: 'sotatek',
    hash: 'a7f3c21',
    company: 'SotaTek JSC',
    role: 'Software Engineer',
    period: '04/2026 – Present',
    current: true,
    bullets: [
      'Delivering software outsourcing solutions for Japanese enterprises.',
      'Developing and managing outsourcing projects against strict client quality standards.',
    ],
    tech: ['NestJS', 'PostgreSQL', 'Kafka', 'Redis Cluster', 'Elasticsearch', 'Docker', 'Solidity', 'AWS', 'React.js', 'Next.js'],
  },
  {
    id: 'igbsoft',
    hash: '4d91e08',
    company: 'IGB Soft JSC',
    role: 'Backend Engineer',
    period: '04/2025 – 04/2026',
    bullets: [
      'Migrated legacy PHP systems to a microservices architecture with NestJS, Kafka and Redis.',
      'Optimized API performance and system stability for a large-scale recruitment platform.',
    ],
    tech: ['NestJS', 'PostgreSQL', 'Kafka', 'Redis Cluster', 'Elasticsearch', 'Docker'],
  },
  {
    id: 'dath',
    hash: 'b52a7f4',
    company: 'DATH Solutions JSC',
    role: 'Fullstack & Blockchain Developer',
    period: '07/2024 – 04/2025',
    bullets: [
      'Developed SocialFi platforms and Telegram MiniApps with real-time features.',
      'Built and deployed smart contracts on BNB Chain and Aptos/Movement.',
    ],
    tech: ['NestJS', 'Next.js', 'Solidity', 'Web3', 'PostgreSQL', 'AWS', 'GitHub Actions'],
  },
  {
    id: 'bytesoft',
    hash: '1c8b60d',
    company: 'Bytesoft Vietnam JSC',
    role: 'Backend Engineer',
    period: '06/2022 – 07/2024',
    bullets: [
      'Developed business operation software (BOffice), focused on recruitment and timekeeping modules.',
      'Implemented REST APIs, GraphQL and WebSockets for international markets.',
    ],
    tech: ['NestJS', 'React.js', 'MySQL', 'MongoDB', 'Docker', 'CI/CD'],
  },
];

export const AWARDS = [
  {
    title: 'Runner-up — Movement Olympus Hackathon',
    year: '2024',
    href: 'https://movementlabs.notion.site/Olympus-Hackathon-Finalists-588d4533f53a4a32b0a67f7cb9846452',
  },
];

export const ALL_SKILLS = SKILL_GROUPS.flatMap((g) => g.items);
