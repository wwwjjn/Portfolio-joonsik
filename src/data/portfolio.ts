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

export type PaperLink = {
  label: string;
  href: string;
};

export type Paper = {
  title: string;
  venue: string;
  year: string;
  authors: string;
  abstract: string;
  links: PaperLink[];
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
  name: "",
  role: "Integrated M.S./Ph.D. Student at VDSLab",
  tagline: "Hi, I'm Joon-Sik Nam ",
  summary:
    "I am currently pursuing an integrated M.S./Ph.D. program at VDSLab.",
  location: "Seoul, South Korea",
  email: "njs121956@gmail.com",
  cvLabel: "Download CV",
  cvHref: "#",
  heroImageSrc: "joonsik.png",
};

export const highlights: Highlight[] = [];

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

export const papers: Paper[] = [
  {
    title: "Paper Title Placeholder",
    venue: "Conference / Journal Name",
    year: "2026",
    authors: "Your Name, Coauthor A, Coauthor B",
    abstract:
      "Use two or three sentences to summarize the problem, the proposed method, and the main result.",
    links: [
      { label: "View Paper", href: "#" },
      { label: "PDF", href: "#" },
      { label: "Code", href: "#" },
    ],
  },
  // {
  //   title: "Paper Title Placeholder: Efficient Representation Learning with Limited Labels",
  //   venue: "Conference / Journal Name",
  //   year: "2025",
  //   authors: "Your Name, Coauthor A",
  //   abstract:
  //     "Example summary for work improving performance or efficiency under limited supervision.",
  //   links: [
  //     { label: "DOI", href: "#" },
  //     { label: "Poster", href: "#" },
  //   ],
  // },
  // {
  //   title: "Paper Title Placeholder: Human-Centered Evaluation of Interactive AI",
  //   venue: "Workshop / Journal Name",
  //   year: "2024",
  //   authors: "Your Name, Coauthor A, Coauthor B, Coauthor C",
  //   abstract:
  //     "Placeholder copy for human-centered or interaction-oriented research contributions.",
  //   links: [
  //     { label: "View Paper", href: "#" },
  //     { label: "Slides", href: "#" },
  //   ],
  // },
  // {
  //   title: "Paper Title Placeholder: Applied Systems Research for Production Deployment",
  //   venue: "Journal / Technical Report",
  //   year: "2023",
  //   authors: "Your Name, Coauthor A",
  //   abstract:
  //     "Placeholder summary for work that demonstrates production-facing systems research.",
  //   links: [{ label: "Technical Report", href: "#" }],
  // },
];

export const projects: Project[] = [
  {
    title: "Research Toolkit",
    period: "2025",
    description:
      "A placeholder internal toolkit for experiment automation, tracking, and reproducible workflows.",
    stack: ["Python"],
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
  { label: "Google Scholar", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export const uiText = {
  heroLabel: "Academic Portfolio",
  aboutTitle: "An introduction that combines research and implementation",
  aboutBody: "This page keeps your CV, papers, and projects in one flow for quick review.",
  cvTitle: "CV Highlights",
  cvBody: "The current version reflects your academic timeline.",
  papersTitle: "Papers",
  papersBody: "Each paper is paired with direct-action buttons for quick access.",
  projectsTitle: "Projects",
  projectsBody: "Use this area to present implementation work or demos alongside your research.",
  contactTitle: "Contact",
  contactBody: "Replace these placeholders with your real contact details and profile links.",
  papersLink: "Papers",
  projectsLink: "Projects",
  emailLabel: "Email",
  copy: "Portfolio template",
  projectLink: "View Project",
} as const;
