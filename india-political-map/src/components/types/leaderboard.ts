export interface WealthLeader {
  rank: number;

  politician: {
    id: string;
    name_en: string;
  };

  party: {
    abbreviation: string;
  };

  constituency: {
    id?: number;
    name_en: string;
    state: string;
  };

  net_assets_inr: number;
}

export interface CriminalLeader {
  rank: number;

  politician: {
    id: string;
    name_en: string;
  };

  party: {
    abbreviation: string;
  };

  constituency: {
    id?: number;
    name_en: string;
    state: string;
  };

  total_cases: number;
}

export interface MarginLeader {
  rank: number;

  constituency: {
    id: number;
    name_en: string;
    state: string;
  };

  winner: {
    id?: string;
    name_en: string;
  };

  party: {
    abbreviation: string;
  };

  margin: number;

  winner_votes: number;

  total_valid_votes: number;

  votes_pct: number;
}

export interface SnapshotItem {
  title: string;
  name_en: string;
  party: string;
  detail: string;
}

export interface SnapshotData {
  wealth: SnapshotItem;
  criminal: SnapshotItem;
  education: SnapshotItem;
  ruling_party: SnapshotItem;
}

export interface SnapshotResponse {
  as_of_election_year: number;
  snapshot: SnapshotData;
}