import React, { useState } from "react";
import {
  Trophy,
  DollarSign,
  Star,
  TrendingUp,
  Gift,
  Award,
  Crown,
  Target,
  ChevronDown,
  ChevronUp,
  Zap,
  Users,
  BarChart3,
} from "lucide-react";

const PageTwelve = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const tableData = [
    {
      level: "L1",
      directBusiness: "300$",
      totalTeamBusiness: "300$",
      totalLevelBusiness: "100% of ROI",
      passiveIncome: "10$ Monthly",
      rewardsIncome: "0",
      color: "from-gray-500 to-gray-600",
      icon: Star,
      badge: "Starter",
      badgeColor: "bg-gray-500",
    },
    {
      level: "L2",
      directBusiness: "350$",
      totalTeamBusiness: "700$",
      totalLevelBusiness: "0.50%",
      passiveIncome: "50$ Monthly",
      rewardsIncome: "50$",
      color: "from-blue-500 to-blue-600",
      icon: Target,
      badge: "Bronze",
      badgeColor: "bg-blue-500",
    },
    {
      level: "L3",
      directBusiness: "500$",
      totalTeamBusiness: "2000$",
      totalLevelBusiness: "0.70%",
      passiveIncome: "100$ Monthly",
      rewardsIncome: "100$",
      color: "from-green-500 to-green-600",
      icon: Gift,
      badge: "Silver",
      badgeColor: "bg-green-500",
    },
    {
      level: "L4",
      directBusiness: "600$",
      totalTeamBusiness: "9000$",
      totalLevelBusiness: "1%",
      passiveIncome: "300$ Monthly",
      rewardsIncome: "600$",
      color: "from-purple-500 to-purple-600",
      icon: Award,
      badge: "Gold",
      badgeColor: "bg-purple-500",
    },
    {
      level: "L5",
      directBusiness: "1000$",
      totalTeamBusiness: "22000$",
      totalLevelBusiness: "1.5%",
      passiveIncome: "600$ Monthly",
      rewardsIncome: "1100$",
      color: "from-indigo-500 to-indigo-600",
      icon: Trophy,
      badge: "Platinum",
      badgeColor: "bg-indigo-500",
    },
    {
      level: "L6",
      directBusiness: "2000$",
      totalTeamBusiness: "55000$",
      totalLevelBusiness: "1.75%",
      passiveIncome: "1100$ Monthly",
      rewardsIncome: "3300$",
      color: "from-pink-500 to-pink-600",
      icon: Crown,
      badge: "Diamond",
      badgeColor: "bg-pink-500",
    },
    {
      level: "L7",
      directBusiness: "3000$",
      totalTeamBusiness: "1.10 lack $",
      totalLevelBusiness: "2%",
      passiveIncome: "2500$ Monthly",
      rewardsIncome: "10000$",
      color: "from-orange-500 to-orange-600",
      icon: Crown,
      badge: "Elite",
      badgeColor: "bg-orange-500",
    },
    {
      level: "L8",
      directBusiness: "4000$",
      totalTeamBusiness: "5 lack $",
      totalLevelBusiness: "2.25%",
      passiveIncome: "4000$ Monthly",
      rewardsIncome: "25000$",
      color: "from-red-500 to-red-600",
      icon: Crown,
      badge: "Master",
      badgeColor: "bg-red-500",
    },
    {
      level: "L9",
      directBusiness: "7000$",
      totalTeamBusiness: "15 lack $",
      totalLevelBusiness: "2.5%",
      passiveIncome: "11000$ Monthly",
      rewardsIncome: "250000$",
      color: "from-yellow-500 to-yellow-600",
      icon: Crown,
      badge: "Supreme",
      badgeColor: "bg-yellow-500",
    },
    {
      level: "L10",
      directBusiness: "15000$",
      totalTeamBusiness: "50 lack $",
      totalLevelBusiness: "3%",
      passiveIncome: "21000$ Monthly",
      rewardsIncome: "1100000$",
      color: "from-emerald-500 to-emerald-600",
      icon: Crown,
      badge: "Legend",
      badgeColor: "bg-emerald-500",
    },
  ];

  const toggleCardExpansion = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 p-4">
      <div className="max-w-7xl mx-auto mb-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-full font-bold text-lg shadow-lg mb-6 animate-bounce">
            <Trophy className="w-6 h-6" />
            ERA-GLOBAL
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
            TEAM ROI ROYALTY
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
            REWARD INCOME
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
            PASSIVE INCOME
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Unlock extraordinary earning potential through our comprehensive
            team-based reward system designed for exponential growth.
          </p>
        </div>

        {/* Responsive Table View */}
        <div className="overflow-x-auto bg-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-yellow-500 to-orange-600 text-gray-900">
              <tr>
                <th className="p-2 text-left">Level</th>
                <th className="p-2 text-left">Direct Business</th>
                <th className="p-2 text-left">Total Team Business</th>
                <th className="p-2 text-left">Total Level Business</th>
                <th className="p-2 text-left">Passive Income</th>
                <th className="p-2 text-left">Rewards Income</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => {
                const IconComponent = row.icon;
                return (
                  <tr
                    key={i}
                    className="border-b border-gray-700/30 hover:bg-gray-700/20 transition-all duration-300 group">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 bg-gradient-to-r ${row.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <IconComponent className="w-3 h-3 text-white" />
                        </div>
                        <div>
                          <span className=" text-white text-md block">
                            {row.level}
                          </span>
                          {/* <span
                            className={`text-xs px-2 py-1 rounded-full text-white ${row.badgeColor}`}>
                            {row.badge}
                          </span> */}
                        </div>
                      </div>
                    </td>
                    <td className="p-2 text-cyan-400 font-semibold text-sm">
                      {row.directBusiness}
                    </td>
                    <td className="p-2 text-green-400 font-semibold text-sm">
                      {row.totalTeamBusiness}
                    </td>
                    <td className="p-2 text-purple-400 font-semibold text-sm">
                      {row.totalLevelBusiness}
                    </td>
                    <td className="p-2 text-yellow-400 font-semibold text-sm">
                      {row.passiveIncome}
                    </td>
                    <td className="p-2 text-pink-400 font-semibold text-sm">
                      {row.rewardsIncome}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Bottom Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 text-center group hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Exponential Growth
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Watch your income multiply as your team expands across all levels
              with our proven system.
            </p>
          </div>

          <div className="bg-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 text-center group hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Multiple Income Streams
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Benefit from both passive monthly income and substantial one-time
              reward bonuses.
            </p>
          </div>

          <div className="bg-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 text-center group hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Crown className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Elite Rewards
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Unlock premium rewards and exclusive recognition as you reach
              higher achievement levels.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 relative overflow-hidden bg-gradient-to-r from-yellow-500 to-orange-600 rounded-3xl p-12 text-center shadow-2xl">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
              <Trophy className="w-5 h-5 text-gray-900" />
              <span className="text-gray-900 font-semibold">
                Limited Time Opportunity
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Start Building Your Empire Today
            </h2>
            <p className="text-gray-800 mb-8 text-xl max-w-3xl mx-auto leading-relaxed">
              Join thousands of successful leaders earning substantial rewards
              through team growth and strategic business development.
            </p>
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-5 px-10 rounded-2xl text-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Begin Your Journey →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwelve;
