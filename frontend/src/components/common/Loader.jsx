import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-96">

      <motion.div
        className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />

    </div>
  );
}