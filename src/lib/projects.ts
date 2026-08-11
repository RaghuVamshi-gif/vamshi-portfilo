export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  overview: string;
  details: string[];
  tech: string[];
  features: string[];
  accent: string;
  link: string | null;
  year: string;
  role: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "the-masterminds-school",
    name: "The Masterminds School",
    category: "Education Web Platform",
    description:
      "A modern, responsive website for an educational institution featuring an immersive landing experience, program showcases and an engaging admissions journey.",
    overview:
      "The Masterminds School is a complete digital presence for a modern educational institution. The platform was designed to feel welcoming to parents while remaining fast, accessible and effortless to navigate on any device. Every section was crafted to guide visitors from first impression to enquiry with minimal friction.",
    details: [
      "Designed an immersive landing experience with clear hierarchy that communicates the school's values within the first scroll.",
      "Built reusable program and curriculum sections so new courses can be published without touching layout code.",
      "Implemented a streamlined admissions journey with clear calls to action and an enquiry flow optimised for mobile users.",
      "Tuned performance and accessibility — semantic markup, keyboard-navigable menus and responsive imagery across breakpoints.",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Netlify"],
    features: ["Responsive Layout", "Program Showcase", "Admissions Flow", "Motion Design"],
    accent: "from-[#00D9FF] to-[#22D3EE]",
    link: "https://the-masterminds-school.netlify.app/",
    year: "2025",
    role: "Design & Front-End Development",
  },
  {
    slug: "forma-developer",
    name: "Forma Developer",
    category: "Product Landing Experience",
    description:
      "A sleek developer-focused product landing site built with a clean design system, fluid transitions and conversion-oriented sections.",
    overview:
      "Forma Developer is a conversion-focused landing experience aimed at a technical audience. The interface leans on a restrained design system, generous whitespace and purposeful motion so the product story stays front and centre without visual noise.",
    details: [
      "Established a compact design system — typography scale, spacing rhythm and component variants shared across every section.",
      "Layered fluid scroll and hover transitions that add polish while keeping interaction latency low.",
      "Structured the page around a conversion narrative: value proposition, capability breakdown, social proof and a final call to action.",
      "Optimised bundle size and image delivery so the first meaningful paint stays fast on mobile networks.",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Netlify"],
    features: ["Design System", "Fluid Animations", "Performance Optimized", "Modern UI"],
    accent: "from-[#8B5CF6] to-[#00D9FF]",
    link: "https://forma-developer.netlify.app/",
    year: "2025",
    role: "UI/UX Design & Development",
  },
  {
    slug: "docksmith",
    name: "Docksmith",
    category: "Containerization System",
    description:
      "A Docker-inspired lightweight containerization platform implementing image layers, manifests, storage management and deployment workflows.",
    overview:
      "Docksmith is a from-scratch exploration of how container runtimes actually work. It implements the core primitives of a container platform — layered images, manifests and content-addressed storage — to demystify the machinery behind everyday developer tooling.",
    details: [
      "Implemented a layered image format with content-addressed storage and deduplication across layers.",
      "Generated and validated manifests describing image composition, entrypoints and metadata.",
      "Built deployment workflows that assemble, cache and launch container images from a local registry.",
      "Focused on storage optimisation so repeated builds reuse existing layers instead of duplicating data.",
    ],
    tech: ["Python", "Docker", "Linux"],
    features: ["Layer Management", "Image Building", "Manifest Generation", "Storage Optimization"],
    accent: "from-[#00D9FF] to-[#22D3EE]",
    link: null,
    year: "2024",
    role: "Systems Engineering",
  },
  {
    slug: "smart-route-optimization",
    name: "Smart Route Optimization",
    category: "Machine Learning System",
    description:
      "Intelligent routing system using Machine Learning and Dijkstra's algorithm to predict edge weights and generate optimized paths.",
    overview:
      "Smart Route Optimization blends classical graph search with machine learning. Instead of relying on static distances, the system predicts realistic edge weights from historical patterns and feeds them into Dijkstra's algorithm to produce routes that reflect real-world conditions.",
    details: [
      "Trained a regression model to predict traversal cost per edge from historical route data.",
      "Integrated predicted weights into a Dijkstra shortest-path implementation for dynamic route selection.",
      "Evaluated route quality against baseline distance-only routing to quantify improvement.",
      "Designed the pipeline to be retrainable as new trip data becomes available.",
    ],
    tech: ["Python", "Machine Learning"],
    features: ["Route Optimization", "Weight Prediction", "Intelligent Path Selection"],
    accent: "from-[#8B5CF6] to-[#00D9FF]",
    link: null,
    year: "2024",
    role: "ML Engineering",
  },
  {
    slug: "blockchain-dapp",
    name: "Blockchain dApp",
    category: "Decentralized Application",
    description:
      "Decentralized application leveraging blockchain concepts to provide secure and transparent digital transactions.",
    overview:
      "A decentralized application built to explore trustless transaction flows. The project focuses on transparent record keeping, verifiable state transitions and a user interface that makes on-chain interactions approachable.",
    details: [
      "Modelled transaction and state logic around immutable, verifiable records.",
      "Built a wallet-aware interface that surfaces transaction status clearly to the user.",
      "Prioritised a secure architecture with explicit validation at every state transition.",
      "Documented the decentralized workflow so the trust model is easy to audit.",
    ],
    tech: ["Blockchain", "JavaScript"],
    features: ["Secure Architecture", "Transparent Records", "Decentralized Workflow"],
    accent: "from-[#22D3EE] to-[#8B5CF6]",
    link: null,
    year: "2024",
    role: "Full Stack Development",
  },
  {
    slug: "ui-ux-case-studies",
    name: "UI/UX Case Studies",
    category: "Design Research",
    description:
      "User-centric interfaces focused on usability, accessibility and modern design standards.",
    overview:
      "A collection of design explorations covering research, user flows and high-fidelity prototypes. Each case study starts with a real usability problem and ends with a validated interface backed by structured design decisions.",
    details: [
      "Conducted user research and translated findings into task-oriented user flows.",
      "Produced wireframes and interactive prototypes for validation before development.",
      "Built reusable design systems with consistent tokens, components and states.",
      "Applied accessibility standards — contrast, focus order and readable typography — throughout.",
    ],
    tech: ["Figma", "User Research"],
    features: ["User Flows", "Wireframes", "Design Systems", "Interactive Prototypes"],
    accent: "from-[#00D9FF] to-[#8B5CF6]",
    link: null,
    year: "2023",
    role: "UI/UX Design",
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
