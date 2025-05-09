import Billing from "./Billing";
import ContactInfo from "./ContactInfo";
import DonateAmt from "./DonateAmt";
import Heading from "./Heading";
import Payment from "./Payment";
import { useState } from "react";

const Form = () => {
  const [active, setActive] = useState<string>("DONATE One time");
  const handleClick = (text: string) => {
    setActive(text);
  };
  return (
    <div className="px-[200px] py-24 max-sm:p-4 max-md:p-8 max-lg:p-10 max-xl:p-20">
      <Heading content="1. choose your donations" />
      <form
        action=""
        className="flex flex-col gap-y-12 max-sm:gap-y-4 max-md:gap-y-12"
      >
        <div>
          <h4 className="mb-4 text-base font-semibold font-Roboto">
            I want to:
          </h4>
          <div className="flex items-start justify-start gap-x-12 relative max-sm:grid max-sm:grid-cols-1 max-sm:gap-y-4 max-md:grid max-md:grid-cols-2">
            <div className="inline-flex">
              <button
                type="button"
                className={`font-Roboto inline-flex  font-black ${
                  active === "DONATE One time"
                    ? "bg-[#369458] text-white"
                    : "bg-white text-black"
                } px-8 py-2 text-[12px] uppercase border-2 border-[#369458] max-sm:mr-4 max-sm:px-4`}
                onClick={() => handleClick("DONATE One time")}
              >
                DONATE One time
              </button>
              <button
                type="button"
                className={`font-Roboto inline-flex  text-[#262626] ${
                  active === "DONATE monthly" ? "bg-[#369458] text-white" : ""
                } font-black text-[12px] uppercase bg-[] px-8 py-2  border-2 border-[#369458] max-sm:px-4`}
                onClick={() => handleClick("DONATE monthly")}
              >
                DONATE monthly
              </button>
            </div>
            <p className=" italic text-xl text-[#E60303] w-[340px] max-sm:text-base max-md:w-[280px]">
              Support monthly to feed children, families, and communities
              year-round!
            </p>
            <svg
              className="relative right-[29rem] top-3 max-sm:hidden max-md:absolute max-md:left-[19rem] max-md:top-4"
              xmlns="http://www.w3.org/2000/svg"
              width="98"
              height="90"
              viewBox="0 0 98 90"
              fill="none"
            >
              <g clip-path="url(#clip0_1089_1263)">
                <path
                  d="M3.44356 45.6966C5.09284 44.2173 6.74211 42.738 8.70506 40.9887C8.87574 41.9276 9.02076 42.5613 9.04939 43.2655C10.1289 57.9239 19.1777 68.8009 33.4119 72.6109C42.5729 75.0024 51.3679 73.7675 60.1609 70.6899C69.9915 67.2247 77.3906 60.6619 83.2912 52.2803C86.3224 47.9604 87.7121 43.0307 88.3167 37.8548C88.4469 36.4933 88.5189 35.1671 88.2032 33.5945C87.8343 34.2988 87.3134 35.0149 87.2839 35.7543C85.8984 53.8287 66.3507 69.7491 45.9208 70.8115C37.9149 71.2482 30.4989 69.2435 23.9282 64.5626C16.2172 59.0488 11.6251 48.4405 13.0532 39.2387C15.6988 41.2448 16.8274 45.2114 21.074 45.527C18.6848 41.8425 16.5668 38.4748 14.4262 35.201C13.6933 34.1214 12.5786 33.5936 11.7086 34.5211C8.66849 37.6438 5.75761 40.8488 2.94045 44.0771C2.74317 44.2767 2.94638 44.8752 2.94935 45.2742C2.96218 45.4268 3.22063 45.591 3.44356 45.6966Z"
                  fill="#E60303"
                />
              </g>
              <defs>
                <clipPath id="clip0_1089_1263">
                  <rect
                    width="79"
                    height="57"
                    fill="white"
                    transform="matrix(0.855492 -0.517816 -0.517816 -0.855492 30 90)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <DonateAmt />
        <ContactInfo />
        <Billing />
        <Payment />
      </form>
    </div>
  );
};

export default Form;
