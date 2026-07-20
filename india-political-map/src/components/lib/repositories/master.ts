// import { masterData } from "@/data/masterData";

// export function getStates() {

// return masterData.states;

// }

// export function getParties() {

// return masterData.parties;

// }

// export function getElectionYears() {

// return masterData.electionYears;

// }

import  {masterData } from "../../../../data/masterData";

export function getStates() {
  return masterData.states;
}

export function getParties() {
  return masterData.parties;
}

export function getReservationTypes() {
  return masterData.reservationTypes;
}

export function getElectionYears() {
  return masterData.electionYears;
}


export function getSortOptions() {
  return masterData.sortOptions;
}

export function getMasterStats() {
  return {
    elections: masterData.elections,
    politicians: masterData.politicians,
    constituencies: masterData.constituencies,
    politicalParties: masterData.politicalParties,
  };
  
}