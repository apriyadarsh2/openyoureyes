export interface PartyResponse {
  id: number;
  abbreviation: string | null;
  full_name_en: string | null;
  full_name_hi: string | null;
  party_type: string | null;
}

export type PartyListResponse = PartyResponse[];

export interface PartyFinanceResponse {
  id: number;
  party_id: number;
  fy_start: number | null;
  fy_end: number | null;
  total_income_inr: number | null;
  voluntary_contributions: number | null;
  electoral_bonds_inr: number | null;
  govt_grants_inr: number | null;
  total_expenditure_inr: number | null;
  election_expenditure_inr: number | null;
  source_pdf: string | null;
}

export interface ElectoralBondResponse {
  id: number;
  bond_number: string | null;
  purchase_date: string | null;
  denomination_inr: number | null;
  purchaser_name: string | null;
  encashment_date: string | null;
  receiving_party_id: number;
  source: string | null;
}

export interface PartySummaryResponse {
  total_parties: number;
  national_parties: number;
  state_parties: number;
  registered_parties: number;
  independent_parties: number;
}