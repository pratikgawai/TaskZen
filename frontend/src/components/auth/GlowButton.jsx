import { motion } from "framer-motion";

/**
 * GlowButton
 * Generic animated gradient CTA button used across the app
 * (not just auth) — hover glow, scale-in/out tap feedback, shine sweep.
 *
 * Props:
 *  - children: button content
 *  - type: "button" | "submit"
 *  - disabled: boolean
 *  - onClick: fn
 *  - variant: "solid" | "outline"
 */
export default function GlowButton({
  children,
  type = "button",
  disabled = false,
  onClick,
  variant = "solid",
  className = "",
}) {
  const base =
    "relative w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed";

  const solid =
    "bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white hover:shadow-[0_0_40px_rgba(0,255,255,.35)]";

  const outline =
    "bg-white/5 border border-white/10 text-white hover:border-cyan-400";

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      className={`${base} ${variant === "solid" ? solid : outline} ${className}`}
    >
      {variant === "solid" && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000" />
      )}
      <span className="relative">{children}</span>
    </motion.button>
  );
}
