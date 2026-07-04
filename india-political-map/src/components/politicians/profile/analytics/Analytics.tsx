import { PoliticianProfile } from "@/src/components/types/politician";
import IntelligenceScore from "./IntelligenceScore";
import SnapshotCards from "./SnapshotCards";
import Strengths from "./Strengths";
import Concerns from "./Concerns";
import CareerHighlights from "./CareerHighlights";
import ExecutiveSummary from "./ExecutiveSummary";



interface Props {
  profile?: PoliticianProfile;
}

export default function Analytics({
  profile,
}: Props) {

  if (!profile) return null;

  return (

    <section
      id="analytics"
      className="space-y-10 scroll-mt-28"
    >

      <div>

        <h2 className="text-3xl font-bold">

          Executive Analytics

        </h2>

        <p className="mt-2 text-slate-500">

          Summary of the
          politician's financial,
          electoral and legal profile.

        </p>

      </div>



      <IntelligenceScore profile={profile} />
      

      <SnapshotCards profile={profile} />

      <Strengths profile={profile} />

      <Concerns profile={profile} />
 
      <CareerHighlights profile={profile} />

      <ExecutiveSummary profile={profile} />

    </section>

  );

}