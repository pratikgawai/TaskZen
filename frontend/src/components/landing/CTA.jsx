import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Target, CheckCircle2 } from "lucide-react";

export default function CTA() {
  return (
    <section className="px-6 py-4">
      <div
        className="relative mx-auto max-w-6xl rounded-3xl px-8 sm:px-12 py-14 overflow-hidden"
        style={{ background: "var(--gradient-brand)" }}
      >
        {/* decorative abstract shapes, standing in for illustration */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 w-28 h-28 rounded-2xl bg-white/15 backdrop-blur-sm items-center justify-center rotate-6"
        >
          <Target size={40} className="text-white/90" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="pointer-events-none hidden lg:flex absolute left-32 top-1/3 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm items-center justify-center"
        >
          <CheckCircle2 size={22} className="text-white" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:pl-32"
        >
          <div className="text-center lg:text-left">
            <h2 className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl text-white leading-tight mb-3">
              Ready to become more productive?
            </h2>
            <p className="text-white/80 text-[15px] max-w-md">
              Join thousands of people who are already achieving their goals with TaskZen.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-full px-5 py-3 text-[14px] bg-white/15 backdrop-blur-sm border border-white/25 text-white placeholder-white/60 outline-none focus-visible:border-white/60 min-w-[240px]"
              />
              <Link
                to="/register"
                className="inline-flex items-center justify-center rounded-full bg-[var(--bg)] text-white px-6 py-3 text-[14.5px] font-semibold hover:bg-white hover:text-[var(--bg)] transition-colors"
              >
                Get Started for Free
              </Link>
            </div>
            <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-1.5 text-[12px] text-white/70">
              {["Free forever", "No credit card", "Cancel anytime"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <Check size={12} />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
