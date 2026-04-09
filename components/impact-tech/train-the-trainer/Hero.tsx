import React from "react";
import Button from "../Teens-coding/Button";
import { BsDot } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="w-full flex justify-center items-start md:items-center h-fit md:h-[580px] px-6 md:px-0 md:py-0 py-10">
      <div className=" h-fit md:h-[398px] w-full md:max-w-[787px] mx-auto ">
        <div className="flex flex-col justify-center items-center gap-[18px]">
          <div className="flex items-center justify-center gap-[5px] w-full md:w-[251.98px] bg-[#ECFDF5] border border-[#A4F4CF] rounded-2xl h-[38px]">
            <BsDot className="text-[#007A55] " />
            <p className="text-[#007A55] font-inter text-sm font-regular">
              Applications Open for April 2026
            </p>
          </div>
          <div>
            <h1 className="font-grostek text-3xl md:text-6xl leading-10 md:leading-[80px] text-center">
              Train the Trainers. <br /> <span> Multiply the Impact.</span>
            </h1>
          </div>
          <div>
            <p className="text-[#03363D] text-center md:px-[97px] px-0 ">
              We equip educators and facilitators with the tools, curriculum,
              and confidence to deliver high-quality coding education in their
              own communities.
            </p>
          </div>
          <div>
            <Button
              text="partner with us"
              className="bg-[#E60303] text-white w-[210px] md:w-[187px]"
              url="#partnership-form"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
