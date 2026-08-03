// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/**/*.{js,ts,jsx,tsx,mdx}", 
//   ],
//   theme: {
//     extend: {
//       colors: {
//         politic: {
//           base: "#14192b",
//           light: "#F4F4F5",
//           muted: "#9ca3af",
//           accent: "#FBBF24",
          
//           text: "#ffffff",         
//           border: "#ffffff1a",     
//           card: "#1e293b",         
//           panel: "#1e293b",        
          
//           "card-bg": "#1F2937",
//           "card-dark": "#101827",
//         }
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;


import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        politic: {
          base: "#101827",     // ✅ Main App Background
          card: "#1F2937",     // ✅ Cards & Panels
          inner: "#14192b",    // ✅ Inputs, Dropdowns, Table Headers
          border: "#ffffff1a", // Borders
          text: "#ffffff",     // Primary Text
          muted: "#cbd5e1",    // Muted Text
          accent: "#FBBF24",   // Amber Highlight
          light: "#F4F4F5",    // Light Text Alternate
        }
      },
    },
  },
  plugins: [],
};
export default config;