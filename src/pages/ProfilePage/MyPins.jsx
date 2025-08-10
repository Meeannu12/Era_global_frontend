import React, { useEffect } from "react";
import toast from "react-hot-toast";
import {
  Key,
  CheckCircle,
  XCircle,
  TrendingUp,
  Copy,
  Eye,
  EyeOff,
  RefreshCw,
  BarChart3,
  Shield,
  Clock,
  Hash,
} from "lucide-react";
import { useAuth } from "../../context/authContext";
import AXIOS from "../../lib/axiosInstance";
import { useNavigate } from "react-router-dom";

const MyPins = () => {
  const { user } = useAuth();
  const [pins, setPins] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [usedPins, setUsedPins] = React.useState(0);
  const [error, setError] = React.useState(null);
  const [totalPins, setTotalPins] = React.useState(0);
  const [visiblePins, setVisiblePins] = React.useState(new Set());
  const [refreshing, setRefreshing] = React.useState(false);
  const navigate = useNavigate();

  const fetchPins = async () => {
    try {
      setLoading(true);
      const response = await AXIOS.get(`/api/v1/pins/${user.sponsorID}`);

      if (response) {
        setPins(response.data.data.pins);
        setTotalPins(response.data.data.totalPins);
        setUsedPins(response.data.data.usedPins);
      }
    } catch (error) {
      toast.error("Failed to fetch pins. Please try again later.");
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchPins();
    setRefreshing(false);
    toast.success("Pins refreshed successfully!");
  };

  const togglePinVisibility = (pinId) => {
    const newVisiblePins = new Set(visiblePins);
    if (newVisiblePins.has(pinId)) {
      newVisiblePins.delete(pinId);
    } else {
      newVisiblePins.add(pinId);
    }
    setVisiblePins(newVisiblePins);
  };

  const copyToClipboard = async (pinValue) => {
    try {
      await navigator.clipboard.writeText(pinValue);
      toast.success("PIN copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy PIN");
    }
  };

  const maskPin = (pin) => {
    return "*".repeat(pin.length - 2) + pin.slice(-2);
  };

  useEffect(() => {
    fetchPins();
  }, [user.sponsorID]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw
            className="animate-spin text-blue-400 mx-auto mb-4"
            size={48}
          />
          <p className="text-gray-300 text-lg">Loading your PINs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-8 max-w-md w-full text-center">
          <XCircle className="text-red-400 mx-auto mb-4" size={48} />
          <h2 className="text-red-400 text-xl font-bold mb-2">
            Error Loading PINs
          </h2>
          <p className="text-gray-300 mb-4">{error.message}</p>
          <button
            onClick={fetchPins}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors duration-200">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const unusedPins = totalPins - usedPins;
  const usagePercentage =
    totalPins > 0 ? ((usedPins / totalPins) * 100).toFixed(1) : 0;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-6 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                My PINs
              </h1>
              <p className="text-gray-300 mt-2">
                Welcome back,{" "}
                <span className="text-blue-400 font-semibold">
                  {user?.name || user?.sponsorID}
                </span>
              </p>
            </div>
            <button
              onClick={() => navigate("/profile/assign-pins")}
              disabled={refreshing}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 transform hover:scale-105">
              Assign Pins
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Total PINs</p>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {totalPins.toLocaleString()}
                </p>
              </div>
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <Hash className="text-blue-400" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Used PINs</p>
                <p className="text-2xl sm:text-3xl font-bold text-green-400 mt-1">
                  {usedPins.toLocaleString()}
                </p>
              </div>
              <div className="bg-green-500/20 p-3 rounded-lg">
                <CheckCircle className="text-green-400" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">
                  Available PINs
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-yellow-400 mt-1">
                  {unusedPins.toLocaleString()}
                </p>
              </div>
              <div className="bg-yellow-500/20 p-3 rounded-lg">
                <Key className="text-yellow-400" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Usage Rate</p>
                <p className="text-2xl sm:text-3xl font-bold text-purple-400 mt-1">
                  {usagePercentage}%
                </p>
              </div>
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <TrendingUp className="text-purple-400" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Usage Progress Bar */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">
              PIN Usage Overview
            </h3>
            <span className="text-sm text-gray-400">
              {usagePercentage}% Used
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${usagePercentage}%` }}></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>0</span>
            <span>{totalPins}</span>
          </div>
        </div>

        {/* PINs List */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
          <div className="bg-gray-800 border-b border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Shield className="text-blue-400" size={24} />
                Your PINs ({pins?.length || 0})
              </h2>
            </div>
          </div>

          {pins?.length > 0 ? (
            <div className="divide-y divide-gray-700">
              {pins.map((pin, index) => {
                const isVisible = visiblePins.has(pin._id);
                const isUsed = pin.status === "used" || pin.isUsed;

                return (
                  <div
                    key={pin._id}
                    className={`p-4 sm:p-6 hover:bg-gray-750 transition-all duration-200 ${
                      isUsed ? "opacity-60" : ""
                    }`}>
                    <div className="flex sm:flex-row justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="text-gray-400 text-sm font-medium">
                            PIN:
                          </span>
                          <code className="bg-gray-900 border border-gray-600 px-3 py-2 rounded-lg font-mono text-lg text-white tracking-wider">
                            {isVisible ? pin.pin : maskPin(pin.pin)}
                          </code>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => togglePinVisibility(pin._id)}
                          className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
                          title={isVisible ? "Hide PIN" : "Show PIN"}>
                          {isVisible ? (
                            <EyeOff className="text-gray-300" size={18} />
                          ) : (
                            <Eye className="text-gray-300" size={18} />
                          )}
                        </button>

                        <button
                          onClick={() => copyToClipboard(pin.pin)}
                          className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                          title="Copy PIN">
                          <Copy className="text-white" size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-12 text-center">
              <Key className="text-gray-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">
                No PINs Found
              </h3>
              <p className="text-gray-500">
                You don't have any PINs assigned yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPins;
