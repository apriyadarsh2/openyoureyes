import { SnapshotResponse } from "../components/types/leaderboard";
import MOCK_DATA from "../../data/mock_responses.json"; 



const typedMockData = MOCK_DATA as unknown as Record<string, SnapshotResponse | undefined>;

export function getSnapshotForYear(year: number): SnapshotResponse | null {
  const endpointKey = `GET /api/v1/snapshot?year=${year}`;

  const data = typedMockData[endpointKey];

  if (data) {
    return data;
  }

  return null;
}