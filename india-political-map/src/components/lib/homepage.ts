import { ENDPOINTS } from "./endpoints";
import { masterData } from "@/data/masterData";



const politicians = ENDPOINTS.politicians.results;

export function getHomepageStats() {
  const totalPoliticians = politicians.length;

  const totalParties = new Set(
    politicians.map((p) => p.latest_party.abbreviation)
  ).size;

  const latestElection = Math.max(
    ...politicians.map((p) => p.latest_election_year)
  );

  const wealthLeader = ENDPOINTS.wealth.leaders[0];

  const criminalLeader = ENDPOINTS.criminal.leaders[0];

   return {
    totalPoliticians: masterData.politicians.total,
    totalParties: masterData.politicalParties.total,
    totalConstituencies: masterData.constituencies.total,
    latestElection: masterData.elections.latestYear,

    wealthLeader: ENDPOINTS.wealth.leaders[0],
    criminalLeader: ENDPOINTS.criminal.leaders[0],
  };
}