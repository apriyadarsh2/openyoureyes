// "use client";

// import { useEffect, useRef } from "react";
// import { Search } from "lucide-react";

// interface Props {
//   query: string;
//   onChange: (value: string) => void;
//   onSubmit: () => void;
//   onClose: () => void;
// }

// export default function NavbarSearch({
//   query,
//   onChange,
//   onSubmit,
//   onClose,
// }: Props) {
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);

//   // Close when clicking outside
//   useEffect(() => {
//     function handleClickOutside(e: MouseEvent) {
//       if (
//         wrapperRef.current &&
//         !wrapperRef.current.contains(e.target as Node)
//       ) {
//         onClose();
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [onClose]);

//   // Close on Escape
//   useEffect(() => {
//     function handleEscape(e: KeyboardEvent) {
//       if (e.key === "Escape") {
//         onClose();
//         inputRef.current?.blur();
//       }
//     }

//     window.addEventListener("keydown", handleEscape);

//     return () => {
//       window.removeEventListener("keydown", handleEscape);
//     };
//   }, [onClose]);

//   function handleSubmit() {
//     if (!query.trim()) return;

//     onSubmit();

//     inputRef.current?.blur();

//     onClose();
//   }

//   return (
//     <div
//       ref={wrapperRef}
//       className="relative w-full max-w-xl"
//     >
//       <input
//         ref={inputRef}
//         value={query}
//         onChange={(e) => onChange(e.target.value)}
//         onKeyDown={(e) => {
//           if (e.key === "Enter") {
//             handleSubmit();
//           }
//         }}
//         placeholder="Search politicians, parties, constituencies..."
//         className="
//           h-11
//           w-full
//           rounded-full
//           border
//           border-slate-200
//           bg-slate-50
//           pl-11
//           pr-12
//           text-sm
//           outline-none
//           transition-all
//           duration-200
//           focus:border-blue-500
//           focus:bg-white
//           focus:ring-4
//           focus:ring-blue-100
//         "
//       />

//       <Search
//         size={18}
//         className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
//       />

//       <button
//         onClick={handleSubmit}
//         className="
//           absolute
//           right-1
//           top-1
//           flex
//           h-9
//           w-9
//           items-center
//           justify-center
//           rounded-full
//           bg-blue-600
//           text-white
//           transition
//           hover:bg-blue-700
//         "
//       >
//         <Search size={16} />
//       </button>
//     </div>
//   );
// }


"use client";

import { useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

import SearchDropdown from "@/src/components/search/SearchDropdown";
import usePoliticianSearch from "@/src/hooks/usePoliticianSearch";

export default function NavbarSearch() {
  const router = useRouter();

  const {
    query,
    setQuery,
    filteredPoliticians,
  } = usePoliticianSearch();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function closeSearch() {
    setQuery("");
    inputRef.current?.blur();
  }

  function submitSearch() {
    if (!query.trim()) return;

    router.push(`/search?q=${encodeURIComponent(query)}`);

    closeSearch();
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        closeSearch();
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeSearch();
      }
    }

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);
    return (
    <div
      ref={wrapperRef}
      className="relative w-full max-w-xl"
    >
      <input
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            submitSearch();
          }
        }}
        placeholder="Search politicians, parties, constituencies..."
        className="
          h-11
          w-full
          rounded-full
          border
          border-slate-200
          bg-slate-50
          pl-11
          pr-12
          text-sm
          outline-none
          transition-all
          duration-200
          focus:border-blue-500
          focus:bg-white
          focus:ring-4
          focus:ring-blue-100
        "
      />

      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <button
        onClick={submitSearch}
        className="
          absolute
          right-1
          top-1
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          bg-blue-600
          text-white
          transition
          hover:bg-blue-700
        "
      >
        <Search size={16} />
      </button>

      {query.trim() !== "" && (
        <SearchDropdown
          politicians={filteredPoliticians}
          onSelect={closeSearch}
        />
      )}
    </div>
  );
}