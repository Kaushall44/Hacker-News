
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTopStories, searchStories, HNStory } from "@/lib/hackernews";
import Header from "@/components/Header";
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
    : "Top 100 Hacker News Stories";

  return (
    <div className="min-h-screen bg-background">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-xl font-medium text-foreground">
            {isLoading ? "Loading stories..." : resultsText}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            // Show skeletons while loading
            Array.from({ length: 12 }).map((_, i) => (
              <StoryCardSkeleton key={i} />
            ))
          ) : stories.length > 0 ? (
            // Show stories
            stories.map((story: HNStory) => (
              <StoryCard key={story.objectID} story={story} />
            ))
          ) : (
            // Show no results message
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-muted-foreground">
                No stories found. Try a different search.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
