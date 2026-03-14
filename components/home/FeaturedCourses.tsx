import Link from "next/link";

const courses = [
  {
    slug: "bs-biochemistry",
    title: "BS Biochemistry",
    description: "Core biochemistry concepts, metabolic pathways, and enzyme kinetics for undergraduate level.",
    icon: "🧪",
  },
  {
    slug: "molecular-biology",
    title: "Molecular Biology",
    description: "DNA replication, transcription, translation, and gene regulation.",
    icon: "🧬",
  },
  {
    slug: "genetics",
    title: "Genetics",
    description: "Mendelian genetics, population genetics, and molecular genetics with MCQs.",
    icon: "📐",
  },
  {
    slug: "biotechnology",
    title: "Biotechnology",
    description: "Recombinant DNA, CRISPR, and industrial applications.",
    icon: "🔬",
  },
];

export default function FeaturedCourses() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-center">Featured Courses</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Structured courses with lecture videos, PDFs, quizzes, and certificate options.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div key={course.slug} className="card group">
              <div className="text-4xl">{course.icon}</div>
              <h3 className="mt-4 font-display text-lg font-semibold text-primary group-hover:text-accent">
                {course.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{course.description}</p>
              <Link
                href={`/courses/${course.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-accent hover:underline"
              >
                Enroll →
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/courses" className="btn-secondary">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
