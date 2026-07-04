
import { getPoliticianProfile } from "@/src/components/lib/repositories/politicians";
import Analytics from "@/src/components/politicians/profile/analytics/Analytics";
import AssetsHistory from "@/src/components/politicians/profile/assets/AssetsHistory";
import CriminalCases from "@/src/components/politicians/profile/career/CriminalCases";
import ElectionHistory from "@/src/components/politicians/profile/elections/ElectionHistory";
import MPLADSHistory from "@/src/components/politicians/profile/career/MPLADSHistory";
import ProfileHero from "@/src/components/politicians/profile/layout/ProfileHero";
import ProfileLayout from "@/src/components/politicians/profile/layout/ProfileLayout";
import ProfileSidebar from "@/src/components/politicians/profile/layout/ProfileSidebar";
import StickyProfileHeader from "@/src/components/politicians/profile/layout/StickyProfileHeader";
import Timeline from "@/src/components/politicians/profile/timeline/Timeline";
import { notFound } from "next/navigation";
import Section from "@/src/components/politicians/profile/layout/Section";
import KPIGrid from "@/src/components/politicians/profile/kpi/KPIGrid";
import CareerSummary from "@/src/components/politicians/profile/career/CareerSummary";
import ProfileInfoCards from "@/src/components/politicians/profile/layout/ProfileInfoCards";
import AssetsChart from "@/src/components/politicians/profile/assets/AssetsChart";
import AssetsSummary from "@/src/components/politicians/profile/assets/AssetsSummary";
import AssetsBreakdown from "@/src/components/politicians/profile/assets/AssetsBreakdown";
import AssetsInsights from "@/src/components/politicians/profile/assets/AssetsInsights";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function PoliticianProfilePage({
  params,
}: Props) {
  const { id } = await params;

  const data = getPoliticianProfile(id);

  if (!data) {
    notFound();
  }

  const { summary, profile } = data;

  //  return (
  //   <ProfileLayout
  //     hero={
  //       <StickyProfileHeader
  //         politician={data}
  //       />
  //     }
  //     sidebar={<ProfileSidebar />}
  //   >
  //     <Section
  //       id="overview"
  //       title="Overview"
  //     >
  //       <ProfileHero
  //         summary={summary}
  //         profile={profile}
  //       />
  //     </Section>

  //     <Section
  //       id="about"
  //       title="About"
  //     >
  //       <ProfileAbout
  //         summary={summary}
  //         profile={profile}
  //       />
  //     </Section>

  //     <Section
  //       id="elections"
  //       title="Election History"
  //     >
  //       <ElectionHistory
  //         profile={profile}
  //       />
  //     </Section>

  //     <Section
  //       id="assets"
  //       title="Assets History"
  //     >
  //       <AssetsHistory
  //         profile={profile}
  //       />
  //     </Section>

  //     <Section
  //       id="cases"
  //       title="Criminal Cases"
  //     >
  //       <CriminalCases
  //         profile={profile}
  //       />
  //     </Section>

  //     <Section
  //       id="mplads"
  //       title="MPLADS"
  //     >
  //       <MPLADSHistory
  //         profile={profile}
  //       />
  //     </Section>

  //     <Section
  //       id="timeline"
  //       title="Timeline"
  //     >
  //       <Timeline profile={profile} />
  //     </Section>

  //     <Section
  //       id="analytics"
  //       title="Analytics"
  //     >
  //       <Analytics
  //         profile={profile}
  //       />
  //     </Section>
  //   </ProfileLayout>
  // );

  return (
    <ProfileLayout
      hero={
        <StickyProfileHeader
          politician={data}
        />
      }
      sidebar={<ProfileSidebar />}
    >
      <Section
        id="overview"
        title="Overview"
      >
        <div className="space-y-8">
          <ProfileHero
            summary={summary}
            profile={profile}
          />
          <KPIGrid
            summary={summary}
            profile={profile}
          />
          <ProfileInfoCards
            summary={summary}
            profile={profile}
          />
          <CareerSummary
            profile={profile}
          />
        </div>
      </Section>


      <Section
        id="elections"
        title="Election History"
      >
        <ElectionHistory
          profile={profile}
        />
      </Section>

      <Section
        id="assets"
        title="Assets History"
      >
        <div className="space-y-8">


          <AssetsSummary
            profile={profile}
          />

          <AssetsChart
            profile={profile}

          />
          <AssetsBreakdown
            profile={profile}
          />

          <AssetsInsights profile={profile} />

          <AssetsHistory
            profile={profile}
          />

        </div>
      </Section>

      <Section
        id="cases"
        title="Criminal Cases"
      >
        <CriminalCases
          profile={profile}
        />
      </Section>

      <Section
        id="mplads"
        title="MPLADS"
      >
        <MPLADSHistory
          profile={profile}
        />
      </Section>

      <Section
        id="timeline"
        title="Timeline"
      >
        <Timeline profile={profile} />
      </Section>

      <Section
        id="analytics"
        title="Analytics"
      >
        <Analytics
          profile={profile}
        />
      </Section>
    </ProfileLayout>
  )
}