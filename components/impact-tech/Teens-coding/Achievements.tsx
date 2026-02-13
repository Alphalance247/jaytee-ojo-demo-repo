import Image from "next/image";
import React from "react";
import AchievementCard from "./AchievementCard";
import { FaRocket } from "react-icons/fa6";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const achievements = [
  {
    name: "Certificate of Completion",
    icon: (
      <Image
        src="/assets/impact-tech/certificate.svg"
        alt="Certificate Icon"
        width={32}
        height={32}
        className="text-white px-[3.11px] py-[3.5px]"
      />
    ),
    description:
      "Earn a recognized certificate after successfully finishing the program.",
  },
  {
    name: "Personal Project Portfolio",
    icon: (
      <Image
        src="/assets/impact-tech/portfolio.svg"
        alt="Portfolio Icon"
        className="text-white"
        width={32.09}
        height={32.09}
      />
    ),
    description: "Build and showcase real projects created during the program.",
  },
  {
    name: "Improved Tech Confidence",
    icon: <IoCheckmarkCircleSharp className="text-white h-8 w-8 " />,
    description:
      "Develop confidence using digital tools and solving problems independently.",
  },
  {
    name: "Career Readiness Skills",
    icon: (
      <Image
        src="/assets/impact-tech/analysis.svg"
        alt="Career Readiness Icon"
        className="text-white rounded-full"
        width={26}
        height={26}
      />
    ),
    description:
      "Gain foundational skills needed for future tech education and careers.",
  },
  {
    name: "Access to Advanced Opportunities",
    icon: <FaRocket className="text-white  h-9 w-9 px-[3px] py-[7px]  " />,
    description:
      "Qualify for advanced programs, internships, and tech challenges.",
  },
];
const Achievements = () => {
  return (
    <div className="min-h-[753px] flex justify-center items-center px-6 md:px-[101px]">
      <div className=" h-full flex justify-center items-center ">
        <div className="flex md:flex-row flex-col gap-[46px] md:gap-[92px] items-start my-10 md:my-[91px]">
          <div className="w-full md:w-1/3 h-[571px] md:flex justify-center hidden">
            <Image
              src="/assets/impact-tech/lady.png"
              alt="A lady image"
              className="w-full object-cover  hidden md:flex mb-0 md:-mb-[66px]"
              width={425}
              height={571}
            />
          </div>
          <div className="w-full md:w-2/3  ">
            <div className="mb-[53px] w-full md:w-[589px] mx-0 md:mx-[67px] bg-white flex md:justify-center flex-col md:items-center items-start justify-start font-graphik">
              <h4 className="text-[32px] md:text-[48px] font-bold text-[#161C2D] ">
                What You’ll Achieve
              </h4>
              <p className="text-[#161C2D] text-[19px]">
                The results students gain by completing this program.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <AchievementCard
                  key={index}
                  title={achievement.name}
                  icon={achievement.icon}
                  description={achievement.description}
                />
              ))}
            </div>
          </div>
        </div>{" "}
      </div>
      {/* <div className="flex md:flex-row flex-col gap-[46px] md:gap-[92px] items-start md:min-h-full bg-green-300">
        <div className="w-full md:w-1/3 h-full ">
          <Image
            src="/assets/impact-tech/lady.png"
            alt="A lady image"
            className="w-full object-cover md:w-[425px] hidden md:flex"
            width={425}
            height={571}
          />
        </div>
        <div className="w-full  md:w-2/3 ">
          <div className="mb-[53px] w-[589px] mx-[67px] bg-white flex justify-center flex-col items-center">
            <h4 className="text-[32px] md:text-[48px] font-bold text-[#161C2D] font-graphik">
              What You’ll Achieve
            </h4>
            <p className="text-[#161C2D] text-[19px]">
              The results students gain by completing this program.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-yellow-500 ">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={index}
                title={achievement.name}
                icon={achievement.icon}
                description={achievement.description}
              />
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Achievements;
