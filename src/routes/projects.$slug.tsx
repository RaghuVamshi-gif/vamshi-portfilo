import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Calendar, User2 } from "lucide-react";
import { GridBackdrop, CursorGlow, ScrollProgress } from "@/components/portfolio/Background";
import { getProject, PROJECTS, type Project } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Raghu Vamshi" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.name} — Raghu Vamshi`;
    return {
      meta: [
        { title },
        { name: "description", content: project.description.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: project.description.slice(0, 155) },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetail,
  notFoundComponent: ProjectNotFound,
});

function ProjectNotFound() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <GridBackdrop />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
        <p className="font-mono text-[11px] uppercase tracking-widest text-[#00D9FF]">404</p>
        <h1 className="mt-3 font-display text-4xl font-bold">Project not found</h1>
        <p className="mt-3 text-muted-foreground">
          The project you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          hash="projects"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#00D9FF]/40 px-6 py-3 text-sm text-[#00D9FF] transition-colors hover:bg-[#00D9FF]/10"
        >
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>
      </div>
    </main>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const others = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <CursorGlow />
      <GridBackdrop />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-28 sm:pt-32">
        <Link
          to="/"
          hash="projects"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-[#00D9FF]"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to projects
        </Link>

        {/* Header */}
        <header className="glass relative mt-6 overflow-hidden rounded-3xl p-8 sm:p-12">
          <div
            className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br ${project.accent} opacity-20 blur-3xl`}
          />
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#00D9FF]">
            {project.category}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">{project.name}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5 text-[#00D9FF]" /> {project.year}
            </span>
            <span className="inline-flex items-center gap-2">
              <User2 className="h-3.5 w-3.5 text-[#00D9FF]" /> {project.role}
            </span>
          </div>

          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#00D9FF] px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
            >
              Visit Live Site <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <p className="mt-8 inline-flex rounded-full border border-white/10 px-5 py-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Private / Academic Project
            </p>
          )}
        </header>

        {/* Overview */}
        <section className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="glass rounded-3xl p-8">
            <h2 className="font-display text-2xl font-bold">Overview</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.overview}</p>

            <h3 className="mt-8 font-display text-lg font-bold">What went into it</h3>
            <ul className="mt-4 space-y-3">
              {project.details.map((d) => (
                <li key={d} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00D9FF]" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <div className="glass rounded-3xl p-7">
              <h2 className="font-mono text-[11px] uppercase tracking-widest text-[#00D9FF]">
                Tech Stack
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-7">
              <h2 className="font-mono text-[11px] uppercase tracking-widest text-[#00D9FF]">
                Key Features
              </h2>
              <div className="mt-4 space-y-2">
                {project.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-xs"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00D9FF]" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {project.link ? (
              <div className="glass rounded-3xl p-7">
                <h2 className="font-mono text-[11px] uppercase tracking-widest text-[#00D9FF]">
                  Live Link
                </h2>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block break-all text-sm text-foreground underline-offset-4 transition-colors hover:text-[#00D9FF] hover:underline"
                >
                  {project.link}
                </a>
              </div>
            ) : null}
          </aside>
        </section>

        {/* More projects */}
        <section className="mt-14">
          <h2 className="font-display text-2xl font-bold">More Projects</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="glass glass-hover group rounded-2xl p-5"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#00D9FF]">
                  {p.category}
                </p>
                <p className="mt-2 font-display text-lg font-bold">{p.name}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-[#00D9FF]">
                  View project <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
