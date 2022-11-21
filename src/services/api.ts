import axios from "axios";

const Api = axios.create({
  baseURL: "https://...",
});

Api.interceptors.request.use((config: any) => {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error: any) {
  }
});

export default Api;