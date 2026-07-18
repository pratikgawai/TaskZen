import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import ThemeToggle from "../common/ThemeToggle";

export default function Navbar({ setSidebarOpen }) {

  const navigate = useNavigate();

  const { theme } = useTheme();

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");

  };

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <div
  className={`h-20 backdrop-blur-xl border-b flex justify-between items-center px-4 md:px-8 transition-all duration-300 ${
    theme === "dark"
      ? "bg-slate-900/90 border-slate-700"
      : "bg-white/90 border-gray-200"
  }`}
>

      {/* Left */}

      {/* Left */}

<div className="flex items-center gap-4">

  {/* Mobile Menu */}

  <button
    onClick={() => setSidebarOpen(true)}
   className={`lg:hidden p-2 rounded-lg transition ${
  theme === "dark"
    ? "hover:bg-slate-800 text-white"
    : "hover:bg-gray-100 text-slate-800"
}`}
  >
    <Menu size={28} />
  </button>

  <div>

    <h2
  className={`text-2xl md:text-3xl font-bold ${
    theme === "dark"
      ? "text-white"
      : "text-slate-800"
  }`}
>
      Welcome 👋
    </h2>

    <p
  className={`text-sm md:text-base ${
    theme === "dark"
      ? "text-gray-400"
      : "text-gray-500"
  }`}
>
      {today}
    </p>

  </div>

</div>

      {/* Right */}

      <div className="flex items-center gap-6">

        <button
          className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 ${
  theme === "dark"
    ? "bg-slate-800 hover:bg-slate-700"
    : "bg-gray-100 hover:bg-gray-200"
}`}
        >
          🔔
        </button>
<ThemeToggle />
        {/* <button
          className="text-2xl hover:scale-110 transition"
        >
          🌙
        </button> */}

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-cyan-500 text-white flex justify-center items-center font-bold">

            {user?.name
              ? user.name.charAt(0).toUpperCase()
              : "U"}

          </div>

          <div className="hidden md:block">

            <h3
  className={`font-semibold ${
    theme === "dark"
      ? "text-white"
      : "text-slate-800"
  }`}
>
              {user?.name}
            </h3>

            <p
  className={`text-sm ${
    theme === "dark"
      ? "text-gray-400"
      : "text-gray-500"
  }`}
>
              {user?.email}
            </p>

          </div>

        </div>

        <button
          onClick={handleLogout}
          className="hidden sm:block bg-red-500 hover:bg-red-600 transition text-white px-4 md:px-5 py-2 rounded-xl text-sm md:text-base"
        >
          Logout
        </button>

      </div>

    </div>

  );

}