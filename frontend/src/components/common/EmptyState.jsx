import { motion } from "framer-motion";
import { Sparkles, Plus } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function EmptyState({
  title = "Nothing Here Yet",
  description = "Create your first task and start building momentum.",
}) {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden rounded-3xl border p-12 text-center ${
        theme === "dark"
          ? "bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 border-slate-700"
          : "bg-white border-gray-200"
      }`}
    >
      {/* Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

      {/* Icon */}
      <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-xl shadow-cyan-500/30">
        <Sparkles size={42} className="text-white" />
      </div>

      {/* Title */}
      <h2
        className={`text-3xl font-bold ${
          theme === "dark" ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {/* Description */}
      <p
        className={`mt-4 max-w-lg mx-auto text-lg ${
          theme === "dark" ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {description}
      </p>

      {/* CTA */}
      <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-white font-semibold shadow-lg transition hover:scale-105 hover:shadow-cyan-500/40">
        <Plus size={18} />
        Create First Task
      </button>
    </motion.div>
  );
}