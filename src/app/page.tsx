"use client";

import {
  contactLinks,
  cvEntries,
  highlights,
  profile,
  projects,
  uiText,
} from "@/data/portfolio";
import Image from "next/image";
import { useState, type ReactNode } from "react";

type SectionId = "cv" | "publications" | "projects" | "contact";

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

// 섹션 위치를 바꾸거나 새 섹션을 끼워 넣고 싶으면 이 배열 순서를 수정하세요.
// 새 폴더/컴포넌트를 만들 경우 SectionId에 이름을 추가하고 renderSection에 연결하면 됩니다.
const PAGE_SECTIONS: SectionId[] = [
  "cv",
  "publications",
  "projects",
  "contact",
];

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
    description: "Conference and journal papers published outside Korea.",
    items: [
      {
        title: "TRiGS: Temporal Rigid-Body Motion for Scalable 4D Gaussian Splatting",
        imageSrc: "/papers/TRiGS.webp",
        submittedTo: "",
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
      },
    ],
    
  },
  {
    id: "domestic",
    title: "Domestic Paper",
    buttonLabel: "Domestic",
    description: "Korean conference and journal papers.",
    items: [ 
      {
        title: "HSVT: Hierarchical Spiking Vision Transformer with Temporal Modulation",
        imageSrc: "/papers/HSVT.webp",
        submittedTo: "AISP 2025 [인공지능신호처리학술대회 2025]",
        authors: "*JoonSik Nam, HyunWoo Yu, SukJu Kang",
      },
      {
        title: "AlignCache: Directional Alignment-Based Feature Caching for DiT",
        imageSrc: "/papers/AlignCache.webp",
        submittedTo: "Summer Annual Conference of IEIE, 2026 [하계대한전자공학회 2026]",
        authors: "*JoonSik Nam, HyunWoo Yu, SukJu Kang",
      }
     ],
  },
];

function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="space-y-3">
      <p className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--accent-strong)]">
        {eyebrow}
      </p>
      <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-[var(--ink-strong)] sm:text-3xl">
        {title}
      </h2>
      <p className="max-w-2xl text-[0.98rem] leading-7 text-[var(--ink-soft)]">
        {body}
      </p>
    </div>
  );
}

function PageSection({
  id,
  eyebrow,
  title,
  body,
  children,
}: {
  id: SectionId;
  eyebrow: string;
  title: string;
  body: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="space-y-8 rounded-lg border border-[var(--line-strong)] bg-[var(--card-surface)] p-6 shadow-[0_18px_45px_rgba(17,17,15,0.05)] sm:p-8"
    >
      <SectionHeader eyebrow={eyebrow} title={title} body={body} />
      {children}
    </section>
  );
}

function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 border-b border-[var(--line-strong)] pb-1 text-sm font-semibold text-[var(--ink-strong)] transition hover:border-[var(--accent-strong)] hover:text-[var(--accent-strong)]"
    >
      {children}
      <span aria-hidden="true">-&gt;</span>
    </a>
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

function Highlights() {
  if (highlights.length === 0) {
    return null;
  }

  return (
    <section className="grid gap-4 sm:grid-cols-3">
      {highlights.map((item, index) => (
        <div
          key={`${item.label}-${index}`}
          className="border-t border-[var(--line-strong)] pt-4"
        >
          <p className="text-3xl font-semibold tracking-tight text-[var(--ink-strong)]">
            {item.value}
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
            {item.label}
          </p>
        </div>
      ))}
    </section>
  );
}

