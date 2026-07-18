import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

export default function MainLayout({ children }) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { theme } = useTheme();
  return (
<div
  className={`flex min-h-screen overflow-x-hidden transition-all duration-300 ${
    theme === "dark"
      ? "bg-[#0f172a]"
      : "bg-slate-100"
  }`}
>

      {/* Sidebar */}

      <div className="hidden lg:block fixed left-0 top-0 h-screen z-20">
        <Sidebar
  sidebarOpen={sidebarOpen}
  setSidebarOpen={setSidebarOpen}
/>
      </div>

      {/* Main Content */}

      <div className="flex-1 lg:ml-72">

        {/* Navbar */}

<div
  className={`sticky top-0 z-30 backdrop-blur-xl border-b transition-all duration-300 shadow-sm ${
    theme === "dark"
      ? "bg-slate-950/90 border-slate-800"
      : "bg-white/90 border-gray-200"
  }`}
>

          <Navbar
  setSidebarOpen={setSidebarOpen}
/>

        </div>

        {/* Page */}

        <main
  className={`p-4 md:p-6 lg:p-8 transition-all duration-300 ${
    theme === "dark"
      ? "text-white"
      : "text-slate-900"
  }`}
>

          <div className="max-w-7xl mx-auto">

            {children}

          </div>

        </main>

      </div>

    </div>
  );
}