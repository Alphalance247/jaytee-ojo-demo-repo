import React from "react";
import ServiceCard from "./ServiceCard";
import Image from "next/image";
import { RiGlobeFill } from "react-icons/ri";
import { MdVerifiedUser } from "react-icons/md";
import Button from "../Teens-coding/Button";

const services = [
  {
    title: "Proven Impact",
    text: "We have successfully delivered coding and digital skills programs across schools, communities, and government institutions.",
    icon: (
      <Image
        src={"/assets/impact-tech/partners/Vector.svg"}
        width={21.33}
        height={21.34}
        alt="icon"
      />
    ),
    className: " w-[312px] h-[254px]",
  },
  {
    title: "Scalable Programs",
    text: "Our programs are designed to grow across regions while maintaining quality and consistency.",
    icon: (
      <Image
        src={"/assets/impact-tech/partners/solar_layers-bold.svg"}
        width={32}
        height={32}
        alt="icon"
      />
    ),
    className: "w-[312px] h-[234px]",
  },
  {
    title: "Community Reach",
    text: "We work directly with schools, youth groups, and underserved communities to ensure inclusive access to technology education.",
    icon: <RiGlobeFill className="w-8 h-8 items-center" />,
    className: "",
  },
  {
    title: "Trusted Delivery",
    text: "We collaborate with educators, institutions, and partners to deliver reliable and effective learning experiences.",
    icon: <MdVerifiedUser className="w-8 h-8 items-center" />,
    className: "",
  },
];
const leftColumnServices = services.slice(0, 2);
const rightColumnServices = services.slice(2, 4);

const WhyPartner = () => {
  return (
    <div
      className=" h-fit md:h-[782px] "
      style={{
        background: ` linear-gradient(90deg, #FFFFFF 0%, #F5F6F7 40.63%, rgba(104, 213, 133, 0.05) 100%)`,
      }}
    >
      <div className="px-6 md:px-[109.5px] md:py-0 py-10 flex flex-col md:flex-row items-center justify-center h-full">
        <div className="w-full md:w-1/2">
          <div className="text-[#061C3D] w-full  md:max-w-[474px]">
            <h2 className=" md:text-[48px] text-[32px] font-bold font-grostek leading-[100%]">
              Why Partner With Impact Tech
            </h2>
            <p className="font-inter text-base md:text-lg font-normal pt-6 ">
              We deliver real impact through practical, community-focused
              technology education.
            </p>
            <Button
              text="Get Started"
              className="w-full md:w-[156px] text-white bg-[#E60303] mt-8 md:mt-12"
              children=""
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex md:flex-row flex-col gap-6 md:mt-0 mt-6">
          <div className="w-1/2">
            <div className="flex flex-col gap-6">
              {leftColumnServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  text={service.text}
                  title={service.title}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
          <div className="w-1/2 mt-0 md:mt-12">
            <div className="flex flex-col gap-6">
              {rightColumnServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  text={service.text}
                  title={service.title}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPartner;
