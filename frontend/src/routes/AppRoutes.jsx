import Landing from "../pages/Landing";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import Habits from "../pages/Habits";
import Statistics from "../pages/Statistics";
import Achievements from "../pages/Achievements";
import Profile from "../pages/Profile";
import ForgotPassword from "../pages/ForgotPassword";

export default function AppRoutes() {

  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.35,
      }}
    >
      <Routes location={location}>

       <Route path="/" element={<Landing />} />
<Route path="/login" element={<Login />} />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/tasks"
          element={<Tasks />}
        />

        <Route
          path="/habits"
          element={<Habits />}
        />

        <Route
          path="/statistics"
          element={<Statistics />}
        />

        <Route
          path="/achievements"
          element={<Achievements />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>

      </Routes>
    </motion.div>
  );
}