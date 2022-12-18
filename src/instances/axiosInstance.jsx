import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://geo-quiz-api.onrender.com"
})

export default axiosInstance