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
    <main className="min-h-screen bg-slate-100">

      {/* Sticky Header */}

      <div className="sticky top-0 z-50">
        {hero}
      </div>

      <div className="mx-auto flex max-w-7xl gap-8 px-6 py-8">

        {/* Sidebar */}

        <aside className="hidden w-72 shrink-0 xl:block">

          <div className="sticky top-32">

            {sidebar}

          </div>

        </aside>

        {/* Main */}

        <div className="flex-1">

          <div className="space-y-10">

            {children}

          </div>

        </div>

      </div>

    </main>
  );
}