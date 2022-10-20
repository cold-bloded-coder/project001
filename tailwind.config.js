/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FCFCFC",
        bgPrimary: "#FFFFFF",
        primary: "#546CF0",
        textSecondary:"#565656",
        primaryLinearStart: "rgba(76,102,194,0.87)",
        primaryLinearCenter: "rgb(106,122,255)",
        primaryLinearEnd: "rgba(76,102,194,0.87)"
      },
      dropShadow: {
        navShadowMob: "0 1px 64px rgba(0,0,0,0.1)"
      },
      padding: {
        "primaryMob": "24px"
      }
    },
  },
  plugins: [],
}
