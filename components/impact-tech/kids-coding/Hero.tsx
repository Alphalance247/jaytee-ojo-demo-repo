import React from "react";
import ButtonFrame from "../Teens-coding/ButtonFrame";
import Button from "../Teens-coding/Button";
const kidCoding = [
  {
    text: "Ages 6–12",
    class: "w-[180px] md:w-[237px] ",
  },
  { text: "Beginners", class: "w-[180px] md:w-[233px]" },
  { text: "No experience needed", class: "w-[200px] md:w-[297px]" },
  { text: "Fun & Interactive", class: "w-[200px] md:w-[265px]" },
];
const Hero = () => {
  return (
    <div className="w-full">
      <div className="mx-auto md:max-w-[1440px] w-full flex md:flex-row flex-col gap-6 items-center md:px-0 px-6 md:gap-[132px] md:pt-[63px] py-10 md:pb-[67px] ">
        <div className="w-full md:w-1/2">
          <div className="w-full md:w-[478px] relative">
            <div className="absolute -top-12 left-0">
              <img
                src="/assets/impact-tech/kids-coding/light-bulb.png"
                alt=""
              />
            </div>
            <h1 className="md:text-[64px] text-3xl font-extrabold text-[#0F0F0F] md:leading-[72px] font-inter">
              Kids Coding & Digital Discovery
            </h1>
            <p className="font-nunito text base text-[#1F1C14] pt-4 pb-16">
              A fun and beginner-friendly program where kids learn to code,
              think creatively, and build confidence through technology.
            </p>
            <Button
              url="#enroll-form"
              text="Enroll Now"
              className="text-white bg-[#E60303] w-full md:w-[146px]"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/assets/impact-tech/kids-coding/Frame1171275309.png"
            alt="hero image"
            className="w-full object-cover "
          />
        </div>
      </div>
      <div className="bg-[#201D1F] bg-impact-gradient shadow-impact-shadow w-full">
        <div className="mx-auto  md:max-w-[1440px] px-6 md:px-0 md:py-0 py-8 h-fit md:h-[219px] w-full  grid md:flex-row items-center  gap-6 md:grid-cols-4 grid-cols-1">
          {kidCoding.map((list, index) => (
            <ButtonFrame key={index} text={list.text} className={list.class} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
