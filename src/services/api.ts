import axios from "axios";

const Api = axios.create({
<<<<<<< HEAD
  // baseURL: "https://back-btc-finance-tool-production.up.railway.app", (antigo backend)
=======
>>>>>>> 726e3101515bddef479410b77b1c695f399a49b1
  baseURL: "https://back-btc-finance-tool-production-0df0.up.railway.app",
});

Api.interceptors.request.use((config: any) => {
  try {
    const token = sessionStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error: any) {
  }
});

export default Api;