// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { loginUser } from "../api/auth";
// import toast from "react-hot-toast";
// import {
//   Eye,
//   EyeOff,
//   Mail,
//   Lock,
//   Rocket,
// } from "lucide-react";

// import { motion } from "framer-motion";

// export default function Login() {
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);

// const [showPassword, setShowPassword] = useState(false);

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {

//   setLoading(true);

//   const res = await loginUser(form);

//   localStorage.setItem("token", res.data.token);

//   localStorage.setItem(
//     "user",
//     JSON.stringify(res.data.user)
//   );

//   toast.success("Welcome Back 🚀");

//   navigate("/dashboard");

// } catch (err) {

//   toast.error(
//     err.response?.data?.message || "Login Failed"
//   );

// } finally {

//   setLoading(false);

// }
//   };

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-[#071329] flex justify-center items-center px-5">

//       {/* Background Glow */}

//       <div className="absolute top-20 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>

//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]"></div>

//       <div
//   className="
//   absolute
//   inset-0
//   opacity-10
//   bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
//   bg-[size:40px_40px]
//   "
// ></div>

// <div className="absolute bottom-32 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>

// <div className="absolute top-1/2 right-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>

// <div className="absolute -left-40 -top-40 animate-pulse w-[500px] h-[500px] rounded-full bg-purple-700 blur-[170px] opacity-30"></div>

// <div className="absolute -right-52 bottom-0 animate-pulse w-[500px] h-[500px] rounded-full bg-cyan-500 blur-[180px] opacity-25"></div>

// {[...Array(12)].map((_, i) => (
//   <motion.div
//     key={i}
//     className="absolute rounded-full bg-cyan-300/40"
//     style={{
//       width: Math.random() * 6 + 2,
//       height: Math.random() * 6 + 2,
//       left: `${Math.random() * 100}%`,
//       top: `${Math.random() * 100}%`,
//     }}
//     animate={{
//       y: [-10, 10, -10],
//       opacity: [0.2, 1, 0.2],
//     }}
//     transition={{
//       duration: 3 + Math.random() * 3,
//       repeat: Infinity,
//       ease: "easeInOut",
//     }}
//   />
// ))}
//       <motion.form

      
//         onSubmit={handleSubmit}
//         initial={{
//   opacity:0,
//   y:40,
//   scale:0.95
// }}



// animate={{
//   opacity:1,
//   y:0,
//   scale:1
// }}

// transition={{
//   duration:0.7
// }}



// className="
// relative
// z-10
// w-full
// max-w-md
// rounded-[32px]
// border
// border-cyan-400/20
// bg-white/5
// backdrop-blur-2xl
// shadow-[0_20px_80px_rgba(6,182,212,0.25)]
// hover:border-cyan-400/40
// transition-all
// duration-500
// p-8
// "
//       >

//         <div
// className="
// absolute
// top-0
// left-0
// w-full
// h-32
// rounded-t-[32px]
// bg-gradient-to-b
// from-white/10
// to-transparent
// pointer-events-none
// "
// />

// <div className="flex justify-center mb-5">

// <div className="
// before:absolute
// before:inset-0
// before:rounded-[32px]
// before:border
// before:border-cyan-400/20
// before:pointer-events-none
// w-20
// h-20
// rounded-full
// bg-gradient-to-br
// from-cyan-400
// to-blue-600
// flex
// items-center
// justify-center
// shadow-[0_0_70px_rgba(34,211,238,.8)]
// ">

// <motion.div
//   animate={{
//     y: [0, -8, 0],
//     rotate: [12, 18, 12],
//   }}
//   transition={{
//     duration: 3,
//     repeat: Infinity,
//     ease: "easeInOut",
//   }}
// >
//   <Rocket
//     size={38}
//     className="text-white"
//   />
// </motion.div>

// </div>

// </div>

// <motion.h1
// className="text-center text-5xl font-extrabold text-white"
// animate={{
//   textShadow: [
//     "0 0 8px rgba(34,211,238,.2)",
//     "0 0 25px rgba(34,211,238,.8)",
//     "0 0 8px rgba(34,211,238,.2)",
//   ],
// }}
// transition={{
//   repeat: Infinity,
//   duration: 3,
// }}
// >

// Task<span className="text-cyan-400">Zen</span>

// </motion.h1>

//  <p className="text-center text-slate-300 mt-3 mb-10 text-lg">
//     Welcome Back
//   </p>

//   <div className="flex justify-center mb-8">

//   <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm">

//     ✨ Organize • Track • Achieve

//   </span>

// </div>


// <div className="relative mb-5">

//   <Mail
//     size={20}
//     className="absolute left-4 top-4 text-slate-400"
//   />

//   <input
//     type="email"
//     name="email"
//     placeholder="Email Address"
//     value={form.email}
//     onChange={handleChange}
// className="
// w-full
// pl-12
// pr-4
// py-4
// rounded-2xl
// bg-white/5
// border
// border-white/10
// text-white
// placeholder:text-slate-400
// outline-none
// focus:border-cyan-400
// focus:ring-2
// focus:ring-cyan-400/30
// hover:border-cyan-400/40
// transition-all
// duration-300
// hover:-translate-y-0.5
// "
//   />

// </div>

        

//         <div className="relative mb-8">

//   <Lock
//     size={20}
//     className="absolute left-4 top-4 text-slate-400"
//   />

//   <input
//     type={showPassword ? "text" : "password"}
//     name="password"
//     placeholder="Password"
//     value={form.password}
//     onChange={handleChange}
// className="
// w-full
// pl-12
// pr-14
// py-4
// rounded-2xl
// bg-white/5
// border
// border-white/10
// text-white
// placeholder:text-slate-400
// outline-none
// focus:border-cyan-400
// focus:ring-2
// focus:ring-cyan-400/30
// hover:border-cyan-400/40
// transition-all
// duration-300
// "
//   />

//   <button
//     type="button"
//     onClick={() =>
//       setShowPassword(!showPassword)
//     }
//     className="absolute right-4 top-4 text-slate-400 hover:text-white"
//   >
//     {showPassword ? <EyeOff /> : <Eye />}
//   </button>

// </div>


//   <div className="flex items-center justify-between mb-6">

//   <label className="flex items-center gap-2 text-slate-300 text-sm cursor-pointer">

//     <input
//       type="checkbox"
//       className="accent-cyan-400 w-4 h-4"
//     />

//     Remember Me

//   </label>

// <Link
// to="/forgot-password"
// className="text-cyan-400 hover:text-cyan-300 text-sm"
// >

// Forgot Password?

// </Link>



// </div>

//         <motion.button
//   whileHover={{ scale: 1.03 }}
//   whileTap={{ scale: 0.97 }}
//   disabled={loading}
//   className="
// w-full
// py-4
// rounded-2xl
// font-bold
// text-lg
// bg-gradient-to-r
// from-cyan-500
// via-blue-600
// to-purple-600
// hover:scale-105
// active:scale-95
// hover:shadow-[0_0_40px_rgba(0,255,255,.35)]
// transition-all
// duration-300
// text-white
// "
// > <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000"></span>
//   {loading ? (
//   <div className="flex justify-center items-center gap-2">

//     <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>

//     Logging In...

//   </div>
// ) : (
//   "Login"
// )}
// </motion.button>

// <motion.div
// animate={{
//   rotate: [0, -8, 8, -8, 0],
// }}
// transition={{
//   repeat: Infinity,
//   duration: 6,
// }}
// className="lex items-center my-8">

//   <div className="flex-1 h-px bg-white/10"></div>

//   <span className="px-4 text-slate-400 text-sm">
//     Or continue with
//   </span>

//   <div className="flex-1 h-px bg-white/10"></div>

// </motion.div>

// <div className="flex justify-center gap-5 mb-8">

//   <button
//     type="button"
//     className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:scale-105 transition text-2xl"
//   >
//     🌐
//   </button>

//   <button
//     type="button"
//     className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:scale-105 transition text-2xl"
//   >
//     💻
//   </button>

//   <button
//     type="button"
//     className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:scale-105 transition text-2xl"
//   >
//     🪟
//   </button>

  

// </div>

//         <p className="text-center text-slate-300 mt-8">
//           Don't have an account?{" "}
// <div className="text-center text-slate-300 mt-8">

//   Don't have an account?{" "}

//   <motion.span
//     whileHover={{ scale: 1.05 }}
//     className="inline-block"
//   >
//     <Link
//       to="/register"
//       className="text-cyan-400 font-semibold hover:text-cyan-300 transition"
//     >
//       Register
//     </Link>
//   </motion.span>

// </div>

// <p className="text-center text-xs text-slate-500 mt-8 tracking-wide">

// Made with ❤️ by Pratik Gawai

// </p>
//         </p>
//       </motion.form>
//     </div>
//   );
// }


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import toast from "react-hot-toast";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

import AuthLayout from "../components/auth/AuthLayout";
import GlassCard from "../components/ui/GlassCard";
import AnimatedLogo from "../components/ui/AnimatedLogo";
import FloatingLabelInput from "../components/auth/FloatingLabelInput";
import LoadingButton from "../components/auth/LoadingButton";
import GoogleButton from "../components/auth/GoogleButton";
import AuthFooter from "../components/auth/AuthFooter";

export default function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await loginUser(form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      toast.success("Welcome Back 🚀");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <GlassCard>
        <div className="hidden lg:block">
          <AnimatedLogo size="lg" showTagline />
        </div>

        <p className="text-center text-slate-300 mt-3 mb-10 text-lg">
          Welcome Back
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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

          <div className="flex items-center justify-between -mt-1">
            <label className="flex items-center gap-2 text-slate-300 text-sm cursor-pointer">
              <input type="checkbox" className="accent-cyan-400 w-4 h-4" />
              Remember Me
            </label>

            <a href="/forgot-password" className="text-cyan-400 hover:text-cyan-300 text-sm">
              Forgot Password?
            </a>
          </div>

          <LoadingButton loading={loading} loadingText="Logging In...">
            Login
          </LoadingButton>
        </form>

        <motion.div
          animate={{ rotate: [0, -8, 8, -8, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="flex items-center my-8"
        >
          <div className="flex-1 h-px bg-white/10" />
          <span className="px-4 text-slate-400 text-sm">Or continue with</span>
          <div className="flex-1 h-px bg-white/10" />
        </motion.div>

        <GoogleButton onClick={() => toast("Google sign-in coming soon")} />

        <AuthFooter
          prompt="Don't have an account?"
          linkText="Register"
          linkTo="/register"
          showDivider={false}
        />
      </GlassCard>
    </AuthLayout>
  );
}
