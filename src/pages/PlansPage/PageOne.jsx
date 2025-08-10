import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Globe,
  Zap,
  Shield,
  Users,
  Star,
  ArrowRight,
  Play,
  CheckCircle,
} from "lucide-react";

const PageOne = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Lightning Fast",
      desc: "Experience blazing-fast digital transactions",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Ultra Secure",
      desc: "Military-grade encryption for your peace of mind",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Global Reach",
      desc: "Connect with opportunities worldwide",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Community",
      desc: "Join millions of satisfied users globally",
    },
  ];

  const stats = [
    { number: "10M+", label: "Active Users" },
    { number: "150+", label: "Countries" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Digital Entrepreneur",
      text: "ERA-GLOBAL transformed my business completely!",
    },
    {
      name: "Marcus Rodriguez",
      role: "Tech Innovator",
      text: "The future of digital revolution is here.",
    },
    {
      name: "Priya Sharma",
      role: "Financial Analyst",
      text: "Incredible security and user experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}

      {/* Hero Section */}
      <div className="relative z-10 px-4 sm:px-8 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
            {/* LEFT CONTENT */}
            <div
              className={`w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}>
              {/* Logo with glow effect */}
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl"></div>
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-2xl sm:text-3xl font-bold text-white">
                    ERA
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="font-black leading-tight text-[clamp(2.5rem,6vw,4rem)] bg-gradient-to-r from-white via-green-100 to-green-300 bg-clip-text text-transparent">
                  WELCOME TO
                </h1>
                <h1 className="font-black leading-tight text-[clamp(2.5rem,6vw,4rem)] bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent tracking-widest">
                  ERA-GLOBAL
                </h1>
              </div>

              {/* Mudra Net Section */}
              <div className="bg-gradient-to-r from-green-500/20 to-transparent p-6 rounded-2xl border border-green-500/30 backdrop-blur-sm">
                {/* <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">
                  Mudra Net
                </h2> */}
                <p className="text-lg text-green-200 font-medium">
                  A New Digital Revolution
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-300">
                    Powered by Next-Gen Technology
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg sm:text-xl font-medium max-w-lg leading-relaxed">
                Embark on a transformative journey into the future of digital
                innovation. Experience unprecedented security, speed, and global
                connectivity.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
                  JOIN NOW <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Website Link */}
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                <Globe className="w-8 h-8 text-blue-400" />
                <div>
                  <p className="text-sm text-gray-300">More Information</p>
                  <a
                    href="https://www.eraglobal.world"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-blue-400 hover:text-blue-300 transition-colors underline decoration-blue-400/50 hover:decoration-blue-300">
                    www.eraglobal.world
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
