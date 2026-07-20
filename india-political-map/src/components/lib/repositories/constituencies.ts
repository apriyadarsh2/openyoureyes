import mockResponses from "@/data/mock_responses.json";

import {
  ConstituencyState,
  ConstituencyStateResponse,
  ConstituencySummary,
  ConstituencyListResponse,
  ConstituencyProfile,
} from "../../types/constituency";

/* -----------------------------
   All States
------------------------------ */

const statesResponse =
  mockResponses[
    "GET /api/v1/constituencies"
  ] as ConstituencyStateResponse;

export function getStates(): ConstituencyState[] {
  return statesResponse.results;
}

/* -----------------------------
   State Details
------------------------------ */

export function getStateBySlug(
  slug: string
): ConstituencyState | undefined {
  return statesResponse.results.find(
    (state) => state.slug === slug
  );
}

/* -----------------------------
   Constituencies by State
------------------------------ */

export function getConstituenciesByState(
  slug: string
): ConstituencySummary[] {
  const key = `GET /api/v1/constituencies/${slug}`;

  const response =
    mockResponses[
      key as keyof typeof mockResponses
    ] as ConstituencyListResponse | undefined;

  return response?.results ?? [];
}

/* -----------------------------
   Constituency Profile
------------------------------ */

export function getConstituencyProfile(
  id: number
): ConstituencyProfile | null {
  const key = `GET /api/v1/constituencies/${id}`;

  return (
    (mockResponses[
      key as keyof typeof mockResponses
    ] as ConstituencyProfile) ?? null
  );
}