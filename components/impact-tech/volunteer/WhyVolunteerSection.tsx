import React from "react";
import FeaturedCard from "./FeaturedCard";
import { LuCalendarDays } from "react-icons/lu";
import Image from "next/image";

const volunteers = [
  {
    title: "Real Impact",
    description:
      "Help young people gain real-world tech skills that open doors to education, careers, and economic independence.",
    icon: (
      <Image
        src={"/assets/impact-tech/volunteer/Vector.svg"}
        width={32}
        height={32}
        alt="icon"
      />
    ),
  },
  {
    title: "Meaningful Engagement",
    description:
      "Volunteer in a way that’s hands-on, structured, and aligned with real learning outcomes.",
    icon: (
      <Image
        src={
          "/assets/impact-tech/volunteer/streamline_collaborations-idea-remix.svg"
        }
        width={32}
        height={32}
        alt="icon"
      />
    ),
  },
  {
    title: "Flexible Commitment",
    description:
      "Choose roles and time commitments that fit your schedule, remote or in-person.",
    icon: <LuCalendarDays className="text-white w-8 h-8" />,
  },
  {
    title: "Professional Growth",
    description:
      "Develop leadership, teaching, and mentoring skills while strengthening your professional profile.",
    icon: (
      <Image
        src={"/assets/impact-tech/volunteer/personal-growth.svg"}
        width={32}
        height={32}
        alt="icon"
      />
    ),
  },
];
const WhyVolunteerSection = () => {
  return (
    <div className="w-full md:max-w-[1441px] mx-auto md:px-0 px-6 relative">
      <div className=" hidden md:absolute -left-32 top-12">
        <img
          src={"/assets/impact-tech/volunteer/Shapes.png"}
          className=""
          alt="line shape"
        />
      </div>
      <div className=" text-center flex flex-col justify-center items-center pt-10 md:pt-[91px]">
        <div>
          {" "}
          <h2 className="text-[28px] md:text-[48px] font-semibold font-grostek text-[#061C3D]">
            {" "}
            Why Volunteer With Us?
          </h2>
        </div>
        <div>
          <p className="pt-6 text-base md:text-lg font-graphik">
            Here’s what makes volunteering with Impact Tech meaningful.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-6 pt-8 md:pt-[91px] pb-10 md:pb-[117px]">
        {/* <div className="w-full md:w-1/4"> */}
        {volunteers.map((volunteer, index) => (
          <div className=" w-full md:w-1/4">
            <FeaturedCard
              key={index}
              icon={volunteer.icon}
              title={volunteer.title}
              desc={volunteer.description}
            />
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default WhyVolunteerSection;
