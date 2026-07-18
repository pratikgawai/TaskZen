import { useState } from "react";

export default function ForgotPassword() {

  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-[#071329] flex items-center justify-center p-5">

      <div className="w-full max-w-md bg-white/5 border border-cyan-400/20 rounded-3xl backdrop-blur-xl p-8">

        <h1 className="text-3xl font-bold text-white text-center">
          Forgot Password
        </h1>

        <p className="text-slate-400 text-center mt-2 mb-8">
          Enter your registered email
        </p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full rounded-xl bg-white/5 border border-white/10 p-4 text-white"
        />

        <button
          className="w-full mt-6 rounded-xl py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold"
        >
          Send OTP
        </button>

      </div>

    </div>
  );
}