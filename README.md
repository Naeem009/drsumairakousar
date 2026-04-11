# BIOSCOPE — Educational Platform

A Next.js educational website for **Advanced Biochemistry & Molecular Sciences** at **bioscope.com.pk**, with mentorship by **Dr. Sumaira Kousar**. Built with **Next.js 15** and **Tailwind CSS**.

## Design

- **Colors:** Deep blue (`#0f3460`), white, teal (`#0d9488`)
- **Fonts:** Poppins (body), Montserrat (headings)
- **Style:** Clean, scientific, with subtle DNA/pattern accents

## Site structure

| Page | Route | Content |
|------|--------|---------|
| Home | `/` | Hero, Featured Courses, Why Learn With Us, Free Downloads, About Dr. Sumaira (mentorship), Testimonials, Newsletter |
| About | `/about` | Academic profile, research, publications, workshops, mission & vision |
| Courses | `/courses` | Category grid (BS Biochemistry, Molecular Biology, Genetics, etc.) |
| Course detail | `/courses/[slug]` | Overview, outcomes, videos, PDFs, quizzes, certificate |
| Free Resources | `/resources` | MCQs, manuals, protocols, PPTs, short videos |
| Research & Blog | `/research` | Research, techniques, proteomics tools, genomics, biotech trends |
| Research category | `/research/[slug]` | Placeholder for category articles |
| Student Lab Corner | `/lab` | DNA extraction, PCR, chromatography, proteomics, lab safety |
| Contact | `/contact` | Contact form, email, WhatsApp, collaboration |

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Customization

- **Email:** Update `contact@example.com` in `app/contact/page.tsx`.
- **WhatsApp:** Replace `https://wa.me/1234567890` with your number in `app/contact/page.tsx`.
- **Social links:** Edit `components/Footer.tsx` with real YouTube, LinkedIn, Twitter URLs.
- **Content:** Edit course data in `app/courses/[slug]/page.tsx`, and copy in `app/about/page.tsx`, `app/resources/page.tsx`, etc.

## Tech stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 3
- TypeScript
