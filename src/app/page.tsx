"use client";

import {
  contactLinks,
  cvEntries,
  profile,
  projects,
  uiText,
} from "@/data/portfolio";
import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

type SectionId = "cv" | "publications" | "projects";

type PublicationItem = {
  title: string;
  imageSrc?: string;
  submittedTo: string;
  authors: string;
  links?: {
    label: string;
    href: string;
  }[];
};

type PublicationGroup = {
  id: "international" | "domestic";
  title: "International Paper" | "Domestic Paper";
  buttonLabel: "International" | "Domestic";
  description: string;
  items: PublicationItem[];
};


const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function publicAsset(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  return `${basePath}${path}`;
}

const publicationGroups: PublicationGroup[] = [
  {
    id: "international",
    title: "International Paper",
    buttonLabel: "International",
    description: "",
    items: [
      {
        title: "TRiGS: Temporal Rigid-Body Motion for Scalable 4D Gaussian Splatting",
        imageSrc: "/papers/TRiGS.webp",
        submittedTo: "ECCV 2026",
        authors: "*Suwoong Yeom, *Joonsik Nam, *Seunggyu Choi, Lucas Yunkyu Lee, Sangmin Kim, Jaesik Park, Joonsoo Kim, Kugjin Yun, Kyeongbo Kong, Sukju Kang",
        links: [
          {
            label: "Arxiv",
            href: "https://arxiv.org/abs/2604.00538",
          },
          {
            label: "Project Page",
            href: "https://wwwjjn.github.io/TRiGS-project_page/",
          }
        ],
      },
      {
        title: "OriCache: Orientation-Guided Feature Caching for DiT Acceleration",
        imageSrc: "/papers/OriCache.webp",
        submittedTo: "ICML 2026 AdaptFM Workshop",
        authors: "*Joonsik Nam, Hyunwoo Yu, Sukju Kang",
        links: [
          {
            label: "OpenReview",
            href: "https://openreview.net/pdf?id=Z5Ifqa2RQC",
          },
        ],
      },
      {
        title: "HOIGS: Human-Object Interaction Gaussian Splatting",
        imageSrc: "/papers/HOIGS.png",
        submittedTo: "Under Review",
        authors: "*Taewoo Kim, *Suwoong Yeom, *Jaehyun Pyun, Geonho Cha, Dongyoon Wee, Joonsik Nam, Yun-Seong Jeong, Kyeongbo Kong, Suk-Ju Kang",
        links: [
          {
            label: "Arxiv",
            href: "https://arxiv.org/pdf/2604.04016",
          },
        ],
      },
    ],
    
  },
  {
    id: "domestic",
    title: "Domestic Paper",
    buttonLabel: "Domestic",
    description: "",
    items: [ 
      {
        title: "AlignCache: Directional Alignment-Based Feature Caching for DiT",
        imageSrc: "/papers/AlignCache.webp",
        submittedTo: "Summer Annual Conference of IEIE, 2026 [하계대한전자공학회 2026]",
        authors: "*Joonsik Nam, HyunWoo Yu, SukJu Kang",
      },
      {
        title: "HSVT: Hierarchical Spiking Vision Transformer with Temporal Modulation",
        imageSrc: "/papers/HSVT.webp",
        submittedTo: "AISP 2025 [인공지능신호처리학술대회 2025]",
        authors: "*Joonsik Nam, HyunWoo Yu, SukJu Kang",
      }
     ],
  },
];

