import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-[var(--bg)]/80 backdrop-blur-xl border-b border-[var(--border)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg grid place-items-center text-[13px] font-bold text-white"
            style={{ background: "var(--gradient-brand)" }}>
            T
          </span>
          <span className="font-[var(--font-display)] font-bold text-[15px] tracking-tight text-[var(--text)]">
            TaskZen
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-[var(--font-body)] text-[14.5px] text-[var(--text-dim)]">
          <a href="#features" className="hover:text-[var(--text)] transition-colors">Features</a>
          <a href="#preview" className="hover:text-[var(--text)] transition-colors">How it works</a>
          <a href="#stats" className="hover:text-[var(--text)] transition-colors">Pricing</a>
          <a href="#stories" className="hover:text-[var(--text)] transition-colors">Testimonials</a>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden sm:inline-block text-[14.5px] text-[var(--text-dim)] hover:text-[var(--text)] transition-colors"
          >
            Log in
          </Link>
          <Link
            to="/register"
            className="rounded-full px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_4px_24px_-4px_rgba(139,92,246,0.6)] hover:shadow-[0_4px_32px_-4px_rgba(139,92,246,0.85)] hover:brightness-110 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--violet)]"
            style={{ background: "var(--gradient-brand)" }}
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
