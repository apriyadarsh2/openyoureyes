import {
  AlertTriangle,
  ShieldAlert,
} from "lucide-react";

import { PoliticianProfile } from "@/src/components/types/politician";

interface Props {
  profile?: PoliticianProfile;
}

export default function Concerns({
  profile,
}: Props) {
  if (!profile) return null;

  const latest =
    profile.elections.at(-1)!;

  const concerns: string[] = [];

  if (latest.criminal_cases_count > 0) {
    concerns.push(
      `${latest.criminal_cases_count} pending criminal case(s).`
    );
  }

  if (latest.serious_cases_count > 0) {
    concerns.push(
      `${latest.serious_cases_count} serious criminal case(s).`
    );
  }

  if (
    latest.assets.total_liabilities_inr >
    latest.assets.net_assets_inr * 0.1
  ) {
    concerns.push(
      "Liabilities exceed 10% of declared assets."
    );
  }

  if (concerns.length === 0) {
    concerns.push(
      "No significant legal or financial concerns identified."
    );
  }

  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <ShieldAlert className="text-amber-600" />

        <h2 className="text-2xl font-bold">
          Areas of Concern
        </h2>

      </div>

      <div className="space-y-4">

        {concerns.map(item => (

          <div
            key={item}
            className="flex items-start gap-3 rounded-xl bg-amber-50 p-4"
          >

            <AlertTriangle className="mt-1 text-amber-600" />

            <p>{item}</p>

          </div>

        ))}

      </div>

    </div>
  );
}