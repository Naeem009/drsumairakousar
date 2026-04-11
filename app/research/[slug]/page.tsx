import type { Metadata } from "next";
import Link from "next/link";

const categoryTitles: Record<string, string> = {
  research: "Latest Research Articles",
  techniques: "Molecular Techniques Explained",
  "proteomics-tools": "Protein Structure Prediction Tools",
  genomics: "Genomics & Phylogenetics Articles",
  "biotech-trends": "Biotechnology Trends",
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = categoryTitles[slug] || "Research & Blog";
  return { title };
}

export default async function ResearchCategoryPage({ params }: Props) {
  const { slug } = await params;
  const title = categoryTitles[slug] || "Articles";

  return (
    <div className="bg-slate-50">
      <div className="bg-primary py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/research" className="text-sm text-slate-300 hover:text-white">
            ← Research & Blog
          </Link>
          <h1 className="mt-2 font-display text-4xl font-bold">{title}</h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-slate-600">
          Articles in this category will be listed here. Content can be added as blog posts or static pages.
        </p>
      </div>
    </div>
  );
}
