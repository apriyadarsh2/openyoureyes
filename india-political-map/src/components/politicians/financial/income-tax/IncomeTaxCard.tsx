import {
  IncomeTaxEntity,
} from "@/src/components/types/financial-disclosure";

import IncomeTaxHistoryTable from "./IncomeTaxHistoryTable";

interface Props {

  title: string;

  entity?: IncomeTaxEntity;

}

export default function IncomeTaxCard({
  title,
  entity,
}: Props) {

  if (!entity) {

    return (

      <div className="rounded-xl border bg-white p-6 shadow">

        <h3 className="text-lg font-semibold">

          {title}

        </h3>

        <p className="mt-4 text-slate-500">

          No Income Tax information available.

        </p>

      </div>

    );

  }

  return (

    <div className="rounded-xl border bg-white p-6 shadow">

      <div className="flex items-center justify-between">

        <h3 className="text-xl font-bold">

          {title}

        </h3>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm">

          PAN :

          {" "}

          {entity.pan ?? "N/A"}

        </span>

      </div>

      <IncomeTaxHistoryTable

        history={entity.history}

      />

    </div>

  );

}