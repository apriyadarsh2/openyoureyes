import {
  GlobalSearchResponse,
  GlobalSearchResult,
} from "@/src/components/types/global_search";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://72.60.103.117:8000";

export async function globalSearch(
  query: string
): Promise<GlobalSearchResult[]> {
  const searchTerm = query.trim();

  if (!searchTerm) {
    return [];
  }

  const params = new URLSearchParams({
    q: searchTerm,
    limit_per_type: "10",
  });

  const url =
    `${API_BASE_URL}/api/v1/search?${params.toString()}`;

  console.log("Global search URL:", url);

  try {
    const response = await fetch(url, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `Global search failed: ${response.status} ${response.statusText}`
      );
    }

    const data =
      (await response.json()) as GlobalSearchResponse;

    return data.results ?? [];
  } catch (error) {
    console.error("Global search failed:", error);
    return [];
  }
}