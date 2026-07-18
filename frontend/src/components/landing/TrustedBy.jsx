import { motion } from "framer-motion";

const brands = ["Northward", "Fablet", "Corvus", "Loom & Co", "Adit Labs", "Verto"];

export default function TrustedBy() {
  return (
    <section className="relative bg-[var(--bg)] px-6 py-16 border-t border-[var(--border)]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl text-center"
      >
        <p className="text-[12px] tracking-[0.15em] text-[var(--text-faint)] mb-8">
          TRUSTED BY CREATORS AND TEAMS WORLDWIDE
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {brands.map((b) => (
            <span
              key={b}
              className="font-[var(--font-display)] font-semibold text-[17px] text-[var(--text-faint)] opacity-60 hover:opacity-100 transition-opacity"
            >
              {b}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
