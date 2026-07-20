import mockResponses from "@/data/mock_responses.json";

import {
  PartyHomeResponse,
  PartyListResponse,
  PartyProfile,
  PartyElectionHistory,
  PartyPresence,
  PartyFinance,
  PartyBonds,
} from "../../types/party";

/* =========================================
   Parties Home
========================================= */

export function getPartiesHome() {

  return mockResponses[
    "GET /api/v1/parties"
  ] as unknown as PartyHomeResponse;

}

/* =========================================
   National Parties
========================================= */

export function getNationalParties() {

  return mockResponses[
    "GET /api/v1/parties/national"
  ] as unknown as PartyListResponse;

}

/* =========================================
   State Parties
========================================= */

export function getStateParties() {

  return mockResponses[
    "GET /api/v1/parties/state"
  ] as unknown as PartyListResponse;

}

/* =========================================
   Unrecognised Parties
========================================= */

export function getUnrecognisedParties() {

  return mockResponses[
    "GET /api/v1/parties/unrecognised"
  ] as unknown as PartyListResponse;

}

/* =========================================
   Historical Parties
========================================= */

export function getHistoricalParties() {

  return mockResponses[
    "GET /api/v1/parties/historical"
  ] as unknown as PartyListResponse;

}

/* =========================================
   Party Profile
========================================= */

export function getPartyProfile(
  slug: string
): PartyProfile | null {

  const key =
    `GET /api/v1/parties/${slug}`;

  return (
    mockResponses[
      key as keyof typeof mockResponses
    ] as unknown as PartyProfile
  );

}

/* =========================================
   Election History
========================================= */

export function getPartyElectionHistory(
  slug: string
): PartyElectionHistory | null {

  const key =
    `GET /api/v1/parties/${slug}/elections`;

  return (
    mockResponses[
      key as keyof typeof mockResponses
    ] as unknown as PartyElectionHistory
  );

}

/* =========================================
   State Presence
========================================= */

export function getPartyPresence(
  slug: string
): PartyPresence | null {

  const key =
    `GET /api/v1/parties/${slug}/presence`;

  return (
    mockResponses[
      key as keyof typeof mockResponses
    ] as unknown as PartyPresence
  );

}

/* =========================================
   Finance
========================================= */

export function getPartyFinance(
  slug: string
): PartyFinance | null {

  const key =
    `GET /api/v1/parties/${slug}/finance`;

  return (
    mockResponses[
      key as keyof typeof mockResponses
    ] as unknown as PartyFinance
  );

}

/* =========================================
   Electoral Bonds
========================================= */

export function getPartyBonds(
  slug: string
): PartyBonds | null {

  const key =
    `GET /api/v1/parties/${slug}/bonds`;

  return (
    mockResponses[
      key as keyof typeof mockResponses
    ] as unknown as PartyBonds
  );

}