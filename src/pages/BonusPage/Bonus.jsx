import React, { useEffect, useState } from "react";
import {
  ArrowUp,
  ChevronRight,
  TrendingUp,
  DollarSign,
  Users,
  Crown,
  Gift,
  Target,
  ChevronDown,
} from "lucide-react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import {
  getTeamIncomeBySponsorID,
  getWalletDetails,
} from "../../apis/userServices";

const Bonus = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [directUserIncome, setDirectUserIncome] = React.useState(0);
  const [levelUserIncome, setLevelUserIncome] = React.useState(0);
  const [royalty, setRoyalty] = useState(0);
  const fetchTeamIncome = async () => {
    try {
      const response = await getTeamIncomeBySponsorID({
        sponsorID: user.sponsorID,
      });

      console.log(response);
      setDirectUserIncome(response?.directIncome || 0);
      setLevelUserIncome(response?.teamIncome || 0);
    } catch (error) {
      console.error("Error fetching total count:", error);
      toast.error(
        error.response.data.message ||
        "Something went wrong During Fetching Count"
      );
    }
  };

  async function getDetails() {
    const details = await getWalletDetails();
    // console.log("details", details);
    // Assuming response has Datalist
    if (details) {
      setRoyalty(details?.totalRoyalty);
    }
  }

  useEffect(() => {
    getDetails();
    fetchTeamIncome();
    // console.log("shgfvgwj", user);
  }, []);
  const items = [
    {
      name: "Self Income",
      amount: `$ ${(user?.walletSelfEarn).toFixed(2)}`,
      icon: <Users className="w-5 h-5" />,
      gradient: "from-emerald-500 to-teal-600",
      shadowColor: "shadow-emerald-500/25",
    },
    // {
    //   name: "Direct Level Income",
    //   amount: `$ ${(user?.walletTeamEarn).toFixed(4)}`,
    //   icon: <TrendingUp className="w-5 h-5" />,
    //   gradient: "from-blue-500 to-cyan-600",
    //   shadowColor: "shadow-blue-500/25",
    // },
    {
      name: "Team Level Income",
      amount: `$ ${(user?.walletTeamEarn).toFixed(2)}`,
      icon: <Users className="w-5 h-5" />,
      gradient: "from-purple-500 to-indigo-600",
      shadowColor: "shadow-purple-500/25",
    },
    {
      name: "Royalty Income",
      amount: `$ ${(user?.walletRoyalty).toFixed(2)}`,
      icon: <Crown className="w-5 h-5" />,
      gradient: "from-amber-500 to-orange-600",
      shadowColor: "shadow-amber-500/25",
    },
    {
      name: "Reward Income",
      amount: `$ ${(user?.walletReward).toFixed(2)}`,
      icon: <Gift className="w-5 h-5" />,
      gradient: "from-pink-500 to-rose-600",
      shadowColor: "shadow-pink-500/25",
    },
  ];

  const listItem = [
    // {
    //   name: "Referral Ad Bonus",
    //   icon: <Target className="w-5 h-5" />,
    //   iconColor: "text-emerald-400",
    //   bgColor: "bg-emerald-500/10",
    //   borderColor: "border-emerald-500/20",
    //   path: "#",
    // },
    // {
    //   name: "Daily Income",
    //   icon: <TrendingUp className="w-5 h-5" />,
    //   iconColor: "text-blue-400",
    //   bgColor: "bg-blue-500/10",
    //   borderColor: "border-blue-500/20",
    //   path: "/wallet/commission-history",
    // },
    // {
    //   name: "Team Level Income",
    //   icon: <Users className="w-5 h-5" />,
    //   iconColor: "text-purple-400",
    //   bgColor: "bg-purple-500/10",
    //   borderColor: "border-purple-500/20",
    //   path: "#",
    // },
    {
      name: "Royalty Income Chart",
      icon: <Crown className="w-5 h-5" />,
      iconColor: "text-amber-400",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
      path: "#",
    },
    {
      name: "Reward Income Chart",
      icon: <Gift className="w-5 h-5" />,
      iconColor: "text-pink-400",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20",
      path: "#",
    },
  ];

  const data = [
    {
      level: "L1",
      direct: 300,
      team: 300,
      roi: "100% of ROI",
      passive: "10$ Monthly",
      reward: "0",
    },
    {
      level: "L2",
      direct: 350,
      team: 700,
      roi: "0.50%",
      passive: "50$ Monthly",
      reward: "50$",
    },
    {
      level: "L3",
      direct: 500,
      team: 2000,
      roi: "0.70%",
      passive: "100$ Monthly",
      reward: "100$",
    },
    {
      level: "L4",
      direct: 600,
      team: "9000",
      roi: "1%",
      passive: "300$ Monthly",
      reward: "600$",
    },
    {
      level: "L5",
      direct: 1000,
      team: 22000,
      roi: "1.5%",
      passive: "600$ Monthly",
      reward: "1100$",
    },
    {
      level: "L6",
      direct: 2000,
      team: 55000,
      roi: "1.75%",
      passive: "1100$ Monthly",
      reward: "3300$",
    },
    {
      level: "L7",
      direct: 3000,
      team: 110000,
      roi: "2%",
      passive: "2500$ Monthly",
      reward: "10000$",
    },
    {
      level: "L8",
      direct: 4000,
      team: 500000,
      roi: "2.25%",
      passive: "4000$ Monthly",
      reward: "25000$",
    },
    {
      level: "L9",
      direct: 7000,
      team: 1500000,
      roi: "2.5%",
      passive: "11000$ Monthly",
      reward: "250000$",
    },
    {
      level: "L10",
      direct: 15000,
      team: 5000000,
      roi: "3%",
      passive: "21000$ Monthly",
      reward: "1100000$",
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
                {`$ ${Number(user?.walletDeposit).toFixed(2)}`}
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
                $ {user.walletEarning.toFixed(2)}
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
              className="group bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden hover:border-slate-600/50"
            >
              <div className={`h-1 bg-gradient-to-r ${item.gradient}`}></div>
              <div className="p-2">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient} text-white shadow-lg ${item.shadowColor} group-hover:scale-110 transition-transform duration-300`}
                  >
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
                    className={`h-2 bg-gradient-to-r ${item.gradient} rounded-full w-0 group-hover:w-4 transition-all duration-700 ease-out`}
                  ></div>
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
          {/* {listItem.map((item, index) => ( */}
          <div
            // key={index}
            onClick={() => navigate("/wallet/commission-history")} // 👈 yahan navigation
            className="group bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 cursor-pointer overflow-hidden hover:border-slate-600/50"
          >
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center space-x-5">
                <div
                  className={`p-2 rounded-xl bg-blue-500/10  text-blue-400 border border-blue-500/20 shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:shadow-xl`}
                >
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg group-hover:text-purple-200 transition-colors duration-300">
                    {"Daily Income"}
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
          {/* ))} */}

          {listItem.map((item, index) => (
            <div
              key={index}
              onClick={() => toggleExpand(index)} // 👈 yahan expand/collapse hoga
              // onClick={() => navigate(item.path)} // 👈 yahan navigation
              className="group bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 cursor-pointer overflow-hidden hover:border-slate-600/50"
            >
              <div className="flex items-center justify-between p-2">
                <div className="flex items-center space-x-5">
                  <div
                    className={`p-2 rounded-xl ${item.bgColor} ${item.iconColor} border ${item.borderColor} shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:shadow-xl`}
                  >
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
                  {/* <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-white group-hover:translate-x-2 transition-all duration-300" /> */}
                  {expandedIndex === index ? (
                    <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-white transition-all duration-300" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
                  )}
                </div>
              </div>
              {/* Expanded Details */}
              {/* {expandedIndex === index && (
                <div className="p-4 bg-slate-900 text-slate-300 border-t border-slate-700/50 animate-fadeIn">
                  {item.details ??
                    "Yahan tum details show kar sakte ho (API data, table, etc.)"}
                </div>
              )} */}

              {expandedIndex === index && (
                <div className="p-4 bg-slate-900 text-slate-300 border-t border-slate-700/50 animate-fadeIn">
                  {index === 0 && (
                    <div className="overflow-x-auto p-4">
                      <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">
                        * TEAM INCOME CHART
                      </h2>
                      <table className="min-w-full border border-slate-600 rounded-lg overflow-hidden">
                        <thead>
                          <tr className="bg-orange-500 text-white text-sm md:text-base">
                            <th className="px-4 py-2 border border-slate-600">
                              Level
                            </th>
                            <th className="px-4 py-2 border border-slate-600">
                              Direct Business
                            </th>
                            <th className="px-4 py-2 border border-slate-600">
                              Total Team Business
                            </th>
                            {/* <th className="px-4 py-2 border border-slate-600">
                              Total ROI Income
                            </th> */}
                            <th className="px-4 py-2 border border-slate-600">
                              Royalty Income
                            </th>
                            <th className="px-4 py-2 border border-slate-600">
                              Level Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((row, i) => (
                            <tr
                              key={i}
                              className={`${i % 2 === 0
                                  ? "bg-slate-800/50"
                                  : "bg-slate-900/50"
                                } text-slate-200`}
                            >
                              <td className="px-4 py-2 border border-slate-700 text-center">
                                {row.level}
                              </td>
                              <td className="px-4 py-2 border border-slate-700 text-center">
                                {row.direct} $
                              </td>
                              <td className="px-4 py-2 border border-slate-700 text-center">
                                {row.team} $
                              </td>
                              {/* <td className="px-4 py-2 border border-slate-700 text-center">
                                {row.roi}
                              </td> */}
                              <td className="px-4 py-2 border border-slate-700 text-center">
                                {row.passive}
                              </td>
                              <td
                                className={`px-4 py-2 border border-slate-700 text-center font-semibold ${Number(directUserIncome) >=
                                    Number(row.direct) &&
                                    Number(levelUserIncome) >= Number(row.team)
                                    ? "text-green-500"
                                    : "text-red-500 "
                                  }`}
                              >
                                {Number(directUserIncome || 0) >=
                                  Number(row?.direct || 0) &&
                                  Number(levelUserIncome || 0) >=
                                  Number(row?.team || 0)
                                  ? "Achieved"
                                  : "Not Achieved"}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="overflow-x-auto p-4">
                      <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">
                        * TEAM INCOME CHART
                      </h2>
                      <table className="min-w-full border border-slate-600 rounded-lg overflow-hidden">
                        <thead>
                          <tr className="bg-orange-500 text-white text-sm md:text-base">
                            <th className="px-4 py-2 border border-slate-600">
                              Level
                            </th>
                            <th className="px-4 py-2 border border-slate-600">
                              Direct Business
                            </th>
                            <th className="px-4 py-2 border border-slate-600">
                              Total Team Business
                            </th>
                            {/* <th className="px-4 py-2 border border-slate-600">
                              Royalty Income
                              </th> */}
                            <th className="px-4 py-2 border border-slate-600">
                              Rewards Income
                            </th>
                            <th className="px-4 py-2 border border-slate-600">
                              Level Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((row, i) => (
                            <tr
                              key={i}
                              className={`${i % 2 === 0
                                  ? "bg-slate-800/50"
                                  : "bg-slate-900/50"
                                } text-slate-200`}
                            >
                              <td className="px-4 py-2 border border-slate-700 text-center">
                                {row.level}
                              </td>
                              <td className="px-4 py-2 border border-slate-700 text-center">
                                {row.direct} $
                              </td>
                              <td className="px-4 py-2 border border-slate-700 text-center">
                                {row.team} $
                              </td>
                              {/* <td className="px-4 py-2 border border-slate-700 text-center">
                                {row.roi}
                              </td> */}
                              {/* <td className="px-4 py-2 border border-slate-700 text-center">
                                {row.passive}
                              </td> */}
                              <td className="px-4 py-2 border border-slate-700 text-center">
                                {row.reward}
                              </td>

                              <td
                                className={`px-4 py-2 border border-slate-700 text-center font-semibold ${directUserIncome >= row.direct &&
                                    levelUserIncome >= row.team
                                    ? "text-green-500"
                                    : "text-red-500"
                                  }`}
                              >
                                {directUserIncome >= row.direct &&
                                  levelUserIncome >= row.team
                                  ? "Achieved"
                                  : "Not Achieved"}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Agar aur bhi indexes ke liye alag details dikhani ho to yahin add kar sakta hai */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bonus;
