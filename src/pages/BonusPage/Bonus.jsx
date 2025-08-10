import React from "react";
import {
  ArrowUp,
  ChevronRight,
  TrendingUp,
  DollarSign,
  Users,
  Crown,
  Gift,
  Target,
} from "lucide-react";

const Bonus = () => {
  const items = [
    {
      name: "Referral Ad Income",
      amount: "$ 0.00",
      icon: <Users className="w-5 h-5" />,
      gradient: "from-emerald-500 to-teal-600",
      shadowColor: "shadow-emerald-500/25",
    },
    {
      name: "Daily Income",
      amount: "$ 0.00",
      icon: <TrendingUp className="w-5 h-5" />,
      gradient: "from-blue-500 to-cyan-600",
      shadowColor: "shadow-blue-500/25",
    },
    {
      name: "Team Level Income",
      amount: "$ 0.00",
      icon: <Users className="w-5 h-5" />,
      gradient: "from-purple-500 to-indigo-600",
      shadowColor: "shadow-purple-500/25",
    },
    {
      name: "Royalty Income",
      amount: "$ 0.00",
      icon: <Crown className="w-5 h-5" />,
      gradient: "from-amber-500 to-orange-600",
      shadowColor: "shadow-amber-500/25",
    },
    {
      name: "Reward Income",
      amount: "$ 0.00",
      icon: <Gift className="w-5 h-5" />,
      gradient: "from-pink-500 to-rose-600",
      shadowColor: "shadow-pink-500/25",
    },
  ];

  const listItem = [
    {
      name: "Referral Ad Bonus",
      icon: <Target className="w-5 h-5" />,
      iconColor: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
    },
    {
      name: "Daily Income",
      icon: <TrendingUp className="w-5 h-5" />,
      iconColor: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      name: "Team Level Income",
      icon: <Users className="w-5 h-5" />,
      iconColor: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      name: "Royalty Income",
      icon: <Crown className="w-5 h-5" />,
      iconColor: "text-amber-400",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
    },
    {
      name: "Reward Income",
      icon: <Gift className="w-5 h-5" />,
      iconColor: "text-pink-400",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 p-4 sm:p-6">
      {/* Header Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800 shadow-2xl shadow-purple-900/50 mb-8 border border-slate-700/50">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        {/* Sparkle Effects */}
        {/* <div className="absolute top-4 right-4">
                    <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
                </div>
                <div className="absolute bottom-4 left-4">
                    <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse animation-delay-1000" />
                </div> */}

        {/* Content */}
        <div className="relative z-10 p-4 sm:p-8">
          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 backdrop-blur-sm rounded-2xl mb-4 shadow-lg shadow-purple-500/30 border border-purple-400/20">
            <ArrowUp className="w-8 h-8 text-white" />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 sm:gap-8">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start mb-3">
                <DollarSign className="w-6 h-6 text-purple-300 mr-2" />
                <span className="text-purple-200 text-sm font-medium">
                  My Investment
                </span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-2 tracking-tight">
                $0.00
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto sm:mx-0"></div>
            </div>

            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start mb-3">
                <TrendingUp className="w-6 h-6 text-cyan-300 mr-2" />
                <span className="text-cyan-200 text-sm font-medium">
                  Total Earnings
                </span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-2 tracking-tight">
                $0.00
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto sm:mx-0"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Income Summary Cards */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-6 px-2 flex items-center">
          <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-4"></div>
          Income Summary
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="group bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden hover:border-slate-600/50">
              <div className={`h-1 bg-gradient-to-r ${item.gradient}`}></div>
              <div className="p-2">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient} text-white shadow-lg ${item.shadowColor} group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <span className="text-3xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                    {item.amount}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-200 text-base leading-tight mb-4">
                  {item.name}
                </h3>
                <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-2 bg-gradient-to-r ${item.gradient} rounded-full w-0 group-hover:w-4 transition-all duration-700 ease-out`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Items */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-6 px-2 flex items-center">
          <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full mr-4"></div>
          Quick Actions
        </h2>
        <div className="space-y-4">
          {listItem.map((item, index) => (
            <div
              key={index}
              className="group bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 cursor-pointer overflow-hidden hover:border-slate-600/50">
              <div className="flex items-center justify-between p-2">
                <div className="flex items-center space-x-5">
                  <div
                    className={`p-2 rounded-xl ${item.bgColor} ${item.iconColor} border ${item.borderColor} shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:shadow-xl`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg group-hover:text-purple-200 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1 group-hover:text-slate-300 transition-colors duration-300">
                      Tap to view details
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {/* <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div> */}
                  <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bonus;
