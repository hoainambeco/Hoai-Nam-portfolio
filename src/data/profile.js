// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth — the portfolio and the CV page both read from here.
// English is the source; Vietnamese overrides live in profile.vi.js, keyed by
// id, and are merged in by localize.js.
// ─────────────────────────────────────────────────────────────────────────────

export const PROFILE = {
  name: 'Nguyen Hoai Nam',
  nameNative: 'Nguyễn Hoài Nam',
  handle: 'hoainambeco',
  intro:
    'Software & AI Platform Engineer in Ha Noi. I architect high-throughput distributed systems with NestJS microservices, Kafka, Redis Cluster, and Elasticsearch, alongside production AI agent infrastructure—MCP servers, multi-provider LLM gateways, and hybrid RAG—owning products end-to-end across React/Next.js and AWS.',
  focus: 'Distributed Systems, AI Agents & Microservices',
  role: 'Software & AI Platform Engineer',
  tagline: 'Software Engineering · Distributed Systems · AI Agent Infrastructure · Full-Stack',
  portfolioUrl: 'https://hoainambeco.github.io/Hoai-Nam-portfolio/',
  headline:
    'Software & AI Platform Engineer — Distributed Systems, NestJS Microservices & AI Agent Infrastructure.',
  roles: [
    'Software & AI Platform Engineer',
    'Distributed Systems & NestJS Microservices',
    'AI Agent & LLM Gateway Infrastructure',
    'Full-Stack Product Engineering',
  ],
  location: 'Ha Noi, Vietnam',
  timezone: 'ICT (UTC+7)',
  email: 'namxg1@gmail.com',
  phone: '+84 383 337 842',
  available: true,
  availability: 'Open to Software & AI Platform engineering roles',
  company: 'SotaTek JSC',
  since: 2022,
  bio: [
    'Software & AI Platform Engineer with 4+ years of experience architecting high-throughput distributed systems using NestJS microservices, Kafka (Saga/CQRS), Redis Cluster, and Elasticsearch.',
    'Proven track record building production AI agent infrastructure—including multi-tenant MCP servers, multi-provider LLM gateways with automated failover, per-turn credit metering, and Qdrant hybrid RAG pipelines.',
    'Full-stack capable across React/Next.js, TypeScript, and Docker/AWS CI/CD, owning complex products end-to-end from system design to production reliability.',
  ],
};

export const SOCIALS = [
  { id: 'github', label: 'GitHub', handle: '@hoainambeco', href: 'https://github.com/hoainambeco' },
  { id: 'linkedin', label: 'LinkedIn', handle: 'in/namnguyen1024', href: 'https://www.linkedin.com/in/namnguyen1024/' },
  { id: 'email', label: 'Email', handle: 'namxg1@gmail.com', href: 'mailto:namxg1@gmail.com' },
];

export const EDUCATION = [
  {
    id: 'utc',
    period: '2020 – 2025',
    school: 'University of Transport and Communications (UTC)',
    degree: 'Bachelor of Information Technology',
    note: 'Classification: Good',
  },
  {
    id: 'fpt',
    period: '2020 – 2022',
    school: 'FPT Polytechnic College',
    degree: 'Diploma in Mobile Programming',
    note: 'Graduated with Distinction (Honors)',
  },
];

