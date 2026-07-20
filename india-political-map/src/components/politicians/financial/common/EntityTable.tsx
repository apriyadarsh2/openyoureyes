"use client";

import { useState, Fragment, ReactNode } from "react";

export interface EntityAmount {
  self: number;
  spouse: number;
  huf: number;
  dependent1: number;
  dependent2: number;
  dependent3: number;
  total: number;
}

export interface EntityTableRow {
  key: string;
  label: string;
  values: EntityAmount;

  expandable?: ReactNode;

  highlight?: boolean;
}

interface Props {
  title: string;
  rows: EntityTableRow[];
}

const ENTITY_COLUMNS: {
  key: keyof EntityAmount;
  label: string;
}[] = [
  { key: "self", label: "Self" },
  { key: "spouse", label: "Spouse" },
  { key: "huf", label: "HUF" },
  { key: "dependent1", label: "Dep 1" },
  { key: "dependent2", label: "Dep 2" },
  { key: "dependent3", label: "Dep 3" },
  { key: "total", label: "Total" },
];

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-IN").format(value);
}

export default function EntityTable({
  title,
  rows,
}: Props) {
  const [expanded, setExpanded] =
    useState<string | null>(null);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b bg-slate-50 px-6 py-4">
        <h2 className="text-xl font-semibold">
          {title}
        </h2>
      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-4 py-3 text-left">
                Category
              </th>

              {ENTITY_COLUMNS.map(col => (
                <th
                  key={col.key}
                  className="px-4 py-3 text-right"
                >
                  {col.label}
                </th>
              ))}

            </tr>

          </thead>

          <tbody>

            {rows.map(row => {

              const isExpanded =
                expanded === row.key;

              return (
                <Fragment key={row.key}>

                  <tr
                    onClick={() => {
                      if (!row.expandable) return;

                      setExpanded(
                        isExpanded
                          ? null
                          : row.key
                      );
                    }}
                    className={`border-b transition ${
                      row.expandable
                        ? "cursor-pointer hover:bg-slate-50"
                        : ""
                    } ${
                      row.highlight
                        ? "bg-blue-50 font-semibold"
                        : ""
                    }`}
                  >

                    <td className="px-4 py-4">

                      <div className="flex items-center gap-2">

                        {row.expandable && (
                          <span>
                            {isExpanded
                              ? "▼"
                              : "▶"}
                          </span>
                        )}

                        {row.label}

                      </div>

                    </td>

                    {ENTITY_COLUMNS.map(col => (

                      <td
                        key={col.key}
                        className={`px-4 py-4 text-right ${
                          col.key === "total"
                            ? "font-semibold"
                            : ""
                        }`}
                      >
                        ₹{" "}
                        {formatMoney(
                          row.values[col.key]
                        )}
                      </td>

                    ))}

                  </tr>

                  {isExpanded &&
                    row.expandable && (

                      <tr>

                        <td
                          colSpan={
                            ENTITY_COLUMNS.length +
                            1
                          }
                          className="bg-slate-50 p-6"
                        >
                          {row.expandable}
                        </td>

                      </tr>

                    )}

                </Fragment>
              );
            })}

          </tbody>

        </table>

      </div>

    </div>
  );
}