import Head from 'next/head';
import Link from 'next/link';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Seema Sravani Reddy</title>
        <meta name="description" content="Project portfolio and case studies for Seema Sravani Reddy." />
      </Head>

      <div className="min-h-screen bg-white text-slate-900">
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="text-lg font-bold tracking-tight">Seema Sravani Reddy</Link>
            <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
              <Link href="/" className="hover:text-brand-600">Home</Link>
              <Link href="/projects" className="text-brand-600">Projects</Link>
              <Link href="/about" className="hover:text-brand-600">About</Link>
              <Link href="/resume" className="hover:text-brand-600">Resume</Link>
              <Link href="/blog" className="hover:text-brand-600">Blog</Link>
              <Link href="/contact" className="hover:text-brand-600">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Projects</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">Selected work</h1>
            <p className="mt-3 max-w-2xl text-lg text-slate-600">
              A mix of practical product work, technical experimentation, and data-driven problem solving.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.slug} id={project.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">
                    {project.category}
                  </span>
                  <span className="text-xs font-medium text-slate-500">{project.year}</span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900">{project.title}</h2>
                <p className="mt-3 text-slate-600">{project.summary}</p>

                <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                  <div className="font-semibold text-slate-900">Impact</div>
                  <p className="mt-2">{project.outcome}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  <p className="text-sm font-semibold text-slate-900">Problem → Solution → Role</p>
                  <p className="text-slate-600">{project.problem}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer" className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-500">
                      GitHub Repo
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400">
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
