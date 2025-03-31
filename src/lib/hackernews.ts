
import { formatDistanceToNow } from "date-fns";

// Hacker News Algolia API endpoints
export const HN_API_BASE_URL = "https://hn.algolia.com/api/v1";
export const HN_SEARCH_URL = `${HN_API_BASE_URL}/search`;
export const HN_TOP_STORIES_URL = `${HN_API_BASE_URL}/search?tags=front_page`;

export interface HNStory {
  objectID: string;
  title: string;
  url: string;
  points: number;
  num_comments: number;
  created_at: string;
  author: string;
}

export function formatTimeAgo(dateString: string): string {
  try {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
  } catch (error) {
    console.error("Error formatting date:", error);
    return "some time ago";
  }
}

export function getHostname(url: string): string {
  try {
    if (!url) return "";
    const hostname = new URL(url).hostname.replace(/^www\./, "");
    return hostname;
  } catch (error) {
    console.error("Error parsing URL:", error);
    return "";
  }
}

export async function fetchTopStories(
  page: number = 0, 
  hitsPerPage: number = 100
): Promise<{ hits: HNStory[]; nbHits: number }> {
  const response = await fetch(
    `${HN_TOP_STORIES_URL}&page=${page}&hitsPerPage=${hitsPerPage}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch top stories");
  }
  return response.json();
}

export async function searchStories(
  query: string,
  page: number = 0,
  hitsPerPage: number = 100
): Promise<{ hits: HNStory[]; nbHits: number }> {
  const response = await fetch(
    `${HN_SEARCH_URL}?query=${encodeURIComponent(query)}&tags=story&page=${page}&hitsPerPage=${hitsPerPage}`
  );
  if (!response.ok) {
    throw new Error("Failed to search stories");
  }
  return response.json();
}
