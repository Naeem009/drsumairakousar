import Link from "next/link";

export default function AboutDrSumaira() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="section-heading">About Dr. Sumaira</h2>
            <p className="mt-4 text-slate-600">
              Dr. Sumaira Kousar brings research-based teaching and international training
              experience to biochemistry and molecular sciences. Her focus is on practical
              lab techniques, updated molecular tools, and clear explanations suited for
              students and professionals.
            </p>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li className="flex items-center gap-2">
                <span className="text-accent">✔</span> Research-based teaching
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✔</span> Practical lab focus
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✔</span> International training experience
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✔</span> Updated molecular tools
              </li>
            </ul>
            <Link href="/about" className="mt-8 inline-block btn-primary">
              Full Profile
            </Link>
          </div>
          <div className="relative flex justify-center">
            <div className="flex h-64 w-64 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-8xl">
              🔬
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
