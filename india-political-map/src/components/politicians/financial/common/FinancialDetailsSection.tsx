import FinancialDetailCard from "./FinancialDetailCard";

interface DetailItem {
  description: string;
  amount: number;
}

interface EntityDetails {
  self?: DetailItem[];
  spouse?: DetailItem[];
  huf?: DetailItem[];
  dependent1?: DetailItem[];
  dependent2?: DetailItem[];
  dependent3?: DetailItem[];
}

interface Props {
  title: string;

  details: EntityDetails;
}

const entities = [
  { key: "self", label: "Self" },
  { key: "spouse", label: "Spouse" },
  { key: "huf", label: "HUF" },
  { key: "dependent1", label: "Dependent 1" },
  { key: "dependent2", label: "Dependent 2" },
  { key: "dependent3", label: "Dependent 3" },
] as const;

export default function FinancialDetailsSection({
  title,
  details,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="mb-8 text-2xl font-bold">
        {title}
      </h2>

      <div className="space-y-10">

        {entities.map(entity => {

          const items = details[entity.key];

          if (!items || items.length === 0) {
            return null;
          }

          return (
            <div key={entity.key}>

              <h3 className="mb-5 text-lg font-semibold text-slate-800">
                {entity.label}
              </h3>

              <div className="space-y-4">

                {items.map((item, index) => (
                  <FinancialDetailCard
                    key={index}
                    title={`${entity.label} Asset ${index + 1}`}
                    description={item.description}
                    amount={item.amount}
                  />
                ))}

              </div>

            </div>
          );

        })}

      </div>

    </div>
  );
}