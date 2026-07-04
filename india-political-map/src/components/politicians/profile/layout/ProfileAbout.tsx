import AboutCard from "../AboutCard";

import {
  Politician,
  PoliticianProfile,
} from "@/src/components/types/politician";

interface Props {
  summary: Politician;
  profile?: PoliticianProfile;
}

export default function ProfileAbout({
  summary,
  profile,
}: Props) {
  if (!profile) {
    return (
      <section className="mt-12 rounded-2xl border bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold">
          About
        </h2>

        <p className="mt-4 text-slate-500">
          Detailed profile information is not available
          for this politician yet.
        </p>
      </section>
    );
  }

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-bold">
        About
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AboutCard
          title="Date of Birth"
          value={profile.dob}
        />

        <AboutCard
          title="Gender"
          value={
            profile.sex === "M"
              ? "Male"
              : profile.sex === "F"
              ? "Female"
              : profile.sex
          }
        />

        <AboutCard
          title="Education"
          value={profile.education_level}
        />

        <AboutCard
          title="Education Details"
          value={profile.education_detail}
        />

        <AboutCard
          title="Profession"
          value={summary.profession}
        />
      </div>
    </section>
  );
}