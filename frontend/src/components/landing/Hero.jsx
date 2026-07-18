import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Check, Sparkles, Flame, CheckSquare } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const sparkData = [
  { v: 4 }, { v: 7 }, { v: 5 }, { v: 9 }, { v: 8 }, { v: 12 }, { v: 10 }, { v: 15 },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[var(--bg)] pt-36 pb-28 px-6">
      {/* floating glow orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full opacity-40 blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--violet) 0%, transparent 70%)" }} />
      <div className="pointer-events-none absolute top-40 right-0 w-[480px] h-[480px] rounded-full opacity-35 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--azure) 0%, transparent 70%)" }} />
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full opacity-20 blur-[100px]"
        style={{ background: "radial-gradient(circle, var(--rose) 0%, transparent 70%)" }} />

      {/* decorative floating spheres */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none hidden lg:block absolute left-10 top-1/2 w-4 h-4 rounded-full"
        style={{ background: "var(--violet)", boxShadow: "0 0 24px var(--violet)" }}
      />
      <motion.div
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="pointer-events-none hidden lg:block absolute right-16 top-24 w-3 h-3 rounded-full"
        style={{ background: "var(--amber)", boxShadow: "0 0 18px var(--amber)" }}
      />

      <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-1.5 text-[12px] text-[var(--text-dim)] mb-7"
          >
            <Sparkles size={13} className="text-[var(--violet)]" />
            <span className="text-[var(--text)] font-medium">New</span> v2.0 just launched
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[var(--font-display)] font-bold text-[2.75rem] leading-[1.08] sm:text-6xl sm:leading-[1.05] text-[var(--text)]"
          >
            Organize. Focus.
            <br />
            <span className="text-gradient">Achieve More.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-[16.5px] leading-relaxed text-[var(--text-dim)]"
          >
            TaskZen is the all-in-one productivity app that helps you manage
            tasks, build habits, and track your progress beautifully.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Link
              to="/register"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_35px_-8px_rgba(139,92,246,0.7)] hover:shadow-[0_10px_45px_-6px_rgba(139,92,246,0.9)] hover:brightness-110 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--violet)]"
              style={{ background: "var(--gradient-brand)" }}
            >
              Get Started — It's Free
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <button className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-6 py-3.5 text-[15px] font-medium text-[var(--text)] hover:bg-[var(--surface-2)] transition-colors">
              <Play size={14} />
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13.5px] text-[var(--text-dim)]"
          >
            {["Free to start", "No credit card", "Cancel anytime"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Check size={14} className="text-[var(--azure)]" />
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* right: floating dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 1 }}
          animate={{ opacity: 1, y: 0, rotate: -1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div
            className="relative rounded-3xl border border-[var(--border-strong)] bg-[var(--surface)] p-5 shadow-[0_40px_100px_-30px_rgba(139,92,246,0.5)]"
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-[13px] text-[var(--text-dim)]">Good morning, Pratik 👋</p>
                <p className="text-[11px] text-[var(--text-faint)]">Let's make today productive</p>
              </div>
              <div className="flex -space-x-2">
                {["#8b5cf6", "#4f7fff", "#ec4899"].map((c) => (
                  <span key={c} className="w-7 h-7 rounded-full border-2 border-[var(--surface)]" style={{ background: c }} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2.5 mb-4">
              {[
                { label: "Tasks Completed", value: "24" },
                { label: "Focus Time", value: "4h 36m" },
                { label: "Habits", value: "12" },
                { label: "Streak", value: "15 🔥" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-[var(--surface-2)] border border-[var(--border)] p-3">
                  <p className="text-[10px] text-[var(--text-faint)] mb-1">{s.label}</p>
                  <p className="font-[var(--font-display)] font-bold text-[15px] text-[var(--text)]">{s.value}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-5 gap-3">
              <div className="col-span-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] p-4">
                <p className="text-[11px] text-[var(--text-dim)] mb-2">Progress Overview</p>
                <div className="h-16">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sparkData}>
                      <Line type="monotone" dataKey="v" stroke="var(--azure)" strokeWidth={2.5} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="col-span-2 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] p-4">
                <p className="text-[11px] text-[var(--text-dim)] mb-3">Today's Tasks</p>
                <ul className="space-y-2">
                  {[
                    { l: "Finish React project", done: true },
                    { l: "Study data structures", done: false },
                    { l: "Workout 30 min", done: false },
                  ].map((t) => (
                    <li key={t.l} className="flex items-center gap-2 text-[11px]">
                      <span className={`w-3.5 h-3.5 rounded flex items-center justify-center ${t.done ? "bg-[var(--violet)]" : "border border-[var(--border-strong)]"}`}>
                        {t.done && <CheckSquare size={9} className="text-white" />}
                      </span>
                      <span className={t.done ? "text-[var(--text-faint)] line-through" : "text-[var(--text-dim)]"}>{t.l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* orbiting badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] hidden sm:flex items-center gap-2"
          >
            <Flame size={16} className="text-[var(--amber)]" />
            <div>
              <p className="text-[13px] font-bold text-[var(--text)] leading-none">15 day streak</p>
              <p className="text-[10px] text-[var(--text-faint)]">Keep it up!</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
