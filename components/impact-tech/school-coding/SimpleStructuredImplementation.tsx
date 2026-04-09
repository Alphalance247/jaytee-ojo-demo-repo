import React from "react";
import GainCard from "../volunteer/GainCard";
import Image from "next/image";
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
const SimpleStructuredImplementation = () => {
  return (
    <div className="relative h-[1317px]">
      <div className="mx-auto w-full md:max-w-[1110px] ">
        <div className="flex justify-center items-center relative">
          <img
            src="/assets/impact-tech/school-coding/group1.png"
            alt="students learning"
            className="h-[625px] w-full rounded-[20px] object-cover "
          />
          <div className="absolute inset-0 rounded-[20px] bg-[#2A744533] w-full "></div>
        </div>
      </div>
      <div className="bg-[url(/assets/impact-tech/school-coding/BG3.png)] bg-no-repeat bg-cover h-[1100px] md:h-[875px] absolute inset-x-0 -bottom-16 md:bottom-3 ">
        <div className="mx-auto max-w-[1081px] pb-10 md:pb-[91px] flex flex-col justify-center items-center h-full ">
          <div className="pt-10">
            <h4 className="text-2xl md:text-[58px] font-bold font-graphik text-white md:pl-0 pl-6">
              Simple and Structured Implementation
            </h4>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[23px] md:px-0 px-6 mt-10 md:mt-[86px]">
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
      </div>
    </div>
  );
};

export default SimpleStructuredImplementation;
