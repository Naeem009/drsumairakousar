"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "Master the Molecules That Define Life",
    subtitle: "From DNA to proteins — learn with research-backed courses and hands-on lab focus.",
    cta: "Explore Courses",
    href: "/courses",
    image: "/hero/dr-sumaira-kousar-phd-biochemistry-1.jpg",
    overlay: "from-primary/90 via-primary/70 to-primary-dark/90",
  },
  {
    title: "Where Theory Meets the Lab",
    subtitle: "International training experience. Updated tools. Real skills for your career.",
    cta: "Free Resources",
    href: "/resources",
    image: "/hero/dr-sumaira-kousar-phd-biochemistry-2.jpg",
    overlay: "from-primary-dark/90 via-accent/40 to-primary/90",
  },
  {
    title: "Genetics, Proteomics & Beyond",
    subtitle: "Structured courses, MCQs, certificates, and free resources to ace exams and research.",
    cta: "View All Courses",
    href: "/courses",
    image: "/hero/dr-sumaira-kousar-phd-biochemistry-3.jpg",
    overlay: "from-primary/85 via-primary-dark/80 to-accent/70",
  },
  {
    title: "Learn From a Researcher Who Teaches",
    subtitle: "Dr. Sumaira Kousar brings cutting-edge molecular sciences to your screen.",
    cta: "About Dr. Sumaira",
    href: "/about",
    image: "/hero/dr-sumaira-kousar-phd-biochemistry-4.jpg",
    overlay: "from-accent-dark/80 via-primary/85 to-primary-dark/90",
  },
  {
    title: "Your Next Step in Molecular Sciences",
    subtitle: "Explore courses. Download free protocols. Join hundreds of students.",
    cta: "Get Started",
    href: "/courses",
    image: "/hero/dr-sumaira-kousar-phd-biochemistry-5.jpg",
    overlay: "from-primary-dark/90 via-primary/80 to-accent/60",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5500);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section
      className="relative overflow-hidden bg-primary"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide backgrounds */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority={i === 0}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-br ${slide.overlay} z-[1]`}
          />
        </div>
      ))}

      {/* DNA pattern overlay */}
      <div className="absolute inset-0 z-[2] opacity-10 pointer-events-none">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="dna-hero"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M30 0 Q45 15 30 30 Q15 45 30 60"
                stroke="currentColor"
                fill="none"
                strokeWidth="0.5"
              />
              <path
                d="M30 0 Q15 15 30 30 Q45 45 30 60"
                stroke="currentColor"
                fill="none"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dna-hero)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="relative min-h-[320px] text-center sm:min-h-[380px]">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ease-in-out ${
                i === current
                  ? "opacity-100 translate-y-0"
                  : "absolute left-0 right-0 top-1/2 z-0 -translate-y-1/2 px-4 opacity-0 translate-y-4 pointer-events-none sm:px-6 lg:px-8"
              } ${i === current ? "relative z-10" : ""}`}
              >
              <p className="font-display text-accent-light text-sm font-semibold uppercase tracking-wider">
                By Dr. Sumaira Kousar
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200 drop-shadow">
                {slide.subtitle}
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={slide.href}
                  className="btn-primary bg-accent shadow-lg hover:bg-accent-dark"
                >
                  {slide.cta}
                </Link>
                <Link
                  href="/resources"
                  className="btn-secondary border-white text-white hover:bg-white hover:text-primary"
                >
                  Free Resources
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-8 bg-accent-light" : "w-2 bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          type="button"
          onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur hover:bg-white/30 lg:left-6"
          aria-label="Previous slide"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => setCurrent((c) => (c + 1) % slides.length)}
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur hover:bg-white/30 lg:right-6"
          aria-label="Next slide"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
