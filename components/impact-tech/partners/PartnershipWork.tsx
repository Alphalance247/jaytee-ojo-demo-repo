import Image from "next/image";
import React from "react";
import { IoIosNotifications } from "react-icons/io";
import TopImage from "./TopImage";
const lists = [
  {
    title: "Submit a Partnership Request",
    desc: "Tell us about your organization and how you’d like to collaborate",
  },
  {
    title: "We Review and Connect",
    desc: "Our team will reach out to discuss goals and opportunities.",
  },
  {
    title: "Co-create a Partnership Plan",
    desc: "We design a partnership structure that aligns with your objectives.",
  },
  {
    title: "Launch and Deliver Impact",
    desc: "We implement the program and track outcomes together.",
  },
];
const PartnershipWork = () => {
  return (
    <div className="h-fit  ">
      <div className="mx-auto w-full md:max-w-[1437px] mt-10 md:mt-[101px]  md:pb-[111px]">
        <div className=" h-fit md:h-[102px] font-inter md:px-0 px-6">
          <h4 className="text-[28px] md:text-[48px] font-bold text-[#061C3D] text-center">
            How Partnership Works
          </h4>
          <p className="text-[#42526B] text-base md:text-lg text-center font-normal">
            A simple, collaborative process to create meaningful impact.
          </p>
        </div>
        <div className="flex md:flex-row flex-col items-center relative gap-20  md:gap-[185px] mt-10 md:mt-[135px] pb-20 md:pb-[111px] md:px-0 px-6">
          <div className="w-full md:w-1/2 items-center h-[571px] md:h-full ">
            <div className="bg-[#2A7445] opacity-[9.86%] rounded-[10px] w-full md:w-[397px] h-[547px] absolute z-0 top-14 md:top-0 left-0 md:left-[280px]"></div>
            <div className="absolute z-20 top-0 md:-top-[68px] h-[571px] w-full md:w-[425px] left-0 md:left-[211px]">
              <Image
                src="/assets/impact-tech/partners/BitmapBg.png"
                alt="Handshake"
                fill
                className="object-cover  w-full h-full  "
              />
            </div>
            <div className="absolute left-0 md:left-[152px] bottom-[818px]  md:bottom-[264px] z-20">
              <div
                className=" bg-[#161C2D] w-[351px] h-[111px] rounded-[10px] flex items-center gap-4 px-5"
                style={{ boxShadow: "0px 62px 64px -10px #0117301E" }}
              >
                <div className="h-[39px] w-[39px] rounded-full bg-[#68D585] flex items-center justify-center">
                  <IoIosNotifications className="h-6 w-6" />
                </div>{" "}
                <div>
                  <p className="text-white/70 text-sm">
                    You are shaping the future
                  </p>
                  <p className="text-white font-bold text-xl">
                    Congratulations!!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 ">
            <div className="gap-[42px] flex flex-col">
              {lists.map((list, index) => (
                <div className="flex gap-[22.57px] font-graphik h-[100px] ">
                  <div className="bg-[#2A7445] h-[43px] w-[43.43px] rounded-full flex justify-center items-center flex-shrink-0">
                    <p className="text-[#FFFFFF] font-graphik font-bold text-[17px]">
                      {index + 1}
                    </p>
                  </div>
                  <div className="text-[#161C2D]  w-full  md:max-w-[408px]">
                    <div className=" text-lg md:text-[21px] font-bold">
                      {list.title}
                    </div>
                    <div className="text-[15px] md:text-[17px] pt-2.5">
                      {list.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default PartnershipWork;
