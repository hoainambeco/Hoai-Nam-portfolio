import type { Job } from "@/lib/types";

// Newest first. Titles as given by Nam; responsibilities and stacks from his CV.
export const jobs: Job[] = [
  {
    company: "SotaTek JSC",
    role: "Software Engineer",
    start: "2026",
    responsibilities: [
      "Delivering software outsourcing solutions for Japanese enterprises.",
      "Developing and managing outsourcing projects against strict client quality standards.",
    ],
    systems: [],
    stack: [
      "NestJS",
      "PostgreSQL",
      "Kafka",
      "Redis Cluster",
      "Elasticsearch",
      "Docker",
      "Solidity",
      "AWS",
      "React",
      "Next.js",
    ],
  },
  {
    company: "IGB Soft JSC",
    role: "Software Engineer",
    start: "2025",
    end: "2026",
    responsibilities: [
      "Migrated legacy PHP systems to a microservices architecture with NestJS, Kafka and Redis.",
      "Optimized API performance and system stability for a large-scale recruitment platform.",
    ],
    systems: ["careerviet"],
    stack: ["NestJS", "PostgreSQL", "Kafka", "Redis Cluster", "Elasticsearch", "Docker"],
  },
  {
    company: "DATH Solutions JSC",
    role: "Full-Stack Developer",
    start: "2024",
    end: "2025",
    responsibilities: [
      "Developed SocialFi platforms and Telegram Mini Apps with real-time features.",
      "Built and deployed smart contracts on BNB Chain and Aptos / Movement.",
    ],
    systems: ["acanet"],
    stack: ["NestJS", "Next.js", "Solidity", "Web3", "PostgreSQL", "AWS", "GitHub Actions"],
  },
  {
    company: "Bytesoft Vietnam JSC",
    role: "Backend Developer",
    start: "2022",
    end: "2024",
    responsibilities: [
      "Developed business operation software (BOffice), focused on the recruitment and timekeeping modules.",
      "Implemented REST APIs, GraphQL and WebSockets for international markets.",
    ],
    systems: ["boffice"],
    stack: ["NestJS", "React", "MySQL", "MongoDB", "Docker", "CI/CD"],
  },
];
