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

    if (politician.profile?.dob) {

        timeline.push({

            year: new Date(
                politician.profile.dob
            ).getFullYear(),

            title: "Born",

            subtitle:
                politician.profile.dob,

            type: "birth",

        });

    }

    if (politician.profile?.education_detail) {

        timeline.push({

            year:1982,

            title:"Education",

            subtitle:
            politician.profile.education_detail,

            type:"education"

        });

    }

    politician.profile?.elections.forEach(

        election=>{

            timeline.push({

                year:election.election.year,

                title:
                election.result.winner
                ? "Won General Election"
                : "Contested Election",

                subtitle:
                election.constituency.name_en,

                type:"election"

            });

            timeline.push({

                year:election.election.year,

                title:"Declared Assets",

                value:
                `₹${(
                election.assets.total_assets_inr/
                10000000
                ).toFixed(2)} Cr`,

                type:"asset"

            });

            timeline.push({

                year:election.election.year,

                title:"Criminal Cases",

                value:
                election.criminal_cases_count.toString(),

                type:"criminal"

            });

        }

    );

    return timeline.sort(

        (a,b)=>a.year-b.year

    );

}