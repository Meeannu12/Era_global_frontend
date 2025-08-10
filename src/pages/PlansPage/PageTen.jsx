import React from "react";
import {
  Users,
  TrendingUp,
  PieChart,
  Gem,
  Gift,
  DollarSign,
  ShieldCheck,
  UsersRound,
  Star,
  ArrowRight,
} from "lucide-react";

const PageTen = () => {
  const incomeTypes = [
    {
      icon: Users,
      title: "Referral Team Income",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      description: "Earn from your network's success",
    },
    {
      icon: TrendingUp,
      title: "ROI Self Income",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      description: "Personal investment returns",
    },
    {
      icon: PieChart,
      title: "Team Direct ROI Income",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      description: "Direct team member returns",
    },
    {
      icon: Gem,
      title: "Passive Income",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      description: "Continuous earning stream",
    },
    {
      icon: Gift,
      title: "Reward Income",
      color: "text-pink-400",
      bgColor: "bg-pink-400/10",
      description: "Performance-based bonuses",
    },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Financial Independence",
      description:
        "Enable financial freedom through strategic ERA-Global Technology solutions and sustainable income streams.",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: ShieldCheck,
      title: "Leadership Development",
      description:
        "Build self-awareness, understand your strengths and weaknesses, and develop core leadership values.",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: UsersRound,
      title: "Community Impact",
      description:
        "Create meaningful connections while building social capital and fostering community growth.",
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-10"></div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 bg-opacity-20 backdrop-blur-sm border border-cyan-500 border-opacity-30 rounded-full px-6 py-2 mb-6">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-cyan-300">
                Multiple Income Streams
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent mb-6">
              Distributor Income
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Unlock your earning potential with our comprehensive income
              structure designed for sustainable growth and financial freedom.
            </p>
          </div>

          {/* Income Types Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6 mb-16">
            {incomeTypes.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 border-opacity-50 rounded-xl p-6 hover:border-cyan-500 hover:border-opacity-50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"></div>
                  <div className="relative">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 bg-yellow-400 bg-opacity-10 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Benefits Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Left Column - Benefits */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                Why Choose Our Platform?
              </h2>
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gray-800 bg-opacity-40 backdrop-blur-sm border border-gray-700 border-opacity-50 rounded-xl p-6 hover:border-cyan-500 hover:border-opacity-50 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
                    <div className="relative">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column - Visual Element */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-700 border-opacity-50 rounded-2xl p-8 lg:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 opacity-5 rounded-2xl"></div>
                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6">
                    <DollarSign className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Start Your Journey
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Join thousands of successful distributors who have
                    transformed their financial future with ERA-Global
                    Technology.
                  </p>
                  {/* <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-800 bg-opacity-50 rounded-lg">
                      <span className="text-gray-300">Active Distributors</span>
                      <span className="text-cyan-400 font-bold">10,000+</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-800 bg-opacity-50 rounded-lg">
                      <span className="text-gray-300">Total Earnings</span>
                      <span className="text-green-400 font-bold">$2.5M+</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-800 bg-opacity-50 rounded-lg">
                      <span className="text-gray-300">Success Rate</span>
                      <span className="text-purple-400 font-bold">95%</span>
                    </div>
                  </div>
                  <button className="w-full mt-8 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group">
                    Get Started Today
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-10"></div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the ERA-Global Technology family and start building multiple
              income streams today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group">
                Become a Distributor
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              {/* <button className="border border-gray-600 text-gray-300 font-semibold py-4 px-8 rounded-lg hover:border-cyan-500 hover:text-cyan-300 transition-all duration-300">
                Learn More
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTen;