export const SKILL_GROUPS = [
  {
    key: 'backend',
    label: 'Backend & Distributed Systems',
    summary:
      '4+ years architecting production APIs and distributed backends in Node.js and TypeScript. Domain-isolated NestJS microservices, Kafka event-driven Choreography/Saga workflows, real-time WebSockets, and high-throughput BullMQ worker pipelines.',
    items: [
      'Node.js',
      'TypeScript',
      'NestJS (Express / Fastify)',
      'Microservices',
      'Event-Driven Architecture',
      'Kafka (Saga / CQRS)',
      'BullMQ / Bull',
      'REST / GraphQL',
      'WebSockets',
      'Kong API Gateway',
    ],
  },
  {
    key: 'ai',
    label: 'AI / LLM & Agent Infrastructure',
    summary:
      'Production AI platform engineering: multi-tenant MCP servers, self-hosted multi-provider LLM gateways with automated failover and account rotation, hybrid vector/full-text RAG, per-turn credit metering, and safety guardrails.',
    items: [
      'MCP (Model Context Protocol)',
      'LLM Gateway & Routing',
      'Multi-Provider Failover',
      'OpenAI / Claude / Gemini APIs',
      'Vercel AI SDK',
      'Hybrid RAG',
      'Qdrant',
      'pgvector',
      'LangChain',
      'Tool Calling & Guardrails',
    ],
  },
  {
    key: 'data',
    label: 'Data, Caching & Search',
    summary:
      'Polyglot persistence across relational and NoSQL engines, high-availability Redis Cluster caching, and real-time multi-database search synchronization with Elasticsearch and OpenSearch.',
    items: [
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'Oracle PL/SQL',
      'Redis Cluster',
      'Elasticsearch',
      'OpenSearch',
      'SQLite / TypeORM',
    ],
  },
  {
    key: 'devops',
    label: 'DevOps & Cloud',
    summary:
      'Containerized service delivery, automated CI/CD pipelines via GitHub Actions and GitLab Runner, cloud deployments and observability on AWS, and reverse-proxy/API gateway operations.',
    items: [
      'Docker',
      'AWS (EC2, ECR, S3, CloudWatch)',
      'GitHub Actions',
      'GitLab CI/CD',
      'Nginx',
      'Linux',
    ],
  },
  {
    key: 'frontend',
    label: 'Frontend & Web',
    summary:
      'End-to-end typed SPA and SSR product interfaces built with React and Next.js—admin consoles, observability dashboards, embeddable SDKs, and Web3 wallet integrations.',
    items: [
      'React.js',
      'Next.js',
      'TanStack Query',
      'Zustand / Redux',
      'TailwindCSS',
      'Vite',
      'SSR & Embed SDKs',
    ],
  },
  {
    key: 'blockchain',
    label: 'Blockchain / Web3',
    summary:
      'Gas-optimized smart contracts engineered and deployed on BNB Chain and Aptos/Movement, featuring Merkle-proof reward claims and high-concurrency off-chain indexers.',
    items: [
      'Solidity',
      'Move (Aptos / Movement)',
      'Ethers.js / Web3.js',
      'Merkle-Proof Claims',
      'BNB Chain',
      'Telegram MiniApp',
    ],
  },
  {
    key: 'languages',
    label: 'Languages',
    summary:
      'Native Vietnamese speaker with professional working proficiency in English across technical architecture specifications, code reviews, and cross-team written collaboration.',
    items: ['Vietnamese (Native)', 'English (Professional Working Proficiency)'],
  },
];

