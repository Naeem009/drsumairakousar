import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const courseData: Record<string, { title: string; overview: string; outcomes: string[] }> = {
  "bs-biochemistry": {
    title: "BS Biochemistry",
    overview: "Core biochemistry for undergraduate students: structure and function of biomolecules, metabolic pathways, enzyme kinetics, and regulation.",
    outcomes: [
      "Understand structure and function of proteins, nucleic acids, and lipids",
      "Apply metabolic pathway knowledge to biological problems",
      "Interpret enzyme kinetics and regulation",
      "Connect theory with practical lab techniques",
    ],
  },
  "molecular-biology": {
    title: "Molecular Biology",
    overview: "DNA replication, transcription, translation, gene regulation, and recombinant DNA technology with a focus on current techniques.",
    outcomes: [
      "Explain central dogma and gene expression",
      "Describe key molecular techniques (PCR, cloning, sequencing)",
      "Interpret experimental design and results",
    ],
  },
  genetics: {
    title: "Genetics",
    overview: "Mendelian genetics, population genetics, molecular genetics, and genetic disorders. Includes extensive MCQs for exam preparation.",
    outcomes: [
      "Solve Mendelian and non-Mendelian problems",
      "Understand population genetics basics",
      "Apply molecular genetics to disease and traits",
    ],
  },
  biotechnology: {
    title: "Biotechnology",
    overview: "Recombinant DNA technology, CRISPR, fermentation, and industrial applications. Practical focus on protocols and safety.",
    outcomes: [
      "Design and interpret recombinant DNA experiments",
      "Understand CRISPR and gene editing basics",
      "Relate biotech to industry and research",
    ],
  },
  "proteomics-bioinformatics": {
    title: "Proteomics & Bioinformatics",
    overview: "Protein separation, mass spectrometry, structure prediction, and bioinformatics tools for sequence and structure analysis.",
    outcomes: [
      "Use basic proteomics and bioinformatics tools",
      "Interpret protein structure and function data",
      "Navigate databases and prediction servers",
    ],
  },
  "practical-lab-techniques": {
    title: "Practical Lab Techniques",
    overview: "Hands-on protocols: DNA/RNA extraction, PCR, gel electrophoresis, chromatography, and lab safety. Suitable for FSC and beyond.",
    outcomes: [
      "Perform common molecular biology techniques safely",
      "Troubleshoot protocols and interpret results",
      "Follow lab safety and good practice",
    ],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = courseData[slug];
  if (!course) return { title: "Course" };
  return { title: course.title };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = courseData[slug];
  if (!course) notFound();

  return (
    <div className="bg-slate-50">
      <div className="bg-primary py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/courses" className="text-sm text-slate-300 hover:text-white">
            ← All Courses
          </Link>
          <h1 className="mt-2 font-display text-4xl font-bold">{course.title}</h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="card mb-8">
          <h2 className="font-display text-2xl font-bold text-primary">Course Overview</h2>
          <p className="mt-4 text-slate-600">{course.overview}</p>
        </section>

        <section className="card mb-8">
          <h2 className="font-display text-2xl font-bold text-primary">Learning Outcomes</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-slate-600">
            {course.outcomes.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </section>

        <section className="card mb-8">
          <h2 className="font-display text-2xl font-bold text-primary">Lecture Videos</h2>
          <p className="mt-4 text-slate-600">
            Video lessons will be available here. Check back or contact for access.
          </p>
          <div className="mt-4 flex h-48 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
            Video player placeholder
          </div>
        </section>

        <section className="card mb-8">
          <h2 className="font-display text-2xl font-bold text-primary">Downloadable PDFs</h2>
          <p className="mt-4 text-slate-600">
            Lecture notes and handouts in PDF format. Links will be added as content is published.
          </p>
        </section>

        <section className="card mb-8">
          <h2 className="font-display text-2xl font-bold text-primary">Quizzes / MCQs</h2>
          <p className="mt-4 text-slate-600">
            Self-assessment quizzes and multiple-choice questions to test your understanding.
          </p>
        </section>

        <section className="card">
          <h2 className="font-display text-2xl font-bold text-primary">Certificate Option</h2>
          <p className="mt-4 text-slate-600">
            Complete the course and assessments to be eligible for a certificate. Details available on request.
          </p>
        </section>
      </div>
    </div>
  );
}
