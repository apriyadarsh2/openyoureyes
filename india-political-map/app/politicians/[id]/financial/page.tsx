import FinancialPage from "@/src/components/politicians/financial/FinancialPage";

import { getFinancialDisclosure } from "@/src/components/lib/repositories/financialDisclosure";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({
  params,
}: Props) {
  const { id } = await params;

  const financialDisclosure =
    getFinancialDisclosure(id);

  return (
    <FinancialPage
      financialDisclosure={financialDisclosure}
    />
  );
}