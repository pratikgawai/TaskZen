// import { useEffect, useState } from "react";

// import MainLayout from "../layouts/MainLayout";
// import {
//   getTasks,
//   createTask,
//   completeTask,
//   deleteTask,
//   updateTask,
// } from "../api/tasks";

// export default function Tasks() {
//   const [tasks, setTasks] = useState([]);

//   const [search, setSearch] = useState("");

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     priority: "Medium",
//   });

//   const [editingId, setEditingId] = useState(null);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     try {
//       const res = await getTasks();
//       setTasks(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleCreateTask = async () => {
//     try {
//       await createTask(form);

//       alert("Task Created Successfully ✅");

//       setForm({
//         title: "",
//         description: "",
//         priority: "Medium",
//       });

//       fetchTasks();
//     } catch (err) {
//       console.log(err);
//       alert("Failed to create task");
//     }
//   };

//   const handleUpdateTask = async () => {
//   try {
//     await updateTask(editingId, form);

//     alert("Task Updated Successfully ✨");

//     setEditingId(null);

//     setForm({
//       title: "",
//       description: "",
//       priority: "Medium",
//     });

//     fetchTasks();
//   } catch (err) {
//     console.log(err);
//     alert("Update Failed");
//   }
// };

//   const handleCompleteTask = async (id) => {
//     try {
//       await completeTask(id);

//       alert("Task Completed ✅");

//       fetchTasks();
//     } catch (err) {
//       console.log(err);
//       alert("Unable to complete task");
//     }
//   };

//   const handleDeleteTask = async (id) => {

//   const confirmDelete = window.confirm(
//     "Delete this task?"
//   );

//   if (!confirmDelete) return;

//   try {

//     await deleteTask(id);

//     alert("Task Deleted Successfully 🗑️");

//     fetchTasks();

//   } catch (err) {

//     console.log(err);

//     alert("Unable to delete task");

//   }

// };

//   return (
//     <MainLayout>
//       {/* Heading */}
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold">
//           📋 My Tasks
//         </h1>
//               <input
//         type="text"
//         placeholder="🔍 Search Tasks..."
//         className="border p-2 rounded w-full mb-5"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       </div>

//       {/* Create Task Form */}
//       <div className="bg-white rounded-xl shadow p-5 mb-6">

//         <input
//           type="text"
//           placeholder="Task Title"
//           className="border p-2 rounded w-full mb-3"
//           value={form.title}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               title: e.target.value,
//             })
//           }
//         />

//         <textarea
//           placeholder="Description"
//           className="border p-2 rounded w-full mb-3"
//           value={form.description}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               description: e.target.value,
//             })
//           }
//         />

//         <select
//           className="border p-2 rounded w-full mb-3"
//           value={form.priority}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               priority: e.target.value,
//             })
//           }
//         >
//           <option>High</option>
//           <option>Medium</option>
//           <option>Low</option>
//         </select>

//         <button
//           onClick={
//             editingId
//               ? handleUpdateTask
//               : handleCreateTask
//           }
//           className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded"
//         >
//           {editingId ? "Update Task" : "Create Task"}
//         </button>

        

//       </div>

      

//       {/* Task List */}

//       <div className="bg-white rounded-xl shadow p-5">

//         {tasks.length === 0 ? (

//           <p className="text-center text-gray-500">
//             No Tasks Found
//           </p>

//         ) : (

//                   tasks
//           .filter((task) =>
//             task.title.toLowerCase().includes(search.toLowerCase())
//           )
//           .map((task) => (

//             <div
//               key={task.id}
//               className="border rounded-lg p-4 mb-4 flex justify-between items-center"
//             >

//               <div>

//                 <h2 className="font-semibold text-lg">
//                   {task.title}
//                 </h2>

//                 <p className="text-gray-500">
//                   Priority : {task.priority}
//                 </p>

//                 <p className="text-gray-400">
//                   {task.completed
//                     ? "✅ Completed"
//                     : "⌛ Pending"}
//                 </p>

//               </div>

//               <div className="flex gap-3">

//                 <button
//                   disabled={task.completed}
//                   onClick={() =>
//                     handleCompleteTask(task.id)
//                   }
//                   className={`px-3 py-1 rounded text-white ${
//                     task.completed
//                       ? "bg-gray-400 cursor-not-allowed"
//                       : "bg-green-500 hover:bg-green-600"
//                   }`}
//                 >
//                   ✓
//                 </button>

//               <button
//                 onClick={() => {
//                   setEditingId(task.id);

//                   setForm({
//                     title: task.title,
//                     description: task.description || "",
//                     priority: task.priority,
//                   });
//                 }}
//                 className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
//               >
//                 Edit
//               </button>

//                 <button
//                 onClick={() => handleDeleteTask(task.id)}
//                 className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
//               >
//                 Delete
//               </button>

//               </div>

//             </div>

//           ))

//         )}

//       </div>

//     </MainLayout>
//   );
// }


import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import TaskCard from "../components/cards/TaskCard";
import toast from "react-hot-toast";
import ConfirmModal from "../components/common/ConfirmModal";
import EmptyState from "../components/common/EmptyState";
import Loader from "../components/common/Loader";
import { useTheme } from "../context/ThemeContext";

import {
  getTasks,
  createTask,
  completeTask,
  deleteTask,
  updateTask,
} from "../api/tasks";

