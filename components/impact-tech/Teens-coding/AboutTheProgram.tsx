import Image from "next/image";
import React from "react";

const AboutTheProgram = () => {
  return (
    <div
      className="mt-[60px] md:mt-[126px] px-6 md:px-[101px] flex md:flex-row flex-col gap-6 md:gap-[138px] h-fit md:h-[624px] items-start
     "
    >
      <div className="w-full md:w-[1/2]">
        <h2 className=" text-[24px] md:text-[48px] font-bold text-[#2F2F2F] font-grostek ">
          About This Program
        </h2>
        <div className="py-[30px] text-[#121212] uppercase font-semibold md:text-base text-[15px] font-graphik">
          <h3>What this program is and why it matters.</h3>
        </div>
        <p className="text-[#121212] text-[15px] md:text-base w-full md:w-[513px] font-inter">
          This program is designed to introduce teenagers to the world of
          technology through hands-on learning, real-world projects, and guided
          mentorship. Students develop foundational coding skills while building
          confidence, creativity, and problem-solving abilities. Beyond
          technical skills, the program helps teens understand how technology
          shapes the world, prepares them for future careers, and equips them
          with tools to become creators—not just consumers—of technology.
        </p>
      </div>
      <div className="w-full md:w-1/2 ">
        <div className="">
          <div className="text-[#2A7445] text-[15px] md:text-base font-semibold uppercase font-graphik">
            What this program is and why it matters.
          </div>

          <div className="relative mt-20 md:mt-[97px] ">
            <div className="absolute rounded-[40px] border-[1.5px] border-[#E60303] h-[240px] md:h-[354px] w-[300px] md:w-[374px] z-10"></div>
            <div className="absolute -top-[39px] left-[31px] z-20">
              <Image
                src="/assets/impact-tech/about-program.png"
                alt="Program Image"
                width={408}
                height={376}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTheProgram;
