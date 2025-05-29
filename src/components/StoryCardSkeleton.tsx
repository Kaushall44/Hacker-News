
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const StoryCardSkeleton: React.FC = () => {
  return (
    <Card className="border-white/40 bg-white/80 backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite] opacity-60" />
      
      <CardContent className="relative p-6">
        <div className="space-y-4">
          <Skeleton className="h-3 w-20 bg-gradient-to-r from-orange-100 to-orange-200" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-full bg-gradient-to-r from-gray-100 to-gray-200" />
            <Skeleton className="h-6 w-3/4 bg-gradient-to-r from-gray-100 to-gray-200" />
          </div>
          <Skeleton className="h-4 w-48 bg-gradient-to-r from-gray-100 to-gray-200" />
          <div className="flex items-center justify-between pt-2">
            <Skeleton className="h-4 w-20 bg-gradient-to-r from-gray-100 to-gray-200" />
            <Skeleton className="h-4 w-16 bg-gradient-to-r from-orange-100 to-orange-200" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoryCardSkeleton;
