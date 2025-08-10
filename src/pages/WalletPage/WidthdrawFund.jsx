import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; // Make sure `lucide-react` is installed

const WithdrawFund = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-xl min-h-screen text-white flex flex-col mx-auto p-4 sm:p-6 md:p-8 bg-gray-900 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        {/* Back Arrow */}
        <button onClick={() => navigate(-1)} className="text-white hover:text-yellow-400 transition">
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h2 className="text-white text-xl sm:text-2xl font-bold">Withdraw Funds</h2>

        {/* Close button (optional) */}
        <button className="text-red-500 text-xl">✕</button>
      </div>

      <p className="text-red-400 text-sm mb-4">Enter Transaction Details</p>

      <div className="space-y-4">
        {/* Balance */}
        <div>
          <p className="text-gray-400 text-xs">BALANCE</p>
          <p className="text-white text-lg">$ 0.00</p>
        </div>

        {/* Mode */}
        <div>
          <p className="text-gray-400 text-xs mb-1">MODE</p>
          <div className="bg-gray-800 text-white p-3 rounded w-full">Crypto</div>
        </div>

        {/* Address */}
        <div>
          <p className="text-gray-400 text-xs mb-1">YOUR ADDRESS</p>
          <input
            type="text"
            placeholder="Enter Address"
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-500 outline-none"
          />
        </div>

        {/* Amount */}
        <div>
          <p className="text-gray-400 text-xs mb-1">ENTER AMOUNT</p>
          <input
            type="number"
            placeholder="Enter Amount"
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-500 outline-none"
          />
        </div>

        {/* Password */}
        <div>
          <p className="text-blue-400 text-xs mb-1">Password</p>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-500 outline-none"
          />
        </div>

        {/* Withdraw Button */}
        <button className="w-full py-3 rounded bg-yellow-400 text-black font-bold hover:bg-yellow-500 transition">
          WITHDRAW
        </button>
      </div>
    </div>
  );
};

export default WithdrawFund;
