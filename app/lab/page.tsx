import type { Metadata } from "next";
import { SITE_DOMAIN, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Student Lab Corner",
  description: `DNA extraction, PCR guide, paper chromatography, proteomics techniques, and lab safety on ${SITE_NAME} (${SITE_DOMAIN}). Mentorship by Dr. Sumaira Kousar.`,
};

const labTopics = [
  {
    title: "DNA Extraction Demo",
    description: "Step-by-step guide to extract DNA from common samples, with safety notes and troubleshooting.",
  },
  {
    title: "PCR Guide",
    description: "Principles of Polymerase Chain Reaction, primer design, and protocol with tips.",
  },
  {
    title: "Paper Chromatography (FSC level)",
    description: "Basic chromatography for separation of pigments or amino acids — suitable for FSC practicals.",
  },
  {
    title: "Proteomics Techniques Overview",
    description: "Introduction to protein separation, gel electrophoresis, and mass spectrometry basics.",
  },
  {
    title: "Lab Safety Guide",
    description: "Personal protective equipment, chemical handling, waste disposal, and emergency procedures.",
  },
];

export default function LabPage() {
  return (
    <div className="bg-slate-50">
      <div className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold">Student Lab Corner</h1>
          <p className="mt-2 text-slate-300">
            Demos, guides, and safety for practical lab work.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {labTopics.map((topic) => (
            <section key={topic.title} className="card">
              <h2 className="font-display text-xl font-bold text-primary">
                {topic.title}
              </h2>
              <p className="mt-3 text-slate-600">{topic.description}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
