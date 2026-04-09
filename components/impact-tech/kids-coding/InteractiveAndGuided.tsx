import React from "react";
import Button from "../Teens-coding/Button";
import InteractiveCard from "./InteractiveCard";
import { HiPlus } from "react-icons/hi2";
const row1items = [
  {
    text: "",
    title: "",
    child: (
      <img
        src="/assets/impact-tech/kids-coding/Vector(10).png"
        alt="icon"
        className="w-[42px] h-[42px]"
      />
    ),
  },
  {
    text: "",
    title: "",
    child: (
      <img
        src="/assets/impact-tech/kids-coding/glyphs_puzzle-bold.svg"
        alt="icon"
        className="w-[42px] h-[42px]"
      />
    ),
  },
];
const row2Items = [
  {
    text: "",
    title: "",
    child: (
      <img
        src="public/assets/impact-tech/kids-coding/solar_user-check-bold.svg"
        alt="icon"
        className="w-[42px] h-[42px]"
      />
    ),
  },
  {
    text: "",
    title: "",
    child: (
      <img
        src="/assets/impact-tech/kids-coding/Vector(7).svg"
        alt="icon"
        className="w-[42px] h-[42px]"
      />
    ),
  },
];
const InteractiveAndGuided = () => {
  return (
    <div className="bg-[#F4F7FA]">
      <div className="mx-auto w-full md:w-[1440px]  md:px-0 px-6 py-10 md:py-[91px]">
        <div className="flex flex-col justify-center items-center  gap-10 md:gap-[57px] w-full">
          <div className="flex flex-col md:flex-row items-center  gap-[22.41px]">
            <div className="w-full md:w-1/3">
              <div className="w-full md:w-[458px] relative">
                <h3 className="text-[#1D1D1D] text-2xl md:text-[55px] leading-[130%] font-grostek font-bold">
                  Fun, Interactive, and Guided Learning
                </h3>
                <img
                  src="/assets/impact-tech/kids-coding/Idea.png"
                  alt="idea logo"
                  className="absolute  right-44 bottom-0 md:w-auto w-7 h-7 md:h-auto"
                />
              </div>
              <div className="pt-[26px]">
                <Button
                  url="#enroll-form"
                  text="Enroll Now"
                  className="text-white bg-[#E60303] w-full md:w-[146px]"
                />
              </div>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[82px] justify-start md:justify-center items-center ">
              <div>
                {" "}
                <InteractiveCard
                  titleClass="w-full md:w-[322px]"
                  title="Live Instructor-Led Classes"
                  text="Friendly instructors guide kids step-by-step."
                  textClass=""
                >
                  {" "}
                  <img
                    src="/assets/impact-tech/kids-coding/Vector(10).png"
                    alt="icon"
                    className="w-[42px] h-[42px]"
                  />
                </InteractiveCard>{" "}
              </div>
              <div className="w-40 absolute md:block hidden top-40 right-[240px] ">
                <img
                  src="/assets/impact-tech/kids-coding/Vector (11).png"
                  alt="plus image"
                  className="object-contain"
                />
              </div>
              <div>
                <InteractiveCard
                  titleClass="w-full md:w-[186px]"
                  title="Hands-on Activities"
                  text="Kids learn by building real mini projects."
                  textClass="px-[30px]"
                >
                  <img
                    src="/assets/impact-tech/kids-coding/glyphs_puzzle-bold.svg"
                    alt="icon"
                    className="w-[42px] h-[42px] "
                  />
                </InteractiveCard>
              </div>
              <div className="absolute top-80 md:top-64 md:-left-36">
                <img
                  src="/assets/impact-tech/kids-coding/Group 11.png"
                  alt="icon"
                  className="md:w-auto md:h-auto w-14 h-14"
                />
              </div>
            </div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[82px] justify-center items-center mr-0 md:mr-10 ">
            <div>
              {" "}
              <InteractiveCard
                titleClass="w-full md:w-[210px]"
                title="Small Class Sizes"
                text="Ensures every child gets attention."
                textClass=""
              >
                <img
                  src="/assets/impact-tech/kids-coding/glyphs_puzzle-bold.svg"
                  alt="icon"
                  className="w-[42px] h-[42px]"
                />
              </InteractiveCard>
            </div>
            <div className="w-40 absolute  md:block hidden  top-40 right-[240px] ">
              <img
                src="/assets/impact-tech/kids-coding/Vector (11).png"
                alt="plus image"
                className="object-contain"
              />
            </div>
            <div>
              <InteractiveCard
                titleClass="w-full md:w-[260px]"
                title="Supportive Environment"
                text="Encouraging and confidence-building."
                textClass=""
              >
                {" "}
                <img
                  src="/assets/impact-tech/kids-coding/Vector(10).png"
                  alt="icon"
                  className="w-[42px] h-[42px]"
                />
              </InteractiveCard>
              <div className="absolute  -top-6 md:top-0 right-0 md:-right-[45px]">
                <img
                  src="/assets/impact-tech/kids-coding/lightbulb 1.png"
                  alt="bulb image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveAndGuided;
