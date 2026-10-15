import Head from 'next/head';
import Link from 'next/link';
import { projects } from '../data/projects';

const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'Java', 'C++', 'SQL', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Express', 'Flask', 'Pandas'],
  },
  {
    title: 'Tools & Platforms',
    items: ['GitHub', 'Vercel', 'Figma', 'Tableau', 'Power BI', 'Firebase', 'MongoDB'],
  },
];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Seema Sravani Reddy | Portfolio</title>
        <meta
          name="description"
          content="Portfolio for Seema Sravani Reddy, a student developer focused on software engineering, data analytics, and internship-ready projects."
        />
        <meta property="og:title" content="Seema Sravani Reddy | Portfolio" />
        <meta property="og:description" content="Open to internships — Summer 2026" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white text-slate-900">
        <header className="supports-[backdrop-filter]:bg-white/80 sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="text-lg font-bold tracking-tight text-slate-900">
              Seema Sravani Reddy
            </Link>
            <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
              <Link href="/" className="transition hover:text-brand-600">Home</Link>
              <Link href="/projects" className="transition hover:text-brand-600">Projects</Link>
              <Link href="/about" className="transition hover:text-brand-600">About</Link>
              <Link href="/resume" className="transition hover:text-brand-600">Resume</Link>
              <Link href="/blog" className="transition hover:text-brand-600">Blog</Link>
              <Link href="/contact" className="transition hover:text-brand-600">Contact</Link>
            </nav>
            <Link
              href="/resume"
              className="inline-flex items-center rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-500"
            >
              Download Resume
            </Link>
          </div>
        </header>

        <main>
          <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="mb-5 inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">
                  Open to Internships — Summer 2026
                </div>
                <h1 className="max-w-xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                  Building useful software and meaningful data-driven experiences.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                  Hi, I’m Seema Sravani Reddy, a student developer and aspiring software engineer with a
                  strong interest in building practical, user-centered products and data-driven insights.
                  I use they/them pronouns.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/projects"
                    className="rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-500"
                  >
                    View Projects
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                  >
                    Contact Me
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                  <span>Based in India</span>
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                  <a href="https://github.com/sravanireddyseema" target="_blank" rel="noreferrer" className="font-medium text-brand-600 hover:text-brand-500">
                    GitHub
                  </a>
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                  <a href="https://www.linkedin.com/in/seema-sravani-reddy" target="_blank" rel="noreferrer" className="font-medium text-brand-600 hover:text-brand-500">
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-brand-100 to-blue-50 blur-2xl" />
                <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-soft">
                  <div className="space-y-4">
                    <div className="h-72 rounded-[20px] bg-gradient-to-br from-brand-600 via-brand-500 to-blue-500 p-6 text-white shadow-xl">
                      <div className="flex h-full flex-col justify-between">
                        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-blue-100">
                          <span>Student</span>
                          <span>Portfolio</span>
                        </div>
                        <div>
                          <p className="text-sm text-blue-100">Seema Sravani Reddy</p>
                          <p className="mt-2 text-2xl font-bold">Software Engineer</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-slate-700">
                      <div className="rounded-2xl border border-slate-200 bg-white p-4">
                        <div className="text-slate-500">Focus</div>
                        <div className="mt-2 font-semibold">Software & Data</div>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-white p-4">
                        <div className="text-slate-500">Status</div>
                        <div className="mt-2 font-semibold">Available Summer 2026</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="border-y border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="mb-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">About</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Building with curiosity.</h2>
              </div>
              <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
                <p className="text-lg leading-8 text-slate-700">
                  I am a motivated student developer with a strong interest in software engineering, data-driven
                  problem solving, and building products that make real work easier. My work focuses on creating
                  practical tools, exploring modern JavaScript frameworks, and learning how to turn ideas into
                  engaging digital experiences.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
                  <span className="rounded-full bg-slate-100 px-3 py-1">They/Them</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">Computer Science / Tech</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">Internship Ready</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Skills</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Core strengths</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                  <h3 className="text-xl font-semibold text-slate-900">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-brand-100 bg-brand-50 px-3 py-2 text-sm font-medium text-brand-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Projects</p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Selected work</h2>
                </div>
                <Link href="/projects" className="text-sm font-semibold text-brand-600 hover:text-brand-500">
                  View all projects →
                </Link>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                {projects.slice(0, 2).map((project) => (
                  <article key={project.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">
                        {project.category}
                      </span>
                      <span className="text-xs font-medium text-slate-500">{project.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                    <p className="mt-3 line-clamp-4 text-slate-600">{project.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="rounded-full bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
                      <div className="text-sm font-medium text-slate-900">{project.outcome}</div>
                      <Link href={`/projects#${project.slug}`} className="text-sm font-semibold text-brand-600 hover:text-brand-500">
                        Case study →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-brand-100 bg-brand-50 p-8 text-center shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Resume</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Ready for internship opportunities.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                Interested in learning more about my background and work? Download the resume or reach out directly.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <Link href="/resume" className="rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-brand-500">
                  View Resume
                </Link>
                <Link href="/contact" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-900">
                  Contact Me
                </Link>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:flex-row lg:px-8">
            <p>© 2026 Seema Sravani Reddy</p>
            <p>Pronouns: they/them</p>
          </div>
        </footer>
      </div>
    </>
  );
}
