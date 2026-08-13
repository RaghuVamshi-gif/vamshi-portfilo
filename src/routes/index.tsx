import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Code2,
  Palette,
  Brain,
  Lightbulb,
  Sparkles,
  Layers,
  Cpu,
  Database,
  Wrench,
  Box,
  GraduationCap,
  Send,
  ChevronRight,
} from "lucide-react";
import {
  GridBackdrop,
  ParticleField,
  CursorGlow,
  ScrollProgress,
} from "@/components/portfolio/Background";
import { TypingText } from "@/components/portfolio/TypingText";
import { HoloSphere } from "@/components/portfolio/HoloSphere";
import { Counter } from "@/components/portfolio/Counter";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { sendContactMessage } from "@/lib/contact.functions";
import { PROJECTS } from "@/lib/projects";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raghu Vamshi — Software Developer & UI/UX Designer" },
      {
        name: "description",
        content:
          "Portfolio of Raghu Vamshi — Software Developer, UI/UX Designer and Graphic Designer building intelligent digital experiences across AI, Robotics, Blockchain and Full Stack.",
      },
      { property: "og:title", content: "Raghu Vamshi — Software Developer & UI/UX Designer" },
      {
        property: "og:description",
        content: "Premium portfolio across AI, Robotics, Blockchain and Full Stack development.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <GridBackdrop />
      <ParticleField />
      <CursorGlow />
      <ScrollProgress />

      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <DesignProcess />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 pt-4 sm:px-6">
      <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3">
        <a href="#home" className="flex items-center gap-2 font-display text-sm font-bold tracking-wider">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-[#00D9FF] text-black">
            R
          </span>
          <span className="text-gradient">RAGHU VAMSHI</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-[#00D9FF]"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full border border-[#00D9FF]/40 bg-[#00D9FF]/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-[#00D9FF] transition-all hover:bg-[#00D9FF]/15 hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] md:inline-block"
        >
          Hire Me
        </a>
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
          </div>
        </button>
      </div>
      {open && (
        <div className="glass mx-auto mt-2 flex max-w-6xl flex-col gap-3 rounded-2xl p-5 md:hidden">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
            >
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-4 pt-32 sm:px-6 lg:px-10">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00D9FF]/30 bg-[#00D9FF]/5 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-[#00D9FF]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00D9FF] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00D9FF]" />
            </span>
            Available for opportunities
          </div>

          <div>
            <p className="font-mono text-sm text-muted-foreground">Hello, I am</p>
            <h1 className="mt-2 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              <span className="text-gradient">Raghu</span>{" "}
              <span className="text-foreground">Vamshi</span>
            </h1>
            <p className="mt-4 font-display text-lg text-muted-foreground sm:text-xl">
              Software Developer · UI/UX Designer · Graphic Designer
            </p>
          </div>

          <div className="min-h-[32px]">
            <TypingText />
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Motivated and detail-oriented developer & designer passionate about creating
            innovative digital solutions through technology, design and problem-solving.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[#00D9FF] px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-black transition-all hover:bg-[#00D9FF]"
            >
              Explore Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass glass-hover inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-foreground"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <SocialIcon href="https://github.com/RaghuVamshi-gif" icon={<Github className="h-4 w-4" />} />
            <SocialIcon href="https://linkedin.com/in/raghu-vamshi-p" icon={<Linkedin className="h-4 w-4" />} />
            <SocialIcon href="mailto:Raghuvamshipapa@gmail.com" icon={<Mail className="h-4 w-4" />} />
          </div>
        </div>

        <div className="relative">
          <HoloSphere />
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="glass grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition-all hover:text-[#00D9FF]"
    >
      {icon}
    </a>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  const highlights = [
    { icon: Code2, label: "Software Development" },
    { icon: Palette, label: "UI/UX Design" },
    { icon: Sparkles, label: "Graphic Design" },
    { icon: Brain, label: "Product Thinking" },
    { icon: Lightbulb, label: "Problem Solving" },
    { icon: Cpu, label: "Innovation Driven" },
  ];
  return (
    <Section id="about" eyebrow="01 · About" title="Engineer × Designer">
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="space-y-5 lg:col-span-3">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I&apos;m a Software Developer and UI/UX Designer with experience across
            <span className="text-foreground"> Full Stack Development</span>,
            <span className="text-foreground"> User Experience Design</span>,
            <span className="text-foreground"> Graphic Design</span>,
            <span className="text-foreground"> Robotics (ROS 2)</span>,
            <span className="text-foreground"> Blockchain Applications</span> and
            <span className="text-foreground"> Web Development</span>.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            I enjoy transforming complex ideas into elegant, user-friendly digital
            experiences — bridging the gap between engineering precision and design
            intuition.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["AI", "Robotics", "Blockchain", "Full Stack", "Design Systems"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-[#00D9FF]/20 bg-[#00D9FF]/5 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-[#00D9FF]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:col-span-2">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="glass glass-hover group rounded-2xl p-4"
            >
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#00D9FF]/10 text-[#00D9FF] transition-all">
                <h.icon className="h-4 w-4" />
              </div>
              <p className="mt-3 font-display text-sm font-medium">{h.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- SKILLS ---------- */
const SKILL_GROUPS = [
  { icon: Code2, title: "Programming", items: [["Python", 92], ["Java", 80], ["JavaScript", 88], ["C++", 72], ["SQL", 85]] },
  { icon: Layers, title: "Frontend", items: [["HTML", 95], ["CSS", 92], ["React", 90], ["Tailwind CSS", 88]] },
  { icon: Box, title: "Backend", items: [["Node.js", 85], ["Express.js", 82], ["REST APIs", 88]] },
  { icon: Database, title: "Databases", items: [["MySQL", 84], ["MongoDB", 80]] },
  { icon: Palette, title: "Design", items: [["Figma", 92], ["Photoshop", 80], ["Illustrator", 75], ["Canva", 88]] },
  { icon: Wrench, title: "Dev Tools", items: [["Git", 90], ["GitHub", 92], ["Docker", 78], ["VS Code", 95]] },
  { icon: Brain, title: "Emerging Tech", items: [["ROS 2", 78], ["Blockchain", 72], ["Machine Learning", 75], ["AI Fundamentals", 80]] },
] as const;

function Skills() {
  return (
    <Section id="skills" eyebrow="02 · Skills" title="Stack & Toolchain">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((g) => (
          <div key={g.title} className="glass glass-hover rounded-2xl p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#00D9FF]/10 text-[#00D9FF]">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{g.title}</h3>
            </div>
            <div className="space-y-3">
              {g.items.map(([name, val]) => (
                <div key={name as string}>
                  <div className="mb-1 flex justify-between font-mono text-[11px] uppercase tracking-wider">
                    <span className="text-muted-foreground">{name}</span>
                    <span className="text-[#00D9FF]">{val}%</span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${val}%`,
                        background: "#00D9FF",
                        boxShadow: "0 0 10px rgba(0,217,255,0.6)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- EXPERIENCE ---------- */
function Experience() {
  const roles = [
    {
      role: "UI/UX Designer",
      items: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Accessibility Design"],
      icon: Palette,
    },
    {
      role: "Software Developer",
      items: ["Frontend Development", "Backend Development", "API Development", "Database Design", "Optimization"],
      icon: Code2,
    },
  ];
  return (
    <Section id="experience" eyebrow="03 · Experience" title="Timeline">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 md:left-1/2" />
        <div className="space-y-10">
          {roles.map((r, i) => (
            <div
              key={r.role}
              className={`relative grid gap-6 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="absolute left-4 top-3 grid h-3 w-3 -translate-x-1/2 place-items-center md:left-1/2">
                <span className="absolute h-3 w-3 animate-ping rounded-full bg-[#00D9FF] opacity-60" />
                <span className="relative h-3 w-3 rounded-full bg-[#00D9FF]" />
              </div>
              <div className="pl-10 md:pl-0 md:pr-10 md:text-right">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#00D9FF]/20 bg-[#00D9FF]/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[#00D9FF]">
                  <r.icon className="h-3 w-3" /> Role
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold">{r.role}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Hands-on experience delivering production-grade work, owning the craft from
                  research to release.
                </p>
              </div>
              <div className="pl-10 md:pl-10">
                <div className="glass rounded-2xl p-5">
                  <ul className="space-y-2">
                    {r.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-sm">
                        <ChevronRight className="h-4 w-4 text-[#00D9FF]" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- PROJECTS ---------- */
function Projects() {
  return (
    <Section id="projects" eyebrow="04 · Projects" title="Selected Work">
      <div className="grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((p, idx) => (
          <article
            key={p.name}
            className="glass glass-hover group relative overflow-hidden rounded-3xl p-7"
          >
            <div
              className={`pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br ${p.accent} opacity-10 blur-3xl transition-opacity group-hover:opacity-25`}
            />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-[#00D9FF]">
                  {String(idx + 1).padStart(2, "0")} · {p.category}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{p.name}</h3>
              </div>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                aria-label={`View details for ${p.name}`}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#00D9FF]/40 text-[#00D9FF] transition-transform hover:scale-110 group-hover:rotate-45"
              >
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

            <div className="mt-5 grid grid-cols-2 gap-2">
              {p.features.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-xs"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00D9FF]" />
                  {f}
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------- EDUCATION ---------- */
function Education() {
  return (
    <Section id="education" eyebrow="05 · Education" title="Academic Path">
      <div className="glass rounded-3xl p-7 sm:p-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#00D9FF]/10 text-[#00D9FF]">
            <GraduationCap className="h-7 w-7" />
          </div>
          <div className="flex-1">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#00D9FF]">Degree</p>
            <h3 className="mt-1 font-display text-2xl font-bold">Bachelor of Technology</h3>
            <p className="text-muted-foreground">Computer Science and Engineering</p>
            <p className="mt-1 font-display text-sm font-medium text-foreground">PES UNIVERSITY</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Software Engineering", "Algorithms", "Data Structures", "Databases", "Human Computer Interaction"].map(
                (f) => (
                  <span
                    key={f}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {f}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- ACHIEVEMENTS ---------- */
function Achievements() {
  const items = [
    { n: 15, suffix: "+", label: "Projects Completed" },
    { n: 8, suffix: "+", label: "UI/UX Case Studies" },
    { n: 12, suffix: "+", label: "Software Solutions" },
    { n: 4, suffix: "+", label: "Blockchain Apps" },
  ];
  return (
    <Section id="achievements" eyebrow="06 · Achievements" title="By the Numbers">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <div key={i.label} className="glass glass-hover rounded-2xl p-6 text-center">
            <Counter to={i.n} suffix={i.suffix} />
            <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              {i.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- DESIGN PROCESS ---------- */
function DesignProcess() {
  const stages = ["Research", "Analyze", "Design", "Develop", "Optimize"];
  return (
    <Section id="process" eyebrow="07 · Process" title="How I Build">
      <div className="glass rounded-3xl p-6 sm:p-10">
        <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center">
          {stages.map((s, i) => (
            <div key={s} className="flex items-center gap-4 md:flex-1 md:flex-col">
              <div className="group relative grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-white/10 bg-black/40 font-mono text-sm font-semibold transition-all hover:border-[#00D9FF]/60 hover:shadow-[0_0_25px_rgba(0,217,255,0.5)] md:mx-auto">
                <span className="text-gradient">0{i + 1}</span>
                <span className="absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100" style={{ boxShadow: "inset 0 0 20px rgba(0,217,255,0.3)" }} />
              </div>
              <div className="md:text-center">
                <p className="font-display text-base font-semibold">{s}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Stage {i + 1}
                </p>
              </div>
              {i < stages.length - 1 && (
                <ChevronRight className="hidden h-5 w-5 text-[#00D9FF]/50 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const [sending, setSending] = useState(false);
  const send = useServerFn(sendContactMessage);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setSending(true);
    try {
      await send({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          message: String(fd.get("message") ?? ""),
        },
      });
      toast.success("Message sent. I'll get back to you soon.");
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Could not send your message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Section id="contact" eyebrow="08 · Contact" title="Let's Build Together">
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          <p className="text-muted-foreground">
            Open to opportunities, collaborations and meaningful conversations about
            software, design and the future of intelligent products.
          </p>
          <div className="space-y-3 pt-2">
            <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value="Raghuvamshipapa@gmail.com" href="mailto:Raghuvamshipapa@gmail.com" />
            <ContactRow icon={<Github className="h-4 w-4" />} label="GitHub" value="@github.com/RaghuVamshi-gif" href="https://github.com/RaghuVamshi-gif" />
            <ContactRow icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="www.linkedin.com/in/raghu-vamshi-p" href="https://linkedin.com/in/raghu-vamshi-p" />
          </div>
        </div>
        <form onSubmit={onSubmit} className="glass space-y-4 rounded-3xl p-6 sm:p-8 lg:col-span-3">
          <Field label="Name" name="name" placeholder="Your name" />
          <Field label="Email" name="email" type="email" placeholder="you@domain.com" />
          <div>
            <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              required
              rows={5}
              name="message"
              placeholder="Tell me about your project..."
              className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/50 focus:border-[#00D9FF]/60 focus:bg-white/[0.04] focus:shadow-[0_0_0_3px_rgba(0,217,255,0.1)]"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#00D9FF] px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-black transition-all hover:bg-[#00D9FF] disabled:opacity-60"
          >
            {sending ? "Sending..." : "Send Message"}
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/50 focus:border-[#00D9FF]/60 focus:bg-white/[0.04] focus:shadow-[0_0_0_3px_rgba(0,217,255,0.1)]"
      />
    </div>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <a href={href} className="glass glass-hover flex items-center gap-4 rounded-2xl p-4">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#00D9FF]/10 text-[#00D9FF]">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="truncate text-sm">{value}</p>
      </div>
    </a>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="relative z-10 mt-20 border-t border-white/5 px-4 py-10 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-display text-sm font-bold tracking-wider">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-[#00D9FF] text-black">R</span>
            <span className="text-gradient">RAGHU VAMSHI</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Building intelligent digital experiences through design and technology.
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 md:justify-center">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-[#00D9FF]">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="md:text-right">
          <div className="flex gap-3 md:justify-end">
            <SocialIcon href="https://github.com/RaghuVamshi-gif" icon={<Github className="h-4 w-4" />} />
            <SocialIcon href="https://linkedin.com/in/raghu-vamshi-p" icon={<Linkedin className="h-4 w-4" />} />
            <SocialIcon href="mailto:Raghuvamshipapa@gmail.com" icon={<Mail className="h-4 w-4" />} />
          </div>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            © 2026 Raghu Vamshi
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- SECTION SHELL ---------- */
function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#00D9FF]">{eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              <span className="text-gradient">{title}</span>
            </h2>
          </div>
          <div className="hidden h-px flex-1 bg-white/10 sm:block" />
        </div>
        {children}
      </div>
    </section>
  );
}
