
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTopStories, searchStories, HNStory } from "@/lib/hackernews";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoryCard from "@/components/StoryCard";
import LoadingAnimation from "@/components/LoadingAnimation";
import { useToast } from "@/components/ui/use-toast";
import { Search, TrendingUp } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50/50">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Modern stats header */}
        <div className="mb-8 space-y-4 animate-fade-in">
          <div className="flex items-center gap-3">
            {debouncedQuery ? (
              <>
                <Search className="h-5 w-5 text-orange-500" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Search Results
                </h2>
              </>
            ) : (
              <>
                <TrendingUp className="h-5 w-5 text-orange-500" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Trending Stories
                </h2>
              </>
            )}
          </div>
          
          {!isLoading && (
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-50 rounded-full">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                <span className="font-medium text-orange-700">
                  {stories.length} stories
                </span>
              </div>
              {debouncedQuery && (
                <span className="text-gray-500">
                  for "{debouncedQuery}"
                </span>
              )}
            </div>
          )}
        </div>

        {isLoading ? (
          <LoadingAnimation />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {stories.length > 0 ? (
              stories.map((story: HNStory, index) => (
                <div 
                  key={story.objectID} 
                  className="animate-fade-in" 
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <StoryCard story={story} />
                </div>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-32 animate-fade-in">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No stories found
                </h3>
                <p className="text-gray-500 text-center max-w-md">
                  Try adjusting your search terms or check back later for new stories.
                </p>
              </div>
            )}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
