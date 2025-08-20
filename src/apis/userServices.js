import AXIOS from "../lib/axiosInstance";

export const editUserProfile = async (data) => {
  try {
    const response = await AXIOS.put("/api/v1/users/edit-profile", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (data) => {
  try {
    const response = await AXIOS.put("/api/v1/users/change-password", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async () => {
  try {
    const response = await AXIOS.get("/api/v1/users/me");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const activePinService = async (data) => {
  try {
    const response = await AXIOS.post("/api/v1/pins/active-pin", { pin: data });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addDepositService = async (data) => {
  try {
    const response = await AXIOS.post("/api/v1/payment/addDeposit", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addWithdrawService = async (data) => {
  try {
    const response = await AXIOS.post("/api/v1/payment/addWithdraw", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getWithdrawTransactionService = async (data) => {
  try {
    const response = await AXIOS.get(
      "/api/v1/payment/getWithdrawalTransaction",
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePaymentStatus = async (data) => {
  try {
    const response = await AXIOS.post(
      `/api/v1/payment/updatePaymentStatus/${data.id}`,
      { status: data.status, method: data.method }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDepositTransactionService = async (data) => {
  try {
    const response = await AXIOS.get(
      "/api/v1/payment/getDepositTransaction",
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPaymentTransactions = async () => {
  try {
    const response = await AXIOS.get("/api/v1/payment/getTransactionsByUser");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserCount = async ({ sponsorID }) => {
  try {
    const response = await AXIOS.get(`/api/v1/users/${sponsorID}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getReferralCountByLevel = async ({ sponsorID }) => {
  try {
    const response = await AXIOS.get(`/api/v1/users/level/${sponsorID}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllUserSponsorBySponsorID = async ({
  sponsorID,
  limit,
  page,
}) => {
  try {
    const response = await AXIOS.get(
      `/api/v1/users/sponsor/${sponsorID}?limit=${limit}&page=${page}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const walletAddress = async (data) => {
  try {
    const response = await AXIOS.post("/api/v1/users/addWalletAddress", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
