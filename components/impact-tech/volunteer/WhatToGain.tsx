import Image from "next/image";
import React from "react";
import GainCard from "./GainCard";
const gains = [
  {
    icon: (
      <Image
        src={"/assets/impact-tech/volunteer/material-symbols_badge.svg"}
        alt="badge icon"
        width={36}
        height={36}
      />
    ),
    title: " Leadership Experience",
    description:
      "Build leadership and facilitation skills in real-world learning environments.",
  },
  {
    icon: (
      <Image
        src={"/assets/impact-tech/volunteer/iconoir_network-solid.png"}
        alt="badge icon"
        width={36}
        height={36}
      />
    ),
    title: "Network Expansion",
    description:
      "Connect with educators, professionals, partners, and changemakers.",
  },
  {
    icon: (
      <Image
        src={"/assets/impact-tech/volunteer/ri_award-fill.svg"}
        alt="badge icon"
        width={36}
        height={36}
      />
    ),
    title: "Recognition & References",
    description:
      "Receive certificates, recommendations, and public recognition for your contribution.",
  },
  {
    icon: (
      <Image
        src={"/assets/impact-tech/volunteer/vaadin_hands-up.png"}
        alt="badge icon"
        width={36}
        height={36}
      />
    ),
    title: "Personal Fulfillment",
    description:
      "Make a meaningful difference in the lives of young people and communities.",
  },
];
const WhatToGain = () => {
  return (
    <div className="bg-[url('/assets/impact-tech/volunteer/Rectangle.png')] bg-cover bg-no-repeat h-full w-full grid ">
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

export default WhatToGain;
