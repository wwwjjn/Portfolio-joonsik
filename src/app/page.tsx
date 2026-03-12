import {
  contactLinks,
  cvEntries,
  highlights,
  papers,
  profile,
  projects,
  uiText,
} from "@/data/portfolio";

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
    <div className="max-w-2xl space-y-3">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)] sm:text-xs">
        {eyebrow}
      </p>
      <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-tight text-[var(--ink-strong)]">
        {title}
      </h2>
      <p className="text-[clamp(0.98rem,1.5vw,1.125rem)] leading-[1.8] text-[var(--ink-soft)]">
        {body}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top_left,_rgba(15,118,110,0.22),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(245,158,11,0.18),_transparent_32%),linear-gradient(180deg,_#f8fbfb_0%,_#f3f7f9_48%,_#eef4f4_100%)]" />

        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-8">
          <a
            href="#top"
            className="text-[0.72rem] font-semibold tracking-[0.28em] text-[var(--ink-strong)] uppercase sm:text-sm"
          >
            {profile.name}
          </a>
        </header>

        <section
          id="top"
          className="mx-auto w-full max-w-6xl px-6 pb-18 pt-10 sm:px-8 lg:pb-24 lg:pt-16"
        >
          <div className="space-y-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
              <div className="group shrink-0">
                  <div className="relative h-56 w-56 overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(135deg,_rgba(15,118,110,0.16),_rgba(245,158,11,0.2))] shadow-[0_20px_42px_rgba(15,23,42,0.1)] sm:h-64 sm:w-64">
                  {profile.heroImageSrc ? (
                    <img
                      src={profile.heroImageSrc}
                      alt={`${profile.name} profile photo`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[var(--ink-strong)]">
                      Photo
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-5">
                <p className="text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)] sm:text-sm">
                  {profile.role}
                </p>
                <h1 className="display-face max-w-4xl text-[clamp(2.9rem,6vw,4.9rem)] font-semibold leading-[0.96] tracking-tight text-[var(--ink-strong)]">
                  {profile.tagline}
                </h1>
                <p className="max-w-2xl text-[clamp(1rem,1.6vw,1.18rem)] leading-[1.85] text-[var(--ink-soft)]">
                  {profile.summary}
                </p>
                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:flex-wrap">
                  <a
                    href="#papers"
                    className="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] bg-white/80 px-6 py-3 text-[0.95rem] font-semibold text-[var(--ink-strong)] transition hover:border-[var(--accent-strong)] hover:text-[var(--accent-strong)]"
                  >
                    {uiText.papersLink}
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] bg-white/80 px-6 py-3 text-[0.95rem] font-semibold text-[var(--ink-strong)] transition hover:border-[var(--accent-strong)] hover:text-[var(--accent-strong)]"
                  >
                    {uiText.projectsLink}
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] bg-white/80 px-6 py-3 text-[0.95rem] font-semibold text-[var(--ink-strong)] transition hover:border-[var(--accent-strong)] hover:text-[var(--accent-strong)]"
                  >
                    {uiText.emailLabel}
                  </a>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item, index) => (
                <div
                  key={`${item.label}-${index}`}
                  className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-4 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent-strong)] hover:bg-white hover:shadow-[0_18px_34px_rgba(15,23,42,0.08)]"
                >
                  <p className="text-[clamp(1.9rem,3vw,2.4rem)] font-semibold tracking-tight text-[var(--ink-strong)]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-[0.92rem] leading-6 text-[var(--ink-soft)]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 py-12 sm:px-8 sm:py-18">
        <section id="about" className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="01"
            title={uiText.aboutTitle}
            body={uiText.aboutBody}
          />
          <div className="flex min-h-full items-center rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-8 shadow-[0_18px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-2 hover:border-[var(--accent-strong)] hover:bg-white hover:shadow-[0_26px_54px_rgba(15,23,42,0.1)]">
            <p className="text-[clamp(1rem,1.6vw,1.16rem)] leading-[1.85] text-[var(--ink-soft)]">
              {profile.summary}
            </p>
          </div>
        </section>

        <section id="cv" className="space-y-10">
          <SectionHeader
            eyebrow="02"
            title={uiText.cvTitle}
            body={uiText.cvBody}
          />

          <div className="grid gap-5">
            {cvEntries.map((entry) => (
              <article
                key={`${entry.title}-${entry.period}`}
                className="grid gap-5 rounded-[2rem] border border-[var(--line)] bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-2 hover:border-[var(--accent-strong)] hover:shadow-[0_28px_60px_rgba(15,23,42,0.12)] lg:grid-cols-[minmax(210px,0.28fr)_1fr] lg:gap-8"
              >
                <div className="flex items-center lg:min-h-full">
                  <p className="whitespace-nowrap text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent-strong)] sm:text-[0.84rem] lg:text-[0.92rem]">
                    {entry.period}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-[clamp(1.45rem,2vw,1.9rem)] font-semibold tracking-tight text-[var(--ink-strong)]">
                    {entry.title}
                  </h3>
                  <p className="max-w-3xl text-[clamp(0.98rem,1.3vw,1.08rem)] leading-[1.8] text-[var(--ink-soft)]">
                    {entry.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="papers" className="space-y-10">
          <SectionHeader
            eyebrow="03"
            title={uiText.papersTitle}
            body={uiText.papersBody}
          />

          <div className="grid gap-6 xl:grid-cols-2">
            {papers.map((paper) => (
              <article
                key={`${paper.title}-${paper.year}`}
                className="rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-7 shadow-[0_18px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-2 hover:border-[var(--accent-strong)] hover:bg-white hover:shadow-[0_28px_60px_rgba(15,23,42,0.12)]"
              >
                <div className="flex flex-wrap items-center gap-3 text-[0.9rem] text-[var(--ink-faint)]">
                  <span>{paper.venue}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  <span>{paper.year}</span>
                </div>
                <h3 className="mt-4 text-[clamp(1.45rem,2vw,1.9rem)] font-semibold tracking-tight text-[var(--ink-strong)]">
                  {paper.title}
                </h3>
                <p className="mt-3 text-[0.92rem] leading-6 text-[var(--ink-faint)]">
                  {paper.authors}
                </p>
                <p className="mt-4 text-[clamp(0.98rem,1.3vw,1.08rem)] leading-[1.8] text-[var(--ink-soft)]">
                  {paper.abstract}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {paper.links.map((link) => (
                    <a
                      key={`${paper.title}-${link.label}`}
                      href={link.href}
                      className="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] px-4 py-2 text-[0.9rem] font-semibold text-[var(--ink-strong)] transition hover:border-[var(--accent-strong)] hover:bg-[var(--accent-soft)]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-10">
          <SectionHeader
            eyebrow="04"
            title={uiText.projectsTitle}
            body={uiText.projectsBody}
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col rounded-[2rem] border border-[var(--line)] bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-2 hover:border-[var(--accent-strong)] hover:shadow-[0_28px_60px_rgba(15,23,42,0.12)]"
              >
                <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)] sm:text-sm">
                  {project.period}
                </p>
                <h3 className="mt-4 text-[clamp(1.45rem,2vw,1.9rem)] font-semibold tracking-tight text-[var(--ink-strong)]">
                  {project.title}
                </h3>
                <p className="mt-4 flex-1 text-[clamp(0.98rem,1.3vw,1.08rem)] leading-[1.8] text-[var(--ink-soft)]">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={`${project.title}-${item}`}
                      className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-[0.86rem] text-[var(--accent-strong)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                {project.href ? (
                  <a
                    href={project.href}
                    className="mt-6 inline-flex text-[0.95rem] font-semibold text-[var(--ink-strong)] transition hover:text-[var(--accent-strong)]"
                  >
                    {uiText.projectLink}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="rounded-[2.25rem] border border-[var(--line)] bg-[linear-gradient(135deg,_rgba(255,255,255,0.92),_rgba(240,250,249,0.95))] p-8 shadow-[0_22px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-2 hover:border-[var(--accent-strong)] hover:shadow-[0_30px_60px_rgba(15,23,42,0.12)] sm:p-10"
        >
          <SectionHeader
            eyebrow="05"
            title={uiText.contactTitle}
            body={uiText.contactBody}
          />

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center rounded-full bg-[var(--ink-strong)] px-5 py-3 text-[0.95rem] font-semibold text-white transition hover:bg-[var(--accent-strong)]"
            >
              {uiText.emailLabel}
            </a>
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] px-5 py-3 text-[0.95rem] font-semibold text-[var(--ink-strong)] transition hover:border-[var(--accent-strong)] hover:bg-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </div>

      <footer className="border-t border-[var(--line)] px-6 py-8 text-center text-[0.9rem] text-[var(--ink-faint)] sm:px-8">
        {new Date().getFullYear()} {uiText.copy}
      </footer>
    </main>
  );
}
