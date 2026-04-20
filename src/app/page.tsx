import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Coolbean Studios — Discover world-class training in Music, Dance, and Chess in Bangalore.",
};

const categories = [
  {
    name: "Music",
    icon: "♪",
    image: "/images/music.avif",
    description:
      "From classical Carnatic to contemporary keyboard, our music programmes guide beginners and advanced learners alike.",
    courses: ["Keyboard & Piano", "Flute", "Vocal Training"],
    color: "bg-gold-light",
    accent: "text-gold-dark",
    border: "border-gold/30",
  },
  {
    name: "Dance",
    icon: "◉",
    image: "/images/dance.avif",
    description:
      "Immerse yourself in the grace of Bharatanatyam or the energy of Zumba. Dance is expression, and we help you find yours.",
    courses: ["Bharatanatyam", "Zumba", "Contemporary"],
    color: "bg-sage-light",
    accent: "text-sage-dark",
    border: "border-sage/30",
  },
  {
    name: "Chess",
    icon: "♟",
    image: "/images/chess for home.jpg",
    description:
      "Sharpen your mind with strategic chess training. Classes for children and adults, beginners through tournament-level.",
    courses: ["Beginner Chess", "Tournament Prep", "Junior Grandmaster"],
    color: "bg-rose-light",
    accent: "text-rose",
    border: "border-rose/40",
  },
];

const achievements = [
  {
    name: "Ananya R.",
    achievement: "1st Place — State Bharatanatyam Championship",
    year: "2024",
    category: "Dance",
  },
  {
    name: "Karthik S.",
    achievement: "District Chess Champion, Under-16",
    year: "2024",
    category: "Chess",
  },
  {
    name: "Priya M.",
    achievement: "Carnatic Music Graded Exam — Distinction",
    year: "2023",
    category: "Music",
  },
  {
    name: "Arjun T.",
    achievement: "State-Level Flute Recital Winner",
    year: "2023",
    category: "Music",
  },
];

