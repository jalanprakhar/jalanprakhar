export const profile = {
  name: 'Prakhar Jalan',
  role: 'Agentic AI Engineer',
  location: 'Bangalore, India',
  email: 'jalansprakhar@gmail.com',
  github: 'https://github.com/jalanprakhar',
  linkedin: 'https://www.linkedin.com/in/jalansprakhar',
  image: '/images/profile.jpeg',
  // TODO: Replace with a stable public resume URL before launch.
  resumeUrl: 'TODO_PUBLIC_RESUME_URL',
}

export const navItems = [
  { label: 'Experience', href: '#experience' },
  { label: 'Systems', href: '#systems' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const profileLinks = [
  { label: 'GitHub', href: profile.github, type: 'github' },
  { label: 'LinkedIn', href: profile.linkedin, type: 'linkedin' },
  { label: 'Email', href: `mailto:${profile.email}`, type: 'email' },
]

export const heroCopy = {
  eyebrow: 'Production systems, not demos',
  role: profile.role,
  support:
    'Building production-grade AI systems with governance, reliability, orchestration, and backend depth.',
  primaryCta: 'View Resume',
  secondaryCta: 'See GitHub',
}

export const heroSignals = [
  { label: 'Production systems, not demos', active: true },
  { label: 'Policy-driven workflows', active: false },
  { label: 'Control-plane reliability', active: false },
]

export const heroMetrics = [
  { label: 'Agentic harness', value: 'LangGraph / Python' },
  { label: 'Reliability focus', value: 'Guardrails + governance' },
  { label: 'Backend depth', value: 'FastAPI / Go / OCI' },
]

export const shellSections = [
  {
    id: 'experience',
    eyebrow: 'Experience',
    title: 'Production engineering track',
    lead:
      'A polished shell for Oracle, Zolostays, and internship impact. Phase 2 will add the resume-derived metrics and role details.',
    cards: [
      {
        kicker: 'Oracle MTS-1',
        title: 'Agentic systems and control planes',
        body: 'Reserved for production harness, DevOps agent, governance, and reliability work.',
      },
      {
        kicker: 'Backend platforms',
        title: 'High-concurrency service depth',
        body: 'Reserved for Go, FastAPI, Spring Boot, data workflows, and operational tooling.',
      },
    ],
  },
  {
    id: 'systems',
    eyebrow: 'Systems',
    title: 'Systems content coming next',
    lead: 'This section is reserved for resume-derived experience and impact metrics in Phase 2.',
    cards: [
      {
        kicker: 'Agentic harness',
        title: 'Policy-driven workflows',
        body: 'Structure for deterministic orchestration, tool-call control, and guardrail narratives.',
      },
      {
        kicker: 'Incident triage',
        title: 'Reliability operations',
        body: 'Structure for incident analysis, MTTR impact, and Tier-0 operational proof points.',
      },
      {
        kicker: 'Control plane',
        title: 'Runtime governance',
        body: 'Structure for agent management, cost control, and production safety details.',
      },
    ],
  },
  {
    id: 'skills',
    eyebrow: 'Skills',
    title: 'Technical focus areas',
    lead:
      'A compact shell for agentic AI, backend/platform systems, cloud/devops, and fundamentals. Phase 2 will fill the final skill taxonomy.',
    cards: [
      {
        kicker: 'Agentic AI',
        title: 'LangGraph, CrewAI, orchestration',
        body: 'Reserved for frameworks, tool-use patterns, evaluations, and governance.',
      },
      {
        kicker: 'Platform',
        title: 'Python, Go, FastAPI, Kafka',
        body: 'Reserved for backend architecture, concurrency, and distributed system experience.',
      },
    ],
  },
  {
    id: 'contact',
    eyebrow: 'Contact',
    title: 'Let the work speak directly',
    lead:
      'A restrained contact shell for recruiters and AI platform teams. Phase 2 will finalize the surrounding copy and contact architecture.',
    cards: [
      {
        kicker: 'Email',
        title: profile.email,
        body: 'Direct channel for portfolio, agentic AI, and backend platform conversations.',
      },
      {
        kicker: 'Profiles',
        title: 'GitHub and LinkedIn',
        body: 'Centralized links are reused across the header, hero, contact shell, and footer.',
      },
    ],
  },
]

export const projects = [
  {
    title: "Codev",
    description:
      "CoDev is a social media platform wherein the users can register themselves with their email ids and provide us their github id. We can view the profiles of other amazing developers and Collaborate with them to initiate a chat and discuss any thing related to tech or otherwise😉.Wrote the complete backend of this project and contributed to the frontend.",
    image: "/images/4.png",
    tags: ["MongoDB", "Express", "React", "NodeJS", "TailwindCSS"],
    source: "https://github.com/jalanprakhar/CoDev-hh2 ",
    visit: "https://codevv.herokuapp.com/",
    id: 0,
  },
  {
    title: "The DoJo",
    description:
      "A platform wherein the users can collaborate on a project. They can assign task to other users, and can add comments/ mark them as completed. This project aims to help the developers in planning and building of large scale projects. It is made using React JS and Firebase",
    image: "/images/1.png",
    tags: ["React", "Firebase"],
    source: "https://github.com/jalanprakhar/The-DoJo",
    visit: "https://dojo-4315d.web.app/",
    id: 0,
  },

  {
    title: "Crypto Tracker",
    description:
      "A platform where in the user can analyse the performance of various crypto-currencies and plan to buy them. The performance of various cryptos is represented using a line chart which helps the user to understand the current trend. It is made using React JS and Material UI",
    image: "/images/2.png",
    tags: ["React", "Material UI"],
    source: "https://github.com/jalanprakhar/crypto-tracker",
    visit: "https://quirky-poitras-07cdb2.netlify.app/",
    id: 1,
  },
  {
    title: "Memory Magic",
    description:
      "A React based game to sharpen your memory. The players are given 6 pairs of cards shuffled randomly and they have to flip cards over in pairs of 2 and match all the 6 cards in minimum number of moves",
    image: "/images/3.png",
    tags: ["React"],
    source: "https://github.com/jalanprakhar/MemoryGame",
    visit: "https://awesome-ptolemy-053acc.netlify.app/",
    id: 2,
  },
  // {
  //   title: 'Unichat',
  //   description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
  //   image: '/images/4.jpg',
  //   tags: ['React', 'ChatEngine', 'Firebase'],
  //   source: 'https://google.com',
  //   visit: 'https://google.com',
  //   id: 3,
  // },
];
