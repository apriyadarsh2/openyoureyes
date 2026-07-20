

export interface ConstituencyState {
  id: number;
  name: string;
  slug: string;
  seats_general: number;
  seats_sc: number;
  seats_st: number;
  total_constituencies: number;
  total_percentage: string;
}

export interface ConstituencyStateResponse {
  total: number;
  results: ConstituencyState[];
}

export interface ConstituencySummary {
  id: number;
  slug: string;
  state: string;
  name: string;
  reservation_type: string;
  electors: number;
}

export interface ConstituencyListResponse {
  state: string;
  total: number;
  results: ConstituencySummary[];
}
export interface AssemblyConstituency {
  name: string;
}
export interface ConstituencyParty {
  id: number;
  abbreviation: string;
  full_name: string;
}
export interface CurrentMP {
  id: string;
  name: string;
  party: ConstituencyParty;
  alliance: string;
  elected_year: number;
}
export interface PreviousMP {
  name: string;

  party: string;

  term_start: number;

  term_end: number;
}
export interface ElectionCandidate {
  name: string;
  party: string;
}

export interface LatestElection {
  year: number;

  winner: ElectionCandidate;

  runner_up: ElectionCandidate;

  margin: number;

  turnout: number;

  turnout_percentage: number;
}
export interface ConstituencyElection {
  year: number;

  type: string;

  winner: string;

  party: string;

  runner_up: string;

  votes: number;

  margin: number;

  turnout_percentage: number;
}
export interface ConstituencyOverview {
  id: number;

  slug: string;

  name_en: string;

  type: string;

  country: string;

  region: string;

  state: string;

  district: string;

  established: number;

  reservation_type: string;
  electors: number;

assembly_segments: number;

latest_turnout: number;

latest_margin: number;
}
export interface ConstituencyProfile {
  overview: ConstituencyOverview;

  assembly_constituencies: AssemblyConstituency[];

  current_mp: CurrentMP;

  latest_election: LatestElection;

  elections: ConstituencyElection[];

  previous_mps?: PreviousMP[];

  insights: string[];
}