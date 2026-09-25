import {
  CalendarDays,
  GraduationCap,
  User,
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
  // 1. Favor the backend-calculated summary.age
  const age = summary.age 
    ?? (profile?.dob ? new Date().getFullYear() - new Date(profile.dob).getFullYear() : "—");

  const education = summary.education ?? profile?.education_level ?? "Not Available";
  
  const rawGender = summary.gender ?? profile?.gender ?? profile?.gender ?? "—";
  const gender = rawGender === "M" ? "Male" : rawGender === "F" ? "Female" : (rawGender || "—");

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
      
      <InfoCard
        icon={<CalendarDays className="h-4 w-4 sm:h-5 sm:w-5" />}
        title="Age"
        value={age !== "—" ? `${age} Years` : "—"}
      />
      
      <InfoCard
        icon={<User className="h-4 w-4 sm:h-5 sm:w-5" />}
        title="Gender"
        value={gender}
      />
      
      <InfoCard
        icon={<GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />}
        title="Education"
        value={education}
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

function InfoCard({ icon, title, value, subtitle }: CardProps) {
  return (
    <div className="group flex flex-col justify-between rounded-2xl border border-politic-border bg-politic-card p-3 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-politic-accent/50 hover:shadow-lg">
      
      <div className="mb-2.5 sm:mb-4 inline-flex self-start rounded-xl border border-politic-border bg-politic-inner p-2 sm:p-2.5 text-politic-accent transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      
      <div>
        <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-politic-muted lg:text-xs">
          {title}
        </p>
        <h3 className="mt-1 line-clamp-2 text-sm sm:text-base font-bold leading-tight text-politic-text lg:text-lg">
          {value}
        </h3>
        {subtitle && (
          <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs font-medium text-politic-muted">
            {subtitle}
          </p>
        )}
      </div>
      
    </div>
  );
}