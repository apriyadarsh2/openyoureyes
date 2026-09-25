export interface FinancialDisclosure {
  // ... your existing fields here
}
import {
  Politician,
  PoliticianProfileResponse,
} from "../../types/politician";


export async function getFinancialDisclosure(
  id: string
): Promise<FinancialDisclosure | null> {
  const baseUrl = process.env.;

  try {
    const res = await fetch(`${baseUrl}/api/v1/politicians/${id}`, {
      cache: "no-store",
    });

    if (res.ok) {
      const data: PoliticianProfileResponse = await res.json();

      return data.financialDisclosure ?? null;
    }

    return null;
  } catch (error) {
    console.error(
      `Live API failed to fetch financial disclosure for ID ${id}:`,
      error
    );
    return null;
  }
}