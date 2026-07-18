import { useEffect, useState } from "react";
import Loader from "../components/common/Loader";
import toast from "react-hot-toast";
import EmptyState from "../components/common/EmptyState";
import { useTheme } from "../context/ThemeContext";
import {
  getHabits,
  createHabit,
  completeHabit,
  deleteHabit,
  updateHabit,
} from "../api/habits";

import MainLayout from "../layouts/MainLayout";

export default function Habits() {

  const { theme } = useTheme();

  const [habits, setHabits] = useState([]);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    frequency: "Daily",
  });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchHabits();
  }, []);

  const fetchHabits = async () => {
    try {
      const res = await getHabits();
      setHabits(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreateHabit = async () => {
    try {

      await createHabit(form);

      toast.success("Habit Created Successfully");

      setForm({
        title: "",
        description: "",
        frequency: "Daily",
      });

      fetchHabits();

    } catch (err) {

      console.log(err);

      toast.error("Failed to create habit");

    }
  };

  const handleCompleteHabit = async (id) => {

    try {

      await completeHabit(id);

      toast.success("Habit Completed");

      fetchHabits();

    } catch (err) {

      console.log(err);

    }

  };

  const handleDeleteHabit = async (id) => {

    if (!window.confirm("Delete this habit?")) return;

    try {

      await deleteHabit(id);

      toast.success("Habit Deleted");

      fetchHabits();

    } catch (err) {

      console.log(err);

    }

  };

  const handleEditHabit = (habit) => {

    setEditingId(habit.id);

    setForm({
      title: habit.title,
      description: habit.description || "",
      frequency: habit.frequency,
    });

  };

  const handleUpdateHabit = async () => {

    try {

      await updateHabit(editingId, form);

      toast.success("Habit Updated");

      setEditingId(null);

      setForm({
        title: "",
        description: "",
        frequency: "Daily",
      });

      fetchHabits();

    } catch (err) {

      console.log(err);

    }

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

<div className="mb-8">

  <h1
  className={`text-4xl font-bold ${
    theme === "dark"
      ? "text-white"
      : "text-slate-900"
  }`}
>
    🔥 Habit Tracker
  </h1>

  <p
  className={`mt-2 ${
    theme === "dark"
      ? "text-gray-400"
      : "text-gray-500"
  }`}
>
    Build better habits every day.
  </p>

</div>

      <div className={`rounded-2xl shadow-xl border p-4 md:p-6 mb-6 transition-all duration-300 ${
  theme === "dark"
    ? "bg-slate-900 border-slate-700"
    : "bg-white border-gray-100"
}`}>

        <input
          type="text"
          placeholder="Habit Title"
          className={`border rounded-lg p-3 w-full mb-3 transition ${
  theme === "dark"
    ? "bg-slate-800 border-slate-700 text-white placeholder:text-gray-400"
    : "bg-white border-gray-300 text-slate-900"
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
          className="border p-2 rounded w-full mb-3"
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />

       <div className="grid grid-cols-3 gap-3 mb-4">

  <button
    type="button"
    onClick={() =>
      setForm({
        ...form,
        frequency: "Daily",
      })
    }
    className={`rounded-xl py-3 font-semibold transition-all duration-300 ${
      form.frequency === "Daily"
        ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30 scale-105"
        : theme === "dark"
        ? "bg-slate-800 text-gray-300 hover:bg-slate-700"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
  >
    ☀️ Daily
  </button>

  <button
    type="button"
    onClick={() =>
      setForm({
        ...form,
        frequency: "Weekly",
      })
    }
    className={`rounded-xl py-3 font-semibold transition-all duration-300 ${
      form.frequency === "Weekly"
        ? "bg-violet-500 text-white shadow-lg shadow-violet-500/30 scale-105"
        : theme === "dark"
        ? "bg-slate-800 text-gray-300 hover:bg-slate-700"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
  >
    📅 Weekly
  </button>

  <button
    type="button"
    onClick={() =>
      setForm({
        ...form,
        frequency: "Monthly",
      })
    }
    className={`rounded-xl py-3 font-semibold transition-all duration-300 ${
      form.frequency === "Monthly"
        ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 scale-105"
        : theme === "dark"
        ? "bg-slate-800 text-gray-300 hover:bg-slate-700"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
  >
    🗓️ Monthly
  </button>

</div>

        <button
          onClick={
            editingId
              ? handleUpdateHabit
              : handleCreateHabit
          }
          className="bg-cyan-500 hover:bg-cyan-600 transition text-white w-full md:w-auto px-6 py-3 rounded-xl"
        >
          {editingId ? "Update Habit" : "Create Habit"}
        </button>

      </div>

      <div className={`rounded-2xl shadow-xl border p-5 transition-all duration-300 ${
  theme === "dark"
    ? "bg-slate-900 border-slate-700"
    : "bg-white border-gray-100"
}`}>

        {habits.length === 0 ? (

<EmptyState
  emoji="🔥"
  title="No Habits Yet"
  description="Start building your first habit today!"
/>

        ) : (

          habits.map((habit) => (

            <div
              key={habit.id}
              className={`rounded-2xl border p-4 mb-4 flex flex-col md:flex-row justify-between md:items-center gap-4 transition-all duration-300 hover:shadow-lg ${
  theme === "dark"
    ? "bg-slate-800 border-slate-700"
    : "bg-slate-50 border-gray-200"
}`}
            >

              <div>

                <h2 className={`font-semibold text-lg ${
  theme === "dark"
    ? "text-white"
    : "text-slate-900"
}`}>
                  {habit.title}
                </h2>

<p
  className={`${
    theme === "dark"
      ? "text-gray-400"
      : "text-gray-500"
  }`}
>
  {habit.frequency}
</p>

                <p
  className={`font-medium ${
    theme === "dark"
      ? "text-white"
      : "text-slate-800"
  }`}
>
                  {habit.completed
                    ? "✅ Completed"
                    : "⌛ Pending"}
                </p>

              </div>

              <div className="flex flex-wrap gap-3">

                <button
                  onClick={() =>
                    handleCompleteHabit(habit.id)
                  }
                  className="bg-green-500 hover:bg-green-600 transition-all duration-300 hover:scale-105 text-white px-4 py-2 rounded-xl flex-1 sm:flex-none"
                >
                  ✓
                </button>

                <button
                  onClick={() =>
                    handleEditHabit(habit)
                  }
                  className="bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 hover:scale-105 text-white px-4 py-2 rounded-xl flex-1 sm:flex-none"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDeleteHabit(habit.id)
                  }
                  className="bg-red-500 hover:bg-red-600 transition-all duration-300 hover:scale-105 text-white px-4 py-2 rounded-xl flex-1 sm:flex-none"
                >
                  Delete
                </button>

              </div>

            </div>

          ))

        )}

      </div>

    </MainLayout>

  );

}