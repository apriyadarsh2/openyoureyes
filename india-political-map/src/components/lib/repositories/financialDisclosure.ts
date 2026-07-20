import disclosures from "@/data/financial_disclosures.json";

import { FinancialDisclosureResponse } from "../../types/financial-disclosure";

export function getFinancialDisclosure(
  id: string
): FinancialDisclosureResponse {

  const key =
    `GET /api/v1/politicians/${id}/financial-disclosure`;
    

  
const disclosure =
  disclosures[
    key as keyof typeof disclosures
  ] as FinancialDisclosureResponse | undefined;

return (disclosure as FinancialDisclosureResponse) ?? {
  available: false,
};
  
}

