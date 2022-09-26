import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://geo-quiz-api.herokuapp.com"
})

export default axiosInstance