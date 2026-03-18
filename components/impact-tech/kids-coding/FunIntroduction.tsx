import React from "react";
import Button from "../Teens-coding/Button";

const FunIntroduction = () => {
  return (
    <div className="bg-[#F4F7FA] w-full flex items-center justify-center h-full md:h-[540px] md:py-0 py-10">
      <div className="w-full  px-6 md:px-0">
        <div className="font-inter text-center ">
          <h2 className="text-[#061C3D] text-3xl md:text-5xl font-bold w-full md:max-w-[839px] mx-auto leading-[40px]">
            A Fun Introduction to Coding for Young Minds
          </h2>
          <p className="text-[#464646] text-base md:text-xl font-normal pt-6 md:pt-[51px] md:max-w-[1129px] mx-auto leading-[32px]">
            This program introduces children to coding in a playful and engaging
            way. Through interactive lessons, games, and <br /> creative
            projects, kids learn how technology works while building
            problem-solving and logical thinking skills.
            <br /> Our approach focuses on making learning enjoyable,
            confidence-building, and age-appropriate.
            <br /> No prior experience is required.
          </p>
        </div>
        <div className="flex justify-center pt-[51px]">
          <Button
            url="#enroll-form"
            text="Enroll Now"
            className="text-white bg-[#E60303] w-full md:w-[146px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FunIntroduction;
