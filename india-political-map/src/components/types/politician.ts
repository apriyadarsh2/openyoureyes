import { FinancialDisclosureResponse } from "./financial-disclosure";

export interface Party {
  id: number;
  abbreviation: string;
  name_en?: string;
  full_name_en?: string;
}

export interface Constituency {
  id: number;
  name_en: string;
  state: string;
}

export interface Politician {
  id: string;
 
  name_en: string;

  name_hi: string;

  latest_party: Party;

  latest_constituency: Constituency;

  latest_election_year: number;

  elections_contested: number;

  elections_won: number;

  net_assets_inr: number;

  criminal_cases_count: number;

  serious_cases_count: number;

  gender?: string;

  age?: number;

  education?: string;

  profession?: string;
}

export interface PoliticianSearchResponse {
  page: number;

  limit: number;

  total: number;

  results: Politician[];
}

export interface ElectionResult {
  votes: number;
  votes_pct: number;
  winner: boolean;
  margin: number;
  total_valid_votes: number;
  poll_pct: number;
}

export interface ElectionAssets {
  total_assets_inr: number;
  total_liabilities_inr: number;
  net_assets_inr: number;
  movable_assets_inr?: number;
  immovable_assets_inr?: number;
  cash_inr?: number;
}

export interface ElectionParty {
  id: number;
  abbreviation: string;
}

export interface ElectionInfo {
  id: number;
  year: number;
  lok_sabha_no: number;
  election_type: string;
}

export interface ElectionConstituency {
  id: number;
  name_en: string;
  state: string;
}

export interface PoliticianElection {
  candidacy_id: number;

  election: ElectionInfo;

  constituency: ElectionConstituency;

  party: ElectionParty;

  age_at_election: number;

  result: ElectionResult;

  assets: ElectionAssets;

  criminal_cases_count: number;

  serious_cases_count: number;
}

export interface CourtCase {
  case_id_source: string;

  court: string;

  state: string;

  year_filed: number;

  ipc_sections: string[];

  case_type: string;

  status: string;

  oer_attribution: string;
}

export interface MPLADSRecord {
  fy_start: number;

  funds_released_lakh: number;

  funds_utilised_lakh: number;

  utilisation_pct: number;

  works_sanctioned: number;
}

export interface PoliticianProfile {
  id: string;

  name_en: string;

  name_hi: string;

  dob: string;

  sex: string;

  education_level: string;

  education_detail: string;

  elections: PoliticianElection[];

  mplads: MPLADSRecord[];

  court_cases: CourtCase[];
}

export interface PoliticianProfileResponse {
    summary: Politician;

    profile?: PoliticianProfile;

    financialDisclosure: FinancialDisclosureResponse;
}