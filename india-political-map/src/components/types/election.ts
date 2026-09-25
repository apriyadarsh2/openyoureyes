 /* =========================================
    Elections List
 ========================================= */

export interface ElectionSummary {
  id: number;
  year: number;
  lok_sabha: number;

  winner_seats: number;
  majority: boolean;
  status: string;
}

export interface ElectionListSummary {
  total_general_elections: number;
  first_election_year: number;
  latest_election_year: number;
  next_expected_year: number;
}

export interface ElectionListResponse {
  summary: ElectionListSummary;
  results: ElectionSummary[];
}


/* =========================================
   Election Dashboard
========================================= */
export interface ElectionOverview {
  id: number;
  year: number;
  lok_sabha: number;
  election_type: string;
  result_date: string;
}
export interface NationalSummary {
  registered_voters: number;
  votes_polled: number;
  turnout_percentage: number;
  valid_votes: number;
  invalid_votes: number;
}


export interface ResultSummary {
  winning_alliance: string | null;
  government: string | null;

  total_seats_won: number;

  total_seats: number;
  majority_mark: number;

  majority_achieved: boolean;

  largest_party: string | null;
  largest_party_seats: number;
}

export interface ElectionKPIs {
  alliances: number | null;
  recognized_parties: number;
  registered_parties: number;

  independent_candidates: number;
  women_elected: number;

  youngest_mp_age: number | null;
  oldest_mp_age: number | null;
}

export interface QuickLink {
  title: string;
  endpoint: string;
}

export interface ElectionDashboard {
  overview: ElectionOverview;
  national_summary: NationalSummary;
  result_summary: ResultSummary;
  kpis: ElectionKPIs;
  quick_links: QuickLink[];
}


/* =========================================
   State Results
========================================= */

export interface StateAllianceResult {
  alliance: string;
  seats: number;
}

export interface StatePartyResult {
  party: string;
  seats: number;
}

export interface StateResult {
  state: string;
  total_seats: number;
  alliance_results: StateAllianceResult[];
  top_parties: StatePartyResult[];
}

export interface StateResultsResponse {
  election: {
    year: number;
    type: string;
  };

  results: StateResult[];
}