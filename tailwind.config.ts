import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "868px",
      lg: "1034px",
      xl: "1300px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "impact-gradient":
          "linear-gradient(252.53deg, rgba(42,116,69,0.5) -0.87%, rgba(104,213,133,0.5) -0.87%, rgba(40,108,65,0.5) 25.15%, rgba(42,116,69,0.425) 97.92%)",
        "impact-radical": `
          radial-gradient(100% 100% at 50% 50%,#2A7445 60%, #68D585 100%),
          linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),
          linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))
         
        `,
      },
      fontFamily: {
        Roboto: ["Roboto"],
        RobotoSlab: ["Roboto Slab"],
      },
      keyframes: {
        carousel: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        carousel: "carousel 20s linear infinite",
      },
      boxShadow: {
        "impact-shadow":
          "0px 1.29px 3.22px 0px #0000004D, inset 0px 0.32px 0px 0px #FFFFFF0F",
        "colored-shadow": " 0px 5.63px 30.95px 0px #E603034D, 0px 0.7px 0px 0px #FFFFFF33 inset, 0px 2.81px 8.44px 0px #0000001A",
      },

    },
  },
  plugins: [],
};
export default config;
function gradient(arg0: number, arg1: number, arg2: any, arg3: number, A7445: any, arg5: number, arg6: any, arg7: number, D585: any, arg9: number) {
  throw new Error("Function not implemented.");
}

