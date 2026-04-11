import type { Metadata } from "next";
import { SITE_DOMAIN, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Resources",
  description: `Free resources on ${SITE_NAME} (${SITE_DOMAIN}) — MCQs bank, practical manuals, lab protocols, PPT slides, and short biochemistry videos. Mentorship by Dr. Sumaira Kousar.`,
};

const resourceSections = [
  {
    title: "MCQs Bank",
    description: "Multiple-choice questions for genetics, biochemistry, molecular biology, and biotechnology for exam practice.",
    items: ["100 MCQs Genetics", "Biochemistry MCQs", "Molecular Biology MCQs"],
  },
  {
    title: "Practical Manuals (PDF)",
    description: "Step-by-step practical manuals for lab courses.",
    items: ["Biotechnology Practical Manual", "General Biochemistry Lab Manual"],
  },
  {
    title: "Lab Protocols",
    description: "Standard protocols for common techniques.",
    items: ["DNA Extraction", "PCR Protocol", "Gel Electrophoresis", "Protein Assay"],
  },
  {
    title: "PPT Slides",
    description: "Presentation slides for key topics.",
    items: ["Metabolic Pathways", "Central Dogma", "Genetic Engineering"],
  },
  {
    title: "Short Biochemistry Videos",
    description: "Quick explainers suitable for TikTok/YouTube — concepts in under 5 minutes.",
    items: ["DNA structure", "PCR in 2 minutes", "Enzyme kinetics basics"],
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-slate-50">
      <div className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold">Free Resources</h1>
          <p className="mt-2 text-slate-300">
            MCQs, manuals, protocols, slides, and short videos — all free to use.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {resourceSections.map((section) => (
            <section key={section.title} className="card">
              <h2 className="font-display text-2xl font-bold text-primary">
                {section.title}
              </h2>
              <p className="mt-2 text-slate-600">{section.description}</p>
              <ul className="mt-4 flex flex-wrap gap-3">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
