"use client";

import { useRouter } from "next/navigation";

import {
  ArrowRight,
  Calendar,
  Landmark,
  MapPin,
  Users,
} from "lucide-react";

import {
  GlobalSearchResult,
} from "@/src/components/types/global_search";

interface Props {
  result: GlobalSearchResult;
  onSelect: () => void;
}

function getIcon(
  type: GlobalSearchResult["type"]
) {
  switch (type) {
    case "politician":
      return Users;

    case "constituency":
      return MapPin;

    case "party":
      return Landmark;

    case "election":
      return Calendar;
  }
}

export default function SearchRow({
  result,
  onSelect,
}: Props) {
  const router = useRouter();

  const Icon = getIcon(result.type);

  function handleClick() {
    onSelect();
    router.push(result.href);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="
        group
        flex
        w-full
        items-center
        gap-3
        border-b
        border-[#3E445B]/60
        px-4
        py-3
        text-left
        transition
        hover:bg-[#101827]
        sm:gap-4
        sm:px-5
        sm:py-4
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-indigo-500/15
          text-indigo-300
          sm:h-11
          sm:w-11
        "
      >
        <Icon size={18} />
      </div>

      <div className="min-w-0 flex-1">
        <h3
          className="
            truncate
            font-semibold
            text-[#F4F4F5]
            transition
            group-hover:text-indigo-300
          "
        >
          {result.title}
        </h3>

        {result.subtitle && (
          <p className="mt-0.5 truncate text-sm text-[#94A3B8]">
            {result.subtitle}
          </p>
        )}
      </div>

      <ArrowRight
        size={18}
        className="
          hidden
          shrink-0
          text-[#94A3B8]
          transition
          group-hover:translate-x-1
          group-hover:text-indigo-300
          sm:block
        "
      />
    </button>
  );
}