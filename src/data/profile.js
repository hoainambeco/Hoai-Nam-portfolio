// Giá trị dạng { en, vi } được dịch theo ngôn ngữ đang chọn; giá trị thường dùng chung cho mọi ngôn ngữ.

// ─── Thông tin cá nhân ───────────────────────────────────────────────────────
export const ROLE = { en: 'A SOFTWARE ENGINEER', vi: 'KỸ SƯ PHẦN MỀM' };

export const NAME = { en: 'NGUYEN HOAI NAM', vi: 'NGUYỄN HOÀI NAM' };
export const LOCATION = { en: 'HA NOI, VIETNAM', vi: 'HÀ NỘI, VIỆT NAM' };
export const AVAILABLE = true;

export const BIO = {
  en: `I'm a Full-Stack Engineer who builds products end-to-end — from APIs and databases on the backend, to responsive interfaces on the frontend, and even Smart Contracts on the blockchain.
Over 4 years across 4 companies, I've shipped recruitment platforms, real-time voting systems, SocialFi apps, and business tools — always focused on code that performs and products that feel good to use.
Currently at SotaTek JSC. Always open to interesting problems.`,
  vi: `Tôi là Full-Stack Engineer, xây dựng sản phẩm trọn vẹn từ đầu đến cuối — từ API và cơ sở dữ liệu ở backend, giao diện responsive ở frontend, cho đến Smart Contract trên blockchain.
Hơn 4 năm làm việc tại 4 công ty, tôi đã phát triển các nền tảng tuyển dụng, hệ thống biểu quyết thời gian thực, ứng dụng SocialFi và công cụ quản trị doanh nghiệp — luôn chú trọng vào code hiệu năng cao và sản phẩm mang lại trải nghiệm tốt.
Hiện đang làm việc tại SotaTek JSC. Luôn sẵn sàng với những bài toán thú vị.`,
};

// Tổng số dự án đã làm — PROJECTS bên dưới chỉ là các dự án tiêu biểu
export const PROJECT_COUNT = '10+';

export const STATS = [
  { value: '4+', label: { en: 'YEARS EXP', vi: 'NĂM KINH NGHIỆM' } },
  { value: '4', label: { en: 'COMPANIES', vi: 'CÔNG TY' } },
  { value: PROJECT_COUNT, label: { en: 'PROJECTS', vi: 'DỰ ÁN' } },
  { value: 'WEB2 + WEB3', label: { en: 'DOMAIN', vi: 'LĨNH VỰC' } },
];

export const EMAIL = 'namxg1@gmail.com';

