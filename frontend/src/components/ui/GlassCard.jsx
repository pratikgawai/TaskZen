import { motion } from "framer-motion";

/**
 * GlassCard
 * The frosted-glass container used for the auth forms (and reusable
 * anywhere else in the app that needs the same glass/neon look).
 */
export default function GlassCard({ children, className = "", as = "div" }) {
  const Comp = motion[as] || motion.div;

  return (
    <Comp
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7 }}
      className={`
        relative z-10 w-full max-w-md rounded-[32px]
        border border-cyan-400/20 bg-white/5 backdrop-blur-2xl
        shadow-[0_20px_80px_rgba(6,182,212,0.25)]
        hover:border-cyan-400/40 transition-all duration-500
        p-8
        ${className}
      `}
    >
      {/* soft top sheen */}
      <div className="absolute top-0 left-0 w-full h-32 rounded-t-[32px] bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      {children}
    </Comp>
  );
}
