import { motion } from "framer-motion";
import { Zap, Target, TrendingUp, Star } from "lucide-react";
import AuthBackground from "./AuthBackground";
import AnimatedLogo from "../ui/AnimatedLogo";

const FEATURES = [
  {
    icon: Zap,
    title: "Stay Consistent",
    desc: "Daily streaks & reminders",
    tint: "from-purple-500/20 to-purple-700/20 text-purple-300",
  },
  {
    icon: Target,
    title: "Plan Smart",
    desc: "Organize tasks with ease",
    tint: "from-blue-500/20 to-indigo-700/20 text-blue-300",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    desc: "Visualize your growth",
    tint: "from-pink-500/20 to-purple-700/20 text-pink-300",
  },
];

/**
 * AuthLayout
 * Two-column page shell used by both Login and Register:
 *  - left: brand pitch, feature list, social-proof card (hidden below lg)
 *  - right: whatever form/card is passed as `children`
 */
export default function AuthLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#071329] flex items-center justify-center gap-16 px-6 lg:px-16 py-12">
      <AuthBackground />

      {/* ---------- Left marketing panel ---------- */}
      <div className="relative z-10 hidden lg:flex flex-col max-w-md">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🚀</span>
            <span className="text-2xl font-bold text-white">TaskZen</span>
          </div>

          <h2 className="text-5xl font-extrabold leading-tight mb-5">
            <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
              Build Better Habits.
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Achieve More.
            </span>
          </h2>

          <p className="text-slate-400 text-lg">
            Join thousands of focus-driven students who are leveling up every
            single day.
          </p>
        </div>

        <div className="flex flex-col gap-5 mb-10">
          {FEATURES.map(({ icon: Icon, title, desc, tint }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br border border-white/10 ${tint}`}
              >
                <Icon size={22} />
              </div>
              <div>
                <p className="text-white font-semibold">{title}</p>
                <p className="text-slate-400 text-sm">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="w-9 h-9 rounded-full border-2 border-[#071329] bg-gradient-to-br from-slate-500 to-slate-700"
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 rounded-full px-3 py-1">
              2.5K+
            </span>
          </div>
          <p className="text-white font-semibold mb-1">
            Trusted by 2,500+ students
          </p>
          <div className="flex items-center gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
            <span className="text-slate-400 text-sm ml-2">4.9 / 5</span>
          </div>
        </div>
      </div>

      {/* ---------- Right form panel ---------- */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        {/* logo shown above the card on small screens where the left panel is hidden */}
        <div className="lg:hidden mb-6">
          <AnimatedLogo size="sm" />
        </div>
        {children}
      </div>
    </div>
  );
}
