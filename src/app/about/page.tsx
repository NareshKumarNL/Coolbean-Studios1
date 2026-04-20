import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the history, vision, mission, and founders of Coolbean Studios.",
};

const founders = [
  {
    name: "Meena Krishnamurthy",
    role: "Founder & Music Director",
    bio: "A Carnatic vocalist with over 25 years of experience, Meena started Coolbean Studios with a vision to make quality arts education accessible to every child in Bangalore.",
    initial: "M",
    color: "bg-gold-light text-gold-dark",
  },
  {
    name: "Rajan Pillai",
    role: "Co-Founder & Dance Head",
    bio: "Trained in classical Bharatanatyam under the Kalakshetra tradition, Rajan brings discipline, grace, and passion to the dance programme.",
    initial: "R",
    color: "bg-sage-light text-sage-dark",
  },
  {
    name: "Vijay Anand",
    role: "Co-Founder & Chess Coach",
    bio: "A FIDE-rated chess player and certified coach, Vijay designed the chess curriculum that has produced multiple district and state champions.",
    initial: "V",
    color: "bg-rose-light text-rose",
  },
];

const milestones = [
  { year: "2010", event: "Coolbean Studios founded with 12 students and 2 tutors." },
  { year: "2013", event: "Dance programme launched; first Bharatanatyam recital held." },
  { year: "2016", event: "Chess coaching introduced. First district champion produced." },
  { year: "2019", event: "Moved to our dedicated campus in central Bangalore." },
  { year: "2022", event: "Crossed 400 enrolled students. National-level achievements recognised." },
  { year: "2024", event: "Launched student digital portal and expanded to 12 tutors." },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="bg-cream pt-20 pb-16 border-b border-cream-border">
        <div className="page-container">
          <p className="section-label">Who We Are</p>
          <h1 className="font-display text-display-lg text-charcoal mt-4 max-w-2xl">
            A Home for Every Young Artist
          </h1>
          <p className="font-body text-base text-charcoal-light leading-relaxed mt-5 max-w-xl">
            For over fourteen years, Coolbean Studios has been nurturing talent, building
            confidence, and celebrating the arts in Bangalore.
          </p>
        </div>
      </section>

      {/* ── History ── */}
      <section className="bg-cream py-20">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label">Our History</p>
              <h2 className="font-display text-display-md text-charcoal mt-3">
                How It All Began
              </h2>
              <p className="font-body text-base text-charcoal-light leading-relaxed mt-5">
                Coolbean Studios was born in 2010 in a small studio with big dreams. Our
                founder Meena Krishnamurthy wanted to create a space where children could explore
                music not just as a subject, but as a lifelong companion.
              </p>
              <p className="font-body text-base text-charcoal-light leading-relaxed mt-4">
                Word spread quickly. Families appreciated the warmth, the rigour, and the results.
                Within three years, dance and chess programmes followed — and so did champions.
              </p>
              <p className="font-body text-base text-charcoal-light leading-relaxed mt-4">
                Today, Coolbean Studios is a full arts academy with dedicated tutors, a growing alumni
                community, and a reputation built entirely on student achievements.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-0">
              {milestones.map((m, idx) => (
                <div key={m.year} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-gold mt-1.5 shrink-0" />
                    {idx < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-cream-border mt-1 mb-1" />
                    )}
                  </div>
                  <div className="pb-6">
                    <p className="font-body text-xs tracking-widest text-gold font-medium uppercase">
                      {m.year}
                    </p>
                    <p className="font-body text-sm text-charcoal-mid leading-relaxed mt-1">
                      {m.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="bg-cream-dark py-20">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="card p-10 border border-gold/20">
              <div className="w-12 h-12 rounded-2xl bg-gold-light flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <p className="section-label text-gold-dark">Our Vision</p>
              <h3 className="font-display text-display-sm text-charcoal mt-3">
                Every child, an artist.
              </h3>
              <p className="font-body text-sm text-charcoal-light leading-relaxed mt-4">
                We envision a community where every child has access to quality arts education —
                where talent is recognised early, nurtured patiently, and celebrated loudly. We aim
                to be the most trusted arts academy in Tamil Nadu.
              </p>
            </div>

            {/* Mission */}
            <div className="card p-10 border border-sage/20">
              <div className="w-12 h-12 rounded-2xl bg-sage-light flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-sage-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="section-label text-sage-dark">Our Mission</p>
              <h3 className="font-display text-display-sm text-charcoal mt-3">
                Teach with heart. Guide with purpose.
              </h3>
              <p className="font-body text-sm text-charcoal-light leading-relaxed mt-4">
                Our mission is to deliver exceptional arts training through expert tutors,
                structured curricula, and a nurturing environment. We commit to tracking each
                student&apos;s progress, celebrating milestones, and building lifelong love for
                their chosen art.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Founders ── */}
      <section className="bg-cream py-20">
        <div className="page-container">
          <div className="text-center mb-14">
            <p className="section-label">The People Behind Coolbean Studios</p>
            <h2 className="font-display text-display-md text-charcoal mt-3">Meet Our Founders</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder) => (
              <div key={founder.name} className="card p-8 text-center">
                <div
                  className={`w-20 h-20 rounded-full ${founder.color} font-display text-3xl flex items-center justify-center mx-auto`}
                >
                  {founder.initial}
                </div>
                <h3 className="font-display text-display-sm text-charcoal mt-5">
                  {founder.name}
                </h3>
                <p className="font-body text-xs text-charcoal-light tracking-widest uppercase mt-1">
                  {founder.role}
                </p>
                <p className="font-body text-sm text-charcoal-light leading-relaxed mt-4">
                  {founder.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-cream-dark py-16 border-t border-cream-border">
        <div className="page-container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-display-sm text-charcoal">
              Want to be part of our story?
            </h3>
            <p className="font-body text-sm text-charcoal-light mt-2">
              Reach out and let&apos;s find the right course for your child.
            </p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">
            Contact Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
