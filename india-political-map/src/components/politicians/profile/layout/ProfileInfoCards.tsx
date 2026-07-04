import {
  CalendarDays,
  GraduationCap,
  User,
  Briefcase,
} from "lucide-react";

import {
  Politician,
  PoliticianProfile,
} from "@/src/components/types/politician";

interface Props {
  summary: Politician;
  profile?: PoliticianProfile;
}

export default function ProfileInfoCards({
  summary,
  profile,
}: Props) {
  const age = profile?.dob
    ? new Date().getFullYear() -
      new Date(profile.dob).getFullYear()
    : summary.age ?? "—";

  const profession =
    summary.profession ?? "Not Available";

  const education =
    profile?.education_level ??
    summary.education ??
    "Not Available";

  const gender =
    profile?.sex === "M"
      ? "Male"
      : profile?.sex === "F"
      ? "Female"
      : "—";

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <InfoCard
        icon={<CalendarDays size={22} />}
        title="Date of Birth"
        value={
          profile?.dob
            ? new Date(
                profile.dob
              ).toLocaleDateString("en-IN")
            : "—"
        }
        subtitle={`Age ${age}`}
      />

      <InfoCard
        icon={<User size={22} />}
        title="Gender"
        value={gender}
      />

      <InfoCard
        icon={<GraduationCap size={22} />}
        title="Education"
        value={education}
      />

      <InfoCard
        icon={<Briefcase size={22} />}
        title="Profession"
        value={profession}
      />

    </div>
  );
}

interface CardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  subtitle?: string;
}

function InfoCard({
  icon,
  title,
  value,
  subtitle,
}: CardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="mb-5 inline-flex rounded-xl bg-blue-50 p-3 text-blue-600">
        {icon}
      </div>

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h3 className="mt-2 text-lg font-semibold">
        {value}
      </h3>

      {subtitle && (
        <p className="mt-1 text-sm text-slate-500">
          {subtitle}
        </p>
      )}

    </div>
  );
}