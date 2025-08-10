import AXIOS from "../lib/axiosInstance";

const apiService = {
  generatePins: async (count, code) => {
    try {
      const response = await AXIOS.post("/api/v1/pins/generate", {
        count,
        authCode: code,
      });
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to generate pins"
      );
    }
  },

  getStats: async () => {
    try {
      const response = await AXIOS.get("/api/v1/pins/stats");

      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch stats");
    }
  },

  getUnusedPins: async (page, limit) => {
    try {
      const response = await AXIOS.get(
        `/api/v1/pins/unused?page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch unused pins");
    }
  },

  assignPinToSponsorID: async (id, pin) => {
    try {
      const response = await AXIOS.put("/api/v1/pins/assign", {
        sponsorID: id,
        numberOfPins: pin,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to assign pin");
    }
  },

  assignPinToSponsorIDByAdmin: async (id, pin) => {
    try {
      const response = await AXIOS.put("/api/v1/pins/assignByAdmin", {
        sponsorID: id,
        numberOfPins: pin,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to assign pin");
    }
  },

  getPinHistory: async (page = 1, limit = 10) => {
    try {
      const response = await AXIOS.get(
        `/api/v1/pins-history?page=${page}&limit=${limit}`
      );
      console.log("response", response);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to get pin history"
      );
    }
  },

  forgetPassword: async (sponsorID, phoneNumber, newPassword) => {
    try {
      const response = await AXIOS.put("/api/v1/users/forget-password", {
        sponsorID,
        phone: phoneNumber,
        password: newPassword,
      });
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to process forget password"
      );
    }
  },
};

export default apiService;
