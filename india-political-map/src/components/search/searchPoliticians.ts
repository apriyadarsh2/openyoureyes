import { Politician } from "@/src/components/types/politician";

interface SearchResult {
  politician: Politician;
  score: number;
}

export function searchPoliticians(
  politicians: Politician[],
  query: string
): Politician[] {
const tokens = query
  .toLowerCase()
  .trim()
  .split(/\s+/)
  .filter(Boolean);
  if (tokens.length === 0) {
  return politicians;
}

  const results: SearchResult[] = [];

  for (const politician of politicians) {
    let score = 0;

    const name = politician.name_en.toLowerCase();

    const party =
      politician.latest_party.abbreviation.toLowerCase();

    const constituency =
      politician.latest_constituency.name_en.toLowerCase();

    const state =
      politician.latest_constituency.state.toLowerCase();


for (const token of tokens) {

  if (name === token) {
    score += 1000;
  }

  else if (name.startsWith(token)) {
    score += 700;
  }

  else if (name.includes(token)) {
    score += 500;
  }

  if (party.includes(token)) {
    score += 350;
  }

  if (constituency.includes(token)) {
    score += 250;
  }

  if (state.includes(token)) {
    score += 150;
  }

}
    if (score > 0) {
      results.push({
        politician,
        score,
      });
    }
  }

  results.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }

    return a.politician.name_en.localeCompare(
      b.politician.name_en
    );
  });

  return results.map((r) => r.politician);
}