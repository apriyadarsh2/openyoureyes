import {
  AlertTriangle,
  Building2,
  CalendarDays,
  Gavel,
  ShieldAlert,
} from "lucide-react";

import { PoliticianProfile } from "@/src/components/types/politician";

interface Props {
  profile?: PoliticianProfile;
}

export default function CriminalCases({
  profile,
}: Props) {
  if (!profile || profile.court_cases.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed p-10 text-center text-slate-500">
        No criminal cases found.
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Desktop */}

      <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow md:block">

        <table className="min-w-full">

          <thead className="bg-slate-100">

            <tr className="text-left text-sm font-semibold text-slate-700">

              <th className="px-6 py-4">
                Case
              </th>

              <th className="px-6 py-4">
                Court
              </th>

              <th className="px-6 py-4">
                Year
              </th>

              <th className="px-6 py-4">
                IPC Sections
              </th>

              <th className="px-6 py-4">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {profile.court_cases.map(caseItem => (
              <tr
                key={caseItem.case_id_source}
                className="border-t transition hover:bg-slate-50"
              >
                <td className="px-6 py-5">

                  <div className="flex items-start gap-3">

                    <AlertTriangle
                      size={20}
                      className="mt-1 text-red-500"
                    />

                    <div>

                      <div className="font-semibold">
                        {caseItem.case_type}
                      </div>

                      <div className="mt-1 text-xs text-slate-500">
                        {caseItem.case_id_source}
                      </div>

                    </div>

                  </div>

                </td>

                <td className="px-6 py-5">

                  <div className="flex items-center gap-2">

                    <Building2
                      size={16}
                      className="text-slate-400"
                    />

                    {caseItem.court}

                  </div>

                  <div className="mt-1 text-xs text-slate-500">
                    {caseItem.state}
                  </div>

                </td>

                <td className="px-6 py-5">

                  <div className="flex items-center gap-2">

                    <CalendarDays
                      size={16}
                    />

                    {caseItem.year_filed}

                  </div>

                </td>

                <td className="px-6 py-5">

                  <div className="flex flex-wrap gap-2">

                    {caseItem.ipc_sections.map(section => (
                      <span
                        key={section}
                        className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700"
                      >
                        IPC {section}
                      </span>
                    ))}

                  </div>

                </td>

                <td className="px-6 py-5">

                  <StatusBadge
                    status={caseItem.status}
                  />

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* Mobile */}

      <div className="space-y-5 md:hidden">

        {profile.court_cases.map(caseItem => (
          <div
            key={caseItem.case_id_source}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between">

              <div>

                <div className="flex items-center gap-2">

                  <Gavel
                    size={18}
                    className="text-red-500"
                  />

                  <h3 className="font-semibold">
                    {caseItem.case_type}
                  </h3>

                </div>

                <p className="mt-2 text-sm text-slate-500">
                  {caseItem.case_id_source}
                </p>

              </div>

              <StatusBadge
                status={caseItem.status}
              />

            </div>

            <div className="mt-5 space-y-3 text-sm">

              <div className="flex items-center gap-2">

                <Building2 size={16} />

                {caseItem.court}

              </div>

              <div className="flex items-center gap-2">

                <CalendarDays size={16} />

                {caseItem.year_filed}

              </div>

            </div>

            <div className="mt-5 flex flex-wrap gap-2">

              {caseItem.ipc_sections.map(section => (
                <span
                  key={section}
                  className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700"
                >
                  IPC {section}
                </span>
              ))}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

interface BadgeProps {
  status: string;
}

function StatusBadge({
  status,
}: BadgeProps) {

  const color =
    status === "PENDING"
      ? "bg-red-100 text-red-700"
      : status === "DISPOSED"
      ? "bg-green-100 text-green-700"
      : status === "STAYED"
      ? "bg-amber-100 text-amber-700"
      : "bg-slate-100 text-slate-700";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold ${color}`}
    >
      <ShieldAlert size={14} />
      {status}
    </span>
  );
}