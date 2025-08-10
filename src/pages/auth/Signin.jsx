import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Key,
  Pin,
  PinIcon,
  IdCard,
} from "lucide-react"; // Changed PinIcon to Key
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../apis/authServices";
import { useAuth } from "../../context/authContext";

const Signin = () => {
  const [sponsorID, setSponsorID] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await login(sponsorID, password);
      if (response.success === false) {
        setError(response.message);
        toast.error(response.message);
        return;
      }
      setUser(response.data.user);
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      setError("An error occurred. Please try again.");
      toast.error(
        err.response.data.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative">
      {/* Decorative Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply blur-2xl opacity-20 animate-pulse" />
      <div className="absolute top-36 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply blur-2xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply blur-2xl opacity-20 animate-pulse" />

      {/* Sign-in Card */}
      <div className="relative w-full max-w-md z-10">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl">
          <div className="text-center mb-6">
            <p className="text-gray-300 text-sm">Log in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-300">ID</label>
              <div className="relative mt-1">
                {/* <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" /> */}
                <IdCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={sponsorID}
                  onChange={(e) => setSponsorID(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  placeholder="Enter Your ID"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-300">
                Password
              </label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                <p className="text-red-400 text-sm text-center">{error}</p>
              </div>
            )}

            {/* Links */}
            <div className="flex items-center justify-between text-sm text-gray-300">
              <Link
                to={"/signup"}
                className="hover:text-purple-400 hover:underline transition">
                Do not have an account ? Create New !
              </Link>
              {/* <button
                type="button"
                className="hover:text-purple-400 transition">
                Forgot Password?
              </button> */}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="group w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed">
              <span className="flex items-center justify-center">
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Login In...
                  </>
                ) : (
                  <>
                    Log in
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </span>
            </button>
            <hr />
            <div className="font-semibold text-amber-400 hover:bg-amber-100/20 w-full text-center transition bg-white/5 border border-white/10 rounded-xl py-3">
              <Link to="/view-plans" className="">
                View Our Plans
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
