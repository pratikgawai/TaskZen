// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { registerUser } from "../api/auth";
// import toast from "react-hot-toast";
// import { Eye, EyeOff } from "lucide-react";
// import { useTheme } from "../context/ThemeContext";

// export default function Register() {

//   const { theme } = useTheme();
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);

//   const [showPassword, setShowPassword] = useState(false);

//   const [showConfirm, setShowConfirm] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (
//       !form.name ||
//       !form.email ||
//       !form.password ||
//       !form.confirmPassword
//     ) {
//       return toast.error("Please fill all fields");
//     }

//     if (form.password.length < 6) {
//       return toast.error(
//         "Password must be at least 6 characters"
//       );
//     }

//     if (form.password !== form.confirmPassword) {
//       return toast.error("Passwords do not match");
//     }

//     try {
//       setLoading(true);

//       await registerUser({
//         name: form.name,
//         email: form.email,
//         password: form.password,
//       });

//       toast.success("Account Created Successfully 🎉");

//       navigate("/");

//     } catch (err) {

//       toast.error(
//         err.response?.data?.message || "Registration Failed"
//       );

//     } finally {

//       setLoading(false);

//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 flex justify-center items-center p-5">

//       <form
//         onSubmit={handleSubmit}
//         className={`w-full max-w-md rounded-3xl shadow-2xl p-8 transition-all duration-300 ${
//   theme === "dark"
//     ? "bg-slate-900 border border-slate-700"
//     : "bg-white"
// }`}
//       >

//         <h1
//   className={`text-4xl font-bold text-center ${
//     theme === "dark"
//       ? "text-white"
//       : "text-slate-900"
//   }`}
// >
//           🚀 TaskZen
//         </h1>

//         <p className={`text-center mt-2 mb-8 ${
//   theme === "dark"
//     ? "text-gray-400"
//     : "text-gray-500"
// }`}>
//           Create Your Account
//         </p>

//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           className="w-full border rounded-xl p-3 mb-4 outline-none focus:ring-2 focus:ring-cyan-500"
//           value={form.name}
//           onChange={handleChange}
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           className="w-full border rounded-xl p-3 mb-4 outline-none focus:ring-2 focus:ring-cyan-500"
//           value={form.email}
//           onChange={handleChange}
//         />

//         <div className="relative mb-4">

//           <input
//             type={showPassword ? "text" : "password"}
//             name="password"
//             placeholder="Password"
//             className="w-full border rounded-xl p-3 pr-12 outline-none focus:ring-2 focus:ring-cyan-500"
//             value={form.password}
//             onChange={handleChange}
//           />

//           <button
//             type="button"
//             onClick={() =>
//               setShowPassword(!showPassword)
//             }
//             className={`absolute right-4 top-4 ${
//   theme === "dark"
//     ? "text-gray-300"
//     : "text-slate-600"
// }`}
//           >
//             {showPassword ? <EyeOff /> : <Eye />}
//           </button>

//         </div>

//         <div className="relative mb-6">

//           <input
//             type={showConfirm ? "text" : "password"}
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             className="w-full border rounded-xl p-3 pr-12 outline-none focus:ring-2 focus:ring-cyan-500"
//             value={form.confirmPassword}
//             onChange={handleChange}
//           />

//           <button
//             type="button"
//             onClick={() =>
//               setShowConfirm(!showConfirm)
//             }
//             className={`absolute right-4 top-4 ${
//   theme === "dark"
//     ? "text-gray-300"
//     : "text-slate-600"
// }`}
//           >
//             {showConfirm ? <EyeOff /> : <Eye />}
//           </button>

//         </div>

//         <button
//           disabled={loading}
//           className="w-full bg-cyan-500 hover:bg-cyan-600 transition text-white py-3 rounded-xl font-semibold disabled:opacity-50"
//         >
//           {loading ? "Creating Account..." : "Create Account"}
//         </button>

//         <p className={`text-center mt-6 ${
//   theme === "dark"
//     ? "text-gray-400"
//     : "text-gray-600"
// }`}>

//           Already have an account?{" "}

//           <Link
//             to="/"
//             className="text-cyan-500 hover:text-cyan-400 font-semibold"
//           >
//             Login
//           </Link>

//         </p>

//       </form>

//     </div>
//   );
// }


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";
import toast from "react-hot-toast";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";

import AuthLayout from "../components/auth/AuthLayout";
import GlassCard from "../components/ui/GlassCard";
import AnimatedLogo from "../components/ui/AnimatedLogo";
import FloatingLabelInput from "../components/auth/FloatingLabelInput";
import LoadingButton from "../components/auth/LoadingButton";
import AuthFooter from "../components/auth/AuthFooter";

export default function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      return toast.error("Please fill all fields");
    }

    if (form.password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }

    if (form.password !== form.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      setLoading(true);

      await registerUser({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      toast.success("Account Created Successfully 🎉");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <GlassCard>
        <div className="hidden lg:block">
          <AnimatedLogo size="lg" showTagline={false} />
        </div>

        <p className="text-center text-slate-300 mt-3 mb-10 text-lg">
          Create Your Account
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <FloatingLabelInput
            icon={User}
            label="Full Name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <FloatingLabelInput
            icon={Mail}
            label="Email Address"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <FloatingLabelInput
            icon={Lock}
            label="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            rightIcon={{
              icon: showPassword ? <EyeOff size={20} /> : <Eye size={20} />,
              onClick: () => setShowPassword(!showPassword),
            }}
          />

          <FloatingLabelInput
            icon={Lock}
            label="Confirm Password"
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            rightIcon={{
              icon: showConfirm ? <EyeOff size={20} /> : <Eye size={20} />,
              onClick: () => setShowConfirm(!showConfirm),
            }}
          />

          <LoadingButton loading={loading} loadingText="Creating Account...">
            Create Account
          </LoadingButton>
        </form>

        <AuthFooter
          prompt="Already have an account?"
          linkText="Login"
          linkTo="/"
          showDivider={false}
        />
      </GlassCard>
    </AuthLayout>
  );
}