import axios from "axios";

const key = import.meta.env.VITE_UNSPLASH_API_KEY;

const axiosInstance = axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: `Client-ID ${key}`,
    },
});

export default axiosInstance;
