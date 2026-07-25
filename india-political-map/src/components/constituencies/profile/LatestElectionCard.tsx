"use client";

import {
  Award,
  BarChart3,
  Trophy,
  Users,
} from "lucide-react";

import { LatestElection } from "../../types/constituency";

interface Props {
  election: LatestElection;
}

export default function LatestElectionCard({
  election,
}: Props) {

  return (

    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="border-b border-slate-100 px-8 py-6">

        <p className="text-sm font-medium uppercase tracking-widest text-blue-600">
          Election Result
        </p>

        <h2 className="mt-1 text-2xl font-bold">
          {election.year} General Election
        </h2>

      </div>

      {/* Winner Runner */}

      <div className="grid gap-6 p-8 lg:grid-cols-2">

        <CandidateCard
          title="Winner"
          icon={<Trophy size={20} />}
          color="green"
          name={election.winner.name}
          party={election.winner.party}
          votes={election.winner.votes}
        />

        <CandidateCard
          title="Runner Up"
          icon={<Award size={20} />}
          color="red"
          name={election.runner_up.name}
          party={election.runner_up.party}
          votes={election.runner_up.votes}
        />

      </div>

      {/* KPIs */}

      <div className="border-t border-slate-100 bg-slate-50 px-8 py-8">

        <div className="grid gap-5 md:grid-cols-3">

          <StatCard
            icon={<BarChart3 size={20} />}
            label="Victory Margin"
            value={election.margin.toLocaleString()}
          />

          <StatCard
            icon={<Users size={20} />}
            label="Votes Cast"
            value={election.turnout.toLocaleString()}
          />

          <StatCard
            icon={<BarChart3 size={20} />}
            label="Turnout"
            value={`${election.turnout_percentage}%`}
          />

        </div>

      </div>

    </section>

  );

}

interface CandidateProps {

  title:string;

  icon:React.ReactNode;

  color:"green"|"red";

  name:string;

  party:string;

  votes:number;

}

function CandidateCard({

title,

icon,

color,

name,

party,

votes,

}:CandidateProps){

const bg=
color==="green"
?"bg-green-50 border-green-200"
:"bg-red-50 border-red-200";

const text=
color==="green"
?"text-green-700"
:"text-red-700";

return(

<div className={`rounded-2xl border p-6 ${bg}`}>

<div className={`flex items-center gap-2 font-semibold ${text}`}>

{icon}

{title}

</div>

<h3 className="mt-5 text-2xl font-bold">

{name}

</h3>

<p className="mt-2 text-slate-600">

{party}

</p>

<div className="mt-6">

<p className="text-sm text-slate-500">

Votes Received

</p>

<h4 className={`mt-1 text-3xl font-bold ${text}`}>

{votes.toLocaleString()}

</h4>

</div>

</div>

);

}

interface StatProps{

icon:React.ReactNode;

label:string;

value:string;

}

function StatCard({

icon,

label,

value,

}:StatProps){

return(

<div className="rounded-2xl border bg-white p-5">

<div className="mb-3 text-blue-600">

{icon}

</div>

<p className="text-sm text-slate-500">

{label}

</p>

<h3 className="mt-2 text-2xl font-bold">

{value}

</h3>

</div>

);

}