"use client";

import { useRouter } from "next/navigation";

import {
  ArrowRight,
  Landmark,
  MapPin,
  User,
} from "lucide-react";

import { Politician } from "@/src/components/types/politician";

interface Props {
  politician: Politician;
  onSelect: () => void;
}

export default function SearchRow({
  politician,
  onSelect,
}: Props) {
  const router = useRouter();

  function handleClick() {
    onSelect();

    router.push(`/politicians/${politician.id}`);
  }

  return (
    <button
      onClick={handleClick}
      className="
        group
        flex
        w-full
        items-center
        justify-between

        border-b

        px-5
        py-4

        text-left

        transition

        hover:bg-blue-50
      "
    >
      <div className="flex items-center gap-4">

        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-full

            bg-gradient-to-br
            from-blue-500
            to-indigo-600
          "
        >
          <User
            size={18}
            className="text-white"
          />
        </div>

        <div>

          <h3
            className="
              font-semibold
              text-slate-900
              transition
              group-hover:text-blue-700
            "
          >
            {politician.name_en}
          </h3>

          <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-slate-500">

            <span className="font-medium">
              {politician.latest_party.abbreviation}
            </span>

            <span className="flex items-center gap-1">
              <MapPin size={13} />
              {politician.latest_constituency.name_en}
            </span>

            <span className="flex items-center gap-1">
              <Landmark size={13} />
              {politician.latest_constituency.state}
            </span>

          </div>

        </div>

      </div>

      <ArrowRight
        size={18}
        className="
          text-slate-400
          transition
          group-hover:translate-x-1
          group-hover:text-blue-600
        "
      />
    </button>
  );
}