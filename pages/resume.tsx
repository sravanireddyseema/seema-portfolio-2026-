import Head from 'next/head';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <>
      <Head>
        <title>Resume | Seema Sravani Reddy</title>
        <meta name="description" content="Resume page for Seema Sravani Reddy." />
      </Head>

      <div className="min-h-screen bg-white text-slate-900">
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="text-lg font-bold tracking-tight">Seema Sravani Reddy</Link>
            <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
              <Link href="/" className="hover:text-brand-600">Home</Link>
              <Link href="/projects" className="hover:text-brand-600">Projects</Link>
              <Link href="/about" className="hover:text-brand-600">About</Link>
              <Link href="/resume" className="text-brand-600">Resume</Link>
              <Link href="/blog" className="hover:text-brand-600">Blog</Link>
              <Link href="/contact" className="hover:text-brand-600">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Resume</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">Download and view my resume</h1>
            </div>
            <a href="/Seema_Sravani_Reddy_Resume.pdf" download className="inline-flex items-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-brand-500">
              Download PDF
            </a>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-soft">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Seema Sravani Reddy</h2>
                <p className="mt-2 text-slate-600">Student developer • Internship-ready • Software & Data</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">Summary</h3>
                <p className="mt-2 text-slate-700">
                  Motivated student developer with experience building practical projects in data analytics,
                  automation, and web development. Interested in software engineering, product-focused problem solving,
                  and internship opportunities that support growth and learning.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">Core Skills</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Python', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'SQL', 'GitHub', 'Tableau', 'Power BI', 'Tailwind CSS'].map((skill) => (
                    <span key={skill} className="rounded-full bg-white px-3 py-1.5 text-sm text-slate-700 ring-1 ring-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">Education</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                  <li>Education details available in the uploaded resume PDF.</li>
                  <li>Academic focus: technology, software engineering, and applied problem solving.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">Experience & Projects</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                  <li>Worked on AI-based resume builder workflows and internship-oriented product ideas.</li>
                  <li>Built and documented data analysis and research projects with measurable outcomes.</li>
                  <li>Maintained personal GitHub portfolio and project repositories for public showcase.</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
