import { motion } from "framer-motion";

/**
 * AuthBackground
 * Deep-space gradient + grid + glow blobs + floating particles.
 * Drop this as the first child of a `relative min-h-screen overflow-hidden`
 * wrapper — it fills the screen with `absolute inset-0`.
 */
export default function AuthBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[#071329]" />

      {/* radial glow top */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]" />

      {/* grid overlay */}
      <div
        className="
          absolute inset-0 opacity-10
          bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      {/* big color blobs */}
      <div className="absolute -left-40 -top-40 animate-pulse w-[500px] h-[500px] rounded-full bg-purple-700 blur-[170px] opacity-30" />
      <div className="absolute -right-52 bottom-0 animate-pulse w-[500px] h-[500px] rounded-full bg-cyan-500 blur-[180px] opacity-25" />

      {/* fixed accent dots */}
      <div className="absolute top-20 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
      <div className="absolute bottom-32 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" />
      <div className="absolute top-1/2 right-20 w-2 h-2 bg-white rounded-full animate-pulse" />

      {/* floating star particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-300/40"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ y: [-10, 10, -10], opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}
