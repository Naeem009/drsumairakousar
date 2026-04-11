import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { SITE_DOMAIN, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE_NAME} (${SITE_DOMAIN}) — get in touch via form, email, WhatsApp, or collaboration.`,
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50">
      <div className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold">Contact</h1>
          <p className="mt-2 text-slate-300">
            Questions, collaboration, or feedback — we&apos;d love to hear from you.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <section className="card">
            <h2 className="font-display text-2xl font-bold text-primary">
              Contact Form
            </h2>
            <ContactForm />
          </section>

          <div className="space-y-8">
            <section className="card">
              <h2 className="font-display text-2xl font-bold text-primary">Website</h2>
              <a href={SITE_URL} className="mt-2 block text-accent hover:underline">
                {SITE_URL.replace(/^https?:\/\//, "")}
              </a>
              <p className="mt-2 text-sm text-slate-600">
                Official domain for {SITE_NAME}.
              </p>
            </section>

            <section className="card">
              <h2 className="font-display text-2xl font-bold text-primary">Email</h2>
              <a
                href="mailto:sumairakousar@gmail.com"
                className="mt-2 block text-accent hover:underline"
              >
                sumairakousar@gmail.com
              </a>
              <p className="mt-2 text-sm text-slate-600">
                Direct email for Dr. Sumaira Kousar ({SITE_NAME} mentorship).
              </p>
            </section>

            <section className="card">
              <h2 className="font-display text-2xl font-bold text-primary">WhatsApp</h2>
              <a
                href="https://wa.me/+923331929858"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Chat on WhatsApp
              </a>
              <p className="mt-2 text-sm text-slate-600">
                My WhatsApp business number.
              </p>
            </section>

            <section className="card">
              <h2 className="font-display text-2xl font-bold text-primary">
                Collaboration Form
              </h2>
              <p className="mt-2 text-slate-600">
                For research collaboration, workshops, or institutional tie-ups, use the
                contact form above and mention &quot;Collaboration&quot; in the message, or
                email directly.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
