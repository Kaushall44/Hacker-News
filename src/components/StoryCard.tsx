
import React from "react";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { HNStory, formatTimeAgo, getHostname } from "@/lib/hackernews";
import { Badge } from "@/components/ui/badge";

interface StoryCardProps {
  story: HNStory;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const hostname = getHostname(story.url);
  const timeAgo = formatTimeAgo(story.created_at);

  return (
    <Card className="hn-card h-full">
      <CardContent className="pt-6 pb-2 h-full flex flex-col">
        <div className="mb-2">
          {hostname && (
            <Badge variant="secondary" className="mb-2 text-xs font-normal">
              {hostname}
            </Badge>
          )}
          <h2 className="text-xl font-semibold leading-tight mb-2">
            <a
              href={story.url || `https://news.ycombinator.com/item?id=${story.objectID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              {story.title}
            </a>
          </h2>
        </div>
        <div className="mt-auto">
          <div className="text-muted-foreground text-sm">
            {story.points} points by {story.author} {timeAgo}
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0 flex justify-between items-center">
        <span className="text-sm text-muted-foreground">
          {story.num_comments} comments
        </span>
        <a
          href={story.url || `https://news.ycombinator.com/item?id=${story.objectID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 inline-flex items-center text-sm font-medium"
        >
          Read more <ExternalLink className="ml-1 h-3 w-3" />
        </a>
      </CardFooter>
    </Card>
  );
};

export default StoryCard;
