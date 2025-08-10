import React from "react";
import { Users, Star, Share2, ArrowRight, Sparkles } from "lucide-react";

function PageFour() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 md:px-8 lg:px-12">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div> */}

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/20 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">
              Join Our Community
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
            How to Join
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Discover the perfect path for you and start your journey with us
            today
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            {/* Left Image Section */}
            <div className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                alt="Business Meeting"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-4">
                  <p className="text-white font-medium">
                    Ready to transform your career?
                  </p>
                  <p className="text-gray-300 text-sm mt-1">
                    Choose your path below
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content Section */}
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm p-8 md:p-12 flex flex-col justify-center">
              {/* Customer Option */}
              <div className="group mb-12 transform transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold px-5 py-3 rounded-2xl text-lg shadow-lg transform transition-transform group-hover:rotate-3">
                      01
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition-opacity"></div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl md:text-4xl text-white font-bold">
                        Customer
                      </h3>
                      <ArrowRight className="w-6 h-6 text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300" />
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Experience premium products and exceptional service
                      tailored just for you
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="bg-pink-500/20 p-2 rounded-lg">
                        <Users className="text-pink-400 w-3 h-3" />
                      </div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="text-yellow-400 w-3 h-3 fill-current animate-pulse"
                            style={{ animationDelay: `${star * 0.1}s` }}
                          />
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm ml-2">
                        4.9/5 Rating
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Distributor Option */}
              <div className="group transform transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold px-5 py-3 rounded-2xl text-lg shadow-lg transform transition-transform group-hover:rotate-3">
                      02
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition-opacity"></div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-3xl md:text-4xl text-white font-bold">
                        Distributor
                      </h3>
                      <ArrowRight className="w-6 h-6 text-purple-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300" />
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Build your business empire and create lasting success with
                      our proven system
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="bg-purple-500/20 p-2 rounded-lg">
                        <Share2 className="text-purple-400 w-3 h-3" />
                      </div>
                      <div className="bg-blue-500/20 p-2 rounded-lg">
                        <Users className="text-blue-400 w-3 h-3" />
                      </div>
                      <span className="text-gray-400 text-sm ml-2">
                        Network & Grow
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "10K+", label: "Happy Customers", icon: Users },
            { number: "500+", label: "Active Distributors", icon: Share2 },
            { number: "4.9★", label: "Average Rating", icon: Star },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:bg-white/15">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-3 rounded-full">
                    <stat.icon className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default PageFour;
