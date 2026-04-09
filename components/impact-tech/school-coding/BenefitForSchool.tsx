import React from "react";
import AchievementCard from "../Teens-coding/AchievementCard";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import Image from "next/image";
import Button from "../Teens-coding/Button";
const achievements = [
  {
    name: "Prepares students for future careers",
    icon: (
      <Image
        src="/assets/impact-tech/portfolio.svg"
        alt="Portfolio Icon"
        className="text-white"
        width={32.09}
        height={32.09}
      />
    ),
  },
  {
    name: "Enhances school reputation",
    icon: (
      <Image
        src="/assets/impact-tech/certificate.svg"
        alt="Certificate Icon"
        width={32}
        height={32}
        className="text-white px-[3.11px] py-[3.5px]"
      />
    ),
  },
  {
    name: "Adds value to your academic offering",
    icon: (
      <Image
        src="/assets/impact-tech/analysis.svg"
        alt="Career Readiness Icon"
        className="text-white rounded-full"
        width={26}
        height={26}
      />
    ),
  },
  {
    name: "Improves student engagement",
    icon: <IoCheckmarkCircleSharp className="text-white h-8 w-8 " />,
  },
];
const BenefitForSchool = () => {
  return (
    <div className=" h-full md:min-h-[753px] flex justify-center flex-col items-center px-6 md:px-[101px] pt-28 md:pt-0 md:pb-0 pb-10">
      <div className=" h-full flex justify-center">
        <div className="flex md:flex-row flex-col gap-[46px] md:gap-[145px] items-center ">
          <div className="w-full md:w-1/2 h-[456px] md:flex justify-center hidden  ">
            <div className="shadow-[0px_31px_34px_0px_#00000018] relative w-[425px] h-[456px] rounded-[23px]">
              <Image
                src="/assets/impact-tech/school-coding/bg.jpg"
                alt="bg"
                className="w-full md:w-[425px] md:h-[456px] object-cover  hidden md:flex rounded-[23px] "
                width={425}
                height={456}
              />
              <div className="absolute inset-0 rounded-[23px] bg-[#2A74454D]  w-[425px] h-[456px]"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[378px] ">
            <div className="mb-[53px] w-full md:w-[589px]  flex md:justify-center flex-col md:items-center items-start justify-start font-graphik">
              <h4 className="text-[32px] md:text-[48px] font-bold text-[#161C2D] ">
                Benefits for Schools
              </h4>
              <p className="text-[#161C2D] text-[19px]">
                The results Schools gain by partnering with this program.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-9 gap-x-7 ">
              {achievements.map((achievement, index) => (
                <AchievementCard
                  key={index}
                  title={achievement.name}
                  icon={achievement.icon}
                  titleClass="w-full md:w-[253px] "
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full px-6 md:px-[101px] md:pt-0 pt-32 ">
        <div className="w-full md:w-1/2 md:flex hidden"></div>
        <div className="w-full md:w-1/2 flex justify-center ">
          <Button
            url="/impact-tech/partners#start-partnership"
            text="Partner With Us"
            className="text-white bg-[#E60303] w-full md:w-[187px]"
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitForSchool;
