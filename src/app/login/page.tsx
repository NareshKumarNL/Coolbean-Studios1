import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Login" };

export default function LoginPage() {
  return (
    <section className="bg-cream min-h-[calc(100vh-4rem)] flex items-center py-20">
      <div className="page-container w-full">
        <div className="text-center mb-14">
          <p className="section-label">Welcome Back</p>
          <h1 className="font-display text-display-md text-charcoal mt-3">
            How would you like to log in?
          </h1>
          <p className="font-body text-sm text-charcoal-light mt-4 max-w-sm mx-auto">
            Choose your role to continue to the right portal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Student */}
          <Link
            href="/login/student"
            className="card p-10 border border-cream-border group flex flex-col items-center text-center hover:border-gold/40 transition-colors duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-gold-light flex items-center justify-center text-3xl mb-6 group-hover:bg-gold/20 transition-colors duration-300">
              ♪
            </div>
            <h2 className="font-display text-display-sm text-charcoal">Student Login</h2>
            <p className="font-body text-sm text-charcoal-light leading-relaxed mt-3">
              Access your learning dashboard, track progress, and manage your enrolled courses.
            </p>
            <span className="inline-flex items-center gap-1.5 mt-8 font-body text-sm font-medium text-gold group-hover:gap-3 transition-all duration-300">
              Continue as Student
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>

          {/* Admin */}
          <Link
            href="/login/admin"
            className="card p-10 border border-cream-border group flex flex-col items-center text-center hover:border-sage/40 transition-colors duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-sage-light flex items-center justify-center text-3xl mb-6 group-hover:bg-sage/20 transition-colors duration-300">
              ◉
            </div>
            <h2 className="font-display text-display-sm text-charcoal">Admin / Tutor Login</h2>
            <p className="font-body text-sm text-charcoal-light leading-relaxed mt-3">
              Manage students, review registrations, and oversee academy operations.
            </p>
            <span className="inline-flex items-center gap-1.5 mt-8 font-body text-sm font-medium text-sage-dark group-hover:gap-3 transition-all duration-300">
              Continue as Admin
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>

        <p className="text-center font-body text-sm text-charcoal-light mt-10">
          New to Sargam Arts?{" "}
          <Link href="/signup/student" className="text-gold hover:text-gold-dark underline underline-offset-4 transition-colors duration-200">
            Register as a Student
          </Link>
        </p>
      </div>
    </section>
  );
}
