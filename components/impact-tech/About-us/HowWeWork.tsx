import React from "react";
import WorkCard from "./WorkCard";
import Image from "next/image";
import Button from "../Teens-coding/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
const works = [
  {
    icon: "/assets/impact-tech/communityIcon.svg",
    title: "Hands-on, project-based learning",
    desc: "Learners build real projects while learning, making concepts easier to understand and apply in real life.",
    width: 32,
    height: 23.33,
    class: "w-full md:max-w-[300px]",
  },
  {
    icon: "/assets/impact-tech/partnership.svg",
    title: "Community and school partnerships",
    desc: "We collaborate with schools, communities, and organizations to expand access to digital skills education.",
    width: 26.68,
    height: 24,
    class: "w-full md:max-w-[337px]",
  },
  {
    icon: "/assets/impact-tech/solar_scale-bold.svg",
    title: "Focus on real-world digital skills",
    desc: "Our programs are designed to scale across regions while maintaining quality and impact.",
    width: 26.67,
    height: 26.67,
    class: "w-full md:max-w-[300px]",
  },
  {
    icon: "/assets/impact-tech/solar_scale-bold.svg",
    title: "Train-the-trainer model for scale",
    desc: "We equip educators and leaders to train others, multiplying impact across schools and communities.",
    width: 26.67,
    height: 26.67,
    class: "w-full md:max-w-[300px]",
  },
];
const HowWeWork = () => {
  return (
    <div className="bg-[#68D5851A] h-full md:h-[827px] ">
      <div className=" pt-10 md:pt-20  mx-auto w-full md:max-w-[991px] md:px-0 px-6">
        <h4 className="text-[#061C3D] text-[32px] md:text-[48px] font-grostek font-bold text-center">
          How We Work
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] mt-[60px] ">
          {works.map((work, index) => (
            <WorkCard
              key={index}
              className={work.class}
              icon={
                <Image
                  src={work.icon}
                  alt="icon"
                  width={work.width}
                  height={work.height}
                />
              }
              title={work.title}
              desc={work.desc}
            />
          ))}
        </div>
      </div>
      <div className=" h-auto md:h-[128px] mt-[60px] md:mt-[112px] pb-9 md:pb-[71px]">
        <div className="flex md:flex-row flex-col justify-between items-center gap-8 md:gap-[252px] w-full md:w-[1057px] mx-auto  md:px-0 px-6  ">
          <div className="font-graphik   ">
            <div className="text-[#161C2D] text-24 md:text-[32px] font-bold">
              Ready to empower the next generation?
            </div>
            <div className=" font-normal text-base md:text-[19px] pt-3 md:pt-5 text-[#161C2D] ">
              Join us in equipping young people with the digital skills they
              need to succeed in today’s world.
            </div>
          </div>
          <div>
            <Button
              text="get Started"
              children={
                <IoIosArrowRoundForward className="text-white h-6 w-6 pl-1" />
              }
              className="w-[200px] bg-[#E60303] text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
