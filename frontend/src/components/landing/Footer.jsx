import { Link } from "react-router-dom";
import { Mail, Globe, MessageCircle, Link2 } from "lucide-react";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it Works", href: "#preview" },
      { label: "Pricing", href: "#stats" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Guides", href: "#" },
      { label: "Community", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[var(--bg)] border-t border-[var(--border)] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg grid place-items-center text-[13px] font-bold text-white"
                style={{ background: "var(--gradient-brand)" }}>
                T
              </span>
              <span className="font-[var(--font-display)] font-bold text-[15px] text-[var(--text)]">
                TaskZen
              </span>
            </div>
            <p className="text-[13.5px] text-[var(--text-faint)] leading-relaxed mb-5">
              The all-in-one productivity app to organize your tasks, build
              habits and achieve your goals.
            </p>
            <div className="flex items-center gap-3">
              {[Mail, Globe, MessageCircle, Link2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full border border-[var(--border)] grid place-items-center text-[var(--text-faint)] hover:text-[var(--text)] hover:border-[var(--border-strong)] transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-[11.5px] tracking-[0.15em] text-[var(--text-faint)] mb-4 font-medium">
                  {col.title.toUpperCase()}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-[13.5px] text-[var(--text-dim)] hover:text-[var(--text)] transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12.5px] text-[var(--text-faint)]">
            © {new Date().getFullYear()} TaskZen. All rights reserved.
          </p>
          <Link
            to="/login"
            className="text-[12.5px] text-[var(--text-dim)] hover:text-[var(--text)] transition-colors"
          >
            Log in →
          </Link>
        </div>
      </div>
    </footer>
  );
}
