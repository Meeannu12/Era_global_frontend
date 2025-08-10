import { useState, useEffect } from "react";
import {
  Key,
  RefreshCw,
  History,
  Send,
  ArrowUpDown,
  User,
  Calendar,
  Hash,
} from "lucide-react";
import { toast } from "react-hot-toast";
import { useAuth } from "../../context/authContext";
import apiService from "../../apis/pinManageServices";

const PinManagement = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("assign");
  const [sponsorID, setSponsorID] = useState("");
  const [numberOfPins, setNumberOfPins] = useState(1);
  const [loading, setLoading] = useState(false);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [pinHistory, setPinHistory] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreHistory, setHasMoreHistory] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);

  const handleAssignPins = async () => {
    if (!sponsorID.trim() || numberOfPins < 1) {
      toast.error("Please enter valid sponsor ID and number of pins");
      return;
    }

    setLoading(true);
    try {
      const response = await apiService.assignPinToSponsorID(
        sponsorID,
        numberOfPins
      );

      if (response.success) {
        toast.success(
          response.message ||
            `Successfully assigned ${numberOfPins} PINs to ${sponsorID}`
        );
        setSponsorID("");
        setNumberOfPins(1);

        if (activeTab === "history") {
          fetchPinHistory(true);
        }
      } else {
        toast.error(response.message || "Failed to assign PINs");
      }
    } catch (error) {
      console.error("Error assigning pins:", error);
      toast.error(
        "Error assigning pins: " + (error.message || "Please try again")
      );
    }
    setLoading(false);
  };

  const fetchPinHistory = async (reset = false) => {
    if (!user?.sponsorID) {
      toast.error("User sponsor ID not found");
      return;
    }

    const currentPage = reset ? 1 : page;

    if (reset) {
      setPage(1);
      setPinHistory([]);
      setHasMoreHistory(true);
    }

    setHistoryLoading(true);
    try {
      const response = await apiService.getPinHistory(currentPage, 10);

      if (response.success) {
        const newHistory = response.data || [];

        if (reset) {
          setPinHistory(newHistory);
        } else {
          setPinHistory((prev) => [...prev, ...newHistory]);
        }

        setPage(currentPage + 1);
        setHasMoreHistory(newHistory.length === 10);
      } else {
        toast.error(response.message || "Failed to fetch PIN history");
        if (reset) setPinHistory([]);
      }
    } catch (error) {
      console.error("Error fetching pin history:", error);
      toast.error(
        "Failed to fetch PIN history: " + (error.message || "Please try again")
      );
      if (reset) setPinHistory([]);
    }
    setHistoryLoading(false);
    setInitialLoad(false);
  };

  useEffect(() => {
    if (activeTab === "history" && initialLoad) {
      fetchPinHistory(true);
    }
  }, [activeTab, user?.sponsorID]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getTransactionIcon = (type) => {
    return type === "SEND" ? (
      <Send className="w-4 h-4 text-red-400" />
    ) : (
      <ArrowUpDown className="w-4 h-4 text-green-400" />
    );
  };

  const getTransactionColor = (type) => {
    return type === "SEND"
      ? "text-red-400 bg-red-400/10 border-red-400/20"
      : "text-green-400 bg-green-400/10 border-green-400/20";
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-purple-600 rounded-lg">
              <Key className="w-6 h-6" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              PIN Management
            </h1>
          </div>
          <p className="text-gray-400">
            Assign PINs to users and track transaction history
          </p>
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-800 rounded-lg p-1 mb-6">
          <button
            onClick={() => setActiveTab("assign")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md text-sm font-medium transition-all ${
              activeTab === "assign"
                ? "bg-purple-600 text-white shadow-lg"
                : "text-gray-400 hover:text-white hover:bg-gray-700"
            }`}>
            <Key className="w-4 h-4" />
            Assign PINs
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md text-sm font-medium transition-all ${
              activeTab === "history"
                ? "bg-purple-600 text-white shadow-lg"
                : "text-gray-400 hover:text-white hover:bg-gray-700"
            }`}>
            <History className="w-4 h-4" />
            History
          </button>
        </div>

        {/* Content */}
        {activeTab === "assign" ? (
          <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Send className="w-5 h-5 text-purple-400" />
                  Assign PINs to Sponsor
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Sponsor ID
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        value={sponsorID}
                        onChange={(e) => setSponsorID(e.target.value)}
                        placeholder="Enter Sponsor ID"
                        className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Number of PINs
                    </label>
                    <div className="relative">
                      <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="number"
                        value={numberOfPins}
                        onChange={(e) => {
                          const val = parseInt(e.target.value) || 1;
                          setNumberOfPins(Math.min(1000, Math.max(1, val)));
                        }}
                        className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white transition-all"
                        min="1"
                        max="1000"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleAssignPins}
                disabled={loading || !sponsorID.trim()}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-medium transition-all transform hover:scale-[1.02] disabled:hover:scale-100">
                {loading ? (
                  <RefreshCw className="animate-spin w-5 h-5" />
                ) : (
                  <Key className="w-5 h-5" />
                )}
                {loading ? "Assigning PINs..." : "Assign PINs"}
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <History className="w-5 h-5 text-purple-400" />
                PIN Transaction History
              </h2>
              <button
                onClick={() => fetchPinHistory(true)}
                disabled={historyLoading}
                className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all border border-gray-600">
                <RefreshCw
                  className={`w-4 h-4 ${historyLoading ? "animate-spin" : ""}`}
                />
              </button>
            </div>

            <div className="space-y-3">
              {pinHistory.length === 0 && !historyLoading && !initialLoad ? (
                <div className="text-center py-12 text-gray-400">
                  <History className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No PIN transaction history found</p>
                </div>
              ) : (
                pinHistory.map((transaction) => {
                  const isSend = transaction.fromUserID?._id === user._id;
                  const isReceive = transaction.toUserID?._id === user._id;
                  return (
                    <div
                      key={transaction._id}
                      className="bg-gray-700 rounded-lg p-4 border border-gray-600 hover:border-gray-500 transition-all">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          <div className="p-2 bg-gray-600 rounded-lg">
                            {isSend
                              ? getTransactionIcon("SEND")
                              : getTransactionIcon("RECEIVE")}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-medium">
                              {isSend &&
                                `You sent ${transaction.pinQuantity} PINs to ${
                                  transaction.toUserID?.username
                                } (${
                                  transaction.toUserID?.phoneNumber ||
                                  transaction.toUserID?.phone
                                })`}
                              {isReceive &&
                                `You received ${
                                  transaction.pinQuantity
                                } PINs from ${
                                  transaction.fromUserID?.username
                                } (${
                                  transaction.fromUserID?.phoneNumber ||
                                  transaction.fromUserID?.phone
                                })`}
                            </div>
                          </div>
                        </div>
                        <div className="text-right ml-4">
                          <div
                            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${
                              isSend
                                ? getTransactionColor("SEND")
                                : getTransactionColor("RECEIVE")
                            }`}>
                            {isSend
                              ? getTransactionIcon("SEND")
                              : getTransactionIcon("RECEIVE")}
                          </div>
                          <div className="text-right mt-2">
                            <div className="text-lg font-bold text-white">
                              {transaction.pinQuantity} PINs
                            </div>
                            <div className="text-xs text-gray-400 flex items-center gap-1 justify-end">
                              <Calendar className="w-3 h-3" />
                              {formatDate(transaction.createdAt)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}

              {historyLoading && (
                <div className="flex justify-center py-6">
                  <RefreshCw className="animate-spin w-6 h-6 text-purple-400" />
                </div>
              )}

              {hasMoreHistory && !historyLoading && pinHistory.length > 0 && (
                <button
                  onClick={() => fetchPinHistory()}
                  className="w-full py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all border border-gray-600">
                  Load More History
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PinManagement;
