import {
  PartyResponse,
  PartyListResponse,
  PartyFinanceResponse,
  ElectoralBondResponse,
  PartySummaryResponse,

} from "../../types/parties";

const API_BASE_URL =
  process.env.;

/* =========================================
   Parties List
========================================= */
export async function getParties(
  limit = 50,
  offset = 0,
  partyType?: string,
  search?: string
): Promise<PartyListResponse> {
  const params = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
  });

  if (partyType) {
    params.set("party_type", partyType);
  }

  if (search?.trim()) {
    params.set("search", search.trim());
  }

  const response = await fetch(
    `${API_BASE_URL}/api/v1/parties?${params.toString()}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch parties: ${response.status}`
    );
  }

  return (await response.json()) as PartyListResponse;
}

/* =========================================
   Party By ID / Abbreviation
========================================= */

export async function getPartyProfile(
  identifier: string
): Promise<PartyResponse | null> {
  const response = await fetch(
    `${API_BASE_URL}/api/v1/parties/${encodeURIComponent(identifier)}`,
    {
      cache: "no-store",
    }
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(
      `Failed to fetch party: ${response.status}`
    );
  }

  return (await response.json()) as PartyResponse;
}


/* =========================================
   Party Finance
========================================= */

export async function getPartyFinance(
  identifier: string
): Promise<PartyFinanceResponse[]> {
  const response = await fetch(
    `${API_BASE_URL}/api/v1/parties/${encodeURIComponent(identifier)}/finance`,
    {
      cache: "no-store",
    }
  );

  if (response.status === 404) {
    return [];
  }

  if (!response.ok) {
    throw new Error(
      `Failed to fetch party finance: ${response.status}`
    );
  }

  return (await response.json()) as PartyFinanceResponse[];
}


/* =========================================
   Electoral Bonds
========================================= */

export async function getPartyBonds(
  identifier: string,
  limit = 100,
  offset = 0
): Promise<ElectoralBondResponse[]> {
  const params = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
  });

  const response = await fetch(
    `${API_BASE_URL}/api/v1/parties/${encodeURIComponent(identifier)}/bonds?${params.toString()}`,
    {
      cache: "no-store",
    }
  );

  if (response.status === 404) {
    return [];
  }

  if (!response.ok) {
    throw new Error(
      `Failed to fetch party bonds: ${response.status}`
    );
  }

  return (await response.json()) as ElectoralBondResponse[];
}


export async function getPartySummary(): Promise<PartySummaryResponse> {
  const response = await fetch(
    `${API_BASE_URL}/api/v1/parties/summary`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch party summary: ${response.status}`
    );
  }

  return (await response.json()) as PartySummaryResponse;
}