export const profile = {
  name: 'Prakhar Jalan',
  role: 'Agentic AI Engineer',
  location: 'Bangalore, India',
  email: 'jalansprakhar@gmail.com',
  github: 'https://github.com/jalanprakhar',
  linkedin: 'https://www.linkedin.com/in/jalansprakhar',
  image: '/images/profile.jpeg',
  resumeUrl: 'https://drive.google.com/file/d/1OJEBwtEi2GmPiqtw2Y-9HJsaa6Z0vk9O/view?usp=drivesdk',
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
  eyebrow: 'Production agentic systems',
  role: profile.role,
  support:
    'Building governed agentic AI systems, reliability workflows, and backend control planes for enterprise production.',
  primaryCta: 'View Resume',
  secondaryCta: 'See GitHub',
}

export const heroSignals = [
  { label: 'Production systems, not demos', active: true },
  { label: 'LangGraph orchestration', active: false },
  { label: 'Control-plane guardrails', active: false },
]

export const heroMetrics = [
  { label: 'Agentic harness', value: 'Python / LangGraph' },
  { label: 'Incident impact', value: '500+ Sev2 / 30% MTTR' },
  { label: 'Backend depth', value: 'FastAPI / Golang / OCI' },
]

export const experienceItems = [
  {
    company: 'Oracle',
    role: 'Member of Technical Staff - 1',
    period: 'Jul 2024 - Present',
    location: 'Bangalore, India',
    emphasis: 'Current role',
    summary:
      'Building production agentic AI infrastructure for governed orchestration, reliability operations, and leadership-level agent control.',
    metrics: ['Python + LangGraph', '500+ Sev2 incidents', '30% MTTR reduction', '4.2/5 satisfaction'],
    stack: ['Python', 'LangGraph', 'FastAPI', 'LLM orchestration', 'OCI', 'Kubernetes'],
    proofPanels: [
      {
        label: 'Orchestration',
        value: 'LangGraph',
        description: 'Centralized agentic harness for deterministic policy-driven workflows.',
      },
      {
        label: 'Incident scale',
        value: '500+ Sev2',
        description: 'Specialized DevOps agent used by Tier-0 / OKE teams for severity triage.',
      },
      {
        label: 'Reliability lift',
        value: '30% MTTR',
        description: 'Reduced mean time to resolution across high-priority operational incidents.',
      },
      {
        label: 'Operator signal',
        value: '4.2/5',
        description: 'Average satisfaction from agent users in production support workflows.',
      },
      {
        label: 'Control plane',
        value: 'FastAPI',
        description: 'High-performance management layer for agents at operational scale.',
      },
      {
        label: 'Governance',
        value: 'Policy controls',
        description: 'Hallucination-risk mitigation, deterministic paths, and tool-call control.',
      },
      {
        label: 'Guardrails',
        value: 'Safety gates',
        description: 'Cost control and leadership-level visibility for production agent systems.',
      },
    ],
    impact: [
      'Architected a centralized agentic harness platform with deterministic policy-driven workflows for governance, hallucination-risk mitigation, LLM tool-call control, and cost control.',
      'Engineered a specialized DevOps agent used by Tier-0 / OKE teams to triage 500+ Sev2 incidents, reducing MTTR by 30% while averaging 4.2/5 user satisfaction.',
      'Developing a high-performance FastAPI control-plane layer so leadership can manage agents at scale with production safety guardrails.',
    ],
  },
  {
    company: 'Zolostays',
    role: 'Software Engineer Intern',
    period: 'Jan 2024 - May 2024',
    location: 'Bangalore, India',
    emphasis: 'Backend operations',
    summary:
      'Shipped Golang-backed operational systems for resident workflows, inventory tracking, and OPS Engine productivity.',
    metrics: ['500+ daily active users', '$350/month saved', 'Tracking errors reduced'],
    stack: ['Golang', 'Backend services', 'Operational tooling', 'Workflow systems'],
    impact: [
      'Developed a Golang backend for a lost-and-found application integrated into the Zolo Scholar app, supporting 500+ daily active users.',
      'Engineered Zo-Tag, an inventory management solution that replaced third-party software and cut costs by $350/month while reducing tracking errors.',
      'Optimized workflow management tools for the OPS Engine team, reducing manual operational effort and improving task resolution latency.',
    ],
  },
  {
    company: 'Oracle',
    role: 'Project Intern',
    period: 'May 2023 - Jul 2023',
    location: 'Remote',
    emphasis: 'Data workflow systems',
    summary:
      'Built review-throughput tooling for annotation workflows with backend APIs and real-time batch labeling updates.',
    metrics: ['12% less manual annotation time', 'Review throughput improved'],
    stack: ['Java', 'Spring Boot', 'REST APIs', 'Server-Sent Events'],
    impact: [
      'Built a Spring Boot REST API using Server-Sent Events for batch data labeling, reducing manual annotation time by 12%.',
      'Improved review throughput and turnaround time by optimizing data correction workflows for annotators.',
    ],
  },
]

