import Image from "next/image";
import React from "react";
import { LuBriefcaseBusiness } from "react-icons/lu";
import WhoCard from "./WhoCard";
import { TbBriefcase, TbBriefcaseFilled } from "react-icons/tb";
const leftCol = [
  {
    icon: (
      <TbBriefcaseFilled className="h-[26] w-[26] flex items-center justify-center" />
    ),

    text: "Students and graduates",
    className: "rotate-[8.23deg]",
  },
  {
    icon: <TbBriefcaseFilled />,
    text: "Tech professionals",
    className: "rotate-[0deg]",
  },
  {
    icon: <TbBriefcaseFilled />,
    text: "Educators and trainers",
    className: "-rotate-[7.81deg]",
  },
];
const rightCol = [
  {
    icon: (
      <TbBriefcaseFilled className="h-[26] w-[26] flex items-center justify-center" />
    ),
    text: "Career switchers",
    className: "-rotate-[8.23deg]",
    textClass: "-8.",
  },
  {
    icon: <TbBriefcaseFilled />,
    text: "Corporate volunteers",
    className: "rotate-[0deg]",
    textClass: "-8.",
  },
  {
    icon: <TbBriefcaseFilled />,
    text: "Alumni of our programs",
    className: "rotate-[7.81deg]",
    textClass: "-8.23deg",
  },
];
const WhoCanVolunteer = () => {
  return (
    <div className="mx-auto max-w-[1440px] h-auto md:h-[] ">
      <div className="font-inter text-center flex flex-col items-center justify-center pt-10 md:pt-[91px] md:px-0 px-6 md:pb-0 pb-10">
        <div className="text-[32px] md:text-[48px] leading-[90%%] md:leading-[80px] font-bold  text-[#061C3D]">
          Who Can Volunteer?
        </div>
        <p className="w-full text-base md:text-lg font-normal text-[#42526B] mt-4 md:max-w-[536px] leading-[26px]">
          We welcome people from diverse backgrounds with a passion for
          education and impact.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-10  items-center ">
        <div className="w-full md:w-1/3 flex flex-col gap-10 md:mr-[65px] mr-0 items-end ">
          {leftCol.map((col, index) => (
            <WhoCard
              key={index}
              className={`flex items-center justify-center gap-2 px-6 ${col.className}`}
              text={col.text}
              icon={col.icon}
              textClass=""
            />
          ))}
        </div>
        <div className="w-full md:w-1/3">
          <div>
            <Image
              src={"/assets/impact-tech/volunteer/lady-on-glasses.png"}
              width={475}
              height={498}
              className="w-full h-full"
              alt="lady on glasses"
            />
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col gap-10  md:mr-[65px] mr-0  ">
          {rightCol.map((col, index) => (
            <WhoCard
              key={index}
              className={`flex flex-row-reverse  items-center justify-center gap-2 px-6 ${col.className}`}
              text={col.text}
              icon={col.icon}
              textClass={col.textClass}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoCanVolunteer;
