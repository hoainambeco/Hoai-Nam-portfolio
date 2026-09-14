/**
 * Skills grouped by what they are used for. Every project in data/projects.ts
 * names its stack with these exact strings, which is what lets the expertise
 * section show where each technology was used instead of a proficiency score.
 */
export const skillGroups = [
  {
    id: "backend",
    title: "Backend",
    note: "Production APIs and services on Node.js: service boundaries, realtime, background work.",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "Microservices",
      "REST",
      "GraphQL",
      "WebSockets",
      "Socket.io",
      "Bull queues",
      "Kong Gateway",
    ],
  },
  {
    id: "data",
    title: "Data & storage",
    note: "Relational and document stores, caching, and object storage.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Oracle PL/SQL", "Redis", "MinIO", "AWS S3"],
  },
  {
    id: "search",
    title: "Search & streaming",
    note: "Search indexes kept in sync with several databases, and event-driven flows between services.",
    items: ["Elasticsearch", "OpenSearch", "Kafka"],
  },
  {
    id: "frontend",
    title: "Frontend",
    note: "Typed React interfaces, from admin tools to Telegram Mini Apps.",
    items: ["React", "Next.js", "TypeScript", "Redux", "Zustand", "Telegram Mini Apps"],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    note: "Containerized services, CI/CD pipelines, and deployments on AWS and self-hosted servers.",
    items: ["Docker", "AWS", "Nginx", "GitHub Actions", "GitLab CI", "Linux"],
  },
  {
    id: "web3",
    title: "Web3",
    note: "Smart contracts deployed on two chains and wired into production web apps.",
    items: ["Solidity", "Ethers.js", "Web3.js", "BNB Chain", "Aptos / Movement"],
  },
] as const;

export type Tech = (typeof skillGroups)[number]["items"][number];

/** Extra detail shown next to a technology name. */
export const techDetail: Partial<Record<Tech, string>> = {
  AWS: "EC2, S3, ECR, RDS, CloudWatch",
  Redis: "including Redis Cluster",
};
