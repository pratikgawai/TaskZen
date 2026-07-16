import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api/auth";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(form);

      console.log("LOGIN RESPONSE:", res.data);

      localStorage.setItem("token", res.data.token);

      alert("Login Successful ✅");

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-8 rounded-xl w-96"
      >
        <h1 className="text-3xl text-white font-bold mb-6">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 rounded mb-4"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 rounded mb-4"
          onChange={handleChange}
        />

        <button
          className="w-full bg-cyan-500 text-white p-3 rounded"
        >
          Login
        </button>

        <p className="text-gray-300 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-cyan-400">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}