import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Courses | Dr. Sumaira Kousar",
  description: "BS Biochemistry, Molecular Biology, Genetics, Biotechnology, Proteomics, and Lab Techniques.",
};

const categories = [
  { slug: "bs-biochemistry", title: "BS Biochemistry", icon: "🧪", short: "Core biochemistry for undergrads" },
  { slug: "molecular-biology", title: "Molecular Biology", icon: "🧬", short: "DNA, RNA, and gene expression" },
  { slug: "genetics", title: "Genetics", icon: "📐", short: "Mendelian to molecular genetics" },
  { slug: "biotechnology", title: "Biotechnology", icon: "🔬", short: "Recombinant DNA and applications" },
  { slug: "proteomics-bioinformatics", title: "Proteomics & Bioinformatics", icon: "💻", short: "Protein analysis and tools" },
  { slug: "practical-lab-techniques", title: "Practical Lab Techniques", icon: "🔭", short: "Hands-on lab protocols" },
];

export default function CoursesPage() {
  return (
    <div className="bg-slate-50">
      <div className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold">Courses</h1>
          <p className="mt-2 text-slate-300">
            Structured learning with videos, PDFs, quizzes, and certificates.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/courses/${cat.slug}`}
              className="card group flex flex-col transition hover:border-accent hover:shadow-lg"
            >
              <span className="text-4xl">{cat.icon}</span>
              <h2 className="mt-4 font-display text-xl font-semibold text-primary group-hover:text-accent">
                {cat.title}
              </h2>
              <p className="mt-2 flex-1 text-slate-600">{cat.short}</p>
              <span className="mt-4 text-sm font-semibold text-accent">View course →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
