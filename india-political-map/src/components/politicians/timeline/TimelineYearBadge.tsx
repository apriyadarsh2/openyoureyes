interface Props {
  year: number;
}

export default function TimelineYearBadge({
  year,
}: Props) {

  return (

    <div
      className="
      flex
      h-16
      w-16
      items-center
      justify-center

      rounded-full

      bg-gradient-to-br
      from-blue-600
      to-indigo-600

      text-lg
      font-bold
      text-white

      shadow-lg
      "
    >

      {year}

    </div>

  );

}