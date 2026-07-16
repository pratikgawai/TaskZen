import API from "../services/axios";

export const getTasks = () => API.get("/task/");

export const createTask = (data) => API.post("/task/", data);

export const updateTask = (id, data) =>
  API.put(`/task/${id}`, data);

export const deleteTask = (id) =>
  API.delete(`/task/${id}`);