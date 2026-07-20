// import { ReactNode } from "react";

// interface Props {
//   id: string;
//   title: string;
//   children: ReactNode;
// }

// export default function Section({
//   id,
//   title,
//   children,
// }: Props) {
//   return (
//     <section
//       id={id}
//       className="scroll-mt-24"
//     >
//       <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

//         <div className="mb-8 flex items-center justify-between border-b pb-5">

//           <h2 className="text-3xl font-bold">
//             {title}
//           </h2>

//         </div>

//         {children}

//       </div>
//     </section>
//   );
// }

import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function PageSection({
  title,
  children,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-8 border-b pb-5">
        <h1 className="text-3xl font-bold text-slate-900">
          {title}
        </h1>
      </div>

      {children}
    </div>
  );
}