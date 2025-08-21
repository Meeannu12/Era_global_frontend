import React, { useState, useEffect } from "react";
import {
  Download,
  RefreshCw,
  Plus,
  BarChart3,
  Search,
  Check,
  AlertCircle,
  Key,
  FileDown,
  KeyIcon,
  FileDownIcon,
  X,
  DollarSign,
} from "lucide-react";
import jsPDF from "jspdf";
import apiService from "../../apis/pinManageServices";
import {
  getDepositTransactionService,
  getPaymentTransactions,
  getWithdrawTransactionService,
  updatePaymentStatus,
} from "../../apis/userServices";
import toast from "react-hot-toast";

const PinManagement = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [withdrawTransaction, setWithdrawTransaction] = useState([]);
  const [depositTransaction, setDepositTransaction] = useState([]);
  const HARD_CODED_USERNAME = "ERA-264363299U";
  const HARD_CODED_PASSWORD = "ADMIN768264ERA";

  const [activeTab, setActiveTab] = useState("generate");
  const [stats, setStats] = useState(null);
  const [pins, setPins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Generate pins state
  const [generateCount, setGenerateCount] = useState(10);
  const [generateResult, setGenerateResult] = useState(null);
  const [authCode, setAuthCode] = useState("");

  // Unused pins state
  const [unusedPins, setUnusedPins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(100);

  // Assign pin to sponsor ID state
  const [sponsorID, setSponsorID] = useState("");
  const [numberOfPins, setNumberOfPins] = useState(1);

  // Handle forget password state
  const [sponsorIDForForgetPassword, setSponsorIDForForgetPassword] =
    useState("");
  const [newPassword, setNewPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // API functions

  const getwithDrawPayments = async () => {
    const response = await getWithdrawTransactionService();
    console.log("response", response);
    setWithdrawTransaction(response.data);
  };

  const getDepositPayments = async () => {
    const response = await getDepositTransactionService();
    console.log("response", response);
    setDepositTransaction(response.data);
  };

  useEffect(() => {
    getwithDrawPayments();
    getDepositPayments();
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await apiService.getStats();
      if (response.success) {
        setStats(response.data);
      } else {
        setMessage(response.message || "Failed to fetch stats");
      }
    } catch (error) {
      setMessage("Error fetching stats: " + error.message);
      console.error("Error fetching stats:", error);
    }
  };

  const handleGeneratePins = async () => {
    if (!authCode.trim()) {
      setMessage("Please enter authorization code");
      return;
    }

    setLoading(true);
    try {
      const response = await apiService.generatePins(generateCount, authCode);
      if (response.success) {
        setGenerateResult(response.data);
        setMessage(`Successfully generated ${response.data.generated} pins!`);
        fetchStats(); // Refresh stats
        setAuthCode(""); // Clear auth code for security
      } else {
        setMessage(response.message || "Failed to generate pins");
      }
    } catch (error) {
      setMessage("Error generating pins: " + error.message);
      console.error("Error:", error);
    }
    setLoading(false);
  };

  const fetchUnusedPins = async (page = 1) => {
    setLoading(true);
    try {
      const response = await apiService.getUnusedPins(page, limit);
      if (response.success) {
        setUnusedPins(response.data.pins);
        setCurrentPage(response.data.pagination.currentPage);
        setTotalPages(response.data.pagination.totalPages);
      } else {
        setMessage(response.message || "Failed to fetch unused pins");
      }
    } catch (error) {
      setMessage("Error fetching unused pins: " + error.message);
    }
    setLoading(false);
  };

  const handleAssignPinToSponsorID = async () => {
    if (!sponsorID || !numberOfPins) {
      setMessage("Please enter sponsor ID and number of pins");
      return;
    }

    setLoading(true);
    try {
      const response = await apiService.assignPinToSponsorIDByAdmin(
        sponsorID,
        numberOfPins
      );
      console.log(response);
      if (response.success) {
        setMessage(response.message || "Successfully assigned pins");
        setSponsorID("");
        setNumberOfPins(1);
        fetchUnusedPins(); // Refresh unused pins
      } else {
        setMessage(response.message || "Failed to assign pins");
      }
    } catch (error) {
      setMessage("Error assigning pins: " + error.message);
    }
    setLoading(false);
  };

  const handleForgetPassword = async () => {
    if (
      !sponsorIDForForgetPassword.trim() ||
      !phoneNumber.trim() ||
      !newPassword.trim()
    ) {
      setMessage("Please enter sponsor ID, phone number, and new password");
      return;
    }

    setLoading(true);
    try {
      const response = await apiService.forgetPassword(
        sponsorIDForForgetPassword,
        phoneNumber,
        newPassword
      );
      if (response.success) {
        setMessage(response.message || "Password reset successfully");
        setSponsorIDForForgetPassword("");
        setPhoneNumber("");
        setNewPassword("");
      } else {
        setMessage(response.message || "Failed to reset password");
      }
    } catch (error) {
      setMessage("Error resetting password: " + error.message);
    }
    setLoading(false);
  };

  const downloadCurrentPagePDF = () => {
    if (unusedPins.length === 0) {
      setMessage("No pins to download");
      return;
    }

    generatePDFContent(unusedPins, `unused-pins-page-${currentPage}`, {
      title: `UNUSED PINS - PAGE ${currentPage}`,
      subtitle: `Generated on: ${new Date().toLocaleDateString()}\nPage ${currentPage} of ${totalPages}`,
      totalCount: unusedPins.length,
    });

    setMessage(`Page ${currentPage} pins downloaded successfully!`);
  };

  const generatePDFContent = (pinsData, filename, metadata) => {
    try {
      // Initialize jsPDF
      const doc = new jsPDF();

      // Set up the document
      let yPosition = 20;
      const pageHeight = 280; // A4 page height in mm minus margins
      const lineHeight = 6;
      const margin = 20;

      // Header
      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      doc.text("PIN MANAGEMENT SYSTEM", margin, yPosition);
      yPosition += 15;

      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text(metadata.title, margin, yPosition);
      yPosition += 10;

      // Subtitle/Info
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      const subtitleLines = metadata.subtitle.split("\n");
      subtitleLines.forEach((line) => {
        doc.text(line, margin, yPosition);
        yPosition += lineHeight;
      });
      yPosition += 5;

      // Pins section header
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text("UNUSED PINS:", margin, yPosition);
      yPosition += 10;

      // Pins content
      doc.setFontSize(9);
      doc.setFont("monospace", "normal"); // Monospace font for pins

      const pinsPerRow = 3;
      const columnWidth = 60;

      pinsData.forEach((pin, index) => {
        // Check if we need a new page
        if (yPosition > pageHeight) {
          doc.addPage();
          yPosition = 20;
        }

        const column = index % pinsPerRow;
        const xPosition = margin + column * columnWidth;

        // If it's the first column of a new row, increment yPosition
        if (column === 0 && index > 0) {
          yPosition += lineHeight;
        }

        doc.text(`${index + 1}. ${pin}`, xPosition, yPosition);
      });

      // Footer
      yPosition += 20;
      if (yPosition > pageHeight) {
        doc.addPage();
        yPosition = 20;
      }

      doc.setFontSize(8);
      doc.setFont("helvetica", "italic");
      doc.text("---", margin, yPosition);
      yPosition += lineHeight;
      doc.text(
        `This report contains ${metadata.totalCount} unused pins.`,
        margin,
        yPosition
      );
      yPosition += lineHeight;
      doc.text("Generated by PIN Management System", margin, yPosition);
      yPosition += lineHeight;
      doc.text(
        `Generated on: ${new Date().toLocaleString()}`,
        margin,
        yPosition
      );

      // Save the PDF
      doc.save(`${filename}-${new Date().toISOString().split("T")[0]}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      // Fallback to text file if PDF generation fails
      const textContent = `PIN MANAGEMENT SYSTEM - ${metadata.title}
      ${metadata.subtitle}

      UNUSED PINS:
      ${pinsData.map((pin, index) => `${index + 1}. ${pin}`).join("\n")}

      ---
      This report contains ${metadata.totalCount} unused pins.
      Generated by PIN Management System
      Generated on: ${new Date().toLocaleString()}
`;

      const blob = new Blob([textContent], { type: "text/plain" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${filename}-${new Date().toISOString().split("T")[0]}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }
  };

  const handleTabClick = (id) => {
    if (
      (id === "unused" ||
        id === "assignPinToSponsorID" ||
        id === "forgetPassword") &&
      !isAuthenticated
    ) {
      setShowLogin(true);
      return;
    }
    setActiveTab(id);
  };

  const handelUpdateStatus = async (id, status, method) => {
    try {
      const data = {
        id,
        status,
        method,
      };
      const response = await updatePaymentStatus(data);
      if (response.success) {
        toast.success(response.message);
        // ✅ Remove from state

        if (method == "deposit") {
          setDepositTransaction((prev) =>
            prev.filter((item) => item._id !== id)
          );
        } else {
          setWithdrawTransaction((prev) =>
            prev.filter((item) => item._id !== id)
          );
        }
      } else {
        toast.error("Internal Server Error");
      }
    } catch (error) {
      toast.error("Error fetching stats: " + error.message);
      console.error("Error fetching stats:", error);
    }
  };

  useEffect(() => {
    if (activeTab === "unused") {
      fetchUnusedPins(1);
    }
  }, [activeTab, limit]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            PIN Management System
          </h1>
          <p className="text-gray-600">
            Generate, manage, and track your PIN codes
          </p>
        </div>

        {/* Message Display */}
        {message && (
          <div
            className={`mb-6 p-4 rounded-lg flex items-center gap-2 ${
              message.includes("Error") ||
              message.includes("Failed") ||
              message.includes("not found") ||
              message.includes("already used")
                ? "bg-red-100 text-red-800 border border-red-200"
                : "bg-green-100 text-green-800 border border-green-200"
            }`}
          >
            {message.includes("Error") ||
            message.includes("Failed") ||
            message.includes("not found") ||
            message.includes("already used") ? (
              <AlertCircle size={20} />
            ) : (
              <Check size={20} />
            )}
            {message}
            <button
              onClick={() => setMessage("")}
              className="ml-auto text-lg font-bold"
            >
              ×
            </button>
          </div>
        )}

        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BarChart3 className="text-blue-600" size={24} />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Total PINs</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {stats.totalPins?.toLocaleString() || 0}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Check className="text-green-600" size={24} />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Used PINs</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {stats.usedPins?.toLocaleString() || 0}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Search className="text-yellow-600" size={24} />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Unused PINs</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {stats.unusedPins?.toLocaleString() || 0}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <BarChart3 className="text-purple-600" size={24} />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Usage Rate</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {stats.usageRate || 0}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-lg mb-6">
          <div className="flex flex-col md:flex-row border-b">
            {[
              { id: "generate", label: "Generate PINs", icon: Plus },
              { id: "unused", label: "Unused PINs", icon: Search },
              {
                id: "assignPinToSponsorID",
                label: "Assign PIN",
                icon: KeyIcon,
              },
              {
                id: "forgetPassword",
                label: "Forget Password",
                icon: FileDownIcon,
              },
              {
                id: "withdraw",
                label: "WithDraw Request",
                icon: DollarSign,
              },
              {
                id: "deposit",
                label: "Deposit Request",
                icon: DollarSign,
              },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleTabClick(id)}
                className={`flex items-center rounded-2xl gap-1 px-2 py-2 m-1 font-medium transition-colors ${
                  activeTab === id
                    ? "text-blue-600 border-2 bg-blue-500/10 border-blue-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <Icon size={17} />
                {label}
              </button>
            ))}
          </div>

          <div className="p-6">
            {/* Generate PINs Tab */}
            {activeTab === "generate" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Authorization Code *
                    </label>
                    <input
                      type="password"
                      value={authCode}
                      onChange={(e) => setAuthCode(e.target.value)}
                      placeholder="Enter authorization code"
                      className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of PINs to Generate
                    </label>
                    <input
                      type="number"
                      value={generateCount}
                      onChange={(e) =>
                        setGenerateCount(
                          Math.max(1, parseInt(e.target.value) || 1)
                        )
                      }
                      className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="1"
                      max="100000"
                    />
                  </div>
                </div>

                <button
                  onClick={handleGeneratePins}
                  disabled={loading || !authCode.trim()}
                  className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <RefreshCw className="animate-spin" size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                  Generate PINs
                </button>

                {generateResult && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium text-gray-800 mb-3">
                      Generation Results
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Generated</p>
                        <p className="font-bold">
                          {generateResult.generated?.toLocaleString() || 0}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Time Taken</p>
                        <p className="font-bold">
                          {generateResult.timeTaken || "N/A"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Success Rate</p>
                        <p className="font-bold">
                          {generateResult.successRate || "N/A"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Total Attempts</p>
                        <p className="font-bold">
                          {generateResult.totalAttempts?.toLocaleString() || 0}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Login Modal */}
            {showLogin && (
              <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
                <div className="bg-white text-black rounded-lg shadow-lg p-8 w-full max-w-xs relative">
                  <button
                    className="absolute top-2 right-2 rounded-full bg-gray-200 hover:bg-gray-200 p-1 transition duration-150"
                    onClick={() => {
                      setShowLogin(false);
                      setLoginUsername("");
                      setLoginPassword("");
                      setLoginError("");
                    }}
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                  <h2 className="text-xl font-bold mb-4 text-center">
                    Login Required
                  </h2>
                  {loginError && (
                    <div className="mb-3 text-red-600 text-sm text-center">
                      {loginError}
                    </div>
                  )}
                  <label htmlFor="username">User ID</label>
                  <input
                    type="text"
                    placeholder="Username"
                    value={loginUsername}
                    onChange={(e) => setLoginUsername(e.target.value)}
                    className="w-full px-3 py-2 text-black mb-3 border border-gray-300 rounded"
                  />
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full px-3 py-2 text-black mb-4 border border-gray-300 rounded"
                  />
                  <button
                    onClick={() => {
                      if (
                        loginUsername === HARD_CODED_USERNAME &&
                        loginPassword === HARD_CODED_PASSWORD
                      ) {
                        setIsAuthenticated(true);
                        setShowLogin(false);
                        setActiveTab("unused");
                        setLoginUsername("");
                        setLoginPassword("");
                        setLoginError("");
                      } else {
                        setLoginError("Invalid credentials. Try again.");
                      }
                    }}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                  >
                    Login
                  </button>
                </div>
              </div>
            )}

            {/* Unused PINs Tab */}
            {activeTab === "unused" && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        PINs per page
                      </label>
                      <select
                        value={limit}
                        onChange={(e) => setLimit(parseInt(e.target.value))}
                        className="px-3 py-2 border border-gray-300 rounded-lg text-white bg-gray-700 focus:ring-2 focus:ring-blue-500"
                      >
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                        <option value={200}>200</option>
                        <option value={500}>500</option>
                        <option value={1000}>1000</option>
                        <option value={2000}>2000</option>
                        <option value={5000}>5000</option>
                        <option value={10000}>10000</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={downloadCurrentPagePDF}
                      disabled={unusedPins.length === 0}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 flex items-center gap-2"
                    >
                      <Download size={20} />
                      Download Page
                    </button>
                  </div>
                </div>

                {loading ? (
                  <div className="flex justify-center py-8">
                    <RefreshCw
                      className="animate-spin text-blue-600"
                      size={32}
                    />
                  </div>
                ) : (
                  <>
                    {/* Pagination */}
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-600">
                        Page {currentPage} of {totalPages}
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => fetchUnusedPins(currentPage - 1)}
                          disabled={currentPage <= 1}
                          className="px-3 py-1 border text-black border-gray-300 rounded disabled:opacity-50 hover:bg-gray-50"
                        >
                          Previous
                        </button>
                        <button
                          onClick={() => fetchUnusedPins(currentPage + 1)}
                          disabled={currentPage >= totalPages}
                          className="px-3 py-1 border text-black border-gray-300 rounded disabled:opacity-50 hover:bg-gray-50"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {unusedPins.map((pin, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 p-3 rounded-lg text-black font-mono text-center hover:bg-gray-100 transition-colors"
                        >
                          {pin}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Assign PIN Tab */}
            {activeTab === "assignPinToSponsorID" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assign PINs to Sponsor
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Sponsor ID
                      </label>
                      <input
                        type="text"
                        value={sponsorID}
                        onChange={(e) => setSponsorID(e.target.value)}
                        placeholder="Enter Sponsor ID"
                        className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Number of PINs
                      </label>
                      <input
                        type="number"
                        value={numberOfPins}
                        onChange={(e) =>
                          setNumberOfPins(
                            Math.max(1, parseInt(e.target.value) || 1)
                          )
                        }
                        className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        min="1"
                        max="1000"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleAssignPinToSponsorID}
                  disabled={loading || !sponsorID.trim()}
                  className="w-full md:w-auto px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <RefreshCw className="animate-spin" size={20} />
                  ) : (
                    <Key size={20} />
                  )}
                  Assign PINs
                </button>
              </div>
            )}

            {/* Forget Password Tab */}
            {activeTab === "forgetPassword" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reset Password for Sponsor
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Sponsor ID
                      </label>
                      <input
                        type="text"
                        value={sponsorIDForForgetPassword}
                        onChange={(e) =>
                          setSponsorIDForForgetPassword(e.target.value)
                        }
                        placeholder="Enter Sponsor ID"
                        className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter Phone Number"
                        className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        New Password
                      </label>
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter New Password"
                        className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleForgetPassword}
                  disabled={
                    loading ||
                    !sponsorIDForForgetPassword.trim() ||
                    !phoneNumber.trim() ||
                    !newPassword.trim()
                  }
                  className="w-full md:w-auto px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <RefreshCw className="animate-spin" size={20} />
                  ) : (
                    <FileDown size={20} />
                  )}
                  Reset Password
                </button>
              </div>
            )}

            {/* Withdraw Status  Tab */}
            {activeTab === "withdraw" && (
              <div className="space-y-6">
                {/* <div className="bg-gray-800 border border-gray-600 rounded-2xl p-6"> */}
                {withdrawTransaction.length === 0 ? (
                  <div className="text-center text-gray-400 py-8">
                    <p>No recent transactions</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full text-sm text-black">
                      <thead>
                        <tr className="border-b border-gray-600">
                          <th className="px-1 py-1">Amount</th>
                          <th className="px-1 py-1">Mode</th>
                          <th className="px-1 py-1">User Id</th>
                          <th className="px-1 py-1">Sender Wallet</th>
                          <th className="px-1 py-1">Receive Wallet</th>
                          <th className="px-1 py-1">Status</th>
                          <th className="px-1 py-1">Date</th>
                          <th className="px-1 py-1 text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {withdrawTransaction.map((tx) => (
                          <tr key={tx._id} className="border-b border-gray-700">
                            <td className="px-1 py-1 text-center">
                              {tx.amount}
                            </td>
                            <td className="px-1 py-1 text-center">{tx.mode}</td>
                            <td className="px-1 py-1 text-center">
                              <div className="">
                                {tx.sponsorID} {tx?.user?.username}
                              </div>
                            </td>

                            <td className="px-1 py-1 text-center">
                              {tx.senderWallet}
                            </td>
                            <td className="px-1 py-1 text-center">
                              {tx.receiveWallet}
                            </td>
                            <td className="px-1 py-1 text-center">
                              {tx.verficationStatus}
                            </td>
                            <td className="px-1 py-1 text-center">
                              {new Date(tx.createdAt).toLocaleString()}
                            </td>
                            <td className="px-1 py-1 flex gap-2 justify-center">
                              <button
                                onClick={() =>
                                  handelUpdateStatus(
                                    tx._id,
                                    "Verified",
                                    "Withdraw"
                                  )
                                }
                                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                              >
                                Verify
                              </button>
                              <button
                                onClick={() =>
                                  handelUpdateStatus(
                                    tx._id,
                                    "Rejected",
                                    "Withdraw"
                                  )
                                }
                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                              >
                                Reject
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
              // </div>
            )}

            {/* deposit Status  Tab */}
            {activeTab === "deposit" && (
              <div className="space-y-6">
                {depositTransaction.length === 0 ? (
                  <div className="text-center text-gray-400 py-8">
                    <p>No recent transactions</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full text-sm text-black">
                      <thead>
                        <tr className="border-b border-gray-600">
                          <th className="px-1 py-1">Amount</th>
                          <th className="px-1 py-1">Mode</th>
                          <th className="px-1 py-1">User Id</th>
                          <th className="px-1 py-1">Sender Wallet</th>
                          <th className="px-1 py-1">Receive Wallet</th>
                          <th className="px-1 py-1">Status</th>
                          <th className="px-1 py-1">Date</th>
                          <th className="px-1 py-1 text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {depositTransaction.map((tx) => (
                          <tr key={tx._id} className="border-b border-gray-700">
                            <td className="px-1 py-1 text-center">
                              {tx.amount}
                            </td>
                            <td className="px-1 py-1 text-center">{tx.mode}</td>
                            <td className="px-1 py-1 text-center">
                              <div className="">
                                {tx.sponsorID} {tx?.user?.username}
                              </div>
                            </td>
                            <td className="px-1 py-1 text-center">
                              {tx.senderWallet}
                            </td>
                            <td className="px-1 py-1 text-center">
                              {tx.receiveWallet}
                            </td>
                            <td className="px-1 py-1 text-center">
                              {tx.verficationStatus}
                            </td>
                            <td className="px-1 py-1 text-center">
                              {new Date(tx.createdAt).toLocaleString()}
                            </td>
                            <td className="px-1 py-1 flex gap-2 justify-center">
                              <button
                                onClick={() =>
                                  handelUpdateStatus(
                                    tx._id,
                                    "Verified",
                                    "deposit"
                                  )
                                }
                                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                              >
                                Verify
                              </button>
                              <button
                                onClick={() =>
                                  handelUpdateStatus(
                                    tx._id,
                                    "Rejected",
                                    "deposit"
                                  )
                                }
                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                              >
                                Reject
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinManagement;
