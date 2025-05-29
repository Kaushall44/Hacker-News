
import React from "react";
import { Heart, Code } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-gray-200/50 bg-white/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and</span>
            <Code className="h-4 w-4 text-blue-500" />
            <span>by</span>
            <span className="font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Kaushal
            </span>
          </div>
          <div className="text-xs text-gray-400">
            Powered by Hacker News API
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
