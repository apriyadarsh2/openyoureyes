


import {
  ConstituencyState,

  ConstituencySummary,

  ConstituencyProfile,
} from "../../types/constituency";

/* -----------------------------
   All States (Mock Fallback)
------------------------------ */


export async function getStates(): Promise<ConstituencyState[]> {
  const baseUrl = "http://72.60.103.117:8000";
  try {
    const res = await fetch(`${baseUrl}/api/v1/constituencies`, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      return data.results;
    }
  } catch (error) {
    console.error("Failed to fetch states:", error);
  }
  return [];
}

/* -----------------------------
   State Details (Mock Fallback)
------------------------------ */
export async function getStateBySlug(slug: string): Promise<ConstituencyState | undefined> {
  const states = await getStates();
  return states.find(s => s.slug === slug);
}
/* -----------------------------
   Constituencies by State (Mock Fallback)
------------------------------ */
export async function getConstituenciesByState(slug: string): Promise<ConstituencySummary[]> {
  const baseUrl =  "http://72.60.103.117:8000" ;
  try {
    const res = await fetch(`${baseUrl}/api/v1/constituencies/state/${slug}`, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      return data.results;
    }
  } catch (error) {
    console.error(`Failed to fetch constituencies for state ${slug}:`, error);
  }
  return [];
}

/* -----------------------------
   Constituency Profile (Live DB)
------------------------------ */
export async function getConstituencyProfile(
  id: number
): Promise<ConstituencyProfile | null> {
  const baseUrl =  "http://72.60.103.117:8000" ;

  try {
    const res = await fetch(`${baseUrl}/api/v1/constituencies/${id}/profile`, {
      cache: "no-store", 
    });
    
    if (res.ok) {
      return await res.json();
    }
    
    return null; 
  } catch (error) {
    console.error(`Live API failed to fetch profile for Constituency ID ${id}:`, error);
    return null;
  }
}