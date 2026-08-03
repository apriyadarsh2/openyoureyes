import { ENDPOINTS } from "../endpoints";
import mockResponses from "@/data/mock_responses.json";
import { getFinancialDisclosure } from "./financialDisclosure";

import {
  Politician,
  PoliticianSearchResponse,
  PoliticianProfile,
  PoliticianProfileResponse,
} from "../../types/politician";

const response =
  ENDPOINTS.politicians as PoliticianSearchResponse;

export function getPoliticians(): Politician[] { 
  return response.results;
}

export function getPoliticianById(id: string) {
  return response.results.find(
    politician => politician.id === id
  );
}

export function getPoliticianProfile(
  id: string
): PoliticianProfileResponse | null {

  const summary = getPoliticianById(id);

  if (!summary) {
    return null;
  }

  const key = `GET /api/v1/politicians/${id}`;

  const profile =
    mockResponses[
      key as keyof typeof mockResponses
    ] as PoliticianProfile | undefined;

    const financialDisclosure =
    getFinancialDisclosure(id);

  return {
    summary,
    profile,
    financialDisclosure,
  };
}
