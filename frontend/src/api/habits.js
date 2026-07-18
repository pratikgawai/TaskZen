import API from "../services/axios";

export const getHabits = () =>
  API.get("/habit/all");

export const createHabit = (data) =>
  API.post("/habit/create", data);

export const updateHabit = (id, data) =>
  API.put(`/habit/update/${id}`, data);

export const deleteHabit = (id) =>
  API.delete(`/habit/delete/${id}`);

export const completeHabit = (id) =>
  API.patch(`/habit/complete/${id}`);