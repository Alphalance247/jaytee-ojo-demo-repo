import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
const thoughts = [
  "Beginner-friendly curriculum",
  "Safe and supervised environment",
  "Experienced instructors",
  "Age-appropriate teaching methods",
  "Supportive learning atmosphere",
];
const DesignedWithKids = () => {
  return (
    <div className="w-full ">
      <div className="flex flex-col items-center md:flex-row md:max-w-[1440px] w-full mx-auto md:px-0 px-6 gap-10 md:gap-[117px] ">
        <div className="w-full md:w-1/2 mt-10 md:mt-[110px]">
          <div className="md:relative md:flex hidden ">
            <div className="mt-32 ">
              <img
                src="/assets/impact-tech/kids-coding/Vector2.png"
                alt="bg"
                className="shadow-[0px 35.1px 70.21px 0px #F29C1F33]  "
              />
            </div>
            <div className="absolute z-10 bottom-[105px] left-10">
              <img
                src="/assets/impact-tech/kids-coding/Maskgroup.png"
                alt="mother and child"
                className=""
              />
            </div>
            <div className="absolute z-20 bottom-[374px] left-[114px]">
              <img
                src="/assets/impact-tech/kids-coding/vectors.svg"
                alt="vectors"
              />
            </div>
            <div className="absolute right-[190px] bottom-[92px] z-30">
              <img
                src="/assets/impact-tech/kids-coding/Frame1618873233.svg"
                alt="frame"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pb-0 pb-10">
          <h4 className="font-grostek text-3xl md:text-5xl text-[#1F1C14] font-[800] ">
            Designed with Kids <br /> and Parents in Mind
          </h4>
          <div className="pt-7 md:pt-[41px] flex flex-col gap-6">
            {thoughts.map((thought, index) => (
              <div key={index} className="flex gap-4 items-center">
                <IoIosCheckmarkCircle className="text-[#2A7445] h-7 w-7" />
                <div
                  className="text-[#1F1C14] text-lg md:text-2xl font-nunito"
                  key={index}
                >
                  {thought}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignedWithKids;
