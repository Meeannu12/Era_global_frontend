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


export const getAllUsers = async (page, limit) => {
  try {
    const response = await AXIOS.get(`/api/v1/users/allUser?page=${page}&limit=${limit}`)
    return response.data
  } catch (error) {
    throw error
  }
}

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

// get user Deposit request by user wiht sponsorId
export const getAllDepositRequestByUserId = async ({
  sponsorID,
  limit,
  page,
}) => {
  try {
    const response = await AXIOS.get(
      `/api/v1/payment/getDepositHistorybyUser/${sponsorID}?limit=${limit}&page=${page}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// get user withdraw request by user wiht sponsorId
export const getAllWithdrawRequestByUserId = async ({
  sponsorID,
  limit,
  page,
}) => {
  try {
    const response = await AXIOS.get(
      `/api/v1/payment/getWithdrawalHistorybyUser/${sponsorID}?limit=${limit}&page=${page}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// get user withdraw request by user wiht sponsorId
export const getAllEarningCommissionByUserId = async ({
  sponsorID,
  limit,
  page,
}) => {
  try {
    const response = await AXIOS.get(
      `/api/v1/payment/getCommissionHistoryToDay/${sponsorID}?limit=${limit}&page=${page}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// get user withdraw request by user wiht sponsorId
export const getTeamIncomeBySponsorID = async ({ sponsorID }) => {
  try {
    const response = await AXIOS.get(
      `/api/v1/users/getTeamIncomFindByUser/${sponsorID}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTaskClaim = async (data) => {
  try {
    const response = await AXIOS.post("/api/v1/users/addTaskClaim", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};



export const addCalculateRewarincome = async (id) => {
  try {
    const response = await AXIOS.get(`/api/v1/users/addCalculateRewarincome/${id}`);
    return response.data;

  } catch (error) {
    throw error;
  }
}

export const getWalletDetails = async () => {
  try {
    const response = await AXIOS.get("/api/v1/payment/getWalletDetails");
    return response.data;
  } catch (error) {
    throw error;
  }
};


