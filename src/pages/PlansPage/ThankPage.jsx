import React from "react";
import { ChevronRight, Globe, Mail, CheckCircle } from "lucide-react";
import img from "../../assets/images/thank.jpg";
import logo from "../../assets/images/ERA-Logo.png";

const ThankPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-green-950 relative overflow-hidden font-sans">
      {/* Blurred Gradient Background Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-44 h-44 bg-green-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-52 h-52 bg-blue-500 rounded-full blur-3xl opacity-20 animate-ping"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-purple-500 rounded-full blur-2xl opacity-25"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8 text-white">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <img src={logo} alt="ERA Logo" className="h-20 w-auto" />
            </div>

            {/* Success Icon */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center backdrop-blur-md border border-green-400/30">
                <CheckCircle className="w-10 h-10 text-green-400" />
              </div>
            </div>

            {/* Headings & Description */}
            <div className="text-center lg:text-left space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                Thank You!
              </h1>
              <p className="text-lg lg:text-xl text-gray-300">
                Your trust in our mission fuels our journey.
              </p>
              <p className="text-gray-400 text-base lg:text-lg">
                Welcome to the <strong>ERA Global</strong> community. Together,
                we are shaping the future.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <button className="group bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                  <span>Get Started</span>
                </div>
              </button>
            </div>

            {/* Contact Info */}
            <div className="space-y-5 pt-10">
              <ContactItem
                icon={<Globe className="w-6 h-6 text-white" />}
                title="More Information"
                subtitle="eraglobal.world"
                href="https://eraglobal.world"
              />
              <ContactItem
                icon={<Mail className="w-6 h-6 text-white" />}
                title="Get Support"
                subtitle="support@eraglobal.world"
                href="mailto:support@eraglobal.world"
              />
            </div>
          </div>

          {/* Right Side Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
              <div className="relative bg-white/10 rounded-full backdrop-blur-xl p-1">
                <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden bg-gradient-to-br from-green-300/10 to-emerald-500/10 flex items-center justify-center shadow-lg">
                  <img
                    src={img}
                    alt="Thank You"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Info Reusable Component
const ContactItem = ({ icon, title, subtitle, href }) => (
  <div className="flex items-center gap-4 group cursor-pointer hover:scale-105 transition-transform duration-300">
    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <div className="text-left">
      <p className="font-semibold text-white text-lg">{title}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400 hover:text-green-300 text-base">
        {subtitle}
      </a>
    </div>
  </div>
);

export default ThankPage;
