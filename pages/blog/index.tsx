import Head from 'next/head';
import Link from 'next/link';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { GetStaticProps } from 'next';

const postsDirectory = path.join(process.cwd(), 'posts');

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      return {
        slug: fileName.replace(/\.md$/, ''),
        title: data.title,
        date: data.date,
        description: data.description,
        content,
      } as BlogPost;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return {
    props: { posts },
  };
};

export default function BlogPage({ posts }: { posts: BlogPost[] }) {
  return (
    <>
      <Head>
        <title>Blog | Seema Sravani Reddy</title>
        <meta name="description" content="Short technical posts and project learnings." />
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
              <Link href="/blog" className="text-brand-600">Blog</Link>
              <Link href="/contact" className="hover:text-brand-600">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Blog</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">Notes, lessons, and experiments.</h1>
          </div>

          <div className="space-y-6">
            {posts.map((post) => (
              <article key={post.slug} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-soft">
                <p className="text-sm font-medium text-brand-600">{post.date}</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">{post.title}</h2>
                <p className="mt-3 text-slate-600">{post.description}</p>
                <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-500">
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
