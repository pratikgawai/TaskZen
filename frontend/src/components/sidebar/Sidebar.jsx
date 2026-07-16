import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white p-6">

      <h1 className="text-3xl font-bold mb-10">
        🚀 TaskZen
      </h1>

      <div className="flex flex-col gap-5">

        <Link to="/dashboard">🏠 Dashboard</Link>

        <Link to="/tasks">📋 Tasks</Link>

        <Link to="/habits">📅 Habits</Link>

        <Link to="/statistics">📊 Statistics</Link>

        <Link to="/achievements">🏆 Achievements</Link>

        <Link to="/profile">👤 Profile</Link>

      </div>

    </div>
  );
}