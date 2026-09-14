import type { Project } from "@/lib/types";

/*
 * Every statement here comes from Nam's CV. Outcomes and metrics are counted
 * from what the CV says was built and shipped (stores, chains, modules, years);
 * lessons are engineering takeaways from that same work. Use tbd() from
 * lib/types for anything not known yet — it renders as a visible placeholder.
 * Architecture diagrams only use components the CV names for that project.
 */

export const projects: Project[] = [
  {
    slug: "careerviet",
    name: "CareerViet",
    category: "Recruitment platform",
    period: "2025 – 2026",
    company: "IGB Soft JSC",
    role: "Backend engineering",
    link: "https://careerviet.vn/",
    summary:
      "Moving a large legacy PHP monolith to NestJS microservices, with event-driven data flow across three databases and a new search stack.",
    problem:
      "CareerViet's backend was a large legacy PHP monolith, and search ran on Solr. The migration had one aim: services that are isolated from each other and can be deployed on their own.",
    approach:
      "Split the monolith into NestJS services and let them coordinate through Kafka events, using the Saga pattern for work that writes to PostgreSQL, MongoDB and Oracle PL/SQL. Route all API traffic through Kong Gateway, cache on a Redis Cluster, and replace Solr with Elasticsearch kept in sync with the databases in real time.",
    contribution: [
      "Designed and led the migration from the PHP monolith to NestJS microservices.",
      "Implemented the event-driven architecture on Kafka, with the Saga pattern keeping distributed transactions consistent across PostgreSQL, MongoDB and Oracle PL/SQL.",
      "Moved search from Solr to Elasticsearch, with real-time synchronization from multiple databases.",
      "Set up Redis Cluster for high-availability caching and Kong Gateway for centralized API traffic.",
    ],
    challenges: [
      {
        title: "Consistency without a shared transaction",
        body: "A single operation can touch PostgreSQL, MongoDB and Oracle PL/SQL, and no database transaction spans all three. The steps run as a Saga coordinated over Kafka instead.",
      },
      {
        title: "Search that follows three sources of truth",
        body: "Elasticsearch replaced Solr, and it has to reflect changes from several databases in real time rather than on a batch schedule.",
      },
      {
        title: "One front door, one cache",
        body: "Kong Gateway centralizes API traffic in front of the services; a Redis Cluster provides caching that stays available when a node does not.",
      },
    ],
    result: [
      "Services split out of the monolith, isolated and deployable on their own.",
      "Search running on Elasticsearch instead of Solr.",
      "All API traffic entering through Kong Gateway, with caching on a Redis Cluster.",
      "3 databases and 1 search index kept consistent through a single Kafka event bus.",
    ],
    lessons: [
      "Draw the service boundaries before choosing the tools. Kafka and Sagas only pay off once it is clear which service owns which data.",
      "Design for eventual consistency from day one. With writes spread across three databases and a search index, every consumer has to cope with events that arrive late or more than once.",
    ],
    stack: [
      "NestJS",
      "Microservices",
      "Kafka",
      "PostgreSQL",
      "MongoDB",
      "Oracle PL/SQL",
      "Redis",
      "Elasticsearch",
      "Kong Gateway",
      "Docker",
    ],
    architecture: {
      tiers: [
        { label: "clients", nodes: [{ name: "Web clients" }] },
        { label: "edge", nodes: [{ name: "Kong Gateway", role: "all API traffic" }] },
        {
          label: "services",
          nodes: [
            { name: "NestJS services", role: "replaced the PHP monolith" },
            { name: "Redis Cluster", role: "high-availability cache" },
          ],
        },
        {
          label: "events",
          via: "publish / consume",
          nodes: [{ name: "Kafka", role: "Saga across databases" }],
        },
        {
          label: "data",
          nodes: [
            { name: "PostgreSQL" },
            { name: "MongoDB" },
            { name: "Oracle PL/SQL" },
            { name: "Elasticsearch", role: "replaced Solr" },
          ],
        },
      ],
      caption:
        "Simplified. Requests enter through Kong, NestJS services coordinate over Kafka, and Elasticsearch stays in sync with three databases.",
    },
  },
  {
    slug: "acanet",
    name: "Acanet",
    category: "SocialFi network & Telegram Mini App",
    period: "2024 – 2025",
    company: "DATH Solutions JSC",
    role: "Full-stack & smart contracts",
    summary:
      "A SocialFi network and Telegram Mini App for running high-volume airdrop campaigns, with smart contracts on two chains.",
    problem:
      "Acanet needed to run and manage high-volume airdrop campaigns, reaching people through a SocialFi network and a Telegram Mini App, and distributing tokens on-chain.",
    approach:
      "A NestJS backend serves the Next.js web app and the Telegram Mini App, with real-time features over WebSockets. Token distribution moved onto Bull background queues. Smart contracts were deployed on BNB Chain and Aptos / Movement.",
    contribution: [
      "Engineered the SocialFi network and the Telegram Mini App used to run and manage airdrop campaigns.",
      "Developed and deployed smart contracts on BNB Chain and Aptos / Movement.",
      "Built real-time features over WebSockets.",
      "Moved token distribution onto Bull background queues.",
    ],
    challenges: [
      {
        title: "Distribution at campaign volume",
        body: "Token distribution runs as background jobs on Bull queues, separate from the requests that trigger it.",
      },
      {
        title: "Two chains, one product",
        body: "Contracts were written, tested and deployed on BNB Chain and on Aptos / Movement, then integrated into the same web app.",
      },
    ],
    result: [
      "Runner-up at the Movement Olympus Hackathon, 2024.",
      "Airdrop campaigns run and managed through the SocialFi network and the Telegram Mini App.",
      "Smart contracts live on 2 chains, BNB Chain and Aptos / Movement, integrated into one web app.",
      "Token distribution running as background jobs on Bull queues.",
    ],
    lessons: [
      "Keep slow, irreversible work out of the request path. On-chain token distribution belongs in a queue, not in an HTTP handler.",
      "Treat each chain as its own deployment target, with its own tooling and tests, even when the product on top is a single app.",
    ],
    award: {
      title: "Runner-up, Movement Olympus Hackathon",
      year: "2024",
      href: "https://movementlabs.notion.site/Olympus-Hackathon-Finalists-588d4533f53a4a32b0a67f7cb9846452",
    },
    stack: [
      "NestJS",
      "Next.js",
      "Telegram Mini Apps",
      "WebSockets",
      "Bull queues",
      "PostgreSQL",
      "OpenSearch",
      "Solidity",
      "Web3.js",
      "BNB Chain",
      "Aptos / Movement",
      "AWS",
      "AWS S3",
      "GitHub Actions",
    ],
    architecture: {
      tiers: [
        {
          label: "clients",
          nodes: [{ name: "Telegram Mini App" }, { name: "Next.js web app" }],
        },
        {
          label: "services",
          via: "HTTP · WebSockets",
          nodes: [{ name: "NestJS API", role: "realtime over WebSockets" }],
        },
        { label: "jobs", nodes: [{ name: "Bull queues", role: "token distribution" }] },
        { label: "data", nodes: [{ name: "PostgreSQL" }, { name: "OpenSearch" }] },
        {
          label: "chain",
          nodes: [{ name: "BNB Chain", role: "contracts" }, { name: "Aptos / Movement", role: "contracts" }],
        },
      ],
      caption: "Simplified. Runs on AWS (EC2, ECR, S3).",
    },
  },
  {
    slug: "bvote",
    name: "BVote",
    category: "Online shareholder voting",
    period: "2022 – 2024",
    role: "Full-stack engineering",
    link: "https://bvote.vn/",
    summary:
      "A platform for holding General Meetings of Shareholders online, with live voting, role-based access and admin tooling.",
    problem:
      "A shareholder meeting held online needs voting sessions that are secure, transparent and available for their whole duration, with many shareholders voting at once.",
    approach:
      "A MERN application: React and Redux on the client, Node.js and Express on the server, MongoDB for data. Socket.io pushes live voting updates, and role-based access control decides who can manage shareholder data and election content. Deployed on self-hosted servers with Docker, Nginx and GitLab Runner.",
    contribution: [
      "Built the GMS platform on the MERN stack for transparent, highly available voting sessions.",
      "Engineered the role-based access control system and the admin modules for shareholder data and election content.",
      "Implemented live voting updates with Socket.io to handle concurrent users.",
      "Automated deployment on self-hosted servers with Docker, Nginx and GitLab Runner.",
    ],
    challenges: [
      {
        title: "Live results for concurrent voters",
        body: "Votes are pushed to connected clients over Socket.io as they happen, so everyone in a session sees the same state.",
      },
      {
        title: "Who can change what",
        body: "Shareholder data and election content sit behind a role-based access control system with dedicated admin modules.",
      },
    ],
    result: [
      "Live at bvote.vn as a platform for holding shareholder meetings online.",
      "Voting updates reach every connected participant in real time over Socket.io.",
      "Shareholder data and election content managed by role, through dedicated admin modules.",
      "Releases to self-hosted servers automated with Docker, Nginx and GitLab Runner.",
      "2 years of building and running the platform, from October 2022 to December 2024.",
    ],
    lessons: [
      "In a live system the server owns the state. Clients should render what Socket.io pushes, not guess locally.",
      "Access control belongs in the data model. Deciding the roles first makes the admin modules straightforward to build.",
    ],
    stack: ["Node.js", "Express", "MongoDB", "React", "Redux", "Socket.io", "Redis", "Docker", "Nginx", "GitLab CI"],
    architecture: {
      tiers: [
        { label: "clients", nodes: [{ name: "React + Redux", role: "voting and admin" }] },
        { label: "edge", nodes: [{ name: "Nginx" }] },
        {
          label: "services",
          via: "HTTP · Socket.io",
          nodes: [
            { name: "Node.js / Express", role: "role-based access" },
            { name: "Socket.io", role: "live vote updates" },
          ],
        },
        { label: "data", nodes: [{ name: "MongoDB" }, { name: "Redis" }] },
      ],
      caption: "Simplified. Self-hosted with Docker; GitLab Runner automates deploys.",
    },
  },
  {
    slug: "boffice",
    name: "BOffice",
    category: "Business management suite",
    period: "2022 – 2024",
    company: "Bytesoft Vietnam JSC",
    role: "Backend engineering",
    link: "https://boffice.bytesoft.vn/",
    summary:
      "Business operation software for domestic and international markets: recruitment, timekeeping and library management.",
    problem:
      "BOffice is business operation software sold in domestic and international markets. It needed core modules for recruitment, timekeeping and library management.",
    approach:
      "NestJS modules on MySQL and Redis, exposed over REST and GraphQL, with real-time updates over WebSockets and the API documented in Swagger. Deployed with Docker, Nginx and GitLab Runner on Ubuntu servers.",
    contribution: [
      "Developed the core recruitment, timekeeping and library management modules.",
      "Implemented REST and GraphQL APIs and real-time updates over WebSockets.",
      "Documented the API surface with Swagger.",
      "Managed deployment and server infrastructure with Docker, Nginx and GitLab Runner.",
    ],
    challenges: [
      {
        title: "Real-time inside a business tool",
        body: "Updates reach open clients over WebSockets instead of waiting for a page refresh.",
      },
      {
        title: "Owning the path to production",
        body: "Beyond the modules themselves, deployment and the servers behind them — Docker, Nginx, GitLab Runner on Ubuntu.",
      },
    ],
    result: [
      "Recruitment, timekeeping and library modules live at boffice.bytesoft.vn, for domestic and international markets.",
      "REST and GraphQL APIs, with the API surface documented in Swagger.",
      "Real-time updates delivered to open clients over WebSockets.",
      "Deployment and servers run with Docker, Nginx and GitLab Runner.",
      "3 core modules and 3 API styles — REST, GraphQL and WebSockets — over 2 years on the product.",
    ],
    lessons: [
      "Documentation is part of the API. A current Swagger spec makes a module easier to build on for everyone else.",
      "Owning deployment changes how you write code: containers, Nginx and CI pipelines surface problems that never show up locally.",
    ],
    stack: ["NestJS", "REST", "GraphQL", "WebSockets", "MySQL", "Redis", "React", "Docker", "Nginx", "GitLab CI", "Linux"],
    architecture: {
      tiers: [
        { label: "clients", nodes: [{ name: "React web app" }] },
        { label: "edge", nodes: [{ name: "Nginx" }] },
        {
          label: "services",
          via: "REST · GraphQL · WebSockets",
          nodes: [
            { name: "NestJS modules", role: "recruitment, timekeeping, library" },
            { name: "Swagger", role: "API documentation" },
          ],
        },
        { label: "data", nodes: [{ name: "MySQL" }, { name: "Redis" }] },
      ],
      caption: "Simplified. Docker containers on Ubuntu servers, deployed through GitLab Runner.",
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
