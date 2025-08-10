import React from "react";
import {
  BarChart3,
  Coins,
  LineChart,
  TrendingUp,
  Calculator,
  Target,
  Zap,
} from "lucide-react";

const PageEleven = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl w-full max-w-7xl border border-gray-700">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-10"></div>
          <div className="relative p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              {/* Left Content Section */}
              <div className="flex-1 space-y-6 text-center lg:text-left">
                {/* Logo + Brand */}
                <div className="flex items-center justify-center lg:justify-start mb-8 space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      ERA-GLOBAL
                    </span>
                    <p className="text-gray-400 text-sm">
                      Technology & Innovation
                    </p>
                  </div>
                </div>

                {/* ROI Self Income Section */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                    <Coins className="w-5 h-5" />
                    ROI Self Income
                  </div>

                  <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 lg:p-8">
                    <div className="text-center lg:text-left">
                      <div className="text-6xl lg:text-7xl font-extrabold mb-4">
                        <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                          0.25%
                        </span>
                        <span className="text-white text-3xl lg:text-4xl ml-4">
                          Per Day
                        </span>
                      </div>
                      <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <span className="text-lg">
                          Consistent Daily Returns
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ROI Direct Income Section */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                    <BarChart3 className="w-5 h-5" />
                    ROI Direct Income
                  </div>

                  <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 lg:p-8">
                    <div className="text-center lg:text-left">
                      <div className="text-5xl lg:text-6xl font-extrabold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                          0.25%
                        </span>
                        <span className="text-white text-2xl lg:text-3xl mx-4">
                          =
                        </span>
                        <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                          100%
                        </span>
                      </div>
                      <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300">
                        <Target className="w-5 h-5 text-blue-400" />
                        <span className="text-lg">
                          Maximum Return Potential
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Package Information */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <Calculator className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Package Details
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Per Day of your Activation Package
                        <br />
                        <span className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold mt-2">
                          <Zap className="w-4 h-4" />
                          5x Retopup Available
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Visual Section */}
              <div className="flex-1 relative">
                <div className="relative bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-6 lg:p-8 border border-gray-600">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 opacity-5 rounded-2xl"></div>

                  {/* Chart Placeholder */}
                  <div className="relative bg-gray-800 rounded-xl p-8 mb-6 min-h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <LineChart className="w-16 h-16 text-cyan-400" />
                        <BarChart3 className="w-16 h-16 text-purple-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Growth Analytics
                      </h3>
                      <p className="text-gray-400">
                        Visual representation of your ROI progress
                      </p>
                    </div>
                  </div>

                  <img
                    src="https://www.clker.com/cliparts/d/4/9/3/15164942181639383468tax-return-clipart.hi.png"
                    alt=""
                  />

                  {/* Stats Grid */}
                  {/* <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-400 mb-1">
                        25%
                      </div>
                      <div className="text-gray-400 text-sm">Monthly ROI</div>
                    </div>
                    <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-1">
                        365
                      </div>
                      <div className="text-gray-400 text-sm">Days Active</div>
                    </div>
                    <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-1">
                        5x
                      </div>
                      <div className="text-gray-400 text-sm">Retopup Limit</div>
                    </div>
                    <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-yellow-400 mb-1">
                        100%
                      </div>
                      <div className="text-gray-400 text-sm">Max Return</div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Daily Growth
              </h3>
              <p className="text-gray-400">
                Consistent 0.25% daily returns on your investment
              </p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Smart Calculation
              </h3>
              <p className="text-gray-400">
                Automated ROI calculation based on package value
              </p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Maximum Returns
              </h3>
              <p className="text-gray-400">
                Achieve up to 100% ROI with strategic retopups
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-6 lg:p-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Ready to Start Earning?
          </h2>
          <p className="text-cyan-100 mb-6 text-lg">
            Join thousands of successful investors with ERA-Global Technology
          </p>
          <button className="bg-white text-gray-900 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Activate Your Package
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageEleven;