export const SOCIAL = [
  { label: 'GITHUB', href: 'https://github.com/hoainambeco' },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/namnguyen1024/' },
  { label: 'EMAIL', href: `mailto:${EMAIL}` },
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
    sub: { en: 'Recruitment Platform', vi: 'Nền tảng tuyển dụng' },
    period: '04/2025 – 04/2026',
    color: '#00F5FF',
    description: {
      en: 'Migration of a complex legacy PHP monolith to NestJS Microservices architecture. Engineered Event-Driven Architecture with Kafka and Saga Pattern for distributed transactions across PostgreSQL, MongoDB, and Oracle. Migrated from Solr to Elasticsearch and deployed Kong Gateway + Redis Cluster for high-availability caching.',
      vi: 'Chuyển đổi hệ thống PHP monolith cũ phức tạp sang kiến trúc NestJS Microservices. Xây dựng kiến trúc hướng sự kiện (Event-Driven) với Kafka và Saga Pattern cho giao dịch phân tán trên PostgreSQL, MongoDB và Oracle. Chuyển từ Solr sang Elasticsearch, triển khai Kong Gateway và Redis Cluster để cache với độ sẵn sàng cao.',
    },
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
    description: {
      en: 'SocialFi network and Telegram mini-app to automate and manage high-volume airdrop campaigns. Developed and deployed Smart Contracts on BNB Chain and Aptos/Movement using Solidity. Built real-time features with WebSockets and Bull queue for token distribution.',
      vi: 'Mạng xã hội SocialFi và Telegram mini-app giúp tự động hoá và quản lý các chiến dịch airdrop quy mô lớn. Phát triển và triển khai Smart Contract trên BNB Chain và Aptos/Movement bằng Solidity. Xây dựng tính năng thời gian thực với WebSockets và hàng đợi Bull để phân phối token.',
    },
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
    award: {
      en: '🏆 Runner-up – Movement Olympus Hackathon',
      vi: '🏆 Á quân – Movement Olympus Hackathon',
    },
  },
  {
    name: 'BOFFICE',
    sub: { en: 'Business Management', vi: 'Quản trị doanh nghiệp' },
    period: '07/2022 – 07/2024',
    color: '#00F5FF',
    description: {
      en: 'Core modules for recruitment, timekeeping, and library functions for domestic and international markets. Implemented real-time updates using WebSockets, Swagger API documentation, and managed deployment with Docker, Nginx, and GitLab Runner.',
      vi: 'Phát triển các module lõi về tuyển dụng, chấm công và thư viện cho thị trường trong nước và quốc tế. Triển khai cập nhật thời gian thực bằng WebSockets, tài liệu API với Swagger, và quản lý triển khai với Docker, Nginx, GitLab Runner.',
    },
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
    sub: { en: 'Online Voting Platform', vi: 'Nền tảng biểu quyết trực tuyến' },
    period: '10/2022 – 12/2024',
    color: '#FF9F43',
    description: {
      en: 'Secure online General Meeting of Shareholders (GMS) platform with MERN stack. Engineered RBAC system and real-time voting with Socket.io and WebSockets for concurrent users.',
      vi: 'Nền tảng tổ chức Đại hội đồng cổ đông (ĐHĐCĐ) trực tuyến an toàn trên MERN stack. Xây dựng hệ thống phân quyền RBAC và biểu quyết thời gian thực với Socket.io và WebSockets cho nhiều người dùng đồng thời.',
    },
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
    role: { en: 'SOFTWARE ENGINEER', vi: 'KỸ SƯ PHẦN MỀM' },
    company: 'SOTATEK JSC',
    period: { en: '04/2026 – PRESENT', vi: '04/2026 – HIỆN TẠI' },
    color: '#00F5FF',
    bullets: {
      en: [
        'I am currently employed at SotaTek, specializing in delivering high-quality software outsourcing solutions for Japanese enterprises.',
        'At SotaTek, I am responsible for developing and managing outsourcing projects, ensuring we meet the strict standards and requirements of our Japanese clients.',
      ],
      vi: [
        'Hiện đang làm việc tại SotaTek, chuyên cung cấp giải pháp phần mềm outsourcing chất lượng cao cho các doanh nghiệp Nhật Bản.',
        'Phụ trách phát triển và quản lý các dự án outsourcing, đảm bảo đáp ứng các tiêu chuẩn và yêu cầu khắt khe của khách hàng Nhật Bản.',
      ],
    },
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
    role: { en: 'SOFTWARE ENGINEER', vi: 'KỸ SƯ PHẦN MỀM' },
    company: 'IGB SOFT JSC',
    period: '04/2025 – 04/2026',
    color: '#00F5FF',
    bullets: {
      en: [
        'Migrating legacy PHP systems to Microservices architecture using NestJS, Kafka, and Redis.',
        'Optimizing API performance and system stability for a large-scale recruitment platform.',
      ],
      vi: [
        'Chuyển đổi hệ thống PHP cũ sang kiến trúc Microservices với NestJS, Kafka và Redis.',
        'Tối ưu hiệu năng API và độ ổn định hệ thống cho nền tảng tuyển dụng quy mô lớn.',
      ],
    },
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
    role: { en: 'FULLSTACK WEB 3 ENGINEER', vi: 'KỸ SƯ FULLSTACK WEB3' },
    company: 'DATH SOLUTIONS JSC',
    period: '07/2024 – 04/2025',
    color: '#FF9F43',
    bullets: {
      en: [
        'Developed SocialFi platforms and Telegram MiniApps with real-time features.',
        'Built and deployed Smart Contracts on BNB Chain and Aptos/Movement.',
      ],
      vi: [
        'Phát triển nền tảng SocialFi và Telegram MiniApp với các tính năng thời gian thực.',
        'Xây dựng và triển khai Smart Contract trên BNB Chain và Aptos/Movement.',
      ],
    },
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
    role: { en: 'BACKEND ENGINEER', vi: 'KỸ SƯ BACKEND' },
    company: 'BYTESOFT VIETNAM JSC',
    period: '06/2022 – 07/2024',
    color: '#00F5FF',
    bullets: {
      en: [
        'Developed business operation software (BOffice) focusing on recruitment and timekeeping modules.',
        'Implemented RESTful APIs, GraphQL, and WebSockets for international markets.',
      ],
      vi: [
        'Phát triển phần mềm vận hành doanh nghiệp (BOffice), tập trung vào module tuyển dụng và chấm công.',
        'Xây dựng RESTful API, GraphQL và WebSockets cho thị trường quốc tế.',
      ],
    },
    tech: ['NestJS', 'React.js', 'MySQL', 'MongoDB', 'Docker', 'CI/CD'],
  },
];
