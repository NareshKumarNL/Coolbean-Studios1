"use client";

import { useState } from "react";
import Link from "next/link";

type DifficultyLevel = "Beginner" | "Beginner–Intermediate" | "All Levels" | "Intermediate–Advanced";
type CategoryName = "Music" | "Dance" | "Chess";

interface Course {
  name: string;
  description: string;
  bestFor: string;
  difficulty: DifficultyLevel;
  tutors: string[];
  image: string;
}

interface Category {
  name: CategoryName;
  icon: string;
  tagline: string;
  color: string;
  accent: string;
  iconBg: string;
  sectionBg?: string;
  courses: Course[];
}

const categories: Category[] = [
  {
    name: "Music",
    icon: "♪",
    tagline: "Find your melody",
    color: "text-gold-dark",
    accent: "border-gold bg-gold-light/60",
    iconBg: "bg-gold-light text-gold-dark",
    courses: [
      {
        name: "Keyboard & Piano",
        description:
          "From reading notes to playing full compositions, our keyboard programme covers theory, technique, and musical expression in a structured progression.",
        bestFor: "Children aged 5+ and adults. No prior experience needed.",
        difficulty: "Beginner",
        tutors: ["Meena Krishnamurthy", "Arun Kumar"],
        image: "/images/courses/keyboard-piano.jpg",
      },
      {
        name: "Flute",
        description:
          "Learn the Carnatic flute (venu) with authentic technique and breath control. Students progress from basic fingering to full ragas over a structured curriculum.",
        bestFor: "Students aged 8+ with patience and breath awareness.",
        difficulty: "Beginner–Intermediate",
        tutors: ["Ramesh Natarajan"],
        image: "/images/courses/flute.jpg",
      },
      {
        name: "Vocal Training (Carnatic)",
        description:
          "Classical Carnatic vocal training focusing on swaras, gamakas, and krithis. Structured for both beginner and advanced-level students.",
        bestFor: "Students interested in Indian classical music, aged 6+.",
        difficulty: "All Levels",
        tutors: ["Meena Krishnamurthy"],
        image: "/images/courses/vocal carnatic .jpg",
      },
    ],
  },
  {
    name: "Dance",
    icon: "◉",
    tagline: "Express, move, inspire",
    color: "text-sage-dark",
    accent: "border-sage bg-sage-light/60",
    iconBg: "bg-sage-light text-sage-dark",
    courses: [
      {
        name: "Bharatanatyam",
        description:
          "One of India&apos;s oldest classical dance forms, Bharatanatyam combines rhythm, expression, and grace. Our programme follows the traditional Margam format.",
        bestFor: "Children aged 5+ and adults. Open to all levels.",
        difficulty: "All Levels",
        tutors: ["Rajan Pillai", "Kavitha Suresh"],
        image: "/images/courses/bharatanatyam.jpg",
      },
      {
        name: "Zumba",
        description:
          "High-energy Latin-inspired fitness dance with simple choreography and infectious music. Great for fitness, confidence, and joy.",
        bestFor: "Teens and adults looking for a fun, active class.",
        difficulty: "Beginner",
        tutors: ["Nisha Reddy"],
        image: "/images/courses/zumba.jpg",
      },
      {
        name: "Contemporary Dance",
        description:
          "A fusion of movement styles exploring expression, improvisation, and modern choreography. Students develop their own artistic voice.",
        bestFor: "Students with some prior dance background, aged 12+.",
        difficulty: "Intermediate–Advanced",
        tutors: ["Rajan Pillai"],
        image: "/images/courses/contemporary dance.png",
      },
    ],
  },
  {
    name: "Chess",
    icon: "♟",
    tagline: "Think deeper, play sharper",
    color: "text-charcoal-mid",
    accent: "border-white/40 bg-white/75",
    iconBg: "bg-rose-light text-rose",
    sectionBg: "/images/courses/chess-beginning.jpg",
    courses: [
      {
        name: "Beginner Chess",
        description:
          "Learn the rules, basic tactics, and foundational openings. Perfect for first-time players who want to start their chess journey the right way.",
        bestFor: "Children aged 5+ and adults with no prior chess knowledge.",
        difficulty: "Beginner",
        tutors: ["Vijay Anand"],
        image: "",
      },
      {
        name: "Tournament Preparation",
        description:
          "Advanced tactical training, opening theory, endgame study, and competitive game analysis to prepare students for rated tournaments.",
        bestFor: "Students who know the basics and want to compete.",
        difficulty: "Intermediate–Advanced",
        tutors: ["Vijay Anand", "Suresh Babu"],
        image: "",
      },
      {
        name: "Junior Grandmaster Track",
        description:
          "An intensive, personalised track for high-potential students aiming for FIDE ratings and national-level competition.",
        bestFor: "By audition only. Serious competitive players aged 8–18.",
        difficulty: "Intermediate–Advanced",
        tutors: ["Vijay Anand"],
        image: "",
      },
    ],
  },
];

