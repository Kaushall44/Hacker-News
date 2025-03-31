
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const StoryCardSkeleton: React.FC = () => {
  return (
    <Card className="h-full">
      <CardContent className="pt-6 pb-2 h-full flex flex-col">
        <div className="mb-2">
          <Skeleton className="h-5 w-28 mb-2" />
          <Skeleton className="h-6 w-full mb-1" />
          <Skeleton className="h-6 w-3/4" />
        </div>
        <div className="mt-auto">
          <Skeleton className="h-4 w-48 mt-4" />
        </div>
      </CardContent>
      <CardFooter className="pt-0 flex justify-between items-center">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-20" />
      </CardFooter>
    </Card>
  );
};

export default StoryCardSkeleton;
