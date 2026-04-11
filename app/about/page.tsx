import type { Metadata } from "next";
import { SITE_DOMAIN, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${SITE_NAME} (${SITE_DOMAIN}) — academic profile, research experience, publications, workshops, and mission. Mentorship by Dr. Sumaira Kousar.`,
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50">
      <div className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold">About {SITE_NAME}</h1>
          <p className="mt-2 text-slate-300">
            Academic profile, research, and mission — mentorship by Dr. Sumaira Kousar.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="card mb-8">
          <h2 className="font-display text-2xl font-bold text-primary">
            My Academic Profile
          </h2>
          <p className="mt-4 text-slate-600">
            {SITE_NAME} ({SITE_DOMAIN}) is led and mentored by Dr. Sumaira Kousar, who holds a strong academic background in Biochemistry and
            Molecular Sciences, with degrees and training from reputed institutions.
            Her teaching and research focus on making complex concepts accessible
            while maintaining scientific rigor.
          </p>
        </section>

        <section className="card mb-8">
          <h2 className="font-display text-2xl font-bold text-primary">
            Research Experience
          </h2>
          <p className="mt-4 text-slate-600">
            Extensive experience in molecular techniques, protein analysis, and
            genomics. Work spans both academic and applied research, with emphasis
            on practical applications and student involvement in research projects.
          </p>
        </section>

        <section className="card mb-8">
          <h2 className="font-display text-2xl font-bold text-primary">
            Publications
          </h2>
          <p className="mt-4 text-slate-600">
            Peer-reviewed publications in biochemistry, molecular biology, and
            biotechnology. Details can be shared via the contact or collaboration form.
          </p>
        </section>

        <section className="card mb-8">
          <h2 className="font-display text-2xl font-bold text-primary">
            Workshops & Training
          </h2>
          <p className="mt-4 text-slate-600">
            Conducted and participated in national and international workshops on
            molecular techniques, bioinformatics, and lab safety. Training experience
            helps deliver hands-on, up-to-date content.
          </p>
        </section>

        <section className="card">
          <h2 className="font-display text-2xl font-bold text-primary">
            Mission & Vision
          </h2>
          <p className="mt-4 text-slate-600">
            To provide high-quality, research-based education in biochemistry and
            molecular sciences that bridges theory and practice. Vision: accessible
            learning for students and professionals, with a focus on lab skills,
            critical thinking, and modern tools like proteomics and bioinformatics.
          </p>
        </section>
      </div>
    </div>
  );
}
