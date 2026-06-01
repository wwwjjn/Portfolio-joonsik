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
  tagline: "Researching efficient visual AI systems.",
  summary:
    "I am an integrated M.S./Ph.D. student at Sogang University, working with VDSLab on visual deep learning systems and practical model efficiency.",
  location: "Seoul, South Korea",
  email: "njs121956@gmail.com",
  cvLabel: "Download CV",
  cvHref: "#",
  heroImageSrc: "/joonsik.png",
};

export const highlights: Highlight[] = [
  { value: "VDSLab", label: "Video Display Systems Lab" },
  { value: "2025-", label: "Integrated M.S./Ph.D. program at Sogang University" },
  { value: "Seoul", label: "Based in South Korea" },
];

export const cvEntries: CvEntry[] = [
  {
    title: "Undergraduate",
    period: "Mar 2019 - Aug 2025",
    description:
      "Completed undergraduate studies in Electronic Engineering at Sogang University.",
  },
  {
    title: "Integrated M.S./Ph.D. Program",
    period: "Sep 2025 - Present",
    description:
      "Currently pursuing an integrated M.S./Ph.D. program at Sogang University.",
  },
];

export const projects: Project[] = [
  {
    title: "Experiment automation toolkit",
    period: "2025",
    description:
      "Internal scripts and utilities for running repeatable model experiments, comparing outputs, and organizing research artifacts.",
    stack: ["Python", "Research tooling"],
    href: "#",
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
  cvTitle: "CV Highlights",
  cvBody: "Academic timeline and current affiliation.",
  papersTitle: "Publications",
  papersBody: "Public papers and manuscripts will be collected here as they become available.",
  emptyPapers: "No public paper links are available yet.",
  projectsTitle: "Projects",
  projectsBody: "Selected implementation work supporting research workflows and experiments.",
  contactTitle: "Contact",
  contactBody: "For research conversations, collaboration, or project details, email is the best first contact.",
  papersLink: "Papers",
  projectsLink: "Projects",
  emailLabel: "Email",
  copy: "Nam Joon-Sik",
  projectLink: "View Project",
} as const;