const difficultyColors: Record<DifficultyLevel, string> = {
  "Beginner": "bg-sage-light text-sage-dark",
  "Beginner–Intermediate": "bg-gold-light text-gold-dark",
  "All Levels": "bg-cream-dark text-charcoal-mid",
  "Intermediate–Advanced": "bg-rose-light text-rose",
};

export default function CoursesPage() {
  const [active, setActive] = useState<CategoryName>("Music");
  const activeData = categories.find((c) => c.name === active)!;

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="bg-cream pt-20 pb-16 border-b border-cream-border">
        <div className="page-container">
          <p className="section-label">Programmes We Offer</p>
          <h1 className="font-display text-display-lg text-charcoal mt-4 max-w-2xl">
            Find Your Course
          </h1>
          <p className="font-body text-base text-charcoal-light leading-relaxed mt-5 max-w-xl">
            Three disciplines. Twelve courses. One academy. Browse by category and find the
            programme that lights something up in you.
          </p>
        </div>
      </section>

      {/* ── Category Tabs ── */}
      <section className="bg-cream sticky top-16 z-40 border-b border-cream-border">
        <div className="page-container">
          <div className="flex gap-0 -mb-px">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActive(cat.name)}
                className={`flex items-center gap-2.5 px-6 py-4 font-body text-sm font-medium border-b-2 transition-all duration-200 ${
                  active === cat.name
                    ? `border-gold ${cat.color}`
                    : "border-transparent text-charcoal-light hover:text-charcoal"
                }`}
              >
                <span className="text-base">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Course Listing ── */}
      <section className="bg-cream-dark py-16">
        <div className="page-container">
          {/* Category header */}
          <div className="mb-10">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl ${activeData.iconBg} flex items-center justify-center text-xl`}>
                {activeData.icon}
              </div>
              <div>
                <h2 className="font-display text-display-md text-charcoal leading-none">
                  {activeData.name}
                </h2>
                <p className="font-body text-sm text-charcoal-light italic mt-0.5">
                  {activeData.tagline}
                </p>
              </div>
            </div>
          </div>

          {/* Course cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-2xl"
            style={activeData.sectionBg ? {
              backgroundImage: `url(${activeData.sectionBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "24px",
            } : {}}
          >
            {activeData.courses.map((course) => (
              <div key={course.name} className={`card border ${activeData.accent} flex flex-col overflow-hidden`}>
                {course.image && (
                  <div className="w-full h-48 bg-white">
                    <img
                      src={course.image}
                      alt={course.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div className="p-7 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="font-display text-display-sm text-charcoal leading-tight">
                    {course.name}
                  </h3>
                  <span
                    className={`inline-block mt-2 text-xs font-body font-medium px-2.5 py-1 rounded-full ${difficultyColors[course.difficulty]}`}
                  >
                    {course.difficulty}
                  </span>
                </div>

                <p className="font-body text-sm text-charcoal-light leading-relaxed flex-1"
                  dangerouslySetInnerHTML={{ __html: course.description }}
                />

                <div className="mt-6 pt-5 border-t border-cream-border space-y-3">
                  <div className="flex gap-2.5 items-start">
                    <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p className="font-body text-xs text-charcoal-light">
                      <span className="font-medium text-charcoal-mid">Best for: </span>
                      {course.bestFor}
                    </p>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <p className="font-body text-xs text-charcoal-light">
                      <span className="font-medium text-charcoal-mid">Tutor{course.tutors.length > 1 ? "s" : ""}: </span>
                      {course.tutors.join(", ")}
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-6 text-center font-body text-sm font-medium text-charcoal border border-cream-border rounded-full py-2.5 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  Enquire About This Course
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enquiry CTA ── */}
      <section className="bg-cream py-16 border-t border-cream-border">
        <div className="page-container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-display-sm text-charcoal">
              Not sure which course fits?
            </h3>
            <p className="font-body text-sm text-charcoal-light mt-2">
              Send us a message and our team will guide you to the perfect programme.
            </p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">
            Talk to Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
