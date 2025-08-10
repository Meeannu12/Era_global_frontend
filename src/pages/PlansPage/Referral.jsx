import React from "react";
import { Trophy, DollarSign } from "lucide-react";
import investment from "../../assets/images/investment.jpg"; // Adjust the path as necessary

const Referral = () => {
  const tableData = [
    ["L1", "300$", "300$", "100% of ROI", "10$ Monthly", "0"],
    ["L2", "350$", "700$", "0.50%", "50$ Monthly", "50$"],
    ["L3", "500$", "2000$", "0.70%", "100$ Monthly", "100$"],
    ["L4", "600$", "9000$", "1%", "300$ Monthly", "600$"],
    ["L5", "1000$", "22000$", "1.5%", "600$ Monthly", "1100$"],
    ["L6", "2000$", "55000$", "1.75%", "1100$ Monthly", "3300$"],
    ["L7", "3000$", "1.10 lack $", "2%", "2500$ Monthly", "10000$"],
    ["L8", "4000$", "5 lack $", "2.25%", "4000$ Monthly", "25000$"],
    ["L9", "7000$", "15 lack $", "2.5%", "11000$ Monthly", "250000$"],
    ["L10", "15000$", "50 lack $", "3%", "21000$ Monthly", "1100000$"],
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
        {/* Left Section */}
        <div className="flex-1 p-6 flex flex-col justify-center space-y-6">
          <div className="flex items-center space-x-3">
            <Trophy className="text-yellow-400 w-10 h-10" />
            <span className="text-3xl font-bold">ERA-GLOBAL</span>
          </div>

          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-5 py-2 rounded text-xl font-semibold w-max">
            POWER OF REFERRAL INCOME
          </div>

          <img
            src={investment}
            alt="Reward Illustration"
            className="object-contain w-full h-auto rounded-lg max-h-96"
          />
        </div>

        {/* Right Section (Table) */}
        <div className="flex-1 p-4 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-600 text-center text-sm md:text-base">
            <thead className="bg-yellow-600 text-gray-900">
              <tr>
                <th className="p-2 border border-gray-600">Level</th>
                <th className="p-2 border border-gray-600">Direct Business</th>
                <th className="p-2 border border-gray-600">
                  Total Team Business
                </th>
                <th className="p-2 border border-gray-600">
                  Total level Business
                </th>
                <th className="p-2 border border-gray-600">Royalty Income</th>
                <th className="p-2 border border-gray-600">
                  Rewards Income (One Time)
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr key={i} className="even:bg-gray-700">
                  {row.map((cell, j) => (
                    <td key={j} className="p-2 border border-gray-600">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex items-center justify-center mt-4 space-x-2 text-yellow-400">
            <DollarSign />
            <span className="font-semibold">
              Earn rewards by growing your team business
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
