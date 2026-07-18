import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * AuthFooter
 * "Or continue with" divider + bottom switch-page link + credit line.
 *
 * Props:
 *  - prompt: e.g. "Don't have an account?"
 *  - linkText: e.g. "Register"
 *  - linkTo: e.g. "/register"
 *  - showDivider: whether to show the "Or continue with" divider (default true)
 */
export default function AuthFooter({ prompt, linkText, linkTo, showDivider = true }) {
  return (
    <>
      {showDivider && (
        <motion.div
          animate={{ rotate: [0, -8, 8, -8, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="flex items-center my-8"
        >
          <div className="flex-1 h-px bg-white/10" />
          <span className="px-4 text-slate-400 text-sm">Or continue with</span>
          <div className="flex-1 h-px bg-white/10" />
        </motion.div>
      )}

      <div className="text-center text-slate-300 mt-8">
        {prompt}{" "}
        <motion.span whileHover={{ scale: 1.05 }} className="inline-block">
          <Link to={linkTo} className="text-cyan-400 font-semibold hover:text-cyan-300 transition">
            {linkText}
          </Link>
        </motion.span>
      </div>

      <p className="text-center text-xs text-slate-500 mt-8 tracking-wide">
        Made with ❤️ by Pratik Gawai
      </p>
    </>
  );
}
