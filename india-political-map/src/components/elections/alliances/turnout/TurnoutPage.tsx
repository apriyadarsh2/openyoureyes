"use client";

import { getElectionTurnout } from "../../../lib/repositories/elections";

import NationalTurnout from "./NationalTurnout";
import TurnoutGrid from "./TurnoutGrid";

interface Props {
  year: number;
}

export default function TurnoutPage({
  year,
}: Props) {
  const turnout =
    getElectionTurnout(year);

  if (!turnout) {
    return (
      <h2 className="text-2xl font-semibold">
        Turnout data not found.
      </h2>
    );
  }

  return (
    <div className="space-y-10">

      <div>

        <h1 className="text-4xl font-bold">
          Voter Turnout
        </h1>

        <p className="mt-2 text-slate-500">
          {turnout.election.year} General Election
        </p>

      </div>

      <NationalTurnout
        national={turnout.national}
      />

      <section className="space-y-6">

        <div>

          <h2 className="text-3xl font-bold">
            State-wise Turnout
          </h2>

          <p className="mt-2 text-slate-500">
            Registered electors, votes cast and turnout percentage.
          </p>

        </div>

        <TurnoutGrid
          states={turnout.states}
        />

      </section>

    </div>
  );
}