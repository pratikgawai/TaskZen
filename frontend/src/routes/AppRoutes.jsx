import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import Habits from "../pages/Habits";
import Statistics from "../pages/Statistics";
import Achievements from "../pages/Achievements";
import Profile from "../pages/Profile";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/habits" element={<Habits />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}