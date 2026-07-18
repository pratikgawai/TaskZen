import API from "../services/axios";

export const getStatistics = () =>
  API.get("/stats/");