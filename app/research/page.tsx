import type { Metadata } from "next";
import Link from "next/link";
import { SITE_DOMAIN, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Research & Blog",
  description: `Latest research articles, molecular techniques, protein structure, genomics, and biotechnology trends on ${SITE_NAME} (${SITE_DOMAIN}). Mentorship by Dr. Sumaira Kousar.`,
};

const blogCategories = [
  {
    title: "Latest Research Articles",
    slug: "research",
    description: "Summaries and discussions of recent papers in biochemistry and molecular sciences.",
  },
  {
    title: "Molecular Techniques Explained",
    slug: "techniques",
    description: "How techniques work: PCR, cloning, sequencing, and more.",
  },
  {
    title: "Protein Structure Prediction Tools",
    slug: "proteomics-tools",
    description: "Using AlphaFold, SWISS-MODEL, and other tools for structure prediction.",
  },
  {
    title: "Genomics & Phylogenetics Articles",
    slug: "genomics",
    description: "Genome analysis, phylogenetics, and evolutionary biology.",
  },
  {
    title: "Biotechnology Trends",
    slug: "biotech-trends",
    description: "CRISPR, synthetic biology, and industry updates.",
  },
];

export default function ResearchPage() {
  return (
    <div className="bg-slate-50">
      <div className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold">Research & Blog</h1>
          <p className="mt-2 text-slate-300">
            Articles, techniques, tools, and trends in molecular sciences.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {blogCategories.map((cat) => (
            <article key={cat.slug} className="card">
              <h2 className="font-display text-xl font-bold text-primary">
                {cat.title}
              </h2>
              <p className="mt-3 text-slate-600">{cat.description}</p>
              <Link
                href={`/research/${cat.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-accent hover:underline"
              >
                Read articles →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