export default function Tasks() {

  const { theme } = useTheme();
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Medium",
  });

  const [editingId, setEditingId] = useState(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

const [selectedTaskId, setSelectedTaskId] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
  setLoading(true);

  try {
    const res = await getTasks();
    setTasks(res.data);
  } catch (err) {
    console.log(err);
    toast.error("Unable to fetch tasks");
  } finally {
    setLoading(false);
  }
};

  const handleCreateTask = async () => {
    try {
      await createTask(form);

      toast.success("Task Created Successfully")

      setForm({
        title: "",
        description: "",
        priority: "Medium",
      });

      fetchTasks();
    } catch (err) {
      console.log(err);
      toast.error("Failed to create task");
    }
  };

  const handleUpdateTask = async () => {
    try {
      await updateTask(editingId, form);

      toast.success("Task Updated Successfully");

      setEditingId(null);

      setForm({
        title: "",
        description: "",
        priority: "Medium",
      });

      fetchTasks();
    } catch (err) {
      console.log(err);
      toast.error("Update Failed");
    }
  };

  const handleCompleteTask = async (id) => {
    try {
      await completeTask(id);

      toast.success("Task Completed");

      fetchTasks();
    } catch (err) {
      console.log(err);
      toast.error("Unable to complete task");
    }
  };

 const handleDeleteTask = (id) => {

  setSelectedTaskId(id);

  setShowDeleteModal(true);

};

const confirmDeleteTask = async () => {

  try {

    await deleteTask(selectedTaskId);

    toast.success("Task Deleted Successfully");

    fetchTasks();

  } catch (err) {

    console.log(err);

    toast.error("Unable to delete task");

  } finally {

    setShowDeleteModal(false);

    setSelectedTaskId(null);

  }

};

  const handleEditTask = (task) => {
    setEditingId(task.id);

    setForm({
      title: task.title,
      description: task.description || "",
      priority: task.priority,
    });
  };

if (loading) {
  return (
    <MainLayout>
      <Loader />
    </MainLayout>
  );
}

  return (
    <MainLayout>

      {/* Heading */}

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">

       <h1
  className={`text-3xl font-bold ${
    theme === "dark"
      ? "text-white"
      : "text-slate-900"
  }`}
>
          📋 My Tasks
        </h1>

        <input
          type="text"
          placeholder="🔍 Search Tasks..."
         className={`rounded-xl px-4 py-3 w-full md:w-96
border
focus:ring-2
focus:ring-cyan-500
outline-none
transition
${
  theme === "dark"
    ? "bg-slate-800 border-slate-700 text-white placeholder:text-gray-400"
    : "bg-white border-gray-300 text-slate-900"
}`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Task Form */}

      <div className={`rounded-2xl shadow-lg p-4 md:p-6 mb-8 transition-all
${
  theme === "dark"
    ? "bg-slate-900"
    : "bg-white"
}`}>

        <input
          type="text"
          placeholder="Task Title"
          className={`rounded-lg p-3 w-full mb-4 border
${
  theme === "dark"
    ? "bg-slate-800 border-slate-700 text-white"
    : "bg-white border-gray-300"
}`}
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
        />

        <textarea
          placeholder="Description"
          className="border rounded-lg p-3 w-full mb-4"
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />

       <div className="flex gap-3 mb-5">

  <button
    type="button"
    onClick={() =>
      setForm({ ...form, priority: "High" })
    }
    className={`flex-1 rounded-xl py-3 font-semibold transition-all duration-300 ${
      form.priority === "High"
        ? "bg-red-500 text-white shadow-lg shadow-red-500/30 scale-105"
        : theme === "dark"
        ? "bg-slate-800 text-gray-300 hover:bg-slate-700"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
  >
    🔴 High
  </button>

  <button
    type="button"
    onClick={() =>
      setForm({ ...form, priority: "Medium" })
    }
    className={`flex-1 rounded-xl py-3 font-semibold transition-all duration-300 ${
      form.priority === "Medium"
        ? "bg-yellow-500 text-white shadow-lg shadow-yellow-500/30 scale-105"
        : theme === "dark"
        ? "bg-slate-800 text-gray-300 hover:bg-slate-700"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
  >
    🟡 Medium
  </button>

  <button
    type="button"
    onClick={() =>
      setForm({ ...form, priority: "Low" })
    }
    className={`flex-1 rounded-xl py-3 font-semibold transition-all duration-300 ${
      form.priority === "Low"
        ? "bg-green-500 text-white shadow-lg shadow-green-500/30 scale-105"
        : theme === "dark"
        ? "bg-slate-800 text-gray-300 hover:bg-slate-700"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
  >
    🟢 Low
  </button>

</div>

        <button
          onClick={
            editingId
              ? handleUpdateTask
              : handleCreateTask
          }
          className="bg-cyan-500 hover:bg-cyan-600 text-white w-full md:w-auto px-6 py-3 rounded-xl transition"
        >
          {editingId ? "Update Task" : "Create Task"}
        </button>

      </div>

      

      

      {/* Task List */}

      {tasks.filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase())
      ).length === 0 ? (

        <EmptyState
  title="No Tasks Yet"
  description="Your workspace is empty. Create your first task and start your productivity journey."
/>

      ) : (

        tasks
          .filter((task) =>
            task.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((task) => (

            <TaskCard
              key={task.id}
              task={task}
              onComplete={handleCompleteTask}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />

          ))

      )}

      <ConfirmModal

  isOpen={showDeleteModal}

  title="🗑 Delete Task"

  message="Are you sure you want to delete this task?"

  onConfirm={confirmDeleteTask}

  onCancel={() => setShowDeleteModal(false)}

/>

    </MainLayout>
  );
}