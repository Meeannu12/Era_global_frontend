import React from "react";
import {
  Target,
  Eye,
  ArrowRight,
  Sparkles,
  Users,
  TrendingUp,
} from "lucide-react";

const PageThree = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">
              About ERA
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-green-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Empowering Digital Excellence
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforming the digital landscape through innovative social media
            strategies and cutting-edge technology solutions
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Mission & Vision Cards */}
          <div className="space-y-8">
            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Our Mission
                  </h2>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg">
                  We strive to provide amazing services and deliver the best
                  customer experience. "Our mission is not to become experts in
                  sales execution or marketing, but to master the message." "Our
                  team works to eliminate indifference from any business. We aim
                  to inspire emotions, create space in hearts, and craft
                  marketing messages that attract the mind and deliver results."
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <Users className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">
                      Community Building
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">
                      Strategic Growth
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-400 text-sm font-medium mb-2">
                    Key Focus Areas:
                  </p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Digital literacy and education programs</li>
                    <li>• Brand transformation through social media</li>
                    <li>• Innovative communication strategies</li>
                    <li>• Data-driven marketing solutions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Our Vision
                  </h2>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg">
                  To inspire a digitally literate society that leverages social
                  media responsibly and strategically for growth, engagement,
                  and positive societal impact.
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg">
                    <p className="text-gray-300 text-sm">
                      Our goal is to create an environment that enhances
                      connection, prosperity, and meaning for everyone
                    </p>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg">
                    <h3 className="text-purple-400 font-semibold mb-2">
                      Future Impact
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Create a global ecosystem where technology serves
                      humanity, fostering innovation, creativity, and meaningful
                      connections across all digital platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="relative flex justify-center">
            {/* Animated Background Shapes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 md:w-96 md:h-96 border-2 border-cyan-500/30 rounded-full animate-spin-slow"></div>
              <div className="absolute w-64 h-64 md:w-80 md:h-80 border-2 border-green-500/20 rounded-full animate-pulse"></div>
              <div className="absolute w-48 h-48 md:w-64 md:h-64 border-2 border-purple-500/40 rounded-full animate-ping"></div>
            </div>

            {/* Main Image Container */}
            <div className="relative z-10 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-cyan-500 to-purple-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Digital Innovation"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Floating Stats */}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-0 left-0 w-8 h-8 bg-green-500 rounded-full opacity-60 animate-bounce delay-100"></div>
            <div className="absolute top-20 right-0 w-6 h-6 bg-cyan-500 rounded-full opacity-60 animate-bounce delay-300"></div>
            <div className="absolute bottom-20 left-0 w-4 h-4 bg-purple-500 rounded-full opacity-60 animate-bounce delay-500"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PageThree;
