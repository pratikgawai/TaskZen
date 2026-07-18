import { useEffect, useState } from "react";
import { getAchievements } from "../api/achievement";
import MainLayout from "../layouts/MainLayout";
import toast from "react-hot-toast";
import { Trophy, Lock } from "lucide-react";
import Loader from "../components/common/Loader";
import EmptyState from "../components/common/EmptyState";
import { useTheme } from "../context/ThemeContext";

export default function Achievements() {

  const { theme } = useTheme();

  const [achievements, setAchievements] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAchievements();
  }, []);

const fetchAchievements = async () => {

  setLoading(true);

  try {

    const res = await getAchievements();

    setAchievements(res.data);

  } catch (err) {

    console.log(err);

    toast.error("Unable to load achievements");

  } finally {

    setLoading(false);

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
  className={`text-3xl md:text-4xl font-bold ${
    theme === "dark"
      ? "text-white"
      : "text-slate-900"
  }`}
>
    🏆 Achievements
  </h1>

  <p
  className={`mt-2 ${
    theme === "dark"
      ? "text-gray-400"
      : "text-gray-500"
  }`}
>
    Unlock badges by completing tasks and maintaining streaks.
  </p>

</div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {achievements.length === 0 ? (

          <EmptyState
  emoji="🏆"
  title="No Achievements"
  description="Complete tasks to unlock achievements."
/>

        ) : (

          achievements.map((achievement) => (

            <div
  key={achievement.id}
              className={`rounded-2xl shadow-lg border p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
  theme === "dark"
    ? "bg-slate-900 border-slate-700"
    : "bg-white border-gray-100"
}`}
            >

     <div className="flex items-center gap-3 mb-3">

  <div
    className={`p-3 rounded-full ${
 achievement.unlocked
  ? theme === "dark"
    ? "bg-yellow-900/40 text-yellow-400"
    : "bg-yellow-100 text-yellow-600"
  : theme === "dark"
    ? "bg-slate-800 text-gray-400"
    : "bg-gray-100 text-gray-500"
    }`}
  >
    {achievement.unlocked ? (
      <Trophy size={24} />
    ) : (
      <Lock size={24} />
    )}
  </div>

  <h2 className={`text-xl font-bold ${
  theme === "dark"
    ? "text-white"
    : "text-slate-800"
}`}>
    {achievement.title}
  </h2>

</div>

              <p className={`mt-2 ${
  theme === "dark"
    ? "text-gray-400"
    : "text-gray-600"
}`}>
                {achievement.description}
              </p>

<span
  className={`inline-block mt-4 px-4 py-2 rounded-full text-sm font-semibold ${
achievement.unlocked
  ? theme === "dark"
    ? "bg-green-900/40 text-green-400"
    : "bg-green-100 text-green-700"
  : theme === "dark"
    ? "bg-slate-800 text-gray-300"
    : "bg-gray-100 text-gray-600"
  }`}
>
  {achievement.unlocked ? "✅ Unlocked" : "🔒 Locked"}
</span>

            </div>

          ))

        )}

      </div>

    </MainLayout>
  );
}