function RevealOnScroll({
  children,
}: {
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={[
        "transition duration-700 ease-out will-change-transform motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function SectionHeader({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="space-y-3">
      <h2 className="max-w-2xl bg-gradient-to-r from-[var(--accent-strong)] via-[#2f7d56] to-[var(--ink-strong)] bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
        {title}
      </h2>
      {body ? (
        <p className="max-w-2xl text-[0.98rem] leading-7 text-[var(--ink-soft)]">
          {body}
        </p>
      ) : null}
    </div>
  );
}

function PageSection({
  id,
  title,
  body,
  children,
}: {
  id: SectionId;
  title: string;
  body: string;
  children: ReactNode;
}) {
  return (
    <RevealOnScroll>
      <section id={id} className="space-y-9 scroll-mt-12">
        <SectionHeader title={title} body={body} />
        {children}
      </section>
    </RevealOnScroll>
  );
}

function LinkButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const variantClass =
    label.toLowerCase() === "arxiv"
      ? "border-[#efb5b5] bg-[#fff1f1] text-[#b65b5b] hover:border-[#d98d8d] hover:bg-[#ffe6e6]"
      : label.toLowerCase() === "openreview"
        ? "border-[#9db8ff] bg-[#eef3ff] text-[#3f63c8] hover:border-[#6f8ee8] hover:bg-[#e3ebff]"
        : label.toLowerCase() === "project page"
          ? "border-[var(--line-strong)] bg-white text-[var(--ink-strong)] hover:border-[var(--accent-strong)] hover:bg-[var(--accent-soft)]"
          : "border-[var(--accent-strong)] bg-[var(--accent-soft)] text-[var(--accent-strong)] hover:bg-[var(--accent-strong)] hover:text-white";
  const isArxiv = label.toLowerCase() === "arxiv";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold transition ${variantClass}`}
    >
      {isArxiv ? (
        <svg
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="h-4 w-4 shrink-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 1.75h5.25L12 4.5v9.75H4V1.75Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.25"
          />
          <path
            d="M9.25 1.75V4.5H12"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.25"
          />
          <path
            d="M5.75 7.25h4.5M5.75 9.5h4.5M5.75 11.75h2.75"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.25"
          />
        </svg>
      ) : null}
      {children}
    </a>
  );
}

function Authors({ value }: { value: string }) {
  const parts = value.split(/(Joon-?sik Nam)/i);

  return (
    <>
      {parts.map((part, index) =>
        /^Joon-?sik Nam$/i.test(part) ? (
          <span
            key={`${part}-${index}`}
            className="font-bold underline decoration-[var(--accent-strong)] decoration-2 underline-offset-4"
          >
            {part}
          </span>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        ),
      )}
    </>
  );
}

function ProfileLinkBlocks() {
  const links = [
    {
      label: "LinkedIn",
      href: contactLinks.find((link) => link.label === "LinkedIn")?.href ?? "#",
    },
    {
      label: "Google Scholar",
      href:
        contactLinks.find((link) => link.label === "Google Scholar")?.href ?? "#",
    },
    {
      label: "GitHub",
      href: contactLinks.find((link) => link.label === "GitHub")?.href ?? "#",
    },
  ];

  return (
    <section className="flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="inline-flex items-center justify-center rounded-lg border border-[var(--line-strong)] bg-[var(--card-surface)] px-4 py-2.5 text-sm font-semibold text-[var(--ink-strong)] transition hover:border-[var(--accent-strong)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-strong)]"
        >
          {link.label}
        </a>
      ))}
    </section>
  );
}

function CvSection() {
  return (
    <PageSection id="cv" title={uiText.cvTitle} body={uiText.cvBody}>
      <div className="overflow-hidden rounded-lg border border-l-4 border-[var(--line-strong)] border-l-[var(--accent-strong)] bg-[var(--card-surface)]">
        {[...cvEntries].reverse().map((entry) => (
          <article
            key={`${entry.title}-${entry.period}`}
            className="grid gap-3 border-b border-[var(--line)] p-5 last:border-b-0 sm:grid-cols-[180px_1fr] sm:gap-10 sm:p-6"
          >
            <p className="flex h-full items-center font-mono text-sm font-bold uppercase tracking-[0.08em] text-[var(--accent-strong)] sm:justify-center sm:text-center sm:text-base">
              {entry.period}
            </p>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold tracking-tight text-[var(--ink-strong)]">
                {entry.title}
              </h3>
              <p className="leading-7 text-[var(--ink-soft)]">
                {entry.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </PageSection>
  );
}

function PublicationsSection() {
  return (
    <PageSection
      id="publications"
      title={uiText.papersTitle}
      body={uiText.papersBody}
    >
      <div className="space-y-10">
        {publicationGroups.map((group) => (
          <div key={group.id}>
            {group.items.length > 0 ? (
              <div className="overflow-hidden rounded-lg border border-l-4 border-[var(--line-strong)] border-l-[var(--accent-strong)] bg-[var(--card-surface)]">
                <div className="border-b border-[var(--line)] p-5 sm:p-6">
                  <h3 className="text-2xl font-bold tracking-tight text-[var(--ink-strong)] sm:text-3xl">
                    {group.title}
                  </h3>
                </div>
                {group.items.map((paper, index) => (
                  <article
                    key={`${group.title}-${paper.title}`}
                    className="grid gap-5 border-b border-[var(--line)] p-5 last:border-b-0 sm:p-6 lg:grid-cols-[260px_1fr] lg:gap-8"
                  >
                    <div className="flex items-center justify-center overflow-hidden rounded-md border border-[var(--line)] bg-white p-2">
                      {paper.imageSrc ? (
                        <Image
                          src={publicAsset(paper.imageSrc)}
                          alt={`${paper.title} thumbnail`}
                          width={520}
                          height={360}
                          className="h-auto max-h-64 w-full object-contain"
                        />
                      ) : (
                        <div className="flex min-h-40 w-full items-center justify-center font-mono text-xs uppercase tracking-[0.14em] text-[var(--ink-faint)]">
                          Paper
                        </div>
                      )}
                    </div>

                    <div className="space-y-3">
                      {paper.submittedTo ? (
                        <p className="font-mono text-base font-bold tracking-normal text-[var(--ink-strong)]">
                          {paper.submittedTo}
                        </p>
                      ) : null}
                      <h4 className="text-xl font-semibold tracking-tight text-[var(--ink-strong)]">
                        <span className="font-mono text-base font-semibold text-[var(--accent-strong)]">
                          {`[C${group.items.length - index}]`}
                        </span>{" "}
                        {paper.title}
                      </h4>
                      <p className="text-sm leading-6 text-[var(--ink-faint)]">
                        <Authors value={paper.authors} />
                      </p>

                      {paper.links && paper.links.length > 0 ? (
                        <div className="mt-5 flex flex-wrap gap-4">
                          {paper.links.map((link) => (
                            <LinkButton
                              key={`${paper.title}-${link.label}`}
                              href={link.href}
                              label={link.label}
                            >
                              {link.label}
                            </LinkButton>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="rounded-md border border-[var(--line)] bg-[var(--paper)] p-4 leading-7 text-[var(--ink-faint)]">
                {uiText.emptyPapers}
              </p>
            )}
          </div>
        ))}
      </div>
    </PageSection>
  );
}

function ProjectsSection() {
  return (
    <PageSection id="projects" title={uiText.projectsTitle} body={uiText.projectsBody}>
      <div className="overflow-hidden rounded-lg border border-l-4 border-[var(--line-strong)] border-l-[var(--accent-strong)] bg-[var(--card-surface)]">
        {projects.map((project) => (
          <article
            key={project.title}
            className="border-b border-[var(--line)] p-5 last:border-b-0 sm:p-6"
          >
            <p className="font-mono text-sm font-bold uppercase tracking-[0.08em] text-[var(--accent-strong)]">
              {project.period}
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-[var(--ink-strong)]">
              {project.title}
            </h3>
            <p className="mt-3 leading-7 text-[var(--ink-soft)]">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
              {project.stack.map((item) => (
                <span
                  key={`${project.title}-${item}`}
                  className="font-mono text-xs text-[var(--ink-faint)]"
                >
                  #{item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </PageSection>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <div className="border-b border-[var(--line)] bg-[var(--paper)]">
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <a
            href="#top"
            className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[var(--ink-strong)]"
          >
            {profile.name || "Joonsik Nam"}
          </a>
        </header>

        <section
          id="top"
          className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1fr_380px] lg:items-end lg:py-24"
        >
          <div className="max-w-3xl space-y-7">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-strong)]">
              {profile.role}
            </p>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold leading-[1.04] tracking-tight text-[var(--ink-strong)] sm:text-6xl">
                {profile.tagline}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--ink-soft)]">
                {profile.summary}
              </p>
            </div>
            <div className="space-y-3 pt-1">
              <p className="text-lg font-bold tracking-tight text-[var(--ink-strong)]">
                Research Interest
              </p>
              <div className="space-y-2 text-lg leading-8 text-[var(--ink-soft)]">
                {[
                  "Multi-modal LLM",
                  "Diffusion model",
                  "3D/4D Reconstruction",
                  "Edge model",
                ].map((interest) => (
                  <p key={interest}>- {interest}</p>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-5 border-t border-[var(--line)] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div className="aspect-[3/4] w-full max-w-[300px] overflow-hidden bg-[var(--card)] sm:max-w-[360px] lg:max-w-none">
              {profile.heroImageSrc ? (
                <Image
                  src={publicAsset(profile.heroImageSrc)}
                  alt={`${profile.name || "Joonsik Nam"} profile photo`}
                  width={720}
                  height={960}
                  priority
                  className="h-full w-full object-cover"
                />
              ) : null}
            </div>
            <div className="space-y-3 text-sm leading-6 text-[var(--ink-soft)]">
              <p>{profile.location}</p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-4 block text-base font-bold text-[var(--ink-strong)] transition hover:text-[var(--accent-strong)]"
              >
                Email : {profile.email}
              </a>
              <div className="pt-2">
                <ProfileLinkBlocks />
              </div>
            </div>
          </aside>
        </section>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-5 py-14 sm:px-8 sm:py-20">
        <CvSection />
        <PublicationsSection />
        <ProjectsSection />
      </div>

      <footer className="border-t border-[var(--line)] px-5 py-8 text-center font-mono text-xs text-[var(--ink-faint)] sm:px-8">
        {new Date().getFullYear()} {uiText.copy}
      </footer>
    </main>
  );
}
