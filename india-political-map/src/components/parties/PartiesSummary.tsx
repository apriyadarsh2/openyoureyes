interface Props {
  summary: {
    national_parties: number;
    state_parties: number;
    unrecognised_parties: number;
    historical_parties: number;
  };
}

export default function PartiesSummary({
  summary,
}: Props) {

  const cards = [
    {
      title: "National Parties",
      value: summary.national_parties,
    },
    {
      title: "State Parties",
      value: summary.state_parties,
    },
    {
      title: "Unrecognised Parties",
      value: summary.unrecognised_parties,
    },
    {
      title: "Historical Parties",
      value: summary.historical_parties,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => (

        <div
          key={card.title}
          className="rounded-2xl border bg-white p-6 shadow-sm"
        >

          <p className="text-sm text-slate-500">
            {card.title}
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            {card.value}
          </h2>

        </div>

      ))}

    </div>
  );
}