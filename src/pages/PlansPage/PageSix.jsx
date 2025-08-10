import React from "react";
import {
  Youtube,
  Instagram,
  Facebook,
  Star,
  ArrowRight,
  Users,
  TrendingUp,
  Zap,
} from "lucide-react";

const PageSix = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-pink-500/10 rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-16 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8 lg:space-y-10">
              {/* Featured Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold text-lg sm:text-xl px-6 py-3 rounded-full shadow-lg hover:shadow-yellow-500/25 transform hover:scale-105 transition-all duration-300">
                <Zap className="w-5 h-5" />
                <span>Promote your channels</span>
              </div>

              {/* Main Offer */}
              <div className="relative">
                <div className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 text-white font-bold text-2xl sm:text-3xl lg:text-4xl px-6 sm:px-8 py-6 rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 border border-green-400/20">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                    <span className="text-lg sm:text-xl lg:text-2xl">
                      Launching Offer
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-yellow-300 drop-shadow-lg">
                        $17
                      </span>
                      <span className="text-lg sm:text-xl text-green-100">
                        Only
                      </span>
                    </div>
                  </div>

                  {/* Floating discount badge */}
                  <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                    LIMITED TIME
                  </div>
                </div>

                {/* Original Price Strikethrough */}
                <div className="mt-3 text-gray-400 text-lg">
                  <span className="line-through">$20</span>
                  <span className="ml-2 text-green-400 font-semibold">
                    Save 15%!
                  </span>
                </div>
              </div>

              {/* Platform List */}
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-200 mb-4">
                  Available Platforms:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* YouTube Card */}
                  <div className="group bg-gray-800/60 hover:bg-gray-700/60 rounded-xl p-4 border border-gray-600/50 hover:border-red-500/50 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Youtube className="w-8 h-8 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <p className="font-semibold text-white">YouTube</p>
                        <p className="text-xs text-gray-400">Video Content</p>
                      </div>
                    </div>
                  </div>

                  {/* Instagram Card */}
                  <div className="group bg-gray-800/60 hover:bg-gray-700/60 rounded-xl p-4 border border-gray-600/50 hover:border-pink-500/50 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Instagram className="w-8 h-8 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <p className="font-semibold text-white">Instagram</p>
                        <p className="text-xs text-gray-400">Social Media</p>
                      </div>
                    </div>
                  </div>

                  {/* Facebook Card */}
                  <div className="group bg-gray-800/60 hover:bg-gray-700/60 rounded-xl p-4 border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Facebook className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <p className="font-semibold text-white">Facebook</p>
                        <p className="text-xs text-gray-400">Marketing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Boost your social media presence</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Increase engagement and followers</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Professional channel optimization</span>
                </div>
              </div>

              {/* CTA Button */}
              {/* <div className="pt-4">
                <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 text-lg">
                  <div className="flex items-center justify-center gap-2">
                    <span>Get Started Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </button>
              </div> */}
            </div>

            {/* Right Side - Enhanced Visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                  {/* Placeholder for Meeting Image with Enhanced Styling */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 rounded-full border-4 border-green-500 shadow-2xl overflow-hidden relative">
                    {/* Mock Business Meeting Visual */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4 p-8">
                        <Users className="w-16 h-16 mx-auto text-green-400" />
                        <h4 className="text-xl font-bold text-white">
                          Business Growth
                        </h4>
                        <p className="text-gray-300 text-sm">
                          Professional Channel Management
                        </p>
                        <div className="flex justify-center gap-2 mt-4">
                          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                          <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-100"></div>
                          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-200"></div>
                        </div>
                      </div>
                    </div>

                    {/* Glowing border effect */}
                    <div className="absolute inset-0 rounded-full border-2 border-green-400/50 animate-pulse"></div>
                  </div>

                  {/* Floating Stats Cards */}
                  <div className="absolute -top-6 -right-6 bg-gray-800 rounded-xl p-3 shadow-xl border border-gray-600/50 hidden sm:block">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      <div>
                        <p className="text-white font-bold text-sm">+150%</p>
                        <p className="text-gray-400 text-xs">Growth</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -left-6 bg-gray-800 rounded-xl p-3 shadow-xl border border-gray-600/50 hidden sm:block">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <div>
                        <p className="text-white font-bold text-sm">4.9/5</p>
                        <p className="text-gray-400 text-xs">Rating</p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-8 -left-8 w-16 h-16 bg-yellow-500/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-purple-500/20 rounded-full blur-lg animate-pulse delay-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Indicators - Mobile */}
          <div className="mt-16 pt-8 border-t border-gray-700/50 lg:hidden">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <p className="text-xl font-bold text-green-400">+150%</p>
                </div>
                <p className="text-gray-400 text-sm">Average Growth</p>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <p className="text-xl font-bold text-yellow-400">4.9/5</p>
                </div>
                <p className="text-gray-400 text-sm">Customer Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSix;
