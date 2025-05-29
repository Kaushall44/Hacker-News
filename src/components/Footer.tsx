
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-white/30 backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/20 to-orange-50/30" />
      <div className="relative max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-center">
          <p className="text-sm font-medium bg-gradient-to-r from-gray-700 via-gray-800 to-gray-600 bg-clip-text text-transparent">
            Designed by Kaushal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
