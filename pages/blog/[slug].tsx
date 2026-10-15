import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { GetStaticPaths, GetStaticProps } from 'next';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const fileNames = fs.readdirSync(postsDirectory);
  return {
    paths: fileNames.filter((fileName) => fileName.endsWith('.md')).map((fileName) => ({
      params: { slug: fileName.replace(/\.md$/, '') },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  // remark/remark-html type signatures can be picky in TypeScript; cast the plugin to any for build-time compatibility.
  const processedContent = await remark().use(html as any).process(content);

  return {
    props: {
      post: {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        content: processedContent.toString(),
      },
    },
  };
};

export default function BlogPostPage({ post }: { post: BlogPost }) {
  return (
    <>
      <Head>
        <title>{post.title} | Seema Sravani Reddy</title>
        <meta name="description" content={post.description} />
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

        <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-sm font-semibold text-brand-600 hover:text-brand-500">← Back to blog</Link>
          <article className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
            <p className="text-sm font-medium text-brand-600">{post.date}</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">{post.title}</h1>
            <div className="prose prose-slate mt-8 max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </main>
      </div>
    </>
  );
}
