export type GlobalSearchResultType =
  | "politician"
  | "constituency"
  | "party"
  | "election";

export interface GlobalSearchResult {
  type: GlobalSearchResultType;
  id: string;
  title: string;
  subtitle?: string | null;
  href: string;
  score: number;
}

export interface GlobalSearchResponse {
  results: GlobalSearchResult[];
}