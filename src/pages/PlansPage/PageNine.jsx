import React from "react";
import {
  BadgeDollarSign,
  ArrowDownUp,
  Users,
  TrendingUp,
  Star,
} from "lucide-react";

const PageNine = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Logo & Header */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-3 mb-6 p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center font-bold text-white text-xl">
                  ERA
                </div>
                <span className="text-white font-semibold text-lg">
                  ERA Platform
                </span>
              </div>

              {/* Section Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
                Distributor Program
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto lg:mx-0"></div>
            </div>

            {/* Registration Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105">
              {/* Registration Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    REGISTRATION
                  </h2>
                </div>

                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    02
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Joining Amount */}
              <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl p-6 border border-emerald-400/30 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <BadgeDollarSign className="w-8 h-8 text-emerald-400" />
                  <h3 className="text-xl font-semibold text-white">
                    JOINING AMOUNT
                  </h3>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-emerald-400">
                    Min $20
                  </span>
                  <span className="text-emerald-300 text-sm">USD</span>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Benefits:
                  </h3>
                </div>

                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-6 border border-yellow-400/30">
                  <div className="flex items-start gap-3">
                    <Star className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-lg text-white/90 leading-relaxed">
                      Your earning starts from{" "}
                      <span className="text-yellow-400 font-semibold">
                        Level 2 to Level 10
                      </span>{" "}
                      Referral Team
                    </p>
                  </div>
                </div>

                {/* Additional Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-cyan-400 font-semibold mb-1">
                      10 Levels
                    </div>
                    <div className="text-white/80 text-sm">
                      Deep referral system
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-purple-400 font-semibold mb-1">
                      Instant Start
                    </div>
                    <div className="text-white/80 text-sm">
                      Begin earning immediately
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              {/* <div className="mt-8">
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                  <span className="text-lg">Join Now</span>
                  <ArrowDownUp className="w-5 h-5" />
                </button>
              </div> */}
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full opacity-20 animate-pulse animation-delay-300"></div>

              {/* Main Image Container */}
              <div className="relative bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center border border-white/20 shadow-inner">
                  {/* Placeholder for distributor image */}
                  <div className="w-48 h-48 md:w-60 md:h-60 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    <Users className="w-24 h-24 md:w-32 md:h-32 opacity-80" />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
                  Active
                </div>
                <div className="absolute bottom-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                  $20+
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-cyan-400 mb-2">10</div>
            <div className="text-white/80">Earning Levels</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">$20</div>
            <div className="text-white/80">Minimum Investment</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-pink-400 mb-2">∞</div>
            <div className="text-white/80">Earning Potential</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNine;
