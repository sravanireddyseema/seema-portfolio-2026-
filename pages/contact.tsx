import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      website: formData.get('website'),
    };

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.success) {
      setStatus('success');
      setMessage('Thanks for your message. I will get back to you soon.');
      form.reset();
    } else {
      setStatus('error');
      setMessage(result.message || 'Something went wrong. Please try again later.');
    }
  }

  return (
    <>
      <Head>
        <title>Contact | Seema Sravani Reddy</title>
        <meta name="description" content="Contact Seema Sravani Reddy for internship opportunities and project discussions." />
      </Head>

      <div className="min-h-screen bg-white text-slate-900">
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="text-lg font-bold tracking-tight">Seema Sravani Reddy</Link>
            <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
              <Link href="/" className="hover:text-brand-600">Home</Link>
              <Link href="/projects" className="hover:text-brand-600">Projects</Link>
              <Link href="/about" className="hover:text-brand-600">About</Link>
              <Link href="/resume" className="hover:text-brand-600">Resume</Link>
              <Link href="/blog" className="hover:text-brand-600">Blog</Link>
              <Link href="/contact" className="text-brand-600">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Contact</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">Let’s connect.</h1>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-soft">
              <h2 className="text-2xl font-bold text-slate-900">Professional links</h2>
              <div className="mt-6 space-y-4 text-slate-700">
                <a href="https://www.linkedin.com/in/seema-sravani-reddy" target="_blank" rel="noreferrer" className="block rounded-2xl border border-slate-200 bg-white p-4 font-medium text-brand-600 hover:border-brand-200">
                  LinkedIn
                </a>
                <a href="https://github.com/sravanireddyseema" target="_blank" rel="noreferrer" className="block rounded-2xl border border-slate-200 bg-white p-4 font-medium text-brand-600 hover:border-brand-200">
                  GitHub
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="grid gap-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">Name</label>
                  <input id="name" name="name" required className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                  <input id="email" name="email" type="email" required className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" />
                </div>

                <div className="hidden">
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" type="text" />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                  <textarea id="message" name="message" required rows={5} className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" />
                </div>

                <button type="submit" className="rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-brand-500">
                  Send Message
                </button>

                {message && (
                  <p className={status === 'success' ? 'text-sm font-medium text-emerald-600' : 'text-sm font-medium text-red-600'}>
                    {message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
