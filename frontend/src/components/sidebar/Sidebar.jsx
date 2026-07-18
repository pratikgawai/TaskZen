import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}) {
  const location = useLocation();

  const { theme } = useTheme();

  const menu = [
    {
      name: "Dashboard",
      icon: "🏠",
      path: "/dashboard",
    },
    {
      name: "Tasks",
      icon: "📋",
      path: "/tasks",
    },
    {
      name: "Habits",
      icon: "🔥",
      path: "/habits",
    },
    {
      name: "Statistics",
      icon: "📊",
      path: "/statistics",
    },
    {
      name: "Achievements",
      icon: "🏆",
      path: "/achievements",
    },
    {
      name: "Profile",
      icon: "👤",
      path: "/profile",
    },
  ];

  return (
    <>
  {/* Desktop Sidebar */}

  <div
  className={`hidden lg:flex w-72 h-screen flex-col justify-between shadow-2xl transition-all duration-300 ${
    theme === "dark"
      ? "bg-slate-900 text-white"
      : "bg-white text-slate-900 border-r border-gray-200"
  }`}
>

      {/* Logo */}

      <div>

        <div
  className={`p-8 border-b ${
    theme === "dark"
      ? "border-slate-700"
      : "border-gray-200"
  }`}
>

          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            🚀 TaskZen
          </h1>

         <p
  className={`text-sm mt-2 ${
    theme === "dark"
      ? "text-gray-400"
      : "text-gray-600"
  }`}
>
            Productivity Dashboard
          </p>

        </div>

        {/* Menu */}

        <div className="p-5 space-y-3">

          {menu.map((item) => (

            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-5 py-3 rounded-xl transition-all duration-300
              ${
                location.pathname === item.path
                  ? "bg-cyan-500 text-white shadow-lg"
                  : theme === "dark"
? "hover:bg-slate-800 text-gray-300"
: "hover:bg-gray-100 text-slate-700"
              }`}
            >
              <span className="text-xl">
                {item.icon}
              </span>

              <span className="font-medium">
                {item.name}
              </span>

            </Link>

          ))}

        </div>

      </div>

      {/* Bottom User */}

      <div
  className={`p-6 border-t ${
    theme === "dark"
      ? "border-slate-700"
      : "border-gray-200"
  }`}
>

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-xl font-bold">
            P
          </div>

          <div>

            <h3 className="font-semibold">
              Welcome 👋
            </h3>

            <p
  className={`text-sm ${
    theme === "dark"
      ? "text-gray-400"
      : "text-gray-600"
  }`}
>
              Stay Productive
            </p>

          </div>

        </div>

      </div>

      </div>

    <AnimatePresence>

  {sidebarOpen && (

    <>

      {/* Overlay */}

      <motion.div

        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}

        onClick={() => setSidebarOpen(false)}

        className="fixed inset-0 bg-black/40 z-40 lg:hidden"

      />

      {/* Mobile Drawer */}

      <motion.div

        initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}

        transition={{ duration: 0.25 }}

        className="fixed left-0 top-0 w-72 h-screen bg-slate-900 text-white z-50 lg:hidden flex flex-col justify-between"

      >

        {/* Header */}

        <div>

          <div className="flex justify-between items-center p-6 border-b border-slate-700">

            <h1 className="text-3xl font-bold">
              🚀 TaskZen
            </h1>

            <button
              onClick={() => setSidebarOpen(false)}
            >
              <X />
            </button>

          </div>

          <div className="p-5 space-y-3">

            {menu.map((item) => (

              <Link

                key={item.path}

                to={item.path}

                onClick={() => setSidebarOpen(false)}

                className={`flex items-center gap-4 px-5 py-3 rounded-xl transition

                ${
                  location.pathname === item.path
                    ? "bg-cyan-500"
                    : "hover:bg-slate-800"
                }`}

              >

                <span className="text-xl">
                  {item.icon}
                </span>

                {item.name}

              </Link>

            ))}

          </div>

        </div>

      </motion.div>

    </>

  )}

</AnimatePresence>

</>
  );
}