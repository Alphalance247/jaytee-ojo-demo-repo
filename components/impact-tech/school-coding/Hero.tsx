import React from "react";
import Button from "../Teens-coding/Button";
import Ball from "./Ball";
import RatingCard from "./RatingCard";

const Hero = () => {
  return (
    <div className="w-full relative mb-16 md:mb-0">
      <div className="mx-auto w-full md:max-w-[985px] mt-16 md:mt-[128px] md:px-0 px-6">
        <div className="flex flex-col gap-5 items-center text-center w-full  mx-auto md:max-w-[864px] ">
          <h1 className="font-bold font-grostek text-3xl md:text-[64px] text-[#1D1D1D] leading-[100%]">
            Coding Programs for Forward-Thinking Schools
          </h1>
          <p className="text-[#464646] text-lg md:text-xl font-normal w-full mx-auto md:max-w-[767px] leading-[150%]">
            when you need us for improve your business, <br />
            then come with us to help your business have reach it, you just sit
            and feel that goal
          </p>
        </div>
        <div className="flex justify-center items-center pt-[82px]">
          <Button
            url="/impact-tech/partners#start-partnership"
            className="text-white bg-[#E60303] w-full md:w-[187px]"
            text="Partner With Us"
          />
        </div>
        <div className=" h-[300px] md:h-[616px] mt-20  ">
          <div className="mx-auto md:max-w-[887px] relative">
            <div className="relative z-10">
              <img
                src="/assets/impact-tech/school-coding/school.png"
                alt="hero bg"
                className="rounded-[50px] h-auto md:h-[501px] w-[887px] object-cover"
              />
            </div>
            <div className="absolute z-0 -bottom-1 md:-bottom-2 left-32 md:left-[278px] -translate-x-1/2">
              <img
                src="/assets/impact-tech/school-coding/Group2143.png"
                alt=""
              />
            </div>
            <div className="absolute z-0 -top-[19.7px] left-24 md:left-[223.92px] -translate-x-1/2">
              <img
                src="/assets/impact-tech/school-coding/Group2140.png"
                alt=""
              />
            </div>
            <div className="absolute z-0 -bottom-[18.42px] left-24 md:left-[259px] -translate-x-1/2">
              <img
                src="/assets/impact-tech/school-coding/Group2140.png"
                alt=""
              />
            </div>
            <div className="absolute inset-0 rounded-[50px] bg-[#2A74454D] w-full z-20 "></div>
            <div className="absolute z-30 top-[27px] -left-4 md:-left-[88px]">
              <RatingCard text="20+ Schools" className="w-[175px] h-[95px]" />
            </div>
            <div className="absolute z-30 -right-4 md:-right-[42.5px] bottom-5">
              <RatingCard
                text="2,000+ Students"
                className="w-[148px] h-[107px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-4 md:left-[73px] top-16 md:top-[111px] ">
        <Ball className="bg-[linear-gradient(180deg,#68D585_0%,#2A7445_100%)] shadow-[0px_3px_20px_0px_#0000000D]" />
      </div>
      <div className="absolute right-0 -top-10 md:-top-14 ">
        <Ball className="bg-[linear-gradient(180deg,#FF8E8E_0%,#F62424_100%)] shadow-[0px_3px_20px_0px_#0000000D]" />
      </div>
      <div className="absolute right-4 md:right-48 top-[280px] md:top-[290px] ">
        <Ball className="bg-[linear-gradient(180deg,#68D585_0%,#2A7445_100%)] shadow-[0px_3px_20px_0px_#0000000D]" />
      </div>
      <div className="absolute left-3 md:left-[73px] top-[400px] ">
        <Ball className="bg-[linear-gradient(180deg,#FF8E8E_0%,#F62424_100%)] shadow-[0px_3px_20px_0px_#0000000D]" />
      </div>
    </div>
  );
};

export default Hero;
