import React, { useEffect, useState } from "react";
import {
  Users,
  TrendingUp,
  Activity,
  BarChart3,
  PieChart,
  Target,
  ChevronRight,
  User,
  UserCheck,
  UserX,
  ChevronDown,
  PhoneCall,
} from "lucide-react";
import { getReferralCountByLevel } from "../../apis/userServices";
import { useAuth } from "../../context/authContext";

const LevelView = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();

  const [apiResponse, setApiResponse] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getReferralCountByLevel({
        sponsorID: user.sponsorID,
      });

      setApiResponse(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      setApiResponse({});
      toast.error(error.response.data.message || "Something went wrong");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Process the API response data
  const levelData = apiResponse;
  const levels = Object.keys(levelData).map((level, index) => ({
    key: index,
    level: parseInt(level),
    ...levelData[level],
  }));

  // Calculate totals
  const totalUsers = levels.reduce((sum, level) => sum + level.total, 0);
  const totalActive = levels.reduce((sum, level) => sum + level.active, 0);
  const totalInactive = levels.reduce((sum, level) => sum + level.inactive, 0);

  const getProgressPercentage = (value, total) => {
    return total > 0 ? (value / total) * 100 : 0;
  };

  const getLevelColor = (level) => {
    const colors = [
      "from-blue-500 to-blue-600",
      "from-purple-500 to-purple-600",
      "from-green-500 to-green-600",
      "from-orange-500 to-orange-600",
      "from-red-500 to-red-600",
      "from-indigo-500 to-indigo-600",
    ];
    return colors[(level - 1) % colors.length];
  };

  const getLevelBorder = (level) => {
    const colors = [
      "border-blue-500",
      "border-purple-500",
      "border-green-500",
      "border-orange-500",
      "border-red-500",
      "border-indigo-500",
    ];
    return colors[(level - 1) % colors.length];
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-3 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <TrendingUp className="text-blue-400 flex-shrink-0" size={20} />
              <h1 className="text-lg sm:text-xl font-bold text-white">
                Referral Network Analysis
              </h1>
            </div>
            <p className="text-gray-400 text-sm sm:text-base">
              Multi-level referral breakdown and performance metrics
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-4 sm:mb-6">
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-gray-400 text-xs sm:text-sm font-medium">
                  Total Network Size
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-1 truncate">
                  {totalUsers}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">
                  Across all levels
                </p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0 ml-3">
                <Users className="text-blue-400" size={20} />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-gray-400 text-xs sm:text-sm font-medium">
                  Active Members
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-green-400 mt-1 truncate">
                  {totalActive}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">
                  {totalUsers > 0
                    ? ((totalActive / totalUsers) * 100).toFixed(1)
                    : 0}
                  % active rate
                </p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0 ml-3">
                <UserCheck className="text-green-400" size={20} />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-gray-400 text-xs sm:text-sm font-medium">
                  Inactive Members
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-red-400 mt-1 truncate">
                  {totalInactive}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">
                  {totalUsers > 0
                    ? ((totalInactive / totalUsers) * 100).toFixed(1)
                    : 0}
                  % inactive rate
                </p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-900/30 rounded-lg flex items-center justify-center flex-shrink-0 ml-3">
                <UserX className="text-red-400" size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Level-wise Breakdown */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <BarChart3 className="text-purple-400 flex-shrink-0" size={20} />
            <h2 className="text-lg sm:text-xl font-semibold text-white">
              Level-wise Breakdown
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
            {levels.map((levelInfo) => (
              <div
                key={levelInfo.level}
                className={`bg-gray-700/50 rounded-lg border-2 ${
                  selectedLevel === levelInfo.level
                    ? getLevelBorder(levelInfo.level)
                    : "border-gray-600"
                } p-3 sm:p-4 cursor-pointer transition-all hover:border-gray-500`}
                onClick={() =>
                  setSelectedLevel(
                    selectedLevel === levelInfo.level ? null : levelInfo.level
                  )
                }>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${getLevelColor(
                        levelInfo.level
                      )} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold text-xs sm:text-sm">
                        L{levelInfo.level}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold text-white truncate">
                        Level {levelInfo.level}
                      </h3>
                      <p className="text-yellow-400 font-bold text-sm sm:text-base truncate">
                        {levelInfo.total} total users
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`text-gray-400 transition-transform flex-shrink-0 ${
                      selectedLevel === levelInfo.level ? "rotate-180" : ""
                    }`}
                    size={18}
                  />
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs sm:text-sm text-gray-400">
                        Active
                      </span>
                      <span className="text-xs sm:text-sm text-green-400 font-medium">
                        {levelInfo.active}
                      </span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-1.5 sm:h-2">
                      <div
                        className="bg-green-500 h-1.5 sm:h-2 rounded-full transition-all duration-500"
                        style={{
                          width: `${getProgressPercentage(
                            levelInfo.active,
                            levelInfo.total
                          )}%`,
                        }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs sm:text-sm text-gray-400">
                        Inactive
                      </span>
                      <span className="text-xs sm:text-sm text-red-400 font-medium">
                        {levelInfo.inactive}
                      </span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-1.5 sm:h-2">
                      <div
                        className="bg-red-500 h-1.5 sm:h-2 rounded-full transition-all duration-500"
                        style={{
                          width: `${getProgressPercentage(
                            levelInfo.inactive,
                            levelInfo.total
                          )}%`,
                        }}></div>
                    </div>
                  </div>
                </div>

                {selectedLevel === levelInfo.level && (
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-600">
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center mb-3 sm:mb-4">
                      <div>
                        <p className="text-lg sm:text-2xl font-bold text-white">
                          {levelInfo.total}
                        </p>
                        <p className="text-xs text-gray-400">Total</p>
                      </div>
                      <div>
                        <p className="text-lg sm:text-2xl font-bold text-green-400">
                          {levelInfo.active}
                        </p>
                        <p className="text-xs text-gray-400">Active</p>
                      </div>
                      <div>
                        <p className="text-lg sm:text-2xl font-bold text-red-400">
                          {levelInfo.inactive}
                        </p>
                        <p className="text-xs text-gray-400">Inactive</p>
                      </div>
                    </div>

                    {levelInfo.total > 0 && (
                      <div className="text-center mb-3 sm:mb-4">
                        <p className="text-xs sm:text-sm text-gray-400">
                          Activity Rate:{" "}
                          <span className="text-white font-medium">
                            {(
                              (levelInfo.active / levelInfo.total) *
                              100
                            ).toFixed(1)}
                            %
                          </span>
                        </p>
                      </div>
                    )}

                    {/* User List */}
                    {levelInfo.users && levelInfo.users.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-300 mb-2">
                          Users in this level:
                        </h4>
                        <div className="max-h-32 overflow-y-auto space-y-1">
                          {levelInfo.users.map((user, index) => (
                            <div
                              key={user.sponsorID || index}
                              className="flex items-center justify-between bg-gray-600/30 rounded px-2 py-1">
                              <div className="flex items-center gap-2 min-w-0 flex-1">
                                <div
                                  className={`w-2 h-2 rounded-full flex-shrink-0 ${
                                    user.status === "active"
                                      ? "bg-green-400"
                                      : "bg-red-400"
                                  }`}></div>
                                <span className="text-xs text-white truncate">
                                  {user.username}
                                </span>
                              </div>
                              <div className="flex flex-col justify-end items-end">
                                <span className="text-xs text-yellow-300 ml-2">
                                  {user.sponsorID}
                                </span>
                                <div className="text-xs text-gray-100 ml-2">
                                  <PhoneCall
                                    size={10}
                                    className="inline text-white mr-1"
                                  />{" "}
                                  {user.phone}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Network Distribution */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <Target className="text-orange-400 flex-shrink-0" size={20} />
            <h2 className="text-lg sm:text-xl font-semibold text-white">
              Network Distribution
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Network Pyramid */}
            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-medium text-white mb-3 sm:mb-4">
                Network Pyramid
              </h3>
              {levels.map((levelInfo) => {
                const maxWidth = Math.max(...levels.map((l) => l.total));
                const widthPercentage =
                  maxWidth > 0 ? (levelInfo.total / maxWidth) * 100 : 0;

                return (
                  <div
                    key={levelInfo.level}
                    className="flex items-center gap-2 sm:gap-4">
                    <div className="w-8 sm:w-12 text-xs sm:text-sm text-gray-400 text-right flex-shrink-0">
                      L{levelInfo.level}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className={`bg-gradient-to-r ${getLevelColor(
                          levelInfo.level
                        )} rounded-lg h-6 sm:h-8 flex items-center justify-center transition-all duration-500 min-w-0`}
                        style={{ width: `${Math.max(widthPercentage, 10)}%` }}>
                        <span className="text-white text-xs sm:text-sm font-medium">
                          {levelInfo.total}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Performance Metrics */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-medium text-white mb-3 sm:mb-4">
                Performance Metrics
              </h3>

              <div className="bg-gray-700/50 rounded-lg p-3 sm:p-4">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Network Depth</span>
                    <span className="text-white font-medium text-sm">
                      {levels.filter((l) => l.total > 0).length} levels
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">
                      Deepest Active Level
                    </span>
                    <span className="text-white font-medium text-sm">
                      Level{" "}
                      {Math.max(
                        ...levels
                          .filter((l) => l.active > 0)
                          .map((l) => l.level)
                      ) || 0}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">
                      Average per Level
                    </span>
                    <span className="text-white font-medium text-sm">
                      {levels.length > 0
                        ? (
                            totalUsers /
                            levels.filter((l) => l.total > 0).length
                          ).toFixed(1)
                        : 0}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">
                      Network Health
                    </span>
                    <span
                      className={`font-medium text-sm ${
                        totalUsers > 0 && totalActive / totalUsers > 0.7
                          ? "text-green-400"
                          : totalActive / totalUsers > 0.4
                          ? "text-yellow-400"
                          : "text-red-400"
                      }`}>
                      {totalUsers > 0 && totalActive / totalUsers > 0.7
                        ? "Excellent"
                        : totalActive / totalUsers > 0.4
                        ? "Good"
                        : "Needs Attention"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelView;
