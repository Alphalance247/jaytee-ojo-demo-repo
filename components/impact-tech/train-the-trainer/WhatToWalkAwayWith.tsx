import Image from "next/image";
import React from "react";
import GainCard from "../volunteer/GainCard";
import { MdOutlineHeadset } from "react-icons/md";
import { IoMdCode } from "react-icons/io";
const gains = [
  {
    icon: (
      <Image
        src={"/assets/impact-tech/train-the-trainer/badge.svg"}
        alt="badge icon"
        width={36}
        height={36}
        className="h-6 w-6 md:h-9 md:w-9 "
      />
    ),
    title: " Leadership Experience",
    description:
      "Develop your skills as an educational leader and become a recognized expert in digital literacy instruction.",
  },
  {
    icon: <IoMdCode className="md:h-9 md:w-9 h-6 w-6 text-white " />,
    title: " Technical Confidence",
    description:
      "Master core coding concepts, computational thinking, and modern teaching tools to deliver impactful lessons.",
  },
  {
    icon: (
      <Image
        src={"/assets/impact-tech/train-the-trainer/television.svg"}
        alt="badge icon"
        width={36}
        height={36}
        className="h-6 w-6 md:h-9 md:w-9"
      />
    ),
    title: "Classroom Delivery Skills",
    description:
      "Learn proven pedagogical methods, classroom management techniques, and engagement strategies for diverse learners.",
  },
  {
    icon: <MdOutlineHeadset className="md:h-9 md:w-9 h-6 w-6 text-white" />,
    title: "Certification & Ongoing Support",
    description:
      "Receive official certification and access to a community of trainers, resources, and continuous professional development.",
  },
];
const WhatToWalkAwayWith = () => {
  return (
    <div className="bg-impact-radical bg-cover bg-no-repeat h-full w-full grid ">
      <div className="relative">
        <img
          src="/assets/impact-tech/volunteer/curveShape1.svg"
          alt="left curve shape"
          className="absolute right-0 top-28"
        />

        <Image
          src={"/assets/impact-tech/volunteer/curveShape2.svg"}
          width={319}
          height={319}
          alt="left curve shape"
          className="absolute top-0 left-0 h-auto w-auto"
        />
      </div>
      <div className="">
        <div className="font-inter text-center  text-white grid items-center justify-center pt-10 md:pt-[91px] px-6 md:px0">
          <h5 className="text-[32px] md:text-[48px] leading-[80px] font-bold">
            What You’ll Gain
          </h5>
          <p className="text-lg md:text-xl font-normal max-w-[600px] leading-[28px]">
            Volunteering with us gives back, to your career, your purpose, and
            your network.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1081px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[23px] md:px-0 px-6 h-auto md:h-full pt-10 md:pt-[59px] pb-10 md:pb-[91px]  ">
        {gains.map((gain, index) => (
          <GainCard
            key={index}
            icon={gain.icon}
            title={gain.title}
            desc={gain.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WhatToWalkAwayWith;
