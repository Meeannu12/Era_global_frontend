import React, { useState } from "react";
import {
  MessageCircle,
  Facebook,
  Twitter,
  Send,
  Copy,
  Share2,
  CheckCircle,
  ExternalLink,
  Users,
  Gift,
  LogOut,
  PowerOff,
  Power,
} from "lucide-react";
import { useAuth } from "../../context/authContext";

// Props interface for the Contact component
const Contact = ({
  className = "", // Additional CSS classes
  showTitle = true,
  compact = true, // Compact mode for smaller spaces
}) => {
  const [copied, setCopied] = useState(false);

  const { user, logout } = useAuth();

  const currentUser = user || defaultUser;
  const referralUrl = `https://eraglobal.world/signup?sponsorId=${currentUser.sponsorID}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = referralUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = (platform) => {
    const text = "Join ERA GLOBAL and start earning! Use my referral link:";
    const url = encodeURIComponent(referralUrl);
    const message = encodeURIComponent(text);

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?text=${message}&url=${url}`,
      whatsapp: `https://wa.me/?text=${message}%20${url}`,
      telegram: `https://t.me/share/url?url=${url}&text=${message}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      reddit: `https://reddit.com/submit?url=${url}&title=${message}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
  };

  const handleWebShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Join ERA Global and start earning!",
          text: "Start earning with ERA GLOBAL! Use my referral link:",
          url: referralUrl,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <div className={`text-white ${className}`}>
      <div
        className={`bg-gray-800/60 backdrop-blur-md rounded-2xl border border-gray-700/50 shadow-2xl ${
          compact ? "p-6" : "p-8"
        }`}>
        {/* Header */}
        {showTitle && (
          <div className="text-center mb-8">
            <div
              className={`bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                compact ? "w-12 h-12" : "w-16 h-16"
              }`}>
              <MessageCircle className="text-white" size={compact ? 20 : 28} />
            </div>
            <h2
              className={`font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent ${
                compact ? "text-2xl" : "text-3xl"
              }`}>
              ERA GLOBAL
            </h2>
            <p
              className={`font-semibold text-white mb-2 ${
                compact ? "text-base" : "text-lg"
              }`}>
              Share and Get More!
            </p>
            <p
              className={`text-gray-400 leading-relaxed ${
                compact ? "text-xs" : "text-sm"
              }`}>
              "Unlock Rewards: Share and Earn with My Referral Link!"
            </p>
          </div>
        )}

        <div className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-xl p-4 text-center">
              <Users className="text-blue-400 mx-auto mb-2" size={24} />
              <p className="text-blue-400 text-sm font-medium">Referrals</p>
              <p className="text-white text-xl font-bold">
                {user.totalReferrals || 0}
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-4 text-center">
              <Gift className="text-green-400 mx-auto mb-2" size={24} />
              <p className="text-green-400 text-sm font-medium">Rewards</p>
              <p className="text-white text-xl font-bold">$0.00</p>
            </div>
          </div>

          {/* Referral Link */}
          <div className="bg-gray-700/50 rounded-xl p-4 border border-gray-600/50">
            <h3
              className={`font-medium text-gray-300 mb-3 ${
                compact ? "text-xs" : "text-sm"
              }`}>
              Your Referral Link
            </h3>
            <div className="flex items-center gap-3 bg-gray-800/70 rounded-lg p-3 border border-gray-600/30">
              <div className="flex-1 min-w-0">
                <p
                  className={`text-green-400 font-mono truncate ${
                    compact ? "text-xs" : "text-sm"
                  }`}>
                  {referralUrl}
                </p>
              </div>
              <button
                onClick={handleCopyLink}
                className={`flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg transition-all font-medium ${
                  compact ? "text-xs" : "text-sm"
                }`}>
                {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          {/* Social Share Buttons */}
          <div>
            <h3
              className={`font-medium text-gray-300 mb-4 ${
                compact ? "text-xs" : "text-sm"
              }`}>
              Share on Social Media
            </h3>
            <div
              className={`grid gap-3 ${
                compact ? "grid-cols-2" : "grid-cols-2 md:grid-cols-4"
              }`}>
              <button
                onClick={() => handleShare("facebook")}
                className={`flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 rounded-xl transition-all group ${
                  compact ? "p-3" : "p-4"
                }`}>
                <Facebook size={compact ? 16 : 20} />
                <span
                  className={`font-medium ${compact ? "text-xs" : "text-sm"}`}>
                  Facebook
                </span>
              </button>

              <button
                onClick={() => handleShare("twitter")}
                className={`flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 rounded-xl transition-all group ${
                  compact ? "p-3" : "p-4"
                }`}>
                <Twitter size={compact ? 16 : 20} />
                <span
                  className={`font-medium ${compact ? "text-xs" : "text-sm"}`}>
                  Twitter
                </span>
              </button>

              <button
                onClick={() => handleShare("whatsapp")}
                className={`flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 rounded-xl transition-all group ${
                  compact ? "p-3" : "p-4"
                }`}>
                <MessageCircle size={compact ? 16 : 20} />
                <span
                  className={`font-medium ${compact ? "text-xs" : "text-sm"}`}>
                  WhatsApp
                </span>
              </button>

              <button
                onClick={() => handleShare("telegram")}
                className={`flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 rounded-xl transition-all group ${
                  compact ? "p-3" : "p-4"
                }`}>
                <Send size={compact ? 16 : 20} />
                <span
                  className={`font-medium ${compact ? "text-xs" : "text-sm"}`}>
                  Telegram
                </span>
              </button>
            </div>
          </div>

          {/* Native Share Button */}
          <button
            onClick={handleWebShare}
            className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl transition-all font-medium ${
              compact ? "p-3 text-sm" : "p-4"
            }`}>
            <Share2 size={compact ? 16 : 20} />
            Share Link
          </button>

          {/* Earning Tips */}
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-4">
            <h4
              className={`text-yellow-400 font-medium mb-2 ${
                compact ? "text-sm" : "text-base"
              }`}>
              💡 Earning Tips
            </h4>
            <ul
              className={`text-gray-300 space-y-1 ${
                compact ? "text-xs" : "text-sm"
              }`}>
              <li>• Share your link on social media for maximum reach</li>
              <li>• Earn commission for every successful referral</li>
              <li>• Track your progress in the dashboard</li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 hover:cursor-pointer m-2">
          <div className="bg-gradient-to-r from-green-500/10 to-lime-500/10 border border-green-500/30 rounded-xl p-4">
            <button
              onClick={logout}
              className="flex items-center gap-2 hover:cursor-pointer">
              <Power size={16} />
              <span
                className={`text-green-400 font-medium ${
                  compact ? "text-sm" : "text-lg"
                }`}>
                Logout
              </span>
            </button>
          </div>
        </div>
        {/* Footer */}
        {showTitle && (
          <div
            className={`pt-6 border-t border-gray-700/50 text-center ${
              compact ? "mt-6" : "mt-8"
            }`}>
            <p
              className={`text-gray-500 mb-2 ${
                compact ? "text-xs" : "text-xs"
              }`}>
              © ERA Global 2025. All Rights Reserved.
            </p>
            <div
              className={`flex justify-center items-center gap-4 ${
                compact ? "text-xs" : "text-xs"
              }`}>
              <button className="text-red-400 hover:text-red-300 transition-colors">
                Privacy Policy
              </button>
              <span className="text-gray-600">|</span>
              <button className="text-red-400 hover:text-red-300 transition-colors">
                Terms & Conditions
              </button>
              <span className="text-gray-600">|</span>
              <button className="text-red-400 hover:text-red-300 transition-colors">
                Back to Top
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
