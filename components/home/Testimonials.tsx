"use client";

import { useState } from "react";

const testimonials = [
  {
    quote: "Clear explanations and practical examples made molecular biology finally click for me.",
    author: "Student, BS Biochemistry",
  },
  {
    quote: "The lab protocols and MCQs bank are incredibly helpful for exam preparation.",
    author: "FSC Student",
  },
  {
    quote: "Research-based content and real techniques — exactly what I needed for my project.",
    author: "MPhil Researcher",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-center">Student Testimonials</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          What learners say about the platform.
        </p>
        <div className="mx-auto mt-12 max-w-2xl">
          <blockquote className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-lg text-slate-700">&ldquo;{t.quote}&rdquo;</p>
            <cite className="mt-4 block text-sm font-medium not-italic text-accent">
              — {t.author}
            </cite>
          </blockquote>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition ${
                  i === index ? "w-8 bg-accent" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
