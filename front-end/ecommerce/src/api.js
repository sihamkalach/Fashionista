import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/", // Backend API URL
  timeout: 5000, // Optional timeout for requests
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;