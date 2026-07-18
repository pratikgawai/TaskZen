import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDashboard } from "../api/dashboard";
import { useTheme } from "../context/ThemeContext";

import MainLayout from "../layouts/MainLayout";
import StatCard from "../components/cards/StatCard";

export default function Dashboard() {

  const { theme } = useTheme();

  const [dashboard, setDashboard] = useState({
    total_tasks: 0,
    completed_tasks: 0,
    current_streak: 0,
    best_streak: 0,
    name: "",
  });

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await getDashboard();
        setDashboard(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <MainLayout>

      {/* Hero Card */}

      <div
  className={`rounded-2xl p-6 md:p-7 shadow-lg mb-8 text-white transition-all duration-300 ${
    theme === "dark"
      ? "bg-gradient-to-r from-cyan-700 to-blue-900"
      : "bg-gradient-to-r from-cyan-500 to-blue-600"
  }`}
>

        <h1 className="text-2xl md:text-4xl font-bold">
          👋 Welcome, {dashboard.name}
        </h1>

        <p className="mt-3 text-sm md:text-lg text-cyan-100">
          Stay consistent. Small progress every day creates big results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">

          <Link
            to="/tasks"
           className="bg-white text-cyan-700 px-5 py-3 rounded-2xl font-semibold hover:scale-105 hover:bg-gray-100 transition-all duration-300 text-center"
          >
            ➕ Manage Tasks
          </Link>

          <Link
            to="/habits"
            className="bg-cyan-800 px-5 py-3 rounded-xl font-semibold hover:scale-105 hover:bg-cyan-900 transition-all duration-300 text-center"
          >
            🔥 Habits
          </Link>

        </div>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        {/* <StatCard
          title="📋 Total Tasks"
          value={dashboard.total_tasks}
        />

        <StatCard
          title="✅ Completed"
          value={dashboard.completed_tasks}
        />

        <StatCard
          title="🔥 Current Streak"
          value={dashboard.current_streak}
        /> */}

        <StatCard
  title="Total Tasks"
  value={dashboard.total_tasks}
  icon="📋"
  color="from-cyan-500 to-blue-600"
/>

<StatCard
  title="Completed"
  value={dashboard.completed_tasks}
  icon="✅"
  color="from-green-500 to-emerald-600"
/>

<StatCard
  title="Current Streak"
  value={dashboard.current_streak}
  icon="🔥"
  color="from-orange-500 to-red-500"
/>

<StatCard
  title="Best Streak"
  value={dashboard.best_streak}
  icon="🏆"
  color="from-purple-500 to-pink-600"
/>

      </div>

      {/* Quick Access */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <Link
          to="/statistics"
          className={`rounded-xl shadow p-6 hover:shadow-lg-xl transition-all duration-300 ${
  theme === "dark"
    ? "bg-slate-800 text-white"
    : "bg-white text-slate-900"
}`}
        >
          <h2 className="text-xl font-bold">
            📊 Statistics
          </h2>

          <p className={`mt-2 ${
  theme === "dark"
    ? "text-gray-400"
    : "text-gray-500"
}`}>
            View your productivity analytics.
          </p>

        </Link>

<Link
  to="/achievements"
  className={`rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${
    theme === "dark"
      ? "bg-slate-800 text-white"
      : "bg-white text-slate-900"
  }`}
>
          <h2 className="text-xl font-bold">
            🏆 Achievements
          </h2>

          <p className={`mt-2 ${
  theme === "dark"
    ? "text-gray-400"
    : "text-gray-500"
}`}>
            Unlock badges and milestones.
          </p>

        </Link>

<Link
  to="/profile"
  className={`rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${
    theme === "dark"
      ? "bg-slate-800 text-white"
      : "bg-white text-slate-900"
  }`}
>
          <h2 className="text-xl font-bold">
            👤 Profile
          </h2>

          <p className={`mt-2 ${
  theme === "dark"
    ? "text-gray-400"
    : "text-gray-500"
}`}>
            View your personal information.
          </p>

        </Link>

      </div>

    </MainLayout>
  );
}