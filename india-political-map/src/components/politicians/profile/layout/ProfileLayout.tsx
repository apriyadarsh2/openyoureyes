import { ReactNode } from "react";

interface Props {
  hero: ReactNode;
  sidebar: ReactNode;
  children: ReactNode;
}

export default function ProfileLayout({
  hero,
  sidebar,
  children,
}: Props) {
  return (
    <main className="min-h-screen bg-politic-base text-politic-text">
      
      {/* Top Header */}
      <div className="relative z-20 w-full shadow-sm">
        {hero}
      </div>

      {/* Main Content Area */}
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 lg:flex-row lg:gap-8 lg:px-6 lg:py-8">

        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 lg:block xl:w-72">
          <div className="sticky top-24">
            {sidebar}
          </div>
        </aside>

        {/* Main Section */}
        <div className="min-w-0 flex-1">
          <div className="space-y-6 lg:space-y-10">
            {children}
          </div>
        </div>

      </div>
    </main>
  );
}