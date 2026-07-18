import { useTheme } from "../../context/ThemeContext";

export default function TaskCard({

  
  task,
  onComplete,
  onEdit,
  onDelete,
}) {

  const { theme } = useTheme();

  const priorityColor = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-yellow-100 text-yellow-600",
    Low: "bg-green-100 text-green-600",
  };

  

  return (
    <div
  className={`rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 md:p-5 mb-5 border
  ${
    theme === "dark"
      ? "bg-slate-900 border-slate-700"
      : "bg-white border-gray-100"
  }`}
>

      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">

        <div>

          <h2 className={`text-lg md:text-xl font-bold break-words ${
  theme === "dark"
    ? "text-white"
    : "text-slate-800"
}`}>
            {task.title}
          </h2>

          <p className={`mt-2 break-words ${
  theme === "dark"
    ? "text-gray-400"
    : "text-gray-500"
}`}>
            {task.description || "No description"}
          </p>

        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            priorityColor[task.priority]
          }`}
        >
          {task.priority}
        </span>

      </div>

      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mt-6">

        <p
  className={`font-medium ${
    theme === "dark"
      ? "text-white"
      : "text-slate-800"
  }`}
>
          {task.completed ? "✅ Completed" : "⌛ Pending"}
        </p>

        <div className="flex flex-wrap gap-3">

          <button
            onClick={() => onComplete(task.id)}
            disabled={task.completed}
            className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 flex-1 sm:flex-none"
          >
            ✓
          </button>

          <button
            onClick={() => onEdit(task)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 flex-1 sm:flex-none"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(task.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 flex-1 sm:flex-none"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}