import { motion } from "framer-motion";
import { CheckCircle2, Users, Zap, Star } from "lucide-react";

const stats = [
  { icon: CheckCircle2, value: "50K+", label: "Tasks Completed" },
  { icon: Users, value: "10K+", label: "Happy Users" },
  { icon: Zap, value: "98%", label: "Productivity Boost" },
  { icon: Star, value: "4.9", label: "User Rating" },
];

export default function Stats() {
  return (
    <section id="stats" className="relative px-6 py-4">
      <div
        className="mx-auto max-w-6xl rounded-3xl px-8 py-12 sm:py-14 relative overflow-hidden"
        style={{ background: "var(--gradient-brand)" }}
      >
        <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-3"
            >
              <span className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm grid place-items-center shrink-0">
                <s.icon size={20} className="text-white" />
              </span>
              <div>
                <p className="font-[var(--font-display)] font-bold text-2xl sm:text-3xl text-white leading-none">
                  {s.value}
                </p>
                <p className="text-[12.5px] text-white/80 mt-1">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
