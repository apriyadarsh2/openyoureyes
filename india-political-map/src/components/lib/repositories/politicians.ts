import {
  Politician,
  PoliticianProfileResponse, 
} from "../../types/politician";

// 1. Live Fetch for All Politicians (List View)
export async function getPoliticians(): Promise<Politician[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://72.60.103.117:8000" ;

  try {
    const res = await fetch(`${baseUrl}/api/v1/politicians`, {
      cache: "no-store" 
    });
    
    if (res.ok) {
      return await res.json();
    }
    return []; // Returns empty if the server returns a 404/500
  } catch (error) {
    console.error("Live API failed to fetch politicians list:", error);
    return []; 
  }
}

// 2. Live Fetch for Individual Politician (Profile View)
export async function getPoliticianProfile(
  id: string
): Promise<PoliticianProfileResponse | null> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://72.60.103.117:8000";

  try {
    const res = await fetch(`${baseUrl}/api/v1/politicians/${id}`, {
      cache: "no-store"
    });
    
    if (res.ok) {
      return await res.json(); 
    }
    return null; 
  } catch (error) {
    console.error(`Live API failed to fetch profile for ID ${id}:`, error);
    return null;
  }
}