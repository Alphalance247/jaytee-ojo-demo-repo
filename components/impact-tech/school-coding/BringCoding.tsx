import React from "react";
import Button from "../Teens-coding/Button";
import { IoCodeSlash } from "react-icons/io5";

const BringCoding = () => {
  return (
    <div className="mx-auto w-full max-w-[1440px] py-10 md:pt-[131px] md:pb-[125px]">
      <div className="relative bg-impact-radical h-[392px] rounded-[11.25px] shadow-colored-shadow ">
        <div className="flex flex-col gap-5 md:gap-8 justify-center items-center h-full md:px-0 px-6">
          <h5 className="text-white font-semibold font-grostek text-2xl md:text-5xl leading-[130%]">
            Bring Coding Education to Your School
          </h5>
          <Button
            text="Schedule a Consultation"
            url="#school-coding-form"
            className="text-white bg-[#E60303] w-full md:w-[256px]"
          />
        </div>
        <div className="absolute top-5">
          <IoCodeSlash className="text-[#FFFFFF1F] w-[145.64px] h-[142.48px] font-bold" />
        </div>
        <div className="absolute top-5 right-0 md:-right-14">
          <IoCodeSlash className="text-[#FFFFFF1F] w-[145.64px] h-[142.48px] font-bold" />
        </div>
        <div className="absolute bottom-[73px] left-80">
          <IoCodeSlash className="text-[#FFFFFF54] w-[44px] h-[51.51px] font-bold" />
        </div>
        <div className="absolute bottom-[90px] right-72">
          <IoCodeSlash className="text-[#FFFFFF54] w-[44px] h-[51.51px] font-bold" />
        </div>
      </div>
    </div>
  );
};

export default BringCoding;
