import { motion } from "framer-motion";
import { CheckSquare, Flame, LineChart as LineChartIcon, Trophy, Calendar, Cloud } from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const features = [
  {
    icon: CheckSquare,
    title: "Smart Task Management",
    body: "Create, organize and prioritize tasks with ease. Never miss a deadline.",
    grad: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
  },
  {
    icon: Flame,
    title: "Habit Tracker",
    body: "Build good habits and break bad ones with streaks and reminders.",
    grad: "linear-gradient(135deg, #f59e0b, #d97706)",
  },
  {
    icon: LineChartIcon,
    title: "Advanced Analytics",
    body: "Beautiful insights and charts to track your productivity.",
    grad: "linear-gradient(135deg, #ec4899, #be185d)",
  },
  {
    icon: Trophy,
    title: "Achievements",
    body: "Unlock badges and celebrate your milestones on your journey.",
    grad: "linear-gradient(135deg, #f5a623, #b45309)",
  },
  {
    icon: Calendar,
    title: "Calendar View",
    body: "See your tasks and habits in a beautiful calendar.",
    grad: "linear-gradient(135deg, #ef4444, #b91c1c)",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    body: "Access your data anywhere, anytime. Always in sync.",
    grad: "linear-gradient(135deg, #4f7fff, #2563eb)",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-[var(--bg)] px-6 py-28">
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-15 blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--violet) 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <p className="text-[12px] tracking-[0.2em] text-[var(--violet)] mb-4 font-semibold">
            POWERFUL FEATURES
          </p>
          <h2 className="font-[var(--font-display)] font-bold text-4xl sm:text-5xl text-[var(--text)] leading-tight">
            Everything you need to stay <span className="text-gradient">productive</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, body, grad }, i) => (
            <motion.div
              key={title}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 hover:border-[var(--border-strong)] hover:-translate-y-1 transition-all duration-300 shadow-[0_15px_40px_-25px_rgba(139,92,246,0.4)]"
            >
              <div
                className="w-11 h-11 rounded-xl grid place-items-center mb-4"
                style={{ background: grad }}
              >
                <Icon size={20} className="text-white" />
              </div>
              <h3 className="font-[var(--font-display)] font-semibold text-[16px] text-[var(--text)] mb-2">
                {title}
              </h3>
              <p className="text-[13.5px] text-[var(--text-dim)] leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
