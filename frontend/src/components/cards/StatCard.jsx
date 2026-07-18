import { motion } from "framer-motion";
export default function StatCard({
  title,
  value,
  icon = "📊",
  color = "from-cyan-500 to-blue-600",
}) {
  return (
    <motion.div

    initial={{ opacity: 0, y: 25 }}
animate={{ opacity: 1, y: 0 }}
whileHover={{
  scale: 1.05,
}}
transition={{
  duration: 0.35,
}}
      className={`
        relative overflow-hidden
        rounded-2xl
        bg-gradient-to-br ${color}
        p-6
        text-white
        shadow-xl backdrop-blur-md
        border border-white/10
        hover:shadow-2xl
        hover:-translate-y-3
        transition-all
        duration-300
        cursor-pointer
      `}
    >
      {/* Background Circle */}
      {/* <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10"></div> */}

      <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 blur-xl">
</div>

<div className="absolute -left-10 bottom-0 w-24 h-24 rounded-full bg-white/10 blur-lg">
</div>

      {/* Icon */}
      <div className="text-5xl mb-6">
        {icon}
      </div>

      {/* Title */}
      <p className="text-white/80 uppercase tracking-[3px] text-xs font-semibold">
        {title}
      </p>

      {/* Value */}
<h1 className="text-6xl font-black mt-2">
  {value}
</h1>

<p className="mt-3 text-white/70 text-sm">
  Updated Just Now
</p>
    </motion.div>
  );
}