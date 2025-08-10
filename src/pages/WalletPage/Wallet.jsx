import React from "react";
import bg from "../../assets/images/background-1.jpg";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CircleArrowRight } from "lucide-react";
import { useAuth } from "../../context/authContext";

const Wallet = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Topbar */}

      {/* Banner */}
      <div className="relative w-full h-48 bg-gray-700 flex items-center justify-center">
        <img
          src={bg}
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover  opacity-30"
        />
        <div className="relative text-center">
          <p className="text-3xl font-bold">${user.pin ? 5.0 : 0.0}</p>
          <p className="text-sm">Account Balance</p>
        </div>

        {/* add fund  */}
        {/* <Link
          to="/addfund"
          className="absolute right-4 top-4 bg-red-500 text-white px-3 py-1 rounded">
          Add Funds
        </Link> */}
      </div>

      {/* Withdraw Button */}
      <Link
        to="/widthdrawfund"
        className="bg-gradient-to-r from-purple-600 to-indigo-600 py-3 text-center font-semibold my-3 rounded mx-4">
        Withdraw
      </Link>
      {/* <button className="bg-gradient-to-r from-purple-600 to-indigo-600 py-3 text-center font-semibold my-3 rounded mx-4">
        Withdraw
      </button> */}

      {/* Account Standing */}
      <div className="bg-gray-800 rounded p-4 mx-4 mb-4">
        <h2 className="text-sm uppercase text-gray-400 mb-3">
          Account Standing
        </h2>
        <div className="flex justify-between mb-2">
          <p>Total Income</p>
          <p className="text-green-400">+ $0.00</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Total Withdraw</p>
          <p>$0.00</p>
        </div>
        <div className="flex justify-between mt-4">
          <div>
            <p className="text-sm text-gray-400">Earning Wallet</p>
            <p className="text-green-400 text-lg">$0.00</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Assets Wallet</p>
            <p className="text-red-400 text-lg">$0.00</p>
          </div>
        </div>
      </div>

      {/* History Lists */}
      <div className="mx-4 space-y-3 mb-2">
        {[
          "Earning Wallet History",
          "Top up Wallet History",
          "Deposit History",
          "Withdraw History",
        ].map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-gray-800 p-3 rounded">
            <p className="text-white">{item}</p>
            <CircleArrowRight className="w-6 h-6 text-white" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wallet;
