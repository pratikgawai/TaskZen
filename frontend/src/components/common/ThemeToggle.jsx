import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
        theme === "dark"
          ? "bg-slate-800 hover:bg-slate-700 text-yellow-400"
          : "bg-gray-100 hover:bg-gray-200 text-slate-700"
      }`}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}