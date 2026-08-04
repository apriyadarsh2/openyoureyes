"use client";

import {
    FinancialDisclosureResponse,
} from "@/src/components/types/financial-disclosure";

import FinancialSnapshot from "./cards/FinancialSnapshot";
import ImmovableAssetsTable from "./assets/ImmovableAssetsTable";
import MovableAssetsTable from "./assets/MovableAssetsTable";
import { usePolitician } from "../context/PoliticianProvider";
import FinancialLiabilitiesTable from "./liabilities/FinancialLiabilitiesTable";
import GovernmentDuesTable from "./liabilities/GovernmentDuesTable";
import IncomeTaxSection from "./income-tax/IncomeTaxSection";
import DisputedLiabilitiesTable from "./liabilities/DisputedLiabilitiesTable";

interface Props {
    financialDisclosure: FinancialDisclosureResponse;
}

export default function FinancialPage({
    financialDisclosure,
}: Props) {

    const politician = usePolitician();

    if (
        !financialDisclosure.available ||
        !financialDisclosure.disclosure
    ) { 
        return (
            <div className="rounded-2xl border border-dashed border-politic-border bg-politic-card p-16 text-center shadow-sm">
                <h2 className="text-2xl font-bold text-politic-text">
                    Financial Disclosure Not Available
                </h2>
                <p className="mt-3 text-sm text-politic-muted">
                    This politician has not published a financial disclosure.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <FinancialSnapshot disclosure={financialDisclosure.disclosure}/>
            <MovableAssetsTable disclosure={financialDisclosure.disclosure}/>
            <ImmovableAssetsTable disclosure={financialDisclosure.disclosure}/>
            <FinancialLiabilitiesTable disclosure={financialDisclosure.disclosure} />
            <GovernmentDuesTable disclosure={financialDisclosure.disclosure} />
            <DisputedLiabilitiesTable disclosure={financialDisclosure.disclosure} />
            <IncomeTaxSection disclosure={financialDisclosure.disclosure} />
        </div>
    );
}