"use client";

interface Props {

  value: string;

}

export default function StatusBadge({
  value,
}: Props) {

  const status =
    value.toUpperCase();

  let classes =
    "bg-slate-100 text-slate-700";

  if (
    status.includes("PENDING")
  ) {

    classes =
      "bg-red-100 text-red-700";

  }

  else if (
    status.includes("WON")
  ) {

    classes =
      "bg-green-100 text-green-700";

  }

  else if (
    status.includes("LOST")
  ) {

    classes =
      "bg-orange-100 text-orange-700";

  }

  else if (
    status.includes("DISPOSED")
  ) {

    classes =
      "bg-blue-100 text-blue-700";

  }

  return (

    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${classes}`}
    >

      {value}

    </span>

  );

}