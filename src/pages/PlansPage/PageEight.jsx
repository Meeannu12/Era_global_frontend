import React from "react";
import {
  Users,
  BarChart3,
  TrendingDown,
  IndianRupee,
  Award,
  Target,
  ArrowDown,
  DollarSign,
  ChevronRight,
  Eye,
  EyeOff,
} from "lucide-react";

const mockData = [
  {
    level: "1",
    team: "1-2",
    duplication: "×5",
    total: "10",
    earning: "×1.85",
    totalEarning: "18.5",
    color: "from-green-500 to-green-400",
    icon: "💰",
  },
  {
    level: "2",
    team: "1-2",
    duplication: "×5",
    total: "50",
    earning: "×0.50",
    totalEarning: "25",
    color: "from-blue-500 to-blue-400",
    icon: "💎",
  },
  {
    level: "3",
    team: "50",
    duplication: "×5",
    total: "250",
    earning: "×0.50",
    totalEarning: "125",
    color: "from-purple-500 to-purple-400",
    icon: "🎯",
  },
  {
    level: "4",
    team: "250",
    duplication: "×5",
    total: "1250",
    earning: "×0.50",
    totalEarning: "625",
    color: "from-orange-500 to-orange-400",
    icon: "⭐",
  },
  {
    level: "5",
    team: "1250",
    duplication: "×5",
    total: "6250",
    earning: "×0.50",
    totalEarning: "3125",
    color: "from-pink-500 to-pink-400",
    icon: "🏆",
  },
  {
    level: "6",
    team: "6250",
    duplication: "×5",
    total: "31250",
    earning: "×0.25",
    totalEarning: "7812",
    color: "from-indigo-500 to-indigo-400",
    icon: "🎖️",
  },
  {
    level: "7",
    team: "31250",
    duplication: "×5",
    total: "156250",
    earning: "×0.25",
    totalEarning: "39062",
    color: "from-cyan-500 to-cyan-400",
    icon: "🏅",
  },
  {
    level: "8",
    team: "156250",
    duplication: "×5",
    total: "781250",
    earning: "×0.25",
    totalEarning: "195312",
    color: "from-teal-500 to-teal-400",
    icon: "🎗️",
  },
  {
    level: "9",
    team: "781250",
    duplication: "×5",
    total: "3906250",
    earning: "×0.10",
    totalEarning: "390625",
    color: "from-emerald-500 to-emerald-400",
    icon: "💫",
  },
  {
    level: "10",
    team: "3906250",
    duplication: "×5",
    total: "19531250",
    earning: "×0.10",
    totalEarning: "1953125",
    color: "from-yellow-500 to-yellow-400",
    icon: "🌟",
  },
];

const PageEight = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-gray-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-500/10 rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-16 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Side */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-bold text-lg sm:text-xl px-6 py-4 rounded-full shadow-lg">
                <BarChart3 className="w-6 h-6" />
                <span>Team Free Referral Income</span>
              </div>

              <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-600/50">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-400" />
                  Multi-Level Income Structure
                </h3>
                <p className="text-gray-300 mt-2">
                  Earn from your entire team network with our comprehensive
                  10-level income system. The deeper your network grows, the
                  more opportunities you have to earn.
                </p>
              </div>

              {/* Single Table for all views */}
              <div className="w-full overflow-x-auto">
                <div className="bg-gray-800/70 rounded-xl border border-gray-600/50">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-700/50 border-b border-gray-600/50">
                        <th className="text-left px-1 py-1 text-gray-300 text-xs">
                          Level
                        </th>
                        <th className="text-left px-1 py-1 text-gray-300 text-xs">
                          Team
                        </th>
                        <th className="text-left px-1 py-1 text-gray-300 text-xs">
                          Duplication
                        </th>
                        <th className="text-left px-1 py-1 text-gray-300 text-xs">
                          Total
                        </th>
                        <th className="text-left px-1 py-1 text-gray-300 text-xs">
                          Earning
                        </th>
                        <th className="text-left px-1 py-1 text-gray-300 text-xs">
                          ₹/day
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockData.map((row, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-600/30 hover:bg-gray-700/30 transition-colors">
                          <td className="px-1 py-1">
                            <div
                              className={`w-4 h-4 bg-gradient-to-r ${row.color} rounded-full flex items-center justify-center text-white text-xs`}>
                              {row.level}
                            </div>
                          </td>
                          <td className="px-1 py-1 text-gray-300 text-xs">
                            {row.team}
                          </td>
                          <td className="px-1 py-1 text-blue-400 text-xs">
                            {row.duplication}
                          </td>
                          <td className="px-1 py-1 text-purple-400 text-xs">
                            {row.total}
                          </td>
                          <td className="px-1 py-1 text-orange-400 text-xs">
                            {row.earning}
                          </td>
                          <td className="px-1 py-1 text-gre text-xs">
                            {row.totalEarning}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-xl p-4 border border-green-500/30 text-center">
                  <p className="text-green-400 font-bold text-xl sm:text-2xl">
                    10+
                  </p>
                  <p className="text-gray-300 text-sm">Income Levels</p>
                </div>
                <div className="bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-xl p-4 border border-blue-500/30 text-center">
                  <p className="text-blue-400 font-bold text-xl sm:text-2xl">
                    19M+
                  </p>
                  <p className="text-gray-300 text-sm">Max Team Size</p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="relative bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-600/50">
                  <div className="text-center space-y-6">
                    <div className="relative">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                        <Users className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                        <BarChart3 className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        Team Analysis
                      </h4>
                      <p className="text-gray-300 text-sm sm:text-base">
                        Multi-level income tracking
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-center items-center space-x-2">
                        {[1, 2, 3, 4, 5].map((level) => (
                          <div
                            key={level}
                            className="flex flex-col items-center">
                            <div
                              className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${
                                mockData[level - 1]?.color ||
                                "from-gray-500 to-gray-400"
                              } rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-md`}>
                              {level}
                            </div>
                            {level < 5 && (
                              <ArrowDown className="w-3 h-3 text-gray-400 mt-1" />
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">
                            Level 10 Daily Potential:
                          </span>
                          <span className="text-green-400 font-bold">
                            ₹19,53,125
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs mt-1">
                          <span className="text-gray-500">
                            Total Team Size:
                          </span>
                          <span className="text-purple-400 font-bold">
                            19.5M+ People
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-500/20 rounded-full blur-lg animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500/20 rounded-full blur-md animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageEight;
