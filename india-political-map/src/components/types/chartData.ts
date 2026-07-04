import { PoliticianElection } from "../types/politician";

export function getAssetsChartData(
  elections: PoliticianElection[]
) {
  return elections
    .slice()
    .sort((a, b) => a.election.year - b.election.year)
    .map((election) => ({
      year: election.election.year,
      value: election.assets.net_assets_inr,
    }));
}

export function getVoteShareChartData(
  elections: PoliticianElection[]
) {
  return elections
    .slice()
    .sort((a, b) => a.election.year - b.election.year)
    .map((election) => ({
      year: election.election.year,
      value: election.result.votes_pct,
    }));
}

export function getMarginChartData(
  elections: PoliticianElection[]
) {
  return elections
    .slice()
    .sort((a, b) => a.election.year - b.election.year)
    .map((election) => ({
      year: election.election.year,
      value: election.result.margin,
    }));
}

export function getCriminalCasesChartData(
  elections: PoliticianElection[]
) {
  return elections
    .slice()
    .sort((a, b) => a.election.year - b.election.year)
    .map((election) => ({
      year: election.election.year,
      value: election.criminal_cases_count,
    }));
}