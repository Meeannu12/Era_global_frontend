import axios from "axios";

// Create instance
const AXIOS = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Response interceptor for global error handling
AXIOS.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Handle 401/403 globally (optional: redirect to login)
      if (error.response.status === 401 || error.response.status === 403) {
        // Optionally clear user state or redirect
        // window.location.href = "/signin";
      }
    }
    return Promise.reject(error);
  }
);

export default AXIOS;
