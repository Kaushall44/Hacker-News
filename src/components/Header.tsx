
import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="border-b border-white/20 bg-white/70 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center animate-fade-in">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent tracking-tight hover:scale-105 transition-transform duration-200">
              HackerNews
            </h1>
          </div>
          <div className="relative max-w-md w-full animate-fade-in" style={{ animationDelay: "100ms" }}>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 transition-colors duration-200" />
            <Input
              type="text"
              placeholder="Search stories..."
              className="pl-10 border-white/30 bg-white/50 backdrop-blur-sm focus:bg-white/80 focus:border-orange-200 transition-all duration-300 hover:bg-white/60"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
