# Seema Sravani Reddy Portfolio

This repository contains a lightweight portfolio site for Seema Sravani Reddy, built with Next.js, TypeScript, and Tailwind CSS.

## Overview

The site is designed as a fast, professional portfolio for internship recruiters. It includes a landing page, project showcase, about section, resume page, blog, and a contact form that uses a serverless API endpoint.

## Tech stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Vercel-ready deployment

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the app in your browser at http://localhost:3000

## Vercel deployment

1. Push this repository to GitHub.
2. Import the repo in Vercel.
3. Use the default Next.js build settings.
4. Add an environment variable:
   ```bash
   EMAIL_TO=your_email@example.com
   ```
5. Deploy.

## Content customization

- Update the text in `pages/index.tsx` and `pages/about.tsx`.
- Add or edit project entries in `data/projects.ts`.
- Add new blog posts in the `posts` directory as Markdown files.
- Add your resume file to `public/Seema_Sravani_Reddy_Resume.pdf` and keep the file named exactly the same so the download button works.

## Notes

- The public portfolio is intentionally minimal and professional.
- The contact form is spam-protected with a hidden honeypot field and is ready to be connected to an email destination in Vercel.
- The site is optimized for quick recruiter reviews and mobile viewing.
