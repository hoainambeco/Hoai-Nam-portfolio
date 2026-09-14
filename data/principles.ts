/** Ordered along a system's life: design → build → measure → operate. */
export const principles = [
  {
    stage: "design",
    title: "Build for failure",
    body: "Production systems fail. Design them so a failure stays contained and the system can recover from it.",
  },
  {
    stage: "build",
    title: "Keep complexity intentional",
    body: "Reach for distributed systems and new abstractions when they solve a real problem, not because they sound impressive.",
  },
  {
    stage: "measure",
    title: "Measure before optimizing",
    body: "Find the bottleneck first. Then decide whether the architecture needs to change.",
  },
  {
    stage: "operate",
    title: "Ship, observe, improve",
    body: "Engineering does not end at deployment. What happens in production decides what gets built next.",
  },
];
