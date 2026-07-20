"use client";

import { useState } from "react";

import {
  ExpandableEntityAmount,
} from "@/src/components/types/financial-disclosure";

import DetailList from "../common/DetailList";

interface Props {
  title: string;
  data: ExpandableEntityAmount;
}

export default function LiabilityRow({
  title,
  data,
}: Props) {

  const [open, setOpen] =
    useState(false);

  const v = data.values;

  return (
    <>
      <tr
        onClick={() => setOpen(!open)}
        className="cursor-pointer hover:bg-red-50"
      >
        <td className="font-medium">
          {title}
        </td>

        <td>{v.self.toLocaleString()}</td>
        <td>{v.spouse.toLocaleString()}</td>
        <td>{v.huf.toLocaleString()}</td>
        <td>{v.dependent1.toLocaleString()}</td>
        <td>{v.dependent2.toLocaleString()}</td>
        <td>{v.dependent3.toLocaleString()}</td>

        <td className="font-semibold">
          {v.total.toLocaleString()}
        </td>

      </tr>

      {open && (

        <tr>

          <td
            colSpan={8}
            className="bg-red-50 p-5"
          >

            <div className="grid grid-cols-3 gap-6">

              <div>
                <h4 className="font-semibold mb-2">
                  Self
                </h4>

                <DetailList
                  items={data.details.self}
                />

              </div>

              <div>

                <h4 className="font-semibold mb-2">
                  Spouse
                </h4>

                <DetailList
                  items={data.details.spouse}
                />

              </div>

              <div>

                <h4 className="font-semibold mb-2">
                  HUF
                </h4>

                <DetailList
                  items={data.details.huf}
                />

              </div>

            </div>

          </td>

        </tr>

      )}

    </>
  );
}