const stats = [
  { value: "500+", label: "Students Enrolled" },
  { value: "14+", label: "Years of Excellence" },
  { value: "12", label: "Expert Tutors" },
  { value: "3", label: "Art Disciplines" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-cream">
        {/* Subtle decorative background shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-light/40 -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-sage-light/60 translate-y-1/2 -translate-x-1/3 blur-3xl pointer-events-none" />

        <div className="page-container relative pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="max-w-3xl">
            <p className="section-label animate-fade-up">Bangalore&apos;s Premier Arts Academy</p>

            <h1 className="font-display text-[3.5rem] md:text-[5rem] leading-[1.05] tracking-tight text-charcoal mt-5 animate-fade-up-delay-1">
              Where Music,
              <br />
              Dance &amp; Chess
              <br />
              <span className="text-gold italic">Come Alive. </span>
            </h1> 

            <p className="font-body text-base md:text-lg text-charcoal-light leading-relaxed mt-8 max-w-xl animate-fade-up-delay-2">
              We nurture young talent with expert guidance, a warm community, and a deep love for
              the arts. Enroll your child today and watch them flourish.
            </p>

            <div className="flex flex-wrap gap-4 mt-10 animate-fade-up-delay-3">
              <Link href="/courses" className="btn-primary">
                Explore Courses
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/contact" className="btn-outline">
                Enquire Now
              </Link>
            </div>
          </div>

          {/* Logo — right side */}
          <div className="absolute top-16 right-0 hidden md:flex items-center justify-end pr-4">
            <img
              src="/images/logo.jpeg"
              alt="Coolbean Studios Logo"
              className="w-96 h-96 object-contain"
            />
          </div>

          {/* Floating stat bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-16 border-t border-cream-border">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl text-charcoal">{stat.value}</p>
                <p className="font-body text-sm text-charcoal-light mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Course Categories ── */}
      <section className="bg-cream-dark py-24">
        <div className="page-container">
          <div className="text-center mb-14">
            <p className="section-label">What We Offer</p>
            <h2 className="font-display text-display-md text-charcoal mt-3">
              Three Arts, One Home
            </h2>
            <p className="font-body text-base text-charcoal-light mt-4 max-w-lg mx-auto">
              Whether your passion is melody, movement, or strategy — we have a programme crafted
              just for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className={`card p-8 border ${cat.border} group overflow-hidden`}
              >
                <div className="w-full h-48 bg-white mb-6">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-display text-display-sm text-charcoal">{cat.name}</h3>
                <p className="font-body text-sm text-charcoal-light leading-relaxed mt-3">
                  {cat.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {cat.courses.map((course) => (
                    <li key={course} className="flex items-center gap-2">
                      <span className={`w-1 h-1 rounded-full ${cat.accent.replace("text", "bg")}`} />
                      <span className="font-body text-sm text-charcoal-mid">{course}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/courses"
                  className={`inline-flex items-center gap-1.5 mt-8 font-body text-sm font-medium ${cat.accent} group-hover:gap-3 transition-all duration-300`}
                >
                  View courses
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Student Achievements ── */}
      <section className="bg-cream py-24">
        <div className="page-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="section-label">Our Pride</p>
              <h2 className="font-display text-display-md text-charcoal mt-3">
                Student Achievements
              </h2>
            </div>
            <p className="font-body text-sm text-charcoal-light max-w-xs">
              Our students go on to win at state and national levels. Here are a few recent
              highlights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {achievements.map((item) => (
              <div
                key={item.name}
                className="card p-7 flex gap-5 items-start"
              >
                <div className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-xs text-charcoal-light tracking-widest uppercase">
                    {item.category} · {item.year}
                  </p>
                  <h4 className="font-display text-xl text-charcoal mt-1">{item.name}</h4>
                  <p className="font-body text-sm text-charcoal-mid mt-1">{item.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Teaser ── */}
      <section className="bg-cream-dark py-24">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">Our Story</p>
              <h2 className="font-display text-display-md text-charcoal mt-3">
                Over a Decade of Nurturing Talent
              </h2>
              <p className="font-body text-base text-charcoal-light leading-relaxed mt-5">
                Coolbean Studios was founded with a simple belief — every child has an
                artist within. Since 2010, we have been the creative home for hundreds of students
                across Bangalore, guiding them from their first notes to standing ovations.
              </p>
              <p className="font-body text-base text-charcoal-light leading-relaxed mt-4">
                Our experienced tutors bring both technical rigour and genuine warmth to every
                class. We believe learning an art form builds confidence, discipline, and joy that
                lasts a lifetime.
              </p>
              <Link href="/about" className="btn-primary mt-8 inline-flex">
                Read Our Story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            {/* Decorative card stack */}
            <div className="relative h-80 hidden md:block">
              <div className="absolute top-4 left-4 w-60 h-60 rounded-2xl bg-gold-light rotate-6 opacity-60" />
              <div className="absolute top-4 left-4 w-60 h-60 rounded-2xl bg-sage-light -rotate-3 opacity-60" />
              <div className="absolute top-4 left-4 w-60 h-60 rounded-2xl bg-cream border border-cream-border flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display text-5xl text-charcoal">14</p>
                  <p className="font-body text-sm text-charcoal-light mt-1">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-charcoal py-20">
        <div className="page-container text-center">
          <p className="section-label text-cream/40">Ready to Begin?</p>
          <h2 className="font-display text-display-md text-cream mt-4">
            Start Your Journey Today
          </h2>
          <p className="font-body text-base text-cream/60 mt-4 max-w-md mx-auto">
            Send us an enquiry and our team will get in touch to help you find the perfect
            course for your child.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold text-white font-body text-sm px-8 py-3.5 rounded-full hover:bg-gold-dark transition-colors duration-300"
            >
              Get In Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 border border-cream/20 text-cream font-body text-sm px-8 py-3.5 rounded-full hover:border-cream/60 transition-colors duration-300"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
