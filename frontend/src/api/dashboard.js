import API from "../services/axios";

export const getDashboard = () => {
    return API.get("/dashboard/");
};