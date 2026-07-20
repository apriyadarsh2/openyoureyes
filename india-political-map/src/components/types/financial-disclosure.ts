export interface EntityAmount {
  self: number;
  spouse: number;
  huf: number;
  dependent1: number;
  dependent2: number;
  dependent3: number;
  total: number;
}

export interface CandidateOverview {
  name: string;

  constituency: string;

  state: string;

  political_party: string;

  election_year: string;

  highest_education: string;

  criminal_cases_pending: number;

  past_convictions: number;
}


//income-tax
export interface IncomeTaxHistory {
  financial_year: string;

  total_income: number;
}

export interface IncomeTaxEntity {
  pan?: "Y" | "N" | null;

  history: IncomeTaxHistory[];
}

export interface IncomeTaxReturns {
  self?: IncomeTaxEntity;

  spouse?: IncomeTaxEntity;

  huf?: IncomeTaxEntity;
}

//movable-assets

export interface MovableAssets {
  cash_in_hand: ExpandableEntityAmount;

bank_deposits: ExpandableEntityAmount;

investments_bonds_shares: ExpandableEntityAmount;

savings_and_insurance: ExpandableEntityAmount;

personal_loans_given: ExpandableEntityAmount;

motor_vehicles: ExpandableEntityAmount;

jewellery: ExpandableEntityAmount;

other_assets: ExpandableEntityAmount;
gross_total_movable: EntityAmount;
}

//immovable-assets

export interface ImmovableAssets {
  agricultural_land: ExpandableEntityAmount;

non_agricultural_land: ExpandableEntityAmount;

commercial_buildings: ExpandableEntityAmount;

residential_buildings: ExpandableEntityAmount;

others: ExpandableEntityAmount;

gross_total_immovable: EntityAmount;
}

export interface Assets {
  movable_assets: MovableAssets;

  immovable_assets: ImmovableAssets;
}

//liabilities
export interface FinancialLiabilities {
loans_from_banks_fis: ExpandableEntityAmount;

loans_from_individuals: ExpandableEntityAmount;

any_other_liability: ExpandableEntityAmount;

grand_total_private_liabilities: EntityAmount;
}

//government-dues
export interface GovernmentDues {
  government_accommodation: ExpandableEntityAmount;

  water_supply: ExpandableEntityAmount;

  electricity_supply: ExpandableEntityAmount;

  telephones: ExpandableEntityAmount;

  government_transport: ExpandableEntityAmount;

  income_tax_dues: ExpandableEntityAmount;

  gst_dues: ExpandableEntityAmount;

  property_tax_dues: ExpandableEntityAmount;

  any_other_dues: ExpandableEntityAmount;

  grand_total_govt_dues: EntityAmount;
}


export interface DisputedLiabilities {
  liabilities_in_dispute: ExpandableEntityAmount;
}

export interface Liabilities {
  financial_liabilities: FinancialLiabilities;

  government_dues: GovernmentDues;

  disputed_liabilities: DisputedLiabilities;
}

export interface FinancialDisclosure {
  candidate_overview: CandidateOverview;

  income_tax_returns: IncomeTaxReturns;

  assets: Assets;

  liabilities: Liabilities;
}


export interface FinancialDisclosureResponse {
  available: boolean;

  disclosure?: FinancialDisclosure;
}

export interface DetailItem {
  description: string;
  amount: number;
}

export interface EntityDetails {
  self: DetailItem[];
  spouse: DetailItem[];
  huf: DetailItem[];
  dependent1: DetailItem[];
  dependent2: DetailItem[];
  dependent3: DetailItem[];
}

export interface ExpandableEntityAmount {
  values: EntityAmount;
  details: EntityDetails;
}