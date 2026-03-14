"use client";

import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/resources", label: "Free Resources" },
  { href: "/research", label: "Blog" },
  { href: "/lab", label: "Lab Corner" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "#", label: "YouTube", icon: "▶" },
  { href: "#", label: "LinkedIn", icon: "in" },
  { href: "#", label: "Twitter", icon: "𝕏" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🧬</span>
              <span className="font-display text-lg font-bold">
                Dr. Sumaira Kousar
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-300">
              Advanced Biochemistry & Molecular Sciences Learning Platform.
              Research-based teaching with practical lab focus.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 transition hover:text-accent-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold">Connect</h3>
            <ul className="mt-3 flex gap-4">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm transition hover:bg-accent"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold">Newsletter</h3>
            <p className="mt-3 text-sm text-slate-300">
              Get MCQs, protocols, and updates. No spam.
            </p>
            <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-lg border-0 bg-white/10 px-3 py-2 text-sm placeholder:text-slate-400 focus:ring-2 focus:ring-accent"
              />
              <button type="submit" className="btn-primary rounded-lg px-4 py-2 text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Dr. Sumaira Kousar. Educational use.
        </div>
      </div>
    </footer>
  );
}
