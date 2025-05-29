
import React from "react";
import { ExternalLink, MessageCircle, TrendingUp, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HNStory, formatTimeAgo, getHostname } from "@/lib/hackernews";

interface StoryCardProps {
  story: HNStory;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const hostname = getHostname(story.url);
  const timeAgo = formatTimeAgo(story.created_at);

  return (
    <Card className="group relative overflow-hidden border-0 bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-transparent to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      
      <CardContent className="relative p-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-3">
            {hostname && (
              <Badge variant="secondary" className="text-xs font-medium bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-700 transition-colors rounded-lg px-2 py-1">
                {hostname}
              </Badge>
            )}
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Clock className="h-3 w-3" />
              <span>{timeAgo}</span>
            </div>
          </div>
          
          <h2 className="text-lg font-semibold leading-6 text-gray-900 line-clamp-2 group-hover:text-gray-800 transition-colors duration-300">
            <a
              href={story.url || `https://news.ycombinator.com/item?id=${story.objectID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-600 transition-colors duration-200"
            >
              {story.title}
            </a>
          </h2>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1.5 group-hover:text-orange-600 transition-colors">
                <TrendingUp className="h-4 w-4" />
                <span className="font-medium">{story.points}</span>
              </div>
              <div className="flex items-center gap-1.5 group-hover:text-blue-600 transition-colors">
                <MessageCircle className="h-4 w-4" />
                <span>{story.num_comments}</span>
              </div>
              <span className="text-gray-600 font-medium">@{story.author}</span>
            </div>
            
            <a
              href={story.url || `https://news.ycombinator.com/item?id=${story.objectID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-orange-600 transition-all duration-300 hover:gap-2 group/link"
            >
              <span>Read</span>
              <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:scale-110" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoryCard;
