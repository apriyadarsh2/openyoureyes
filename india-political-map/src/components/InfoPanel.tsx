"use client";

interface Props {
  data: any;
}

export default function InfoPanel({ data }: Props) {
  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold">
        {data.year}
      </h2>

      <p>
        <strong>PM:</strong> {data.pm}
      </p>

      <p>
        <strong>Party:</strong> {data.party}
      </p>

      <p>
        <strong>Lok Sabha:</strong>
        {data.loksabha}
      </p>

      <ul>
        {data.events.map(
          (event: string, index: number) => (
            <li key={index}>• {event}</li>
          )
        )}
      </ul>
    </div>
  );
}