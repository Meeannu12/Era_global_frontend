import React from "react";
import {
  Handshake,
  Users,
  IndianRupee,
  TrendingUp,
  Gift,
  Star,
  ArrowRight,
  Coins,
  UserPlus,
} from "lucide-react";

const PageSeven = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-green-500/10 rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-16 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8 lg:space-y-10">
              {/* Program Banner */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-bold text-lg sm:text-xl px-6 py-4 rounded-full shadow-lg hover:shadow-yellow-500/25 transform hover:scale-105 transition-all duration-300">
                <Handshake className="w-6 h-6" />
                <span>Free Referral Earning Program</span>
              </div>

              {/* Main Earning Display */}
              <div className="relative">
                <div className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 text-white p-6 sm:p-8 rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 border border-green-400/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center"></div>
                      <div>
                        <p className="text-green-100 text-sm font-medium">
                          Daily Earnings
                        </p>
                        <p className="text-3xl sm:text-4xl font-extrabold text-yellow-300">
                          ₹1 ($0.012)
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-green-100 text-sm">Per Referral</p>
                      <p className="text-xl font-bold text-white">Per Day</p>
                    </div>
                  </div>

                  {/* Calculation Example */}
                  <div className="bg-green-700/30 rounded-lg p-4 mt-4">
                    <p className="text-green-100 text-sm mb-2">
                      Example Calculation:
                    </p>
                    <div className="flex items-center justify-between text-white">
                      <span>10 Referrals × ₹10 ($0.12)</span>
                      <span className="font-bold text-yellow-300">
                        {/* = ₹10/day */}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-3 -right-3 bg-blue-500 text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                  UNLIMITED
                </div>
              </div>

              {/* Program Description */}
              <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-600/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      How It Works
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed">
                      Refer unlimited direct members and earn{" "}
                      <span className="text-yellow-400 font-semibold">
                        ₹1 per day ($0.012)
                      </span>{" "}
                      from each active referral. The more you refer, the more
                      you earn!
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-800/40 rounded-xl p-4 border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <UserPlus className="w-6 h-6 text-blue-400" />
                    <div>
                      <p className="font-semibold text-white">
                        Unlimited Referrals
                      </p>
                      <p className="text-gray-400 text-sm">
                        No cap on earnings
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/40 rounded-xl p-4 border border-gray-600/30 hover:border-green-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <Coins className="w-6 h-6 text-green-400" />
                    <div>
                      <p className="font-semibold text-white">Daily Payouts</p>
                      <p className="text-gray-400 text-sm">Consistent income</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/40 rounded-xl p-4 border border-gray-600/30 hover:border-yellow-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <Gift className="w-6 h-6 text-yellow-400" />
                    <div>
                      <p className="font-semibold text-white">Free to Join</p>
                      <p className="text-gray-400 text-sm">
                        No investment needed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/40 rounded-xl p-4 border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-purple-400" />
                    <div>
                      <p className="font-semibold text-white">
                        Growing Network
                      </p>
                      <p className="text-gray-400 text-sm">
                        Expanding opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              {/* <div className="pt-4">
                <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 text-lg">
                  <div className="flex items-center justify-center gap-2">
                    <span>Start Referring Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </button>
              </div> */}
            </div>

            {/* Right Side - Enhanced Visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Visual Container */}
                <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                  {/* Handshake Visual with Enhanced Styling */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 rounded-2xl border-4 border-blue-400 shadow-2xl overflow-hidden relative">
                    {/* Mock Handshake/Partnership Visual */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-6 p-8">
                        <div className="relative">
                          <Handshake className="w-20 h-20 mx-auto text-yellow-300 drop-shadow-lg" />
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-white">
                              ✓
                            </span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-white mb-2">
                            Partnership Success
                          </h4>
                          <p className="text-blue-100 text-sm">
                            Building profitable relationships
                          </p>
                        </div>

                        {/* Animated Money Flow */}
                        <div className="flex justify-center items-center gap-2">
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-300 font-bold text-sm">
                              ₹1 ($0.012)
                            </span>
                          </div>
                          <div className="w-8 border-t-2 border-dashed border-yellow-300 animate-pulse"></div>
                          <div className="w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
                        </div>
                      </div>
                    </div>

                    {/* Animated border effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-blue-300/50 animate-pulse"></div>
                  </div>

                  {/* Floating Earning Stats */}
                  {/* <div className="absolute -top-6 -right-6 bg-gray-800 rounded-xl p-3 shadow-xl border border-gray-600/50 hidden sm:block">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <IndianRupee className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-green-400 font-bold text-sm">
                          ₹365+
                        </p>
                        <p className="text-gray-400 text-xs">
                          Monthly Potential
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -left-6 bg-gray-800 rounded-xl p-3 shadow-xl border border-gray-600/50 hidden sm:block">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <div>
                        <p className="text-white font-bold text-sm">500+</p>
                        <p className="text-gray-400 text-xs">
                          Active Referrers
                        </p>
                      </div>
                    </div>
                  </div> */}

                  {/* Decorative Particles */}
                  <div className="absolute -top-8 -left-8 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-yellow-500/20 rounded-full blur-lg animate-pulse delay-700"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Success Metrics - Mobile */}
          {/* <div className="mt-16 pt-8 border-t border-gray-700/50 lg:hidden">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <IndianRupee className="w-5 h-5 text-green-400" />
                  <p className="text-xl font-bold text-green-400">₹365+</p>
                </div>
                <p className="text-gray-400 text-sm">Monthly Potential</p>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <p className="text-xl font-bold text-yellow-400">500+</p>
                </div>
                <p className="text-gray-400 text-sm">Active Referrers</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PageSeven;
