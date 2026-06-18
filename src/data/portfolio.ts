export type NavItem = {
  id: string;
  label: string;
};

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  cvLabel: string;
  cvHref: string;
  heroImageSrc?: string;
};

export type Highlight = {
  value: string;
  label: string;
};

export type CvEntry = {
  title: string;
  period: string;
  description: string;
};

export type Project = {
  title: string;
  period: string;
  description: string;
  stack: string[];
  href?: string;
};

export type ContactLink = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "cv", label: "CV" },
  { id: "papers", label: "Papers" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const profile: Profile = {
  name: "Nam Joon-Sik",
  role: "Integrated M.S./Ph.D. Student at VDSLab",
  tagline: "Joonsik Nam",
  summary:
    "Integrated M.S./Ph.D. student at Sogang University (VDSLab), dedicated to advancing the efficiency and scalability of next-generation visual AI systems. My research spans Multi-modal LLMs, Diffusion Models, and 3D/4D Reconstruction, with the ultimate goal of deploying these advanced capabilities onto Edge devices. Open to academic collaboration and technical insights in deep learning optimization.",
  location: "Seoul, South Korea",
  email: "njs121956@gmail.com",
  cvLabel: "Download CV",
  cvHref: "#",
  heroImageSrc: "/joonsik.png",
};

export const highlights: Highlight[] = [
  { value: "VDSLab", label: "Video Display Systems Lab" },
  { value: "2025.09 ~", label: "Integrated M.S./Ph.D. program at Sogang University" },
  { value: "Seoul", label: "Based in South Korea" },
];

export const cvEntries: CvEntry[] = [
  {
    title: "Undergraduate",
    period: "2019.03 ~ 2025.08",
    description:
      "Completed undergraduate studies in Electronic Engineering at Sogang University.",
  },
  {
    title: "Integrated M.S./Ph.D. Program",
    period: "2025.09 ~",
    description:
      "Currently pursuing an integrated M.S./Ph.D. program at Sogang University.",
  },
];

export const projects: Project[] = [
  {
    title: "NAVER 공동 연구",
    period: "Jan 2026 ~",
    description: "NAVER Cloud, Korea / 참여연구원",
    stack: ["NAVER Cloud", "Collaborative Research"],
  },
  {
    title: "ETRI 아날로그-디지털 혼성 초저전력 뉴로모픽 엣지 SOC 개발",
    period: "Mar 2025 ~",
    description: "ETRI, Korea / 참여연구원",
    stack: ["Neuromorphic Edge SoC", "Low-power AI Hardware"],
  },
  // {
  //   title: "Interactive Demo Platform",
  //   period: "2024",
  //   description:
  //     "A sample demo platform for presenting research outcomes through an interactive web interface.",
  //   stack: ["React", "Node.js", "PostgreSQL"],
  //   href: "#",
  // },
  // {
  //   title: "Data Pipeline for Publications",
  //   period: "2023",
  //   description:
  //     "A placeholder pipeline spanning preprocessing, validation, and publication-ready reporting.",
  //   stack: ["Python", "Pandas", "Airflow"],
  // },
];

export const contactLinks: ContactLink[] = [
  { label: "GitHub", href: "https://github.com/wwwjjn" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?hl=ko&user=sWHQ5rAAAAAJ" },
  { label: "LinkedIn", href: "#" },
];

export const uiText = {
  heroLabel: "Academic Portfolio",
  aboutTitle: "Research profile",
  aboutBody: "A concise overview of current academic direction and implementation work.",
  cvTitle: "Education",
  cvBody: "",
  papersTitle: "Publications",
  papersBody: "",
  emptyPapers: "No public paper links are available yet.",
  projectsTitle: "Projects",
  projectsBody: "",
  contactTitle: "Contact",
  contactBody: "For research conversations, collaboration, or project details, email is the best first contact.",
  papersLink: "Papers",
  projectsLink: "Projects",
  emailLabel: "Email",
  copy: "Nam Joon-Sik",
  projectLink: "View Project",
} as const;
