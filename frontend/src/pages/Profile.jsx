import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useTheme } from "../context/ThemeContext";

export default function Profile() {

  const { theme } = useTheme();
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

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
    👤 My Profile
  </h1>

  <p
  className={`mt-2 ${
    theme === "dark"
      ? "text-gray-400"
      : "text-gray-500"
  }`}
>
    Manage your account information.
  </p>

</div>

      <div className={`rounded-3xl shadow-xl border p-5 md:p-8 max-w-5xl w-full transition-all duration-300 hover:shadow-lg hover:shadow-lg hover:shadow-lg ${
  theme === "dark"
    ? "bg-slate-900 border-slate-700"
    : "bg-white border-gray-100"
}`}>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 text-center sm:text-left">

          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 text-white flex items-center justify-center text-4xl md:text-5xl font-bold shadow-2xl ring-4 ring-cyan-300/20">
            {user.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>

          <div>
            <h2 className={`text-2xl md:text-3xl font-bold ${
  theme === "dark"
    ? "text-white"
    : "text-slate-800"
}`}>
              {user.name}
            </h2>

            <p className={`${
  theme === "dark"
    ? "text-gray-400"
    : "text-gray-500"
}`}>
              {user.email}
            </p>
          </div>

        </div>

        <span className="inline-block mt-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-semibold">
  🚀 TaskZen User
</span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:shadow-lg hover:shadow-lg hover:-translate-y-1 hover:shadow-xl ${
  theme === "dark"
    ? "bg-slate-800 border-slate-700"
    : "bg-cyan-50 border-cyan-100"
}`}>
            <h3 className={`font-semibold ${
  theme === "dark"
    ? "text-gray-300"
    : "text-gray-700"
}`}>
              Name
            </h3>

            <p className={`text-xl mt-2 ${
  theme === "dark"
    ? "text-white"
    : "text-slate-900"
}`}>
              {user.name}
            </p>
          </div>

          <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:shadow-lg hover:shadow-lg hover:shadow-lg ${
  theme === "dark"
    ? "bg-slate-800 border-slate-700"
    : "bg-green-50 border-green-100"
}`}>
            <h3 className={`font-semibold ${
  theme === "dark"
    ? "text-gray-300"
    : "text-gray-700"
}`}>
              Email
            </h3>

            <p className={`text-xl mt-2 break-all ${
  theme === "dark"
    ? "text-white"
    : "text-slate-900"
}`}>
              {user.email}
            </p>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">

  <div className={`rounded-2xl p-5 shadow-lg border transition-all duration-300 hover:shadow-lg hover:shadow-lg hover:shadow-lg ${
  theme === "dark"
    ? "bg-slate-900 border-slate-700"
    : "bg-cyan-50 border-cyan-100"
}`}>

    <h3 className={`${
  theme === "dark"
    ? "text-gray-400"
    : "text-gray-500"
}`}>
      Status
    </h3>

    <p className={`text-2xl font-bold mt-2 ${
  theme === "dark"
    ? "text-white"
    : "text-slate-900"
}`}>
      🟢 Active
    </p>

  </div>

  <div className={`rounded-2xl p-5 shadow-lg border transition-all duration-300 hover:shadow-lg hover:shadow-lg hover:shadow-lg ${
  theme === "dark"
    ? "bg-slate-900 border-slate-700"
    : "bg-green-50 border-green-100"
}`}>

    <h3 className={`${
  theme === "dark"
    ? "text-gray-400"
    : "text-gray-500"
}`}>
      Role
    </h3>

    <p className={`text-2xl font-bold mt-2 ${
  theme === "dark"
    ? "text-white"
    : "text-slate-900"
}`}>
      User
    </p>

  </div>

  <div className={`rounded-2xl p-5 shadow-lg border transition-all duration-300 hover:shadow-lg hover:shadow-lg hover:shadow-lg ${
  theme === "dark"
    ? "bg-slate-900 border-slate-700"
    : "bg-yellow-50 border-yellow-100"
}`}>

    <h3 className={`${
  theme === "dark"
    ? "text-gray-400"
    : "text-gray-500"
}`}>
      Project
    </h3>

    <p className={`text-2xl font-bold mt-2 ${
  theme === "dark"
    ? "text-white"
    : "text-slate-900"
}`}>
      TaskZen
    </p>

  </div>

</div>
    </MainLayout>
  );
}