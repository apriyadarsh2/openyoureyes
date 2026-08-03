interface Props {
  states: string[];
  parties: string[];
  state: string;
  setState: (value: string) => void;
  party: string;
  setParty: (value: string) => void;
  criminal: string;
  setCriminal: (value: string) => void;
  search: string;
  setSearch: (value: string) => void;
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
  search,
  setSearch,
}: Props) {
  return (
    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search by name..."
          className="w-full rounded-lg border border-politic-border bg-politic-inner px-3 py-1.5 text-sm text-politic-text placeholder-politic-muted outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <select
        className="w-full rounded-lg border border-politic-border bg-politic-inner px-3 py-1.5 text-sm text-politic-text outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option className="bg-politic-inner text-politic-text">All State</option>
        {states.map((item) => (
          <option key={item} className="bg-politic-inner text-politic-text">{item}</option>
        ))}
      </select>

      <select
        className="w-full rounded-lg border border-politic-border bg-politic-inner px-3 py-1.5 text-sm text-politic-text outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        value={party}
        onChange={(e) => setParty(e.target.value)}
      >
        <option className="bg-politic-inner text-politic-text">All Party</option>
        {parties.map((item) => (
          <option key={item} className="bg-politic-inner text-politic-text">{item}</option>
        ))}
      </select>

      <select
        className="w-full rounded-lg border border-politic-border bg-politic-inner px-3 py-1.5 text-sm text-politic-text outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        value={criminal}
        onChange={(e) => setCriminal(e.target.value)}
      >
        <option value="All" className="bg-politic-inner text-politic-text">All Cases</option>
        <option value="Yes" className="bg-politic-inner text-politic-text">Has Cases</option>
        <option value="No" className="bg-politic-inner text-politic-text">No Cases</option>
      </select>
    </div>
  );
}