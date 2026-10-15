import Head from 'next/head';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Seema Sravani Reddy</title>
        <meta name="description" content="About Seema Sravani Reddy and their professional background." />
      </Head>

      <div className="min-h-screen bg-white text-slate-900">
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="text-lg font-bold tracking-tight">Seema Sravani Reddy</Link>
            <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
              <Link href="/" className="hover:text-brand-600">Home</Link>
              <Link href="/projects" className="hover:text-brand-600">Projects</Link>
              <Link href="/about" className="text-brand-600">About</Link>
              <Link href="/resume" className="hover:text-brand-600">Resume</Link>
              <Link href="/blog" className="hover:text-brand-600">Blog</Link>
              <Link href="/contact" className="hover:text-brand-600">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">About</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">A builder with a curious mind.</h1>

          <div className="mt-8 space-y-6 text-lg leading-8 text-slate-700">
            <p>
              I am Seema Sravani Reddy, a student-focused developer who enjoys learning by building. My interest in
              technology began with a curiosity about how digital tools solve everyday challenges, and that led me
              toward software engineering, product thinking, and data-informed decision making.
            </p>
            <p>
              I enjoy working across the full stack of a project: understanding the user problem, prototyping a simple
              solution, iterating quickly, and shaping the final result into something clean and useful. I am especially
              interested in projects that combine data, design, and practical impact.
            </p>
            <p>
              I use they/them pronouns and I am currently looking for internship opportunities where I can keep learning,
              contribute value, and grow in a technical environment.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-semibold text-slate-900">Education</h2>
              <p className="mt-3 text-slate-600">Bachelor’s degree in progress / coursework in technology and applied computing</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-semibold text-slate-900">Career Objective</h2>
              <p className="mt-3 text-slate-600">To work on practical software projects, learn from experienced teams, and grow as an engineer.</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