export const systemProofs = [
  {
    label: 'Agentic harness',
    title: 'Centralized policy-driven orchestration',
    metric: 'Python / LangGraph',
    body:
      'A governed harness for deterministic agent workflows, hallucination-risk mitigation, LLM tool-call control, and cost control.',
    proof: ['Deterministic workflows', 'Governance controls', 'Tool-call and cost control'],
  },
  {
    label: 'DevOps agent',
    title: 'Incident triage for Tier-0 / OKE teams',
    metric: '500+ Sev2 incidents',
    body:
      'A specialized DevOps agent for Severity-2 operational triage that reduced MTTR by 30% and averaged 4.2/5 user satisfaction.',
    proof: ['30% MTTR reduction', '4.2/5 satisfaction', 'Tier-0 operational usage'],
  },
  {
    label: 'Control plane',
    title: 'FastAPI agent management layer',
    metric: 'Production guardrails',
    body:
      'A high-performance FastAPI control plane for managing agents at scale while enforcing production safety guardrails and operational visibility.',
    proof: ['Agent management at scale', 'Leadership-level control', 'Safety guardrails'],
  },
]

export const skillGroups = [
  {
    title: 'Agentic AI',
    description: 'Governed orchestration and production LLM behavior control.',
    skills: ['Python', 'LangGraph', 'CrewAI', 'LLM orchestration', 'Governance', 'Tool-call control'],
  },
  {
    title: 'Backend and Platform',
    description: 'High-concurrency services and data platform fundamentals.',
    skills: ['Golang', 'FastAPI', 'Spring Boot', 'Java', 'SQL', 'Kafka', 'Redis', 'PostgreSQL'],
  },
  {
    title: 'Cloud and DevOps',
    description: 'Production operations, containerized runtimes, and cloud control surfaces.',
    skills: ['OCI', 'Docker', 'Kubernetes', 'Git', 'Production operations'],
  },
  {
    title: 'Fundamentals',
    description: 'Computer science depth for systems design and implementation.',
    skills: ['C++', 'JavaScript', 'System design', 'DSA', 'Operating systems'],
  },
]

export const credentials = {
  achievements: [
    'Q4 Champion at Oracle for enhancing observability and reliability of LLM-based systems.',
    'Winner of WebKriti 2023, the annual web development hackathon at IIIT Allahabad.',
    'Ranked 349 in ICPC Gwalior-Pune 2020 Regional Round.',
    'Finished 13th out of 1000+ participants in OpenCode 2021.',
  ],
  responsibilities: [
    'Core team member at Hack in the North, one of India\'s largest student-organized hackathons.',
    'Mentored 100+ students at Acciojob in Data Structures and Algorithms.',
    'Authored complex coding problems for competitive programming contests hosted on HackerEarth.',
  ],
  education: [
    {
      institution: 'IIIT Allahabad',
      program: 'Bachelor of Technology - Information Technology',
      meta: 'CGPA 8.60',
      period: 'Nov 2020 - May 2024',
    },
  ],
}

export const shellSections = [
  {
    id: 'experience',
    eyebrow: 'Experience',
    title: 'Professional Journey',
    cards: experienceItems.map((item) => ({
      kicker: item.company,
      title: item.role,
      body: item.summary,
    })),
  },
  {
    id: 'systems',
    eyebrow: 'Systems',
    title: 'Production agentic systems',
    lead: 'Selected Oracle systems showing orchestration, governance, incident triage, and control-plane reliability.',
    cards: systemProofs.map((system) => ({
      kicker: system.label,
      title: system.title,
      body: system.body,
    })),
  },
  {
    id: 'skills',
    eyebrow: 'Skills',
    title: 'Technical operating range',
    lead:
      'Agentic AI, backend/platform, cloud/devops, and fundamentals grouped for quick scanning.',
    cards: skillGroups.map((group) => ({
      kicker: 'Skill group',
      title: group.title,
      body: group.skills.join(', '),
    })),
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
