import React from "react";
import {
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
  MessageCircle,
  Share2,
  Globe,
  PlayCircle,
  Rss,
  Image,
  ShoppingCart,
} from "lucide-react";

const PageTwo = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Animated Background Icons */}
      <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-8 opacity-20 text-white pointer-events-none">
        <div className="animate-pulse">
          <Facebook size={40} className="sm:w-16 sm:h-16" />
        </div>
        <div className="animate-pulse delay-75">
          <Twitter size={40} className="sm:w-16 sm:h-16" />
        </div>
        <div className="animate-pulse delay-150">
          <Youtube size={40} className="sm:w-16 sm:h-16" />
        </div>
        <div className="animate-pulse delay-300">
          <Linkedin size={40} className="sm:w-16 sm:h-16" />
        </div>
        <div className="animate-pulse delay-500">
          <Instagram size={40} className="sm:w-16 sm:h-16" />
        </div>
        <div className="animate-pulse delay-700">
          <MessageCircle size={40} className="sm:w-16 sm:h-16" />
        </div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
      <div className="absolute bottom-32 left-20 w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-500"></div>
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-green-400 rounded-full animate-bounce delay-700"></div>

      {/* Main Content Container */}
      <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6">
        {/* Light Bulb Container */}
        <div className="relative transform hover:scale-105 transition-transform duration-300">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>

          {/* Main Bulb */}
          <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-full w-[85vw] max-w-[420px] aspect-square flex flex-col justify-center items-center text-center px-4 sm:px-6 shadow-2xl border-4 border-white/20">
            {/* Title */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                POWER OF
              </h2>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight mt-1">
                DIGITAL MEDIA
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-2 rounded-full"></div>
            </div>

            {/* Social Media Icons Grid */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-2 sm:p-3 rounded-full shadow-lg group-hover:shadow-pink-500/50">
                  <Globe size={16} className="sm:w-5 sm:h-5 text-white" />
                </div>
              </div>

              <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 sm:p-3 rounded-full shadow-lg group-hover:shadow-blue-500/50">
                  <Facebook size={16} className="sm:w-5 sm:h-5 text-white" />
                </div>
              </div>

              <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className="bg-gradient-to-br from-sky-400 to-sky-500 p-2 sm:p-3 rounded-full shadow-lg group-hover:shadow-sky-400/50">
                  <Twitter size={16} className="sm:w-5 sm:h-5 text-white" />
                </div>
              </div>

              <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-2 sm:p-3 rounded-full shadow-lg group-hover:shadow-red-500/50">
                  <Youtube size={16} className="sm:w-5 sm:h-5 text-white" />
                </div>
              </div>

              <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 sm:p-3 rounded-full shadow-lg group-hover:shadow-purple-500/50">
                  <Instagram size={16} className="sm:w-5 sm:h-5 text-white" />
                </div>
              </div>

              <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className="bg-gradient-to-br from-orange-400 to-yellow-500 p-2 sm:p-3 rounded-full shadow-lg group-hover:shadow-orange-400/50">
                  <PlayCircle size={16} className="sm:w-5 sm:h-5 text-white" />
                </div>
              </div>

              <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 sm:p-3 rounded-full shadow-lg group-hover:shadow-green-500/50">
                  <MessageCircle
                    size={16}
                    className="sm:w-5 sm:h-5 text-white"
                  />
                </div>
              </div>

              <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-700 to-blue-800 p-2 sm:p-3 rounded-full shadow-lg group-hover:shadow-blue-600/50">
                  <Linkedin size={16} className="sm:w-5 sm:h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Bulb Base */}
            <div className="flex flex-col items-center">
              <div className="w-12 sm:w-16 h-3 sm:h-4 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg shadow-md"></div>
              <div className="w-8 sm:w-12 h-2 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg mt-1 shadow-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Icons */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end gap-4 sm:gap-6 pb-8 opacity-30 text-white pointer-events-none overflow-hidden">
        <div className="animate-bounce delay-100">
          <Share2 size={24} className="sm:w-8 sm:h-8" />
        </div>
        <div className="animate-bounce delay-300">
          <Rss size={24} className="sm:w-8 sm:h-8" />
        </div>
        <div className="animate-bounce delay-500">
          <Image size={24} className="sm:w-8 sm:h-8" />
        </div>
        <div className="animate-bounce delay-700">
          <ShoppingCart size={24} className="sm:w-8 sm:h-8" />
        </div>
      </div>

      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none"></div>
    </div>
  );
};

export default PageTwo;
