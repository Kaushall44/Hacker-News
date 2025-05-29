
import React from "react";
import { Input } from "@/components/ui/input";
import { Search, Zap } from "lucide-react";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-2xl transition-all duration-300">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg shadow-orange-500/25">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-400 animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                HackerNews
              </h1>
              <p className="text-xs text-gray-500 font-medium">Top Stories</p>
            </div>
          </div>
          
          <div className="relative w-full max-w-md animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 transition-colors group-focus-within:text-orange-500" />
              <Input
                type="text"
                placeholder="Search stories, authors, topics..."
                className="h-12 pl-12 pr-4 border-gray-200 bg-gray-50/50 rounded-2xl focus:bg-white focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition-all duration-300 text-sm placeholder:text-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <div className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
