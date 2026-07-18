import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

/**
 * AnimatedLogo
 * Rocket icon in a glowing gradient circle + "TaskZen" wordmark.
 *
 * Props:
 *  - size: "sm" | "lg"  (sm = compact header logo, lg = hero logo on auth cards)
 *  - showTagline: boolean - show "Organize • Track • Achieve" pill under the name
 */
export default function AnimatedLogo({ size = "lg", showTagline = false }) {
  const isLarge = size === "lg";

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center mb-3">
        <div
          className={`
            relative rounded-full flex items-center justify-center
            bg-gradient-to-br from-cyan-400 to-blue-600
            shadow-[0_0_70px_rgba(34,211,238,.8)]
            ${isLarge ? "w-20 h-20" : "w-12 h-12"}
          `}
        >
          <div className="absolute inset-0 rounded-full border border-cyan-400/20 pointer-events-none" />
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [12, 18, 12] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Rocket size={isLarge ? 38 : 22} className="text-white" />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className={`text-center font-extrabold text-white ${
          isLarge ? "text-5xl" : "text-2xl"
        }`}
        animate={{
          textShadow: [
            "0 0 8px rgba(34,211,238,.2)",
            "0 0 25px rgba(34,211,238,.8)",
            "0 0 8px rgba(34,211,238,.2)",
          ],
        }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        Task<span className="text-cyan-400">Zen</span>
      </motion.h1>

      {showTagline && (
        <div className="flex justify-center mt-4">
          <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm">
            ✨ Organize • Track • Achieve
          </span>
        </div>
      )}
    </div>
  );
}
