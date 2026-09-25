
import { FinancialDisclosureResponse } from "./financial-disclosure";

export interface Party {
  id: number;
  abbreviation: string;
  name_en?: string;
  full_name_en?: string;
  color?: string;
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
}

export interface PoliticianSearchResponse {
  page: number;
  limit: number;
  total: number;
  results: Politician[];
}

export interface ElectionResult {
  winner: boolean;
  rank: number;
  position_display: string;
  votes: number;
  votes_pct: number;
  margin: number;
  total_valid_votes: number;
  turnout: number;
}

export interface ElectionAssets {
  total_assets_inr: number;
  total_liabilities_inr: number;
  net_assets_inr: number;
  movable_assets_inr?: number;
  immovable_assets_inr?: number;
  cash_inr?: number;
}

export interface ElectionInfo {
  id: number;
  year: number;
  category: "GE" | "AE";
  house: string;
  lok_sabha_no?: number;
  election_type: string;
}

export interface PoliticianElection {
  candidacy_id: number;
  election: ElectionInfo;
  constituency: Constituency;
  party: Party;
  age_at_election: number;
  result: ElectionResult;
  assets: ElectionAssets;
  criminal_cases_count: number;
  serious_cases_count: number;
}

export interface CourtCase {
  id: number;
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

export interface CurrentTerm {
  party: Party;
  constituency: Constituency;
  house: string;
  term_no: number;
  start_year: number;
  status: "INCUMBENT" | "FORMER";
}

export interface SocialLinks {
  website?: string | null;
  x?: string | null;
  facebook?: string | null;
  instagram?: string | null;
}

export interface PoliticianProfile {
  id: string;
  name_en: string;
  name_hi: string;
  photo_url?: string | null;
  dob: string;
  gender: string;
  education_level: string;
  education_detail: string;
  current_term: CurrentTerm;
  elections: PoliticianElection[];
  mplads: MPLADSRecord[];
  court_cases: CourtCase[];
  social?: SocialLinks;
}

export interface PoliticianProfileResponse {
  summary: Politician;
  electoral_summary: ElectoralSummary;
  profile?: PoliticianProfile;
  financialDisclosure: FinancialDisclosureResponse;
}

export interface ElectoralSummary {
  contests: number; 
  wins: number;
  win_rate: number;
  parties: number;
  total_votes: number;
  career_start_year: number | null;
  career_end_year: number | null;
}