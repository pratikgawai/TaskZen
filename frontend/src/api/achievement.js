import API from "../services/axios";

export const getAchievements = () =>
  API.get("/achievement/");