export const PROJECTS = [
  {
    id: 'sotaagents',
    name: 'SotaAgents',
    sub: 'Multi-tenant Enterprise AI Platform',
    period: '04/2026 – Present',
    role: 'Software & AI Platform Engineer',
    status: 'live',
    featured: true,
    link: 'https://sotaagents.ai/',
    summary:
      'Multi-tenant enterprise AI workspace serving 10+ organizations—unifying Claude, GPT, and Gemini with hybrid RAG, installable app backends, and bidirectional MCP tool infrastructure.',
    // What the platform does — taken from the public manual at app.sotaagents.ai/manual.
    highlights: [
      {
        title: 'Multi-model chat',
        text: 'Claude, GPT and Gemini in one workspace. Admins choose which models the organization can use and set the default.',
      },
      {
        title: 'Grounded answers',
        text: 'Knowledge Base search mixes vector and full-text retrieval and cites its sources. Drive, OneDrive and SharePoint sync in.',
      },
      {
        title: 'App platform',
        text: 'Versioned apps add tools, skills and native UI through a manifest, run on their own backends, and ship Staging → Production → App Store.',
      },
      {
        title: 'MCP both ways',
        text: 'Workspaces plug in MCP servers such as Linear, Notion, Slack and GitHub, and external agents can call the platform’s own tools over MCP.',
      },
      {
        title: 'Guardrails',
        text: 'Blocks prompt injection and jailbreaks, masks personal data, and screens tool and document output before the model uses it.',
      },
      {
        title: 'Embed anywhere',
        text: 'A public chat widget, or an Embed SDK that runs inside a partner portal on HMAC-signed, single-use 60-second tickets.',
      },
      {
        title: 'Office output',
        text: 'Generates Word, Excel, PDF and PowerPoint files, diagrams, images and small sites straight from a chat message.',
      },
      {
        title: 'Enterprise controls',
        text: 'Organizations and workspaces with role-based access, per-turn credit accounting and audit logs.',
      },
    ],
    bullets: [
      'Architected a multi-tenant MCP server exposing Qdrant hybrid RAG (vector + full-text) and dynamic app-registered tool catalogs to external agents across 10+ enterprise tenants, with per-tool pricing, credit metering, and admin price overrides.',
      'Designed an extensible per-turn credit ledger capturing model attribution, workspace context, and document retrieval stats, complete with historical backfills, CSV financial exports, and console inspection drawers.',
      'Hardened the multi-app execution sandbox by gating actor identity claims behind explicit manifest permission grants and validating app manifests against the core tool schema catalog.',
      'Implemented deterministic cascading tenant-purge pipelines across workspaces, conversations, MCP registries, and billing ledgers with immutable audit logs, inventory completeness tests, and full RBAC enforcement.',
    ],
    tech: [
      'NestJS (Fastify)',
      'MCP',
      'Qdrant',
      'Vercel AI SDK',
      'MongoDB',
      'Redis',
      'BullMQ',
      'React.js',
      'TanStack Query',
      'Zustand',
      'Zod',
      'AWS S3',
    ],
  },
  {
    id: 'llm-gateway',
    name: 'LLM Gateway Proxy',
    sub: 'Open-source Multi-Provider LLM Gateway',
    period: '09/2026 – Present',
    role: 'Creator & Maintainer (Open-Source)',
    status: 'live',
    featured: true,
    link: 'https://github.com/hoainambeco/llm-gateway-proxy',
    summary:
      'Self-hosted NestJS + Fastify gateway exposing unified OpenAI-, Anthropic-, and Gemini-compatible endpoints across multiple LLM upstreams with regex routing, automated failover, and multi-account quota rotation.',
    bullets: [
      'Built a standalone NestJS + Fastify proxy gateway unifying 4 upstream providers (OpenAI, Anthropic Claude, GitHub Copilot, ChatGPT) behind OpenAI-, Anthropic-, and Gemini-compatible APIs with regex routing and dynamic model discovery.',
      'Engineered a fault-tolerant upstream account pool featuring round-robin, sticky, and cache-first selection, automated OAuth token refresh, 429 cooldowns, cross-account failover chains, and in-memory thought-signature recovery for reasoning models.',
      'Developed hashed RBAC API key management on SQLite/TypeORM with sub-millisecond in-memory validation caching, boot-time migrations, and an embedded React/Vite observability console for quota and live traffic telemetry.',
      'Automated type-checked builds, migration verification, and multi-stage Docker image publishing to GHCR via GitHub Actions for single-command VPS deployment.',
    ],
    tech: [
      'NestJS',
      'Fastify',
      'TypeScript',
      'TypeORM',
      'SQLite',
      'WebSockets',
      'Zod',
      'React.js',
      'Vite',
      'TailwindCSS',
      'Docker',
      'GitHub Actions',
    ],
  },
  {
    id: 'careerviet',
    name: 'CareerViet',
    sub: 'Recruitment Platform — Microservices Migration',
    period: '04/2025 – 04/2026',
    role: 'Backend Engineer',
    status: 'live',
    featured: true,
    link: 'https://careerviet.vn/',
    summary:
      'Architectural decomposition of a high-traffic legacy PHP monolith into 12+ event-driven NestJS microservices serving 5M+ candidates, 25K+ enterprise employers, and 2M+ annual job listings & applications.',
    bullets: [
      'Decomposed a legacy PHP monolith into 12+ domain-isolated NestJS microservices behind Kong Gateway, powering 5M+ candidates, 25K+ enterprise employers, and 2M+ annual job listings & applications with independent service deployability.',
      'Orchestrated distributed transactions over Kafka using the Saga pattern across PostgreSQL, MongoDB, and Oracle PL/SQL, preserving eventual consistency under high write concurrency without cross-database locks.',
      'Migrated full-text search from Apache Solr to Elasticsearch with real-time event synchronization across three heterogeneous databases, reducing p95 job-search latency by ~35%.',
      'Configured high-availability Redis Cluster caching and centralized Kong rate-limiting and routing policies, offloading ~40% of repetitive read queries from primary relational databases.',
    ],
    tech: [
      'NestJS',
      'Microservices',
      'Kafka (Saga)',
      'Redis Cluster',
      'Elasticsearch',
      'PostgreSQL',
      'MongoDB',
      'Oracle PL/SQL',
      'Kong Gateway',
      'Docker',
    ],
  },
  {
    id: 'acanet',
    name: 'Acanet',
    sub: 'SocialFi & Telegram MiniApp',
    period: '07/2024 – 04/2025',
    role: 'Full-Stack & Blockchain Engineer',
    status: 'archived',
    featured: false,
    link: '',
    award: 'Runner-up — Movement Olympus Hackathon',
    awardLink:
      'https://movementlabs.notion.site/Olympus-Hackathon-Finalists-588d4533f53a4a32b0a67f7cb9846452',
    summary:
      'High-concurrency SocialFi super-app and Telegram MiniApp powering ACN airdrop campaigns—quests, multi-tier referrals, and Merkle-proof on-chain claims across BNB Chain and Aptos/Movement.',
    bullets: [
      'Developed the SocialFi backend and Telegram MiniApp (NestJS, Next.js, PostgreSQL, OpenSearch) with cryptographic initData auth, social graph feeds, quest engines, and multi-tier referral tracking.',
      'Implemented idempotent Bull/Redis worker pipelines for batched token payouts with anti-sybil heuristics and points-to-ACN allocation ledgers, streaming live claim states over WebSockets.',
      'Deployed gas-optimized Solidity (BNB Chain) and Move (Aptos/Movement) smart contracts utilizing Merkle-proof verification to minimize per-recipient on-chain claim gas costs.',
    ],
    tech: [
      'NestJS',
      'Next.js',
      'Solidity',
      'Move (Aptos)',
      'PostgreSQL',
      'OpenSearch',
      'Bull / Redis',
      'WebSockets',
      'AWS (EC2, ECR, S3)',
    ],
  },
  {
    id: 'boffice',
    name: 'BOffice',
    sub: 'Enterprise Operations Suite',
    period: '07/2022 – 07/2024',
    role: 'Backend Engineer',
    status: 'live',
    featured: false,
    link: 'https://boffice.bytesoft.vn/',
    summary:
      'Multi-module enterprise ERP backend covering recruitment, attendance, and document workflows for domestic and international clients.',
    bullets: [
      'Delivered core NestJS, MySQL, and Redis backend services for recruitment, timekeeping, and document workflows with real-time WebSocket notifications and OpenAPI/Swagger contracts.',
      'Automated containerized deployments and reverse-proxy routing across Linux production servers using Docker, Nginx, and GitLab CI/CD.',
    ],
    tech: ['NestJS', 'MySQL', 'Redis', 'WebSockets', 'React.js', 'Docker', 'Nginx', 'GitLab CI'],
  },
  {
    id: 'bvote',
    name: 'Bvote',
    sub: 'Real-Time Shareholder Voting Platform',
    period: '10/2022 – 12/2024',
    role: 'Full-Stack Engineer',
    status: 'live',
    featured: false,
    link: 'https://bvote.vn/',
    summary:
      'High-availability online General Meeting of Shareholders (GMS) voting platform with real-time ballot tallying.',
    bullets: [
      'Created a secure online GMS voting platform on Node.js, Express, MongoDB, and React featuring granular RBAC and auditable shareholder ballot workflows.',
      'Scaled concurrent live vote tallying via Socket.io + Redis and automated self-hosted production releases with Docker, Nginx, and GitLab Runner.',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'Redux', 'Socket.io', 'Redis', 'Docker'],
  },
];

