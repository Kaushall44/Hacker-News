
import React from "react";

const LoadingAnimation: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 animate-fade-in">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin">
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-orange-500 rounded-full animate-spin"></div>
        </div>
        
        {/* Inner pulsing dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      {/* Loading text with gradient */}
      <div className="mt-6 space-y-2 text-center">
        <h3 className="text-lg font-medium bg-gradient-to-r from-gray-700 via-orange-600 to-gray-700 bg-clip-text text-transparent">
          Loading Stories
        </h3>
        <div className="flex items-center justify-center space-x-1">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
