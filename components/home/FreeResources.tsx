import Link from "next/link";

const resources = [
  { title: "Download DNA Extraction PDF", href: "/resources", icon: "📄" },
  { title: "Get 100 MCQs Genetics", href: "/resources", icon: "📝" },
  { title: "Biotechnology Practical Manual", href: "/resources", icon: "📚" },
];

export default function FreeResources() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-center">Free Downloads</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          MCQs, practical manuals, lab protocols, and PPT slides — all free.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {resources.map((r) => (
            <Link
              key={r.title}
              href={r.href}
              className="card flex items-center gap-4 transition hover:border-accent hover:shadow-lg"
            >
              <span className="text-3xl">{r.icon}</span>
              <span className="font-semibold text-primary">{r.title}</span>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/resources" className="btn-primary">
            Browse All Resources
          </Link>
        </div>
      </div>
    </section>
  );
}
