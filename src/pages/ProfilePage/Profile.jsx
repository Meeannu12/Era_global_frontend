import {
  Hash,
  Heart,
  Settings,
  ChevronRight,
  User,
  DollarSign,
  TrendingUp,
  Download,
  MessageCircle,
  Sparkles,
  Copy,
  CheckCircle,
  ChevronDown,
  Power,
  X,
  Save,
  Eye,
  EyeOff,
  Edit,
  Lock,
  PinIcon,
} from "lucide-react";
import React, { useState } from "react";
import {
  changePassword,
  editUserProfile,
  walletAddress,
} from "../../apis/userServices";
import { useAuth } from "../../context/authContext";
import Contact from "../BonusPage/Contact";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Profile = () => {
  const [copiedId, setCopiedId] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showWalletAddressModal, setShowWalletAddressModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useAuth();

  // Form states
  const [editForm, setEditForm] = useState({
    username: user.username || "",
    email: user.email || "",
    walletAddress: user.walletAddress || "",
  });

  const [passwordForm, setPasswordForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const copyUserId = () => {
    navigator.clipboard.writeText(user.sponsorID);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  // API call for editing profile
  const handleEditProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await editUserProfile({
        username: editForm.username || user.username,
        email: editForm.email || user.email,
      });

      if (response.success) {
        toast.success("Profile updated successfully!");
        setShowEditModal(false);
        setEditForm({ username: "", email: "" });
      } else {
        toast.error(data.message || "Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(error.response.data.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }

    if (passwordForm.newPassword.length < 6) {
      toast.error("New password must be at least 8 characters long");
      return;
    }

    setLoading(true);

    try {
      const response = await changePassword({
        oldPassword: passwordForm.oldPassword,
        newPassword: passwordForm.newPassword,
      });

      if (response.success) {
        toast.success("Password changed successfully!");
        setShowPasswordModal(false);
        setPasswordForm({
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      console.error("Error changing password:", error);
      toast.error(error.response.data.message || "Failed to change password");
    } finally {
      setLoading(false);
    }
  };

  const sendWalletAddress = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // const response = await AXIOS.get(`/api/v1/users/${user.sponsorID}`);
      const response = await walletAddress({
        walletAddress: editForm.walletAddress || user.walletAddress,
      });

      if (response.success) {
        toast.success(response.message);
        setUser(response.user);
      } else {
        toast.error(data.message || "Failed to update profile");
      }
    } catch (error) {
      toast.error("Failed to fetch pins. Please try again later.");
      // setError(error);
    } finally {
      setLoading(false);
      setShowWalletAddressModal(false);
      setEditForm({ walletAddress: "" });
    }
  };

  const handleMenuClick = (index) => {
    if (index === 0) {
      // General Settings - Edit Profile
      setEditForm({
        username: user.username || "",
        email: user.email || "",
      });
      setShowEditModal(true);
    } else if (index === 1) {
      // update Wallet Address
      setShowWalletAddressModal(true);
    } else {
      // Change Password
      setShowPasswordModal(true);
    }
    // Handle wallet address (index 1) separately if needed
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const stats = [
    {
      title: "Investment",
      amount: "$ 0.00",
      icon: <DollarSign className="w-4 h-4 sm:w-5 sm:h-5" />,
      gradient: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      title: "Earning",
      amount: "$ 0.00",
      icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />,
      gradient: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
    },
    {
      title: "Withdrawal",
      amount: "$ 0.00",
      icon: <Download className="w-4 h-4 sm:w-5 sm:h-5" />,
      gradient: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
  ];

  const menuItems = [
    {
      name: "General Settings",
      subTitle: "Edit your profile information",
      icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6" />,
      iconColor: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      name: "Your Wallet Address",
      subTitle: "View your wallet details",
      icon: <Hash className="w-5 h-5 sm:w-6 sm:h-6" />,
      iconColor: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
    },
    {
      name: "Change Password",
      subTitle: "Update your account password",
      icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6" />,
      iconColor: "text-pink-400",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20",
    },
  ];

  const handelCancelPopUp = () => {
    setShowWalletAddressModal(false);
    setEditForm({ walletAddress: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 p-3 sm:p-6">
      {/* Profile Header Card */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800 shadow-2xl shadow-purple-900/50 mb-6 sm:mb-8 border border-slate-700/50">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        </div>

        {/* Sparkle Effects */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 animate-pulse" />
        </div>

        <div className="relative z-10 p-4 sm:p-8">
          {/* User Info Section */}
          <div className="text-center mb-6">
            <div className="inline-block mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30 mx-auto">
                <User className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <h1 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  {user.sponsorID}
                </h1>
                <button
                  onClick={copyUserId}
                  className="p-1.5 sm:p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition-all duration-200 group"
                >
                  {copiedId ? (
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  ) : (
                    <Copy className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400 group-hover:text-white" />
                  )}
                </button>
              </div>
              <p className="text-slate-300 text-base sm:text-lg font-medium mb-3">
                {user.username}
              </p>
            </div>

            {/* Support Button */}
            <button className="w-full sm:w-auto group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-amber-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
              SUPPORT
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-slate-800/40 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-slate-700/50 p-2 sm:p-5 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${stat.bgColor} ${stat.iconColor} border ${stat.borderColor} mb-2 sm:mb-3`}
                  >
                    {stat.icon}
                  </div>
                  <h3 className="text-lg sm:text-3xl font-bold text-white mb-1 group-hover:text-purple-200 transition-colors duration-300">
                    {stat.amount}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm font-medium">
                    {stat.title}
                  </p>
                  <div className="mt-2 sm:mt-3 w-full bg-slate-700/30 rounded-full h-0.5 sm:h-1">
                    <div
                      className={`h-0.5 sm:h-1 bg-gradient-to-r ${stat.gradient} rounded-full w-0 group-hover:w-3 transition-all duration-500`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="group bg-slate-800/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 cursor-pointer overflow-hidden hover:border-slate-600/50 mb-6 sm:mb-8">
        <Link to="/profile/my-pins" className="block">
          <div className="flex items-center justify-between p-4 sm:p-6">
            <div className="flex items-center space-x-3 sm:space-x-4 flex-1">
              <div
                className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border  shadow-lg group-hover:scale-110 transition-all duration-300 flex-shrink-0`}
              >
                <PinIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-white text-base sm:text-lg group-hover:text-purple-200 transition-colors duration-300 truncate">
                  My Pins
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 group-hover:text-slate-300 transition-colors duration-300">
                  View and manage your pins
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-white group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-all duration-300" />
            </div>
          </div>
        </Link>
      </div>

      {/* Menu Section */}
      <div className="space-y-3 sm:space-y-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="group bg-slate-800/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 cursor-pointer overflow-hidden hover:border-slate-600/50"
            onClick={() => handleMenuClick(index)}
          >
            <div className="flex items-center justify-between p-4 sm:p-6">
              <div className="flex items-center space-x-3 sm:space-x-4 flex-1">
                <div
                  className={`p-3 sm:p-4 rounded-lg sm:rounded-xl ${item.bgColor} ${item.iconColor} border ${item.borderColor} shadow-lg group-hover:scale-110 transition-all duration-300 flex-shrink-0`}
                >
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white text-base sm:text-lg group-hover:text-purple-200 transition-colors duration-300 truncate">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 group-hover:text-slate-300 transition-colors duration-300">
                    {item.subTitle}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-white group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-all duration-300" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Profile Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Edit className="w-5 h-5 text-blue-400" />
                Edit Profile
              </h2>
              <button
                onClick={() => setShowEditModal(false)}
                className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={editForm.username}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      username: e.target.value,
                    }))
                  }
                  placeholder={user.username}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={editForm.email}
                  onChange={(e) =>
                    setEditForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder={user.email}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 py-3 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleEditProfile}
                  disabled={loading}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Wallet Address Modal */}
      {showWalletAddressModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Hash className="w-5 h-5 text-emerald-400" />
                Wallet Address
              </h2>
              <button
                onClick={handelCancelPopUp}
                className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Wallet Address
                </label>
                <input
                  type="text"
                  value={editForm.walletAddress}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      walletAddress: e.target.value,
                    }))
                  }
                  placeholder={user?.walletAddress}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handelCancelPopUp}
                  className="flex-1 py-3 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={sendWalletAddress}
                  disabled={loading}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Change Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-pink-400" />
                Change Password
              </h2>
              <button
                onClick={() => setShowPasswordModal(false)}
                className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            <form onSubmit={handleChangePassword} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showPasswords.old ? "text" : "password"}
                    value={passwordForm.oldPassword}
                    onChange={(e) =>
                      setPasswordForm((prev) => ({
                        ...prev,
                        oldPassword: e.target.value,
                      }))
                    }
                    required
                    className="w-full px-4 py-3 pr-12 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-pink-400 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("old")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    {showPasswords.old ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPasswords.new ? "text" : "password"}
                    value={passwordForm.newPassword}
                    onChange={(e) =>
                      setPasswordForm((prev) => ({
                        ...prev,
                        newPassword: e.target.value,
                      }))
                    }
                    required
                    minLength={6}
                    className="w-full px-4 py-3 pr-12 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-pink-400 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("new")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    {showPasswords.new ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={showPasswords.confirm ? "text" : "password"}
                    value={passwordForm.confirmPassword}
                    onChange={(e) =>
                      setPasswordForm((prev) => ({
                        ...prev,
                        confirmPassword: e.target.value,
                      }))
                    }
                    required
                    className="w-full px-4 py-3 pr-12 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-pink-400 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("confirm")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    {showPasswords.confirm ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  className="flex-1 py-3 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      Update Password
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Bottom Spacing */}
      <div className="h-6 sm:h-8"></div>
      <Contact />
    </div>
  );
};

export default Profile;