export const EXPERIENCE = [
  {
    id: 'sotatek',
    hash: 'a7f3c21',
    company: 'SotaTek JSC',
    role: 'Software & AI Platform Engineer',
    period: '04/2026 – Present',
    current: true,
    bullets: [
      'Lead backend and agent-infrastructure engineering for SotaAgents, a multi-tenant enterprise AI platform adopted by 10+ organizations, owning MCP protocol integration, tool monetization, and tenant governance.',
      'Established zero-trust security boundaries across installable app backends—enforcing manifest-scoped identity grants, workspace RBAC, and auditable tenant data lifecycle compliance.',
      'Delivered scalable NestJS and React/Next.js distributed backends on AWS and Docker for Japanese enterprise clients, maintaining strict API contracts and high release reliability.',
    ],
    tech: [
      'NestJS (Fastify)',
      'MCP',
      'Qdrant',
      'Vercel AI SDK',
      'MongoDB',
      'PostgreSQL',
      'Redis',
      'BullMQ',
      'Docker',
      'AWS',
      'React.js',
      'Next.js',
    ],
  },
  {
    id: 'igbsoft',
    hash: '4d91e08',
    company: 'IGB Soft JSC',
    role: 'Backend Engineer',
    note: 'Project-based',
    period: '04/2025 – 04/2026',
    bullets: [
      'Spearheaded the strangler-fig migration of CareerViet’s legacy PHP monolith into 12+ NestJS microservices behind Kong Gateway (5M+ candidates, 25K+ enterprise employers, 2M+ annual job listings & applications), decoupling release cycles across domain teams.',
      'Drove distributed data consistency and search modernization via Kafka Saga workflows, Elasticsearch, and Redis Cluster, cutting p95 job-search latency by ~35% and offloading ~40% of primary database read load.',
    ],
    tech: [
      'NestJS',
      'Microservices',
      'Kafka (Saga)',
      'Redis Cluster',
      'Elasticsearch',
      'PostgreSQL',
      'MongoDB',
      'Oracle PL/SQL',
      'Kong Gateway',
      'Docker',
    ],
  },
  {
    id: 'dath',
    hash: 'b52a7f4',
    company: 'DATH Solutions JSC',
    role: 'Full-Stack & Blockchain Engineer',
    note: 'Project-based',
    period: '07/2024 – 04/2025',
    bullets: [
      'Owned end-to-end backend and smart-contract engineering for Acanet’s high-concurrency SocialFi ecosystem and Telegram MiniApp, earning Runner-up at the global Movement Olympus Hackathon.',
      'Shipped cross-chain token distribution infrastructure across BNB Chain (Solidity) and Aptos/Movement (Move), pairing idempotent Bull/Redis payout workers with Merkle-proof claims to minimize gas overhead.',
    ],
    tech: ['NestJS', 'Next.js', 'Solidity', 'Move (Aptos)', 'PostgreSQL', 'OpenSearch', 'Bull / Redis', 'AWS', 'GitHub Actions'],
  },
  {
    id: 'bytesoft',
    hash: '1c8b60d',
    company: 'Bytesoft Vietnam JSC',
    role: 'Backend Engineer',
    period: '06/2022 – 07/2024',
    bullets: [
      'Built and scaled multi-module enterprise ERP backends (BOffice) and real-time shareholder voting systems (Bvote) on NestJS, Node.js, MySQL, MongoDB, and Redis for domestic and international organizations.',
      'Standardized REST, GraphQL, and WebSocket API contracts alongside Docker, Nginx, and GitLab CI/CD pipelines, shortening deployment cycles and improving production uptime.',
    ],
    tech: ['NestJS', 'Node.js', 'MySQL', 'MongoDB', 'Redis', 'GraphQL', 'WebSockets', 'React.js', 'Docker', 'GitLab CI/CD'],
  },
];

export const AWARDS = [
  {
    id: 'olympus',
    title: 'Runner-up — Movement Olympus Hackathon',
    subtitle: 'Movement Labs · Global Web3 & Move Ecosystem',
    year: '2024',
    href: 'https://movementlabs.notion.site/Olympus-Hackathon-Finalists-588d4533f53a4a32b0a67f7cb9846452',
  },
];
