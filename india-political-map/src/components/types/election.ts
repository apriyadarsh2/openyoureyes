export interface AllianceProfileSummary {
  total_contested: number;

  total_won: number;

  total_votes: number;

  vote_percentage: number;

  major_party: string;
}

/* =========================================
   Elections List
========================================= */

export interface ElectionSummary {
  id: number;
  year: number;
  lok_sabha: number;

  winner_alliance: string;
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
  type: string;
  lok_sabha: string;
  phases: number;
  polling_start: string;
  polling_end: string;
  counting_date: string;
  government_formed: string;
  total_constituencies: number;
  majority_mark: number;
}

export interface NationalSummary {
  registered_voters: number;
  votes_polled: number;
  turnout_percentage: number;
  valid_votes: number;
  invalid_votes: number;
}

export interface ResultSummary {
  winning_alliance: string;
  government: string;
  total_seats_won: number;
  majority_achieved: boolean;
  largest_party: string;
  largest_party_seats: number;
}

export interface ElectionKPIs {
  alliances: number;
  recognized_parties: number;
  registered_parties: number;
  independent_candidates: number;
  women_elected: number;
  youngest_mp_age: number;
  oldest_mp_age: number;
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
   Alliance Overview
========================================= */

export interface AllianceSummary {
  total_alliances: number;
  total_seats: number;
  majority_mark: number;
  winning_alliance: string;
}

export interface AllianceCard {
  slug: string;

  name: string;
  abbreviation: string;

  total_votes: number;
  vote_percentage: number;

  seats: number;
  seat_change: number | null;

  major_party: string | null;
}

export interface AllianceOverviewResponse {
  election: {
    year: number;
    type: string;
  };

  summary: AllianceSummary;

  alliances: AllianceCard[];
}/* =========================================
   Alliance Details
========================================= */

export interface AllianceProfileSummary {
  total_contested: number;
  total_won: number;
  vote_percentage: number;
  major_party: string;
}

export interface AllianceParty {
  party: string;
  contested: number | null;
  won: number;
}

export interface AllianceStateBreakdown {
  state: string;
  contested: number | null;
  won: number;
}

export interface AllianceProfile {
  alliance: {
    slug: string;
    name: string;
    abbreviation: string;
  };

  summary: AllianceProfileSummary;

  parties: AllianceParty[];

  state_breakdown: AllianceStateBreakdown[];
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

/* =========================================
   Victory Margins
========================================= */

export interface MarginResult {
  constituency: string;

  state: string;

  winner: string;

  party: string;

  margin: number;
}

export interface ElectionMargins {
  election: {
    year: number;
  };

  summary: {
    average_margin: number;

    closest_margin: number;

    largest_margin: number;
  };

  closest_results: MarginResult[];

  largest_results: MarginResult[];
}

/* =========================================
   Turnout
========================================= */

export interface StateTurnout {
  state: string;

  electors: number;

  votes_cast: number;

  turnout_percentage: number;
}

export interface ElectionTurnout {
  election: {
    year: number;
  };

  national: {
    electors: number;

    votes_cast: number;

    turnout_percentage: number;
  };

  states: StateTurnout[];
}