import React from "react";
import Button from "./Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import SkillsPill from "./SkillsPill";
import { HiCodeBracket } from "react-icons/hi2";
import { TbBriefcaseFilled } from "react-icons/tb";
const programingSkills = [
  {
    icon: <HiCodeBracket className="h-6 w-6 text-white" />,
    text: "programming fundamentals",
  },
  {
    icon: <HiCodeBracket className="h-6 w-6 text-white" />,
    text: "Web Development",
  },
];
const creativeSkills = [
  {
    icon: <TbBriefcaseFilled className="h-6 w-6 text-white" />,
    text: "career awareness",
  },
  {
    icon: <TbBriefcaseFilled className="h-6 w-6 text-white" />,
    text: "digital literacy",
  },
  {
    icon: <TbBriefcaseFilled className="h-6 w-6 text-white" />,
    text: "creative thinking",
  },
];
const lifeSkills = [
  {
    icon: <TbBriefcaseFilled className="h-6 w-6 text-white" />,
    text: "collaboration",
  },
  {
    icon: <TbBriefcaseFilled className="h-6 w-6 text-white" />,
    text: "online safety",
  },
];
const SkillsGain = () => {
  return (
    <div className="rounded-[16px] md:mt-0 mt-72 flex items-start md:items-center  bg-[linear-gradient(252.53deg,rgba(42,116,69,0.5)_-0.87%,rgba(104,213,133,0.5)_-0.87%,rgba(40,108,65,0.5)_25.15%,rgba(42,116,69,0.425)_97.92%)] bg-[#201D1F] shadow-[0px_4px_10px_0px_#0000004D,_0px_1px_0px_0px_#FFFFFF0F_inset] h-fit md:h-[509px]">
      <div className="flex md:flex-row flex-col w-full items-center">
        <div className="w-full md:w-1/3 pl-6 md:pl-[101px] ">
          <h3 className="text-[32px] md:text-[48px]  leading-[48px]  text-white font-bold md:pt-0 pt-10 font-graphik">
            {" "}
            Skills You’ll <br /> Gain
          </h3>
          <p className="py-[18px] text-[#B9BABF] font-inter">
            Practical, real-world skills for the digital age.
          </p>
          <Button
            text="apply now"
            children={
              <IoIosArrowRoundForward className="text-white h-6 w-6 pl-1" />
            }
            className="text-white w-[120px] md:w-[151px] h-[30px] md:h-[38px] bg-[linear-gradient(0deg,rgba(246,75,75,0.58)_0%,rgba(246,75,75,0.58)_100%),linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_100%)]"
          />
        </div>
        <div className="w-full md:w-2/3 md:mt-0 mt-10 md:pb-0 pb-10">
          <div className="flex items-center justify-start md:justify-center gap-4 py-4 md:px-0 px-6  ">
            <div className="flex flex-col gap-5 justify-start md:justify-center items-start md:items-center">
              <div className="flex md:flex-row flex-col gap-[31px]">
                {programingSkills.map((skill, index) => (
                  <SkillsPill
                    key={index}
                    className="w-fit"
                    icon={skill.icon}
                    text={skill.text}
                  />
                ))}
              </div>
              <div className="flex md:flex-row flex-col gap-[31px]">
                {creativeSkills.map((skill, index) => (
                  <SkillsPill
                    key={index}
                    className=""
                    icon={skill.icon}
                    text={skill.text}
                  />
                ))}
              </div>
              <div className="flex md:flex-row flex-col gap-[31px]">
                {lifeSkills.map((skill, index) => (
                  <SkillsPill
                    key={index}
                    className=""
                    icon={skill.icon}
                    text={skill.text}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsGain;
