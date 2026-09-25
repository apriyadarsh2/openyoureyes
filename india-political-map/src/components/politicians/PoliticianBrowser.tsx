"use client";

import { useEffect, useState } from "react";

import PoliticianList from "./PoliticianList";
import Pagination from "../ui/Pagination";

import {
  getPoliticians,
} from "@/src/components/lib/repositories/politicians";

import { Politician } from "../types/politician";

const PAGE_SIZE = 6;

export default function PoliticianBrowser() {
  const [politicians, setPoliticians] =
    useState<Politician[]>([]);

  const [isLoading, setIsLoading] =
    useState(true);

  const [page, setPage] =
    useState(1);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        const data = await getPoliticians();

        if (isMounted) {
          setPoliticians(
            Array.isArray(data)
              ? data
              : []
          );
        }
      } catch (error) {
        console.error(
          "Failed to load politicians:",
          error
        );

        if (isMounted) {
          setPoliticians([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  /* =========================================
     Pagination
  ========================================= */

  const totalPages = Math.max(
    1,
    Math.ceil(
      politicians.length /
        PAGE_SIZE
    )
  );

  const safePage = Math.min(
    page,
    totalPages
  );

  const paginatedPoliticians =
    politicians.slice(
      (safePage - 1) * PAGE_SIZE,
      safePage * PAGE_SIZE
    );

  /* =========================================
     Render
  ========================================= */

  return (
    <>
      {/* Result count */}

      <div className="mb-4 flex items-center justify-between px-1">
        <p className="text-sm text-politic-muted">
          {isLoading ? (
            <span>
              Loading database...
            </span>
          ) : (
            <>
              <span className="font-semibold text-politic-text">
                {politicians.length}
              </span>{" "}
              politician
              {politicians.length !==
              1
                ? "s"
                : ""}{" "}
              found
            </>
          )}
        </p>
      </div>

      {/* List */}

      <div className="mb-6">
        {isLoading ? (
          <div className="rounded-xl border border-dashed border-politic-border p-10 text-center text-politic-muted">
            Fetching live records...
          </div>
        ) : paginatedPoliticians.length ===
          0 ? (
          <div className="rounded-xl border border-dashed border-politic-border p-10 text-center text-politic-muted">
            No politicians found.
          </div>
        ) : (
          <PoliticianList
            politicians={
              paginatedPoliticians
            }
          />
        )}
      </div>

      {/* Pagination */}

      {!isLoading &&
        politicians.length > 0 && (
          <Pagination
            page={safePage}
            totalPages={totalPages}
            setPage={setPage}
          />
        )}
    </>
  );
}