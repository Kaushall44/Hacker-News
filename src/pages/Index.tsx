import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTopStories, searchStories, HNStory } from "@/lib/hackernews";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoryCard from "@/components/StoryCard";
import StoryCardSkeleton from "@/components/StoryCardSkeleton";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const { toast } = useToast();

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fetch top stories or search results
  const { data, isLoading, error } = useQuery({
    queryKey: ["stories", debouncedQuery],
    queryFn: () => 
      debouncedQuery 
        ? searchStories(debouncedQuery) 
        : fetchTopStories(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Show error toast if fetch fails
  useEffect(() => {
    if (error) {
      toast({
        title: "Error loading stories",
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  }, [error, toast]);

  // Filter out items without title
  const stories = data?.hits.filter((story: HNStory) => story.title) || [];
  const resultsText = debouncedQuery 
    ? `${stories.length} results for "${debouncedQuery}"` 
    : "Top 100 Stories";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Enhanced animated background overlays */}
      <div className="fixed inset-0 bg-gradient-to-tr from-orange-50/20 via-transparent to-blue-50/20 pointer-events-none animate-pulse" />
      <div className="fixed inset-0 bg-gradient-to-bl from-purple-50/10 via-transparent to-pink-50/15 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent pointer-events-none" />
      
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8 animate-fade-in">
          <h2 className="text-lg font-medium text-gray-900 tracking-tight">
            {isLoading ? "Loading..." : resultsText}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {isLoading ? (
            // Show skeletons while loading
            Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 50}ms` }}>
                <StoryCardSkeleton />
              </div>
            ))
          ) : stories.length > 0 ? (
            // Show stories
            stories.map((story: HNStory, index) => (
              <div 
                key={story.objectID} 
                className="animate-fade-in hover-scale" 
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <StoryCard story={story} />
              </div>
            ))
          ) : (
            // Show no results message
            <div className="col-span-full flex flex-col items-center justify-center py-24 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-4 animate-pulse">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full"></div>
              </div>
              <p className="text-lg font-medium text-gray-900 mb-1">
                No stories found
              </p>
              <p className="text-gray-500">
                Try adjusting your search query
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
