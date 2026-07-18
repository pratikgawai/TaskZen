import API from "../services/axios";

export const getTasks = () => API.get("/task/all");

export const createTask = (data) =>
  API.post("/task/create", data);

export const updateTask = (id, data) =>
  API.put(`/task/update/${id}`, data);

export const deleteTask = (id) =>
  API.delete(`/task/delete/${id}`);

export const completeTask = (id) =>
  API.patch(`/task/complete/${id}`);

