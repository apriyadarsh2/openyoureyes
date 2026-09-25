import {
  ElectionListResponse,
  ElectionSummary,
  ElectionDashboard,
  StateResultsResponse,
} from "../../types/election";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://72.60.103.117:8000";

/* =========================================
   Elections List
========================================= */

export async function getElections(): Promise<ElectionSummary[]> {
  const response = await fetch(
    `${API_BASE_URL}/api/v1/elections`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch elections: ${response.status}`
    );
  }

  const data =
    (await response.json()) as ElectionListResponse;

  return data.results;
}


/* =========================================
   Election By Year
========================================= */

export async function getElectionByYear(
  year: number
): Promise<ElectionSummary | undefined> {
  const elections = await getElections();

  return elections.find(
    (election) => election.year === year
  );
}


/* =========================================
   Election Dashboard
========================================= */

export async function getElectionDashboard(
  year: number
): Promise<ElectionDashboard | null> {
  const response = await fetch(
    `${API_BASE_URL}/api/v1/elections/${year}`,
    {
      cache: "no-store",
    }
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(
      `Failed to fetch election dashboard: ${response.status}`
    );
  }

  return (await response.json()) as ElectionDashboard;
}


/* =========================================
   State Results
========================================= */

export async function getStateResults(
  year: number
): Promise<StateResultsResponse | null> {
  const response = await fetch(
    `${API_BASE_URL}/api/v1/elections/${year}/state-results`,
    {
      cache: "no-store",
    }
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(
      `Failed to fetch state results: ${response.status}`
    );
  }

  return (await response.json()) as StateResultsResponse;
}