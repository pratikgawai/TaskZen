import { motion } from "framer-motion";
import { Star } from "lucide-react";

const notes = [
  {
    quote: "TaskZen changed the way I study and manage my time. My productivity has never been better!",
    name: "Aman Sharma",
    role: "Student",
    initials: "AS",
    color: "linear-gradient(135deg, #8b5cf6, #4f7fff)",
  },
  {
    quote: "The habit tracker is amazing. It keeps me consistent and motivated every single day.",
    name: "Neha Patel",
    role: "Developer",
    initials: "NP",
    color: "linear-gradient(135deg, #ec4899, #f5a623)",
  },
  {
    quote: "Best productivity app I've used. The dashboard is beautiful and genuinely intuitive.",
    name: "Rohit Verma",
    role: "Entrepreneur",
    initials: "RV",
    color: "linear-gradient(135deg, #4f7fff, #8b5cf6)",
  },
];

export default function Testimonials() {
  return (
    <section id="stories" className="relative bg-[var(--bg)] px-6 py-28 overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full opacity-15 blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--rose) 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <p className="text-[12px] tracking-[0.2em] text-[var(--violet)] mb-4 font-semibold">
            WHAT OUR USERS SAY
          </p>
          <h2 className="font-[var(--font-display)] font-bold text-4xl sm:text-5xl text-[var(--text)] leading-tight">
            Loved by thousands of <span className="text-gradient">productive people</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {notes.map((n, i) => (
            <motion.div
              key={n.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-7 hover:border-[var(--border-strong)] transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} className="text-[var(--amber)] fill-[var(--amber)]" />
                ))}
              </div>
              <p className="text-[14.5px] text-[var(--text-dim)] leading-relaxed mb-6">
                “{n.quote}”
              </p>
              <div className="flex items-center gap-3">
                <span
                  className="w-9 h-9 rounded-full grid place-items-center text-[12px] font-semibold text-white shrink-0"
                  style={{ background: n.color }}
                >
                  {n.initials}
                </span>
                <div>
                  <p className="text-[13.5px] font-medium text-[var(--text)] leading-tight">{n.name}</p>
                  <p className="text-[11.5px] text-[var(--text-faint)]">{n.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
