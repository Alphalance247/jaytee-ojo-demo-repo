import React from "react";
import ProgramPod from "./ProgramPod";
const programs = [
  { title: "Regular Coding Classes", desc: "Ongoing, year-round learning." },
  {
    title: "Holiday Camps & Bootcamps",
    desc: "Short, intensive sessions during school breaks",
  },
  {
    title: "Annual coding challenge",
    desc: "Competitive challenge for all learners.",
  },
];
const ProgramDelivered = () => {
  return (
    <div
      className="h-full md:h-[797px] bg-[#0D0F1B] bg-no-repeat bg-right bg-contain"
      style={{
        backgroundImage:
          "linear-gradient(252.53deg, rgba(42, 116, 69, 0.5) -0.87%, rgba(104, 213, 133, 0.5) -0.87%, rgba(40, 108, 65, 0.5) 25.15%, rgba(42, 116, 69, 0.425) 97.92%), url('/assets/impact-tech/hand-trophy.png')",
      }}
    >
      <div className=" px-6 md:px-[110px] ">
        <div className="grid gap-6 w-full md:w-[684px] mb-[44px] md:mb-[88px] ">
          <div className=" text-[32px] md:text-[48px] font-bold text-white leading-[100%] mt-10 md:mt-[91px] font-grostek">
            How This Program Is <br /> Delivered
          </div>
          <div className="text-white font-inter">
            Flexible learning formats designed to fit different schedules and
            goals
          </div>
          <div>
            <button className="cursor-pointer bg-white text-[#100E19] text-base md:text-[24px] rounded-[16px] h-14 md:h-[66px] w-full md:w-[216px] font-lato">
              Get Started
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-6 md:pb-0 pb-10">
          {programs.map((program, index) => (
            <ProgramPod
              key={index}
              title={program.title}
              description={program.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramDelivered;