function CvSection() {
  return (
    <PageSection
      id="cv"
      eyebrow="01"
      title={uiText.cvTitle}
      body={uiText.cvBody}
    >
      <div className="space-y-8">
        {cvEntries.map((entry) => (
          <article
            key={`${entry.title}-${entry.period}`}
            className="grid gap-3 border-l border-[var(--line-strong)] pl-5 sm:grid-cols-[150px_1fr] sm:gap-8 sm:border-l-0 sm:border-t sm:pl-0 sm:pt-5"
          >
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-[var(--accent-strong)]">
                {entry.period}
              </p>
            </div>

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
  const [activeGroupId, setActiveGroupId] =
    useState<PublicationGroup["id"]>("international");
  const activeGroup =
    publicationGroups.find((group) => group.id === activeGroupId) ??
    publicationGroups[0];

  return (
    <PageSection
      id="publications"
      eyebrow="02"
      title={uiText.papersTitle}
      body={uiText.papersBody}
    >
      <div className="space-y-7">
        <div className="flex flex-wrap gap-3 border-t border-[var(--line-strong)] pt-5">
          {publicationGroups.map((group) => {
            const isActive = group.id === activeGroupId;

            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveGroupId(group.id)}
                className={[
                  "inline-flex rounded-md border px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.14em] transition",
                  isActive
                    ? "border-[var(--accent-strong)] bg-[var(--accent-strong)] text-white"
                    : "border-[var(--line-strong)] bg-[var(--paper)] text-[var(--ink-strong)] hover:border-[var(--accent-strong)]",
                ].join(" ")}
                aria-pressed={isActive}
              >
                {group.buttonLabel}
              </button>
            );
          })}
        </div>

        <div className="space-y-5">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-[var(--ink-strong)]">
              {activeGroup.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
              {activeGroup.description}
            </p>
          </div>

          {activeGroup.items.length > 0 ? (
            <div className="space-y-4">
              {activeGroup.items.map((paper) => (
                <article
                  key={`${activeGroup.title}-${paper.title}`}
                  className="grid gap-6 rounded-md border border-[var(--line)] bg-[var(--paper)] p-4 sm:grid-cols-[260px_1fr]"
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
                    <p className="font-mono text-sm font-semibold tracking-normal text-[var(--accent-strong)]">
                      {paper.submittedTo}
                    </p>
                    <h4 className="text-xl font-semibold tracking-tight text-[var(--ink-strong)]">
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
      </div>
    </PageSection>
  );
}

function ProjectsSection() {
  return (
    <PageSection
      id="projects"
      eyebrow="03"
      title={uiText.projectsTitle}
      body={uiText.projectsBody}
    >
      <div className="space-y-7">
        {projects.map((project) => (
          <article
            key={project.title}
            className="border-t border-[var(--line-strong)] pt-5"
          >
            <p className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-[var(--accent-strong)]">
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
            {project.href ? (
              <div className="mt-5">
                <TextLink href={project.href}>{uiText.projectLink}</TextLink>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </PageSection>
  );
}

function ContactSection() {
  return (
    <PageSection
      id="contact"
      eyebrow="04"
      title={uiText.contactTitle}
      body={uiText.contactBody}
    >
      <div className="flex flex-col items-start gap-4 border-t border-[var(--line-strong)] pt-5 sm:flex-row sm:flex-wrap">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex border-b border-[var(--ink-strong)] pb-1 text-sm font-semibold text-[var(--ink-strong)] transition hover:border-[var(--accent-strong)] hover:text-[var(--accent-strong)]"
        >
          {uiText.emailLabel}
        </a>
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="inline-flex border-b border-[var(--line-strong)] pb-1 text-sm font-semibold text-[var(--ink-strong)] transition hover:border-[var(--accent-strong)] hover:text-[var(--accent-strong)]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </PageSection>
  );
}

function renderSection(section: SectionId) {
  switch (section) {
    case "cv":
      return <CvSection key={section} />;
    case "publications":
      return <PublicationsSection key={section} />;
    case "projects":
      return <ProjectsSection key={section} />;
    case "contact":
      return <ContactSection key={section} />;
  }
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
            {profile.name || "Nam Joon-Sik"}
          </a>
        </header>

        <section
          id="top"
          className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1fr_340px] lg:items-end lg:py-24"
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
            <div className="flex flex-wrap gap-5 pt-2">
              <TextLink href="#cv">{uiText.cvTitle}</TextLink>
              <TextLink href="#projects">{uiText.projectsLink}</TextLink>
              <TextLink href={`mailto:${profile.email}`}>{uiText.emailLabel}</TextLink>
            </div>
          </div>

          <aside className="space-y-5 border-t border-[var(--line)] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div className="aspect-[4/5] w-full max-w-[280px] overflow-hidden bg-[var(--card)] sm:max-w-[320px] lg:max-w-none">
              {profile.heroImageSrc ? (
                <Image
                  src={publicAsset(profile.heroImageSrc)}
                  alt={`${profile.name || "Nam Joon-Sik"} profile photo`}
                  width={680}
                  height={850}
                  priority
                  className="h-full w-full object-cover"
                />
              ) : null}
            </div>
            <div className="space-y-2 text-sm leading-6 text-[var(--ink-soft)]">
              <p>{profile.location}</p>
              <a
                href={`mailto:${profile.email}`}
                className="text-[var(--ink-strong)] transition hover:text-[var(--accent-strong)]"
              >
                {profile.email}
              </a>
            </div>
          </aside>
        </section>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-5 py-14 sm:px-8 sm:py-20">
        <Highlights />
        <div className="space-y-8">{PAGE_SECTIONS.map(renderSection)}</div>
      </div>

      <footer className="border-t border-[var(--line)] px-5 py-8 text-center font-mono text-xs text-[var(--ink-faint)] sm:px-8">
        {new Date().getFullYear()} {uiText.copy}
      </footer>
    </main>
  );
}
