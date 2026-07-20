import mockResponses from "@/data/mock_responses.json";

import {
  ElectionListResponse,
  ElectionSummary,
  ElectionDashboard,
  AllianceOverviewResponse,
  AllianceProfile,
  StateResultsResponse,
  ElectionMargins,
  ElectionTurnout,
} from "../../types/election";

/* =========================================
   Elections List
========================================= */

const electionsResponse =
  mockResponses[
    "GET /api/v1/elections"
  ] as unknown as ElectionListResponse;

export function getElections(): ElectionSummary[] {
  return electionsResponse.results;
}

export function getElectionByYear(
  year: number
): ElectionSummary | undefined {
  return electionsResponse.results.find(
    (election) => election.year === year
  );
}

/* =========================================
   Election Dashboard
========================================= */

export function getElectionDashboard(
  year: number
): ElectionDashboard | null {

  const key = `GET /api/v1/elections/${year}`;

  return (
    mockResponses[
      key as keyof typeof mockResponses
    ] as unknown as ElectionDashboard
  );
}

/* =========================================
   Alliances Overview
========================================= */

export function getAllianceOverview(
  year: number
): AllianceOverviewResponse | null {

  const key =
    `GET /api/v1/elections/${year}/alliances`;

  return (
    mockResponses[
      key as keyof typeof mockResponses
    ] as unknown as AllianceOverviewResponse
  );
}

/* =========================================
   Alliance Profile
========================================= */

export function getAllianceProfile(
  year: number,
  alliance: string
): AllianceProfile | null {

  const key =
    `GET /api/v1/elections/${year}/alliances/${alliance}`;

  return (
    mockResponses[
      key as keyof typeof mockResponses
    ] as unknown as AllianceProfile
  );
}

/* =========================================
   State Results
========================================= */

export function getStateResults(
  year: number
): StateResultsResponse | null {

  const key =
    `GET /api/v1/elections/${year}/state-results`;

  return (
    mockResponses[
      key as keyof typeof mockResponses
    ] as unknown as StateResultsResponse
  );
}

/* =========================================
   Victory Margins
========================================= */

export function getElectionMargins(
  year: number
): ElectionMargins | null {

  const key =
    `GET /api/v1/elections/${year}/margins`;

  return (
    mockResponses[
      key as keyof typeof mockResponses
    ] as unknown as ElectionMargins
  );
}

/* =========================================
   Turnout
========================================= */

export function getElectionTurnout(
  year: number
): ElectionTurnout | null {

  const key =
    `GET /api/v1/elections/${year}/turnout`;

  return (
    mockResponses[
      key as keyof typeof mockResponses
    ] as unknown as ElectionTurnout
  );
}