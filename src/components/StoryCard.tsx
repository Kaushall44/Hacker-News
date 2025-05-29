
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
    <Card className="group hover:shadow-lg hover:shadow-gray-900/5 transition-all duration-200 border-gray-200/60 bg-white">
      <CardContent className="p-6">
        <div className="space-y-4">
          {hostname && (
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              {hostname}
            </div>
          )}
          
          <h2 className="text-xl font-semibold leading-7 text-gray-900 group-hover:text-gray-700 transition-colors">
            <a
              href={story.url || `https://news.ycombinator.com/item?id=${story.objectID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {story.title}
            </a>
          </h2>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-3">
              <span>{story.points} points</span>
              <span>•</span>
              <span>{story.author}</span>
              <span>•</span>
              <span>{timeAgo}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <span className="text-sm text-gray-500">
              {story.num_comments} comments
            </span>
            <a
              href={story.url || `https://news.ycombinator.com/item?id=${story.objectID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Read more
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoryCard;
