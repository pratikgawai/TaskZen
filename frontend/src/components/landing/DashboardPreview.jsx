import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";
import { BarChart, Bar, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const barData = [
  { d: "Mon", v: 5 }, { d: "Tue", v: 7 }, { d: "Wed", v: 6 }, { d: "Thu", v: 9 },
  { d: "Fri", v: 8 }, { d: "Sat", v: 10 }, { d: "Sun", v: 7 },
];

const pieData = [
  { name: "High", value: 12, color: "#ec4899" },
  { name: "Medium", value: 18, color: "#f5a623" },
  { name: "Low", value: 8, color: "#4f7fff" },
];

export default function DashboardPreview() {
  return (
    <section id="preview" className="relative bg-[var(--bg)] px-6 py-28 overflow-hidden">
      <div
        className="pointer-events-none absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-15 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--azure) 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-5 gap-14 items-center">
        {/* left copy */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <p className="text-[12px] tracking-[0.2em] text-[var(--violet)] mb-4 font-semibold">
            A DASHBOARD THAT
          </p>
          <h2 className="font-[var(--font-display)] font-bold text-4xl text-[var(--text)] leading-tight mb-5">
            Gives you <span className="text-gradient">clarity</span> at a glance
          </h2>
          <p className="text-[15.5px] text-[var(--text-dim)] leading-relaxed mb-8 max-w-sm">
            Get a complete overview of your day, week and month. Track
            progress, stay focused and achieve your goals.
          </p>
          <a
            href="#top"
            className="inline-flex items-center rounded-full px-6 py-3 text-[14.5px] font-semibold text-white shadow-[0_10px_30px_-8px_rgba(139,92,246,0.7)] hover:brightness-110 transition-all"
            style={{ background: "var(--gradient-brand)" }}
          >
            Explore Dashboard
          </a>
        </motion.div>

        {/* right dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 rounded-2xl bg-[var(--surface)] border border-[var(--border-strong)] shadow-[0_40px_90px_-30px_rgba(139,92,246,0.45)] overflow-hidden"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)]">
            <div>
              <p className="text-[13px] text-[var(--text)] font-medium">Good evening, Pratik 👋</p>
              <p className="text-[11px] text-[var(--text-faint)]">You're doing great today</p>
            </div>
            <span className="font-[var(--font-mono)] text-[11px] text-[var(--text-faint)] tracking-wide">
              This Week
            </span>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-4 gap-2.5 mb-5">
              {[
                { l: "Tasks Completed", v: "32" },
                { l: "Focus Time", v: "8h 45m" },
                { l: "Habits", v: "14" },
                { l: "Streak", v: "21 🔥" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl bg-[var(--surface-2)] border border-[var(--border)] p-3">
                  <p className="text-[10px] text-[var(--text-faint)] mb-1">{s.l}</p>
                  <p className="font-[var(--font-display)] font-bold text-[15px] text-[var(--text)]">{s.v}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] p-4">
                <p className="text-[11px] text-[var(--text-dim)] mb-3">Productivity Trend</p>
                <div className="h-28">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData}>
                      <Bar dataKey="v" fill="var(--violet)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="col-span-2 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] p-4 flex flex-col items-center justify-center">
                <p className="text-[11px] text-[var(--text-dim)] mb-2 self-start">Tasks by Priority</p>
                <div className="w-full h-24">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={pieData} dataKey="value" innerRadius={22} outerRadius={38}>
                        {pieData.map((entry) => (
                          <Cell key={entry.name} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex gap-3 mt-1 flex-wrap justify-center">
                  {pieData.map((p) => (
                    <span key={p.name} className="flex items-center gap-1 text-[10px] text-[var(--text-faint)]">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.color }} />
                      {p.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
