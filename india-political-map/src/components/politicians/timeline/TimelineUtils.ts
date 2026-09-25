import {
    PoliticianProfileResponse,
} from "@/src/components/types/politician";

import {
    TimelineEvent,
} from "./TimelineTypes";

export function buildTimeline(
    politician: PoliticianProfileResponse
): TimelineEvent[] {

    const timeline: TimelineEvent[] = [];

    // 1. Birth Event
    if (politician.profile?.dob) {
        const birthYear = new Date(politician.profile.dob).getFullYear();
        if (!isNaN(birthYear)) {
            timeline.push({
                year: birthYear,
                title: "Born",
                subtitle: politician.profile.dob,
                type: "birth",
            });
        }
    }

    // 2. Education Event 
    // (Note: Avoid hardcoding 1982 unless you extract a year from profile data)
    if (politician.profile?.education_detail) {
        timeline.push({
            year: politician.summary.latest_election_year - 30, // Example fallback estimation or parse from data if available
            title: "Education",
            subtitle: politician.profile.education_detail,
            type: "education"
        });
    }

    // 3. Election, Asset, and Criminal Case Events
    politician.profile?.elections?.forEach(
        election => {
            const electionYear = election.election?.year;
            if (!electionYear) return;

            // Determine if it's General Election or Assembly Election
            const isGeneral = election.election.category === "GE";
            const electionTypeName = isGeneral ? "General Election" : "Assembly Election";

            const hasWon = election.result?.winner;

            // Election Event
            timeline.push({
                year: electionYear,
                title: hasWon ? `Won ${electionTypeName}` : `Contested ${electionTypeName}`,
                subtitle: election.constituency?.name_en,
                type: "election"
            });

            // Asset Event (Safely check using optional chaining)
            const totalAssets = election.assets?.total_assets_inr;
            if (totalAssets !== undefined && totalAssets !== null) {
                timeline.push({
                    year: electionYear,
                    title: "Declared Assets",
                    value: `₹${(totalAssets / 10000000).toFixed(2)} Cr`,
                    type: "asset"
                });
            }

            // Criminal Cases Event
            const caseCount = election.criminal_cases_count;
            if (caseCount !== undefined && caseCount !== null && caseCount > 0) {
                timeline.push({
                    year: electionYear,
                    title: "Criminal Cases",
                    value: caseCount.toString(),
                    type: "criminal"
                });
            }
        }
    );

    // Sort chronologically by year
    return timeline.sort((a, b) => a.year - b.year);
}