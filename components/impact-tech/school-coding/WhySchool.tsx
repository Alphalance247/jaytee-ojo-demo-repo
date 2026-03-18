import React from "react";
import WhyCard from "./WhyCard";
const items = [
  { text: "Curriculum aligned with global standards" },
  { text: "Experienced and vetted instructors" },
  { text: "Structured learning roadmap" },
  { text: "Structured learning roadmap" },
];
const WhySchool = () => {
  return (
    <div className="mx-auto w-full md:max-w-[1200px] py-10 md:py-[100px] flex flex-col md:justify-normal justify-center items-center ">
      <div className="flex justify-center items-center">
        <h3 className="text-[#000000] font-bold font-grostek text-2xl md:text-5xl leading-[100%] pb-10 md:pb-[66px] md:text-start text-center">
          Why Schools Choose This Program
        </h3>
      </div>
      <div className="flex flex-col md:flex-row gap-6 ">
        {items.map((item, index) => (
          <WhyCard key={index} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default WhySchool;
