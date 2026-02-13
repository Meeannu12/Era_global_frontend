import React from "react";
import {
    Target,
    Eye,
    ArrowRight,
    Sparkles,
    ChartNoAxesCombined,
    MapPinned,
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
                        <ChartNoAxesCombined className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 text-sm font-medium">
                            About MD
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-yellow-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                        MD - Woo-Seong
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        "A Visionary leader driving strategic investments with innovation, integrity, and long-term growth"
                    </p>
                </div>


                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-orange-400" />
                        <span className="text-orange-400 text-sm font-medium">
                            CMD - Chun Hei Sonn
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                        Empowering Digital Excellence
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        "A Dynamic entrepreneur shaping sustainable success through smart investments and global business leadership"
                    </p>
                </div>


                {/* Location  */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
                        <MapPinned className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-400 text-sm font-medium">
                            OUR LOCATION
                        </span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                        Hwaseong HQ: 47, Dongtan-daero 31ga- Hwaseong-si, Gyeonggi-do, 18488, South Korea
                    </h1>
                    <p className="text-lg md:text-xl text-blue-300 max-w-3xl mx-auto leading-relaxed">
                    </p>
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
