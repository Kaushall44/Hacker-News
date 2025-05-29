
import React from "react";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { HNStory, formatTimeAgo, getHostname } from "@/lib/hackernews";

interface StoryCardProps {
  story: HNStory;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const hostname = getHostname(story.url);
  const timeAgo = formatTimeAgo(story.created_at);

  return (
    <Card className="group hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 border-white/40 bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:-translate-y-1 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardContent className="relative p-6">
        <div className="space-y-4">
          {hostname && (
            <div className="text-xs font-medium text-orange-600 uppercase tracking-wider transition-colors duration-200 group-hover:text-orange-700">
              {hostname}
            </div>
          )}
          
          <h2 className="text-xl font-semibold leading-7 text-gray-900 group-hover:text-gray-800 transition-all duration-300">
            <a
              href={story.url || `https://news.ycombinator.com/item?id=${story.objectID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-orange-700 transition-colors duration-200"
            >
              {story.title}
            </a>
          </h2>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 transition-colors duration-200 group-hover:text-orange-600">
                <div className="w-1 h-1 bg-orange-400 rounded-full animate-pulse" />
                {story.points} points
              </span>
              <span className="text-gray-300">•</span>
              <span className="transition-colors duration-200 group-hover:text-gray-700">{story.author}</span>
              <span className="text-gray-300">•</span>
              <span className="transition-colors duration-200 group-hover:text-gray-700">{timeAgo}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <span className="text-sm text-gray-500 transition-colors duration-200 group-hover:text-gray-700">
              {story.num_comments} comments
            </span>
            <a
              href={story.url || `https://news.ycombinator.com/item?id=${story.objectID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-orange-600 transition-all duration-300 hover:gap-2"
            >
              Read more
              <ExternalLink className="h-3 w-3 transition-transform duration-200 group-hover:scale-110" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoryCard;
