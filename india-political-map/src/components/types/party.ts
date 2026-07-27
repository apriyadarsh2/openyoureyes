/* =========================================
   Parties Home
========================================= */

export interface PartyCategory {
  slug: string;

  title: string;

  count: number; 
}

export interface PartyHomeResponse {
  summary: {
    national_parties: number;
    state_parties: number;
    unrecognised_parties: number;
    historical_parties: number;
  };

  results: PartySummary[];
}

/* =========================================
   Party Lists
========================================= */

export interface PartySummary {
  id: number;

  slug: string;

  party: string;

  abbreviation: string;

  type: string;

  leader: string;

  lok_sabha: number;

  rajya_sabha: number;

  assembly_seats: number;

  contested: number;

  active: boolean;
}

export interface PartyListResponse {
  results: PartySummary[];
}

/* =========================================
   Party Overview
========================================= */

export interface PartyOverview {
  slug: string;

  party: string;

  abbreviation: string;

  leader: string;

  founded: string;

  political_position: string;

  ideology: string[];

  recognition: string;
}

export interface PartyGovernment {
  chief_ministers: string;

  coalition_governments: string;
}

export interface PartyStrength {
  lok_sabha: number;

  rajya_sabha: number;

  assemblies: number;

  councils: number;
}

export interface PartyProfile {
  overview: PartyOverview;

  government: PartyGovernment;

  current_strength: PartyStrength;

  electoral_performance: PartyElectionResult[];
}

/* =========================================
   Election History
========================================= */

export interface PartyElectionResult {
  year: number;

  legislature: string;

  leader: string;

  contested: number;

  won: number;

  total_seats: number;

  vote_share: number;

  strike_rate: number;

  outcome: string;
}



/* =========================================
   State Presence
========================================= */

export interface PartyPresenceRow {
  legislature: string;

  seats: string;

  legislative_leader: string;

  status: string;
}

export interface PartyPresence {
  upper_house: PartyPresenceRow[];

  lower_house: PartyPresenceRow[];
}

/* =========================================
   Finance
========================================= */

export interface PartyFinanceYear {
  fy_start: number;

  fy_end: number;

  total_income_inr: number;

  voluntary_contributions: number;

  electoral_bonds_inr: number;

  govt_grants_inr: number;

  total_expenditure_inr: number;

  election_expenditure_inr: number;
}

export interface PartyFinance {
  party: {
    id: number;

    slug: string;

    abbreviation: string;

    full_name_en: string;
  };

  finance_by_year: PartyFinanceYear[];
}

/* =========================================
   Electoral Bonds
========================================= */

export interface ElectoralBond {
  id: number;

  bond_number: string;

  purchase_date: string;

  denomination_inr: number;

  purchaser_name: string;

  encashment_date: string;
}

export interface PartyBonds {
  party: {
    id: number;

    slug: string;

    abbreviation: string;

    full_name_en: string;
  };

  total_received_inr: number;

  bonds: ElectoralBond[];
}