import React from "react";
import { X, ClipboardCopy } from "lucide-react"; // Optional: For icons
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AddFund = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="w-full max-w-xl bg-gray-900 text-white rounded-xl shadow-xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-4">
          <button
            onClick={() => navigate(-1)}
            className="text-white hover:text-yellow-400 transition">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold">Deposit Funds</h2>
          <button>
            <X className="text-red-500 hover:text-red-600 w-6 h-6" />
          </button>
        </div>

        {/* Currency Selection */}
        <div className="bg-green-400 text-black font-semibold text-center rounded-md py-2 mb-6">
          USDT BEP20 #
        </div>

        {/* QR + Address */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-6">
          {/* QR Image */}
          <div className="w-48 h-48 bg-gray-800 flex items-center justify-center border border-gray-600 rounded-md">
            <img
              src="/assets/images/qr.png" // ✅ Make sure this file exists
              alt="QR Code"
              className="w-full h-full object-contain"
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>

          {/* Address + Copy */}
          <div className="w-full sm:w-1/2">
            <label className="text-sm text-gray-400 mb-1 block">ADDRESS</label>
            <div className="flex items-center bg-gray-800 rounded-md p-2 justify-between">
              <input
                type="text"
                value="0xYourWalletAddressHere"
                readOnly
                className="bg-transparent text-white text-sm w-full mr-2 outline-none"
              />
              <ClipboardCopy className="text-yellow-400 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Transaction Input */}
        <div className="mb-6">
          <label className="text-sm text-gray-400 mb-1 block">
            TRANSACTION NO/HASH
          </label>
          <input
            type="text"
            placeholder="Please Enter Transaction No."
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-md outline-none placeholder-gray-500"
            required
          />
        </div>

        {/* Deposit Button */}
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-md transition duration-300">
          DEPOSIT
        </button>
      </div>
    </div>
  );
};

export default AddFund;
