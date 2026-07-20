"use client";

import {
  createContext,
  useContext,
  ReactNode,
} from "react";

import { PoliticianProfileResponse } from "../../types/politician";

const PoliticianContext =
  createContext<PoliticianProfileResponse | null>(
    null
  );

interface Props {
  politician: PoliticianProfileResponse;
  children: ReactNode;
}

export function PoliticianProvider({
  politician,
  children,
}: Props) {
  return (
    <PoliticianContext.Provider
      value={politician}
    >
      {children}
    </PoliticianContext.Provider>
  );
}

export function usePolitician() {
  const context =
    useContext(PoliticianContext);

  if (!context) {
    throw new Error(
      "usePolitician must be used inside PoliticianProvider"
    );
  }

  return context;
}