const points = [
  "Research-Based Teaching",
  "Practical Lab Focus",
  "International Training Experience",
  "Updated Molecular Tools",
];

export default function WhyLearnWithUs() {
  return (
    <section className="border-y border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-center">Why Learn With Us?</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-8 md:gap-12">
          {points.map((point) => (
            <div key={point} className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                ✔
              </span>
              <span className="font-medium text-primary">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
