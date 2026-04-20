"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getSession, clearSession, type Session } from "@/lib/auth";

const publicLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const studentLinks = [
  { href: "/student/home", label: "Home" },
  { href: "/student/courses", label: "Courses" },
  { href: "/student/about", label: "About Us" },
  { href: "/student/contact", label: "Contact" },
  { href: "/student/profile", label: "Profile" },
  { href: "/student/notifications", label: "Notifications" },
];

const adminLinks = [
  { href: "/admin/home", label: "Home" },
  { href: "/admin/courses", label: "Courses" },
  { href: "/admin/about", label: "About Us" },
  { href: "/admin/contact", label: "Contact" },
  { href: "/admin/students", label: "Students" },
  { href: "/admin/profile", label: "Profile" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(getSession());
  }, [pathname]);

  function handleLogout() {
    clearSession();
    setSession(null);
    router.push("/");
  }

  const links =
    session?.role === "admin"
      ? adminLinks
      : session?.role === "student"
      ? studentLinks
      : publicLinks;

  const logoHref =
    session?.role === "admin"
      ? "/admin/home"
      : session?.role === "student"
      ? "/student/home"
      : "/";

  return (
    <header className="bg-cream/90 backdrop-blur-md border-b border-cream-border sticky top-0 z-50">
      <nav className="page-container h-16 flex items-center justify-between">
        <Link
          href={logoHref}
          className="font-display text-2xl text-charcoal tracking-wide hover:opacity-80 transition-opacity"
        >
          Coolbean <span className="text-gold italic">Studios</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-sm tracking-wide transition-colors duration-200 ${
                pathname === link.href
                  ? "text-gold font-medium"
                  : "text-charcoal-mid hover:text-charcoal"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {session ? (
            <button
              onClick={handleLogout}
              className="font-body text-sm border border-cream-border text-charcoal px-5 py-2.5 rounded-full hover:border-gold hover:text-gold transition-colors duration-300 ml-1"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="font-body text-sm bg-charcoal text-cream px-5 py-2.5 rounded-full hover:bg-gold transition-colors duration-300 ml-1"
            >
              Login
            </Link>
          )}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-cream border-t border-cream-border px-6 py-5 flex flex-col gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-sm tracking-wide ${pathname === link.href ? "text-gold font-medium" : "text-charcoal-mid"}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {session ? (
            <button
              onClick={() => { handleLogout(); setMenuOpen(false); }}
              className="font-body text-sm border border-cream-border text-charcoal px-5 py-2.5 rounded-full text-center"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="font-body text-sm bg-charcoal text-cream px-5 py-2.5 rounded-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
