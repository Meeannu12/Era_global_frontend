import React from "react";
import { BadgeCheck, Gift, Users, TrendingUp } from "lucide-react";

const PageFive = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <div className="px-4 sm:px-6 lg:px-16 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Header Badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center justify-center rounded-full text-lg font-bold shadow-lg transform hover:scale-105 transition-transform duration-200">
                  01
                </div>
                <div className="flex flex-col">
                  <h2 className="text-red-400 text-xl sm:text-2xl font-extrabold tracking-wider">
                    REGISTRATION
                  </h2>
                  <div className="w-16 h-1 bg-red-400 mt-1"></div>
                </div>
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Customer Program
                </h3>
                <p className="text-gray-400 text-lg sm:text-xl max-w-lg">
                  Join our exclusive program and unlock amazing benefits for
                  your business growth.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="space-y-4 sm:space-y-6">
                <div className="group flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-green-500/30">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm sm:text-base shadow-lg group-hover:shadow-blue-500/25 transition-shadow duration-300">
                    01
                  </div>
                  <div className="flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-500 px-4 sm:px-6 py-3 rounded-lg shadow-lg flex-1 group-hover:from-green-500 group-hover:to-green-400 transition-all duration-300">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-semibold text-sm sm:text-base">
                      Promote Your Channels
                    </span>
                  </div>
                </div>

                <div className="group flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-green-500/30">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm sm:text-base shadow-lg group-hover:shadow-blue-500/25 transition-shadow duration-300">
                    02
                  </div>
                  <div className="flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-500 px-4 sm:px-6 py-3 rounded-lg shadow-lg flex-1 group-hover:from-green-500 group-hover:to-green-400 transition-all duration-300">
                    <Gift className="w-5 h-5" />
                    <span className="font-semibold text-sm sm:text-base">
                      Free Referral Program
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              {/* <div className="pt-6">
                <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 text-lg w-full sm:w-auto">
                  <div className="flex items-center justify-center gap-2">
                    <BadgeCheck className="w-5 h-5" />
                    Register Now
                  </div>
                </button>
              </div> */}
            </div>

            {/* Right Visual Content */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Placeholder for Image with Enhanced Design */}
                <div className="relative bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-600/50">
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>

                  {/* Mock Registration Form Preview */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <Users className="w-16 h-16 mx-auto text-green-400 mb-4" />
                      <h4 className="text-xl font-bold text-white mb-2">
                        Quick Registration
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Join thousands of satisfied customers
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="h-12 bg-gray-600/50 rounded-lg flex items-center px-4">
                        <span className="text-gray-400 text-sm">
                          Enter your details...
                        </span>
                      </div>
                      <div className="h-12 bg-gray-600/50 rounded-lg flex items-center px-4">
                        <span className="text-gray-400 text-sm">
                          Business information...
                        </span>
                      </div>
                      <div className="h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          Get Started
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-green-500/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full blur-lg"></div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -bottom-8 -left-4 bg-gray-800 rounded-xl p-4 shadow-xl border border-gray-600/50 hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <BadgeCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      {/* <p className="text-white font-bold text-lg">5,000+</p> */}
                      <p className="text-gray-400 text-xs">Active Members</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Section - Mobile Visible */}
          <div className="mt-16 pt-8 border-t border-gray-700/50 sm:hidden">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                <p className="text-2xl font-bold text-green-400">5,000+</p>
                <p className="text-gray-400 text-sm">Active Members</p>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                <p className="text-2xl font-bold text-blue-400">98%</p>
                <p className="text-gray-400 text-sm">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFive;
