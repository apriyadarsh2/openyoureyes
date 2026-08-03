import { ReactNode } from "react";
import { notFound } from "next/navigation";

import { getPoliticianProfile } from "@/src/components/lib/repositories/politicians";

import {PoliticianProvider} from "@/src/components/politicians/context/PoliticianProvider";

import ProfileLayout from "@/src/components/politicians/profile/layout/ProfileLayout";
import ProfileSidebar from "@/src/components/politicians/profile/layout/ProfileSidebar";
import StickyProfileHeader from "@/src/components/politicians/profile/layout/StickyProfileHeader";

interface Props {
  children: ReactNode;

  params: Promise<{
    id: string;
  }>;
}

export default async function PoliticianLayout({
  children,
  params,
}: Props) {

  const { id } = await params;

  const data =
    getPoliticianProfile(id);

  if (!data) {
    notFound();
  }

  return (
    <PoliticianProvider politician={data}>

      <ProfileLayout
        hero={
          <StickyProfileHeader
            politician={data}
          />
        }
        sidebar={<ProfileSidebar />}
      >
        {children}
      </ProfileLayout>

    </PoliticianProvider>
  ); 
}