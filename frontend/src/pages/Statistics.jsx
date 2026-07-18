import { useEffect, useState } from "react";
import { getStatistics } from "../api/stats";
import { useTheme } from "../context/ThemeContext";
import MainLayout from "../layouts/MainLayout";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Statistics() {

  const { theme } = useTheme();

  const [stats, setStats] = useState({
    total_tasks: 0,
    completed_tasks: 0,
    pending_tasks: 0,
    completion_rate: 0,
    high_priority: 0,
    medium_priority: 0,
    low_priority: 0,
  });

  useEffect(() => {
    fetchStatistics();
  }, []);

  const fetchStatistics = async () => {
    try {
      const res = await getStatistics();
      setStats(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const COLORS = ["#22c55e", "#f59e0b"];

  const pieData = [
  {
    name: "Completed",
    value: stats.completed_tasks,
  },
  {
    name: "Pending",
    value: stats.pending_tasks,
  },
];

  return (
    <MainLayout>

<div className="mb-8">

  <h1
  className={`text-3xl md:text-4xl font-bold ${
    theme === "dark"
      ? "text-white"
      : "text-slate-900"
  }`}
>
    📊 Statistics
  </h1>

  <p
  className={`mt-2 ${
    theme === "dark"
      ? "text-gray-400"
      : "text-gray-500"
  }`}
>
    Track your productivity and analyze your progress.
  </p>

</div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className={`rounded-2xl shadow-lg border p-5 hover:shadow-xl transition-all duration-300 ${
  theme === "dark"
    ? "bg-slate-900 border-slate-700"
    : "bg-white border-gray-100"
}`}>
          <h2 className={`${
  theme === "dark"
    ? "text-gray-400"
    : "text-gray-500"
}`}>📋 Total Tasks</h2>
          <p className={`text-4xl font-bold mt-2 ${
  theme === "dark"
    ? "text-white"
    : "text-slate-900"
}`}>
            {stats.total_tasks}
          </p>
        </div>

        <div className={`rounded-2xl shadow-lg border p-5 hover:shadow-xl transition-all duration-300 ${
  theme === "dark"
    ? "bg-slate-900 border-slate-700"
    : "bg-white border-gray-100"
}`}>
          <h2 className={`${
  theme === "dark"
    ? "text-gray-400"
    : "text-gray-500"
}`}>✅ Completed</h2>
          <p className="text-4xl font-bold mt-2 text-green-600">
            {stats.completed_tasks}
          </p>
        </div>

        <div className={`rounded-2xl shadow-lg border p-5 hover:shadow-xl transition-all duration-300 ${
  theme === "dark"
    ? "bg-slate-900 border-slate-700"
    : "bg-white border-gray-100"
}`}>
          <h2 className={`${
  theme === "dark"
    ? "text-gray-400"
    : "text-gray-500"
}`}>⌛ Pending</h2>
          <p className="text-4xl font-bold mt-2 text-yellow-500">
            {stats.pending_tasks}
          </p>
        </div>

        <div className={`rounded-2xl shadow-lg border p-5 hover:shadow-xl transition-all duration-300 ${
  theme === "dark"
    ? "bg-slate-900 border-slate-700"
    : "bg-white border-gray-100"
}`}>
          <h2 className={`${
  theme === "dark"
    ? "text-gray-400"
    : "text-gray-500"
}`}>📈 Completion</h2>
          <p className="text-4xl font-bold mt-2 text-cyan-600">
            {stats.completion_rate}%
          </p>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

        <div className={`rounded-2xl border p-5 shadow transition-all duration-300 ${
  theme === "dark"
    ? "bg-red-950/30 border-red-800 text-white"
    : "bg-red-50 border-red-100"
}`}>
          <h2 className="font-bold">
            🔴 High Priority
          </h2>

          <p className="text-4xl mt-3">
            {stats.high_priority}
          </p>
        </div>

        <div className={`rounded-2xl border p-5 shadow transition-all duration-300 ${
  theme === "dark"
    ? "bg-yellow-950/30 border-yellow-800 text-white"
    : "bg-yellow-50 border-yellow-100"
}`}>
          <h2 className="font-bold">
            🟡 Medium Priority
          </h2>

          <p className="text-4xl mt-3">
            {stats.medium_priority}
          </p>
        </div>

        <div className={`rounded-2xl border p-5 shadow transition-all duration-300 ${
  theme === "dark"
    ? "bg-green-950/30 border-green-800 text-white"
    : "bg-green-50 border-green-100"
}`}>
          <h2 className="font-bold">
            🟢 Low Priority
          </h2>

          <p className="text-4xl mt-3">
            {stats.low_priority}
          </p>
        </div>

      </div>
      <div className={`rounded-2xl shadow-lg border p-4 md:p-6 mt-8 transition-all duration-300 ${
  theme === "dark"
    ? "bg-slate-900 border-slate-700"
    : "bg-white border-gray-100"
}`}>

  <h2
  className={`text-2xl font-bold mb-6 ${
    theme === "dark"
      ? "text-white"
      : "text-slate-900"
  }`}
>
    📈 Task Distribution
  </h2>

  <div className="w-full h-72 md:h-96">

    <ResponsiveContainer width="100%" height="100%">

      <PieChart>

        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          outerRadius={110}
          label
        >

          {pieData.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index]}
            />
          ))}

        </Pie>

        <Tooltip
  contentStyle={{
    backgroundColor: theme === "dark" ? "#0f172a" : "#ffffff",
    border: "1px solid #334155",
    borderRadius: "12px",
    color: theme === "dark" ? "#ffffff" : "#0f172a",
  }}
/>

        <Legend />

      </PieChart>

    </ResponsiveContainer>

  </div>

</div>

    </MainLayout>
  );
}