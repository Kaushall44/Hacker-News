
import React from "react";

const LoadingAnimation: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-32 animate-fade-in">
      <div className="relative mb-8">
        {/* Modern spinner */}
        <div className="w-12 h-12 border-4 border-gray-100 rounded-full animate-spin">
          <div className="absolute top-0 left-0 w-12 h-12 border-4 border-transparent border-t-orange-500 rounded-full animate-spin" style={{ animationDuration: "1s" }}></div>
          <div className="absolute top-0 left-0 w-12 h-12 border-4 border-transparent border-t-red-400 rounded-full animate-spin" style={{ animationDuration: "1.5s", animationDirection: "reverse" }}></div>
        </div>
        
        {/* Pulsing center dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      {/* Modern loading text */}
      <div className="text-center space-y-3">
        <h3 className="text-xl font-semibold text-gray-800">
          Loading Stories
        </h3>
        <p className="text-sm text-gray-500 max-w-xs">
          Fetching the latest and greatest from the tech community
        </p>
        
        {/* Loading dots */}
        <div className="flex items-center justify-center space-x-2 mt-4">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
