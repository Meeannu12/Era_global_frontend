import AXIOS from "../lib/axiosInstance";

export const register = async (data) => {
  try {
    const response = await AXIOS.post("/api/v1/auth/register", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (sponsorID, password) => {
  try {
    const response = await AXIOS.post("/api/v1/auth/login", {
      sponsorID: sponsorID,
      password: password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logoutService = async () => {
  try {
    const response = await AXIOS.post("/api/v1/auth/logout");
    return response.data;
  } catch (error) {
    throw error;
  }
};
