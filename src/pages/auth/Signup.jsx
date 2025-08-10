import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  User,
  Mail,
  Phone,
  Lock,
  UserPlus,
  Loader2,
  Eye,
  EyeOff,
  Copy,
  Check,
  X,
} from "lucide-react";
import { register } from "../../apis/authServices";

const Signup = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sponsorID = searchParams.get("sponsorId");

  if (sponsorID === null) {
    toast.error("Sponsor ID not found");
  }

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    sponsorId: sponsorID,
  });

  const [sponsorIDAfterRegister, setSponsorIDAfterRegister] = useState("");
  const [showCredentialsPopup, setShowCredentialsPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [copiedField, setCopiedField] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await register(formData);

      if (!response.success) {
        setMessage(response.message);
        toast.error(response.message);
        return;
      }

      setSponsorIDAfterRegister(response.data.user.sponsorID);
      setShowCredentialsPopup(true);
      toast.success("Registration successful!");
    } catch (error) {
      toast.error(error?.response.data.message || "Something went wrong");
    } finally {
      -setLoading(false);
    }
  };

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      toast.success(`${field} copied to clipboard!`);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      toast.error("Failed to copy to clipboard");
    }
  };

  const handleProceedToSignin = () => {
    setShowCredentialsPopup(false);
    navigate("/signin");
  };

  const handleClosePopup = () => {
    setShowCredentialsPopup(false);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 text-white relative">
          {/* <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-4 rounded-2xl">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
          </div> */}
          <h2 className="text-3xl font-bold text-center mb-2">Sign Up</h2>
          <p className="text-center text-sm text-gray-300 mb-6">
            Create an account. It's free!
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Sponsor ID */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="sponsorId"
                placeholder="Sponsor ID"
                value={formData.sponsorId}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Username */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="username"
                placeholder="Full Name"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="tel"
                name="phone"
                placeholder="Mobile No"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                name="password"
                placeholder="Choose a Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed">
              <span className="flex items-center justify-center">
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Signing Up...
                  </>
                ) : (
                  "SIGN UP"
                )}
              </span>
            </button>

            {message && (
              <p className="text-red-400 text-center text-sm mt-2">{message}</p>
            )}
          </form>

          <p className="text-center text-sm text-gray-300 mt-2">
            Already registered?{" "}
            <a href="/signin" className="text-purple-400 hover:underline">
              Login here
            </a>
          </p>
          <div className="font-semibold mt-2 text-amber-400 hover:bg-amber-100/20 w-full text-center transition bg-white/5 border border-white/10 rounded-xl py-3">
            <Link to="/view-plans" className="">
              View Our Plans
            </Link>
          </div>
        </div>
      </div>

      {/* Credentials Popup */}
      {showCredentialsPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 text-white max-w-md w-full relative animate-in fade-in zoom-in duration-300">
            {/* Close button */}
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-2xl inline-block mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Registration Successful!
              </h3>
              <p className="text-gray-300 text-sm">
                Please save your login credentials safely because password can
                not be recovered.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-4 mb-6">
              {/* Sponsor ID */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-300">
                    Your Sponsor ID
                  </label>
                  <button
                    onClick={() =>
                      copyToClipboard(sponsorIDAfterRegister, "Sponsor ID")
                    }
                    className="text-purple-400 hover:text-purple-300 transition-colors">
                    {copiedField === "Sponsor ID" ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <p className="text-white font-mono text-lg break-all">
                  {sponsorIDAfterRegister}
                </p>
              </div>

              {/* Password */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-300">
                    Your Password
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-400 hover:text-white transition-colors">
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                    <button
                      onClick={() =>
                        copyToClipboard(formData.password, "Password")
                      }
                      className="text-purple-400 hover:text-purple-300 transition-colors">
                      {copiedField === "Password" ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
                <p className="text-white font-mono text-lg break-all">
                  {showPassword
                    ? formData.password
                    : "•".repeat(formData.password.length)}
                </p>
              </div>
            </div>

            {/* Warning */}
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-6">
              <p className="text-yellow-300 text-sm text-center">
                ⚠️ Please save these credentials safely. You'll need them to
                Login
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleProceedToSignin}
                className="flex-1 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200">
                Go to Login
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
