export interface NationalYearData {
  pm: string;
  party: string;
  loksabha: string;
  majorEvents: string[];
  gdpGrowth?: number;
  population?: number;
}

export const NATIONAL_HISTORY: Record<number, NationalYearData> = {
  1947: {
    pm: "Jawaharlal Nehru",
    party: "INC",
    loksabha: "Pre-Lok Sabha (Constituent Assembly)",
    majorEvents: [
      "India gains independence on August 15, 1947",
      "Partition of India and Pakistan",
      "Integration of princely states begins",
    ],
    gdpGrowth: 2.3,
    population: 350,
  },
  1950: {
    pm: "Jawaharlal Nehru",
    party: "INC",
    loksabha: "Provisional Parliament",
    majorEvents: [
      "Constitution of India adopted on January 26, 1950",
      "India becomes a Republic",
      "Dr. Rajendra Prasad becomes first President",
    ],
    gdpGrowth: 5.9,
    population: 359,
  },
  1951: {
    pm: "Jawaharlal Nehru",
    party: "INC",
    loksabha: "1st Lok Sabha",
    majorEvents: [
      "First General Elections held (1951-52)",
      "First Five Year Plan launched",
      "INC wins landslide in first election",
    ],
    gdpGrowth: 2.3,
    population: 361,
  },
  1956: {
    pm: "Jawaharlal Nehru",
    party: "INC",
    loksabha: "2nd Lok Sabha",
    majorEvents: [
      "States Reorganisation Act - linguistic states formed",
      "Andhra Pradesh, Kerala, Karnataka formed",
      "Second Five Year Plan launched",
    ],
    gdpGrowth: 5.7,
    population: 389,
  },
  1962: {
    pm: "Jawaharlal Nehru",
    party: "INC",
    loksabha: "3rd Lok Sabha",
    majorEvents: [
      "Sino-Indian War - China invades across McMahon Line",
      "India suffers military setback",
      "Third Five Year Plan launched",
    ],
    gdpGrowth: 2.1,
    population: 449,
  },
  1964: {
    pm: "Lal Bahadur Shastri",
    party: "INC",
    loksabha: "3rd Lok Sabha",
    majorEvents: [
      "Jawaharlal Nehru passes away (May 27, 1964)",
      "Lal Bahadur Shastri becomes PM",
      "IIT and IIM expansion begins",
    ],
    gdpGrowth: 7.6,
    population: 469,
  },
  1965: {
    pm: "Lal Bahadur Shastri",
    party: "INC",
    loksabha: "3rd Lok Sabha",
    majorEvents: [
      "Indo-Pakistani War of 1965",
      "'Jai Jawan, Jai Kisan' slogan coined",
      "Tashkent Declaration signed",
    ],
    gdpGrowth: -3.7,
    population: 479,
  },
  1966: {
    pm: "Indira Gandhi",
    party: "INC",
    loksabha: "4th Lok Sabha",
    majorEvents: [
      "Lal Bahadur Shastri dies in Tashkent",
      "Indira Gandhi becomes Prime Minister",
      "Rupee devalued by 36.5%",
    ],
    gdpGrowth: 1.0,
    population: 489,
  },
  1971: {
    pm: "Indira Gandhi",
    party: "INC",
    loksabha: "5th Lok Sabha",
    majorEvents: [
      "Bangladesh Liberation War - India intervenes",
      "Pakistan Army surrenders, Bangladesh created",
      "Indira Gandhi wins massive mandate ('Garibi Hatao')",
    ],
    gdpGrowth: 1.6,
    population: 548,
  },
  1975: {
    pm: "Indira Gandhi",
    party: "INC",
    loksabha: "5th Lok Sabha",
    majorEvents: [
      "Emergency declared June 25 - civil liberties suspended",
      "Press censorship imposed",
      "Allahabad High Court convicts Indira Gandhi of election fraud",
    ],
    gdpGrowth: 9.0,
    population: 577,
  },
  1977: {
    pm: "Morarji Desai",
    party: "JNP",
    loksabha: "6th Lok Sabha",
    majorEvents: [
      "Emergency lifted - elections held",
      "Janata Party wins - first non-Congress government",
      "Morarji Desai becomes PM (oldest at 81)",
    ],
    gdpGrowth: 7.5,
    population: 595,
  },
  1979: {
    pm: "Chaudhary Charan Singh",
    party: "JNP",
    loksabha: "6th Lok Sabha",
    majorEvents: [
      "Morarji Desai government falls",
      "Charan Singh becomes PM briefly",
      "Never faces Parliament, resigns after 170 days",
    ],
    gdpGrowth: -5.2,
    population: 613,
  },
  1980: {
    pm: "Indira Gandhi",
    party: "INC",
    loksabha: "7th Lok Sabha",
    majorEvents: [
      "Indira Gandhi returns to power with massive majority",
      "Sanjay Gandhi dies in air crash",
      "Punjab militancy begins to escalate",
    ],
    gdpGrowth: 6.7,
    population: 629,
  },
  1984: {
    pm: "Rajiv Gandhi",
    party: "INC",
    loksabha: "8th Lok Sabha",
    majorEvents: [
      "Operation Blue Star - Army enters Golden Temple",
      "Indira Gandhi assassinated October 31",
      "Rajiv Gandhi becomes PM, wins massive sympathy wave election",
      "Anti-Sikh riots kill thousands in Delhi",
    ],
    gdpGrowth: 7.8,
    population: 731,
  },
  1987: {
    pm: "Rajiv Gandhi",
    party: "INC",
    loksabha: "8th Lok Sabha",
    majorEvents: [
      "Bofors scandal breaks out",
      "India sends IPKF to Sri Lanka",
      "Mizoram becomes a state",
    ],
    gdpGrowth: 4.3,
    population: 785,
  },
  1989: {
    pm: "VP Singh",
    party: "JD",
    loksabha: "9th Lok Sabha",
    majorEvents: [
      "VP Singh wins on anti-corruption platform",
      "Mandal Commission implemented - OBC reservations",
      "L.K. Advani's Rath Yatra begins Ayodhya movement",
    ],
    gdpGrowth: 6.1,
    population: 833,
  },
  1991: {
    pm: "PV Narasimha Rao",
    party: "INC",
    loksabha: "10th Lok Sabha",
    majorEvents: [
      "Rajiv Gandhi assassinated during campaign",
      "India faces severe balance-of-payments crisis",
      "Economic liberalization begins under Manmohan Singh",
      "LPG reforms - License Raj dismantled",
    ],
    gdpGrowth: 1.1,
    population: 872,
  },
  1992: {
    pm: "PV Narasimha Rao",
    party: "INC",
    loksabha: "10th Lok Sabha",
    majorEvents: [
      "Babri Masjid demolished December 6",
      "Communal riots across India",
      "Harshad Mehta securities scam exposed",
    ],
    gdpGrowth: 5.4,
    population: 884,
  },
  1996: {
    pm: "HD Deve Gowda",
    party: "JD",
    loksabha: "11th Lok Sabha",
    majorEvents: [
      "Hung Parliament - no party wins majority",
      "HD Deve Gowda leads United Front government",
      "Coalition era truly begins",
    ],
    gdpGrowth: 7.6,
    population: 952,
  },
  1997: {
    pm: "IK Gujral",
    party: "JD",
    loksabha: "11th Lok Sabha",
    majorEvents: [
      "IK Gujral becomes PM after Deve Gowda",
      "India's 50th Independence anniversary celebrations",
      "Government falls within months",
    ],
    gdpGrowth: 4.0,
    population: 966,
  },
  1998: {
    pm: "Atal Bihari Vajpayee",
    party: "BJP",
    loksabha: "12th Lok Sabha",
    majorEvents: [
      "BJP-led NDA wins elections",
      "Pokhran-II nuclear tests - India becomes nuclear power",
      "US and others impose sanctions",
    ],
    gdpGrowth: 6.2,
    population: 981,
  },
  1999: {
    pm: "Atal Bihari Vajpayee",
    party: "BJP",
    loksabha: "13th Lok Sabha",
    majorEvents: [
      "Kargil War with Pakistan",
      "Lahore Bus Diplomacy initiative",
      "NDA wins full term in elections",
      "IC-814 hijacking",
    ],
    gdpGrowth: 8.8,
    population: 993,
  },
  2001: {
    pm: "Atal Bihari Vajpayee",
    party: "BJP",
    loksabha: "13th Lok Sabha",
    majorEvents: [
      "Parliament attack December 13 by terrorists",
      "Gujarat earthquake kills 20,000",
      "Operation Parakram - India-Pakistan border standoff",
    ],
    gdpGrowth: 5.2,
    population: 1029,
  },
  2002: {
    pm: "Atal Bihari Vajpayee",
    party: "BJP",
    loksabha: "13th Lok Sabha",
    majorEvents: [
      "Godhra train burning - 59 killed",
      "Gujarat riots - over 1,000 killed",
      "Narendra Modi remains Gujarat CM",
    ],
    gdpGrowth: 3.8,
    population: 1041,
  },
  2004: {
    pm: "Manmohan Singh",
    party: "INC",
    loksabha: "14th Lok Sabha",
    majorEvents: [
      "UPA wins surprise election victory",
      "Manmohan Singh becomes PM",
      "Sonia Gandhi declines PM post",
      "India Shining campaign backfires for BJP",
    ],
    gdpGrowth: 7.9,
    population: 1094,
  },
  2005: {
    pm: "Manmohan Singh",
    party: "INC",
    loksabha: "14th Lok Sabha",
    majorEvents: [
      "RTI (Right to Information) Act passed",
      "MGNREGA launched",
      "US-India nuclear deal announced",
    ],
    gdpGrowth: 9.3,
    population: 1107,
  },
  2008: {
    pm: "Manmohan Singh",
    party: "INC",
    loksabha: "14th Lok Sabha",
    majorEvents: [
      "Mumbai 26/11 terror attacks",
      "US-India Civil Nuclear Agreement signed",
      "Global financial crisis - India partially insulated",
    ],
    gdpGrowth: 3.9,
    population: 1154,
  },
  2009: {
    pm: "Manmohan Singh",
    party: "INC",
    loksabha: "15th Lok Sabha",
    majorEvents: [
      "UPA wins second term with stronger mandate",
      "Aadhar project launched",
      "Right to Education Act passed",
    ],
    gdpGrowth: 8.4,
    population: 1166,
  },
  2011: {
    pm: "Manmohan Singh",
    party: "INC",
    loksabha: "15th Lok Sabha",
    majorEvents: [
      "Anna Hazare anti-corruption movement",
      "India Against Corruption - massive protests",
      "2G spectrum scam comes to light",
      "Lokpal Bill controversy",
    ],
    gdpGrowth: 6.6,
    population: 1210,
  },
  2014: {
    pm: "Narendra Modi",
    party: "BJP",
    loksabha: "16th Lok Sabha",
    majorEvents: [
      "BJP wins historic majority - 282 seats",
      "Narendra Modi becomes PM",
      "Make in India, Swachh Bharat launched",
      "AAP wins Delhi elections (2015)",
    ],
    gdpGrowth: 7.4,
    population: 1296,
  },
  2016: {
    pm: "Narendra Modi",
    party: "BJP",
    loksabha: "16th Lok Sabha",
    majorEvents: [
      "Demonetization November 8 - Rs 500, 1000 notes withdrawn",
      "Surgical strikes across LoC",
      "GST Bill passed in Parliament",
    ],
    gdpGrowth: 8.3,
    population: 1324,
  },
  2017: {
    pm: "Narendra Modi",
    party: "BJP",
    loksabha: "16th Lok Sabha",
    majorEvents: [
      "GST implemented July 1",
      "Ram Nath Kovind becomes President",
      "BJP wins UP with massive majority",
    ],
    gdpGrowth: 6.8,
    population: 1339,
  },
  2019: {
    pm: "Narendra Modi",
    party: "BJP",
    loksabha: "17th Lok Sabha",
    majorEvents: [
      "BJP wins with even bigger majority - 303 seats",
      "Article 370 abrogated - J&K split into two UTs",
      "Citizenship Amendment Act (CAA) passed",
      "Pulwama attack and Balakot airstrikes",
    ],
    gdpGrowth: 6.5,
    population: 1367,
  },
  2020: {
    pm: "Narendra Modi",
    party: "BJP",
    loksabha: "17th Lok Sabha",
    majorEvents: [
      "COVID-19 pandemic - nationwide lockdown",
      "India-China Galwan clash - 20 soldiers killed",
      "Farm Laws passed (later repealed)",
      "GDP contracts sharply",
    ],
    gdpGrowth: -6.6,
    population: 1380,
  },
  2021: {
    pm: "Narendra Modi",
    party: "BJP",
    loksabha: "17th Lok Sabha",
    majorEvents: [
      "COVID-19 second wave - massive death toll",
      "Vaccination drive - world's largest",
      "Farm Laws repealed after protests",
    ],
    gdpGrowth: 8.7,
    population: 1393,
  },
  2022: {
    pm: "Narendra Modi",
    party: "BJP",
    loksabha: "17th Lok Sabha",
    majorEvents: [
      "India becomes 5th largest economy",
      "G20 Presidency announced",
      "Agnipath military recruitment scheme",
    ],
    gdpGrowth: 7.2,
    population: 1406,
  },
  2023: {
    pm: "Narendra Modi",
    party: "BJP",
    loksabha: "17th Lok Sabha",
    majorEvents: [
      "G20 Summit hosted in New Delhi",
      "Chandrayaan-3 lands on Moon's south pole",
      "New Parliament building inaugurated",
    ],
    gdpGrowth: 8.2,
    population: 1428,
  },
  2024: {
    pm: "Narendra Modi",
    party: "BJP",
    loksabha: "18th Lok Sabha",
    majorEvents: [
      "General Elections - BJP wins 240 seats (coalition needed)",
      "Modi forms government with NDA allies for 3rd term",
      "INDIA alliance does better than expected",
      "Ram Mandir consecrated in Ayodhya",
    ],
    gdpGrowth: 8.2,
    population: 1441,
  },
  2025: {
    pm: "Narendra Modi",
    party: "BJP",
    loksabha: "18th Lok Sabha",
    majorEvents: [
      "India continues as fastest-growing major economy",
      "Bihar elections scheduled",
      "Digital India initiatives expand",
    ],
    gdpGrowth: 6.8,
    population: 1455,
  },
  2026: {
    pm: "Narendra Modi",
    party: "BJP",
    loksabha: "18th Lok Sabha",
    majorEvents: [
      "Multiple state elections",
      "Infrastructure development continues",
    ],
    gdpGrowth: 6.5,
    population: 1465,
  },
};

export function getNationalData(year: number): NationalYearData {
  const years = Object.keys(NATIONAL_HISTORY)
    .map(Number)
    .sort((a, b) => a - b);

  // Find the most recent year <= requested year
  let selectedYear = years[0];
  for (const y of years) {
    if (y <= year) {
      selectedYear = y;
    } else {
      break;
    }
  }

  return NATIONAL_HISTORY[selectedYear];
}
