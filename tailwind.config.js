/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gondola: "hsl(315, 26%, 12%)",
        falcon: "hsl(323, 11%, 47%)",

        white1: "hsl(0, 0%, 100%)",
        white2: "hsl(0, 0%, 92%)",
        white3: "hsl(0, 100%, 96%)",
        white4: "hsl(0, 100%, 89%)",

        black1: "hsl(223, 24%, 29%)",
        black2: "hsl(230, 11%, 32%)",
        black3: "hsl(228, 27%, 22%)",
        black4: "hsl(224, 35%, 21%)",
        black5: "hsl(315, 26%, 12%)",
        black6: "hsl(226, 36%, 14%)",

        red1: "hsl(0, 84%, 73%)",
        red2: "hsl(0, 66%, 67%)",
        red02: "hsl(0, 67%, 62%)",
        red3: "hsl(354, 71%, 41%)",
        red4: "hsl(353, 76%, 40%)",
        red5: "hsl(353, 59%, 36%)",
        red6: "hsl(342, 44%, 23%)",
        red7: "hsl(340, 54%, 21%)",

        gray1: "hsl(0, 0%, 91%)",
        gray2: "hsl(0, 0%, 83%)",
        gray3: "hsl(0, 0%, 75%)",
      },
    },
  },
  plugins: [],
};
