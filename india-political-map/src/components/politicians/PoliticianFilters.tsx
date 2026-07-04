interface Props {
  states: string[];
  parties: string[];

  state: string;
  setState: (value: string) => void;

  party: string;
  setParty: (value: string) => void;

  criminal: string;
  setCriminal: (value: string) => void;
}

export default function PoliticianFilters({
  states,
  parties,

  state,
  setState,

  party,
  setParty,

  criminal,
  setCriminal,
}: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-3">

      <select
        className="rounded-xl border p-3"
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option>All</option>

        {states.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>

      <select
        className="rounded-xl border p-3"
        value={party}
        onChange={(e) => setParty(e.target.value)}
      >
        <option>All</option>

        {parties.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>

      <select
        className="rounded-xl border p-3"
        value={criminal}
        onChange={(e) => setCriminal(e.target.value)}
      >
        <option value="All">All Cases</option>
        <option value="Yes">Has Cases</option>
        <option value="No">No Cases</option>
      </select>

    </div>
  );
}