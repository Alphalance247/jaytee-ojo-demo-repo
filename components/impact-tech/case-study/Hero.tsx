import Image from "next/image";
import React from "react";

const Hero = ({
  title,
  desc,
  imgUrl,
  children,
}: {
  title: string;
  desc: string;
  imgUrl: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex md:flex-row flex-col gap-y-6 items-center h-full md:h-[873px] md:px-0 px-6 md:pt-0 pt-6">
      <div className="w-full md:w-1/2">
        <div className="pl-0 md:pl-[100px] w-full md:w-[648px] flex flex-col gap-8 md:gap-[44px]">
          <div>
            <h1 className="font-inter font-bold text-[36px] md:text-[64px] leading-normal md:leading-[80px] text-[#061C3D]">
              {title}
            </h1>
          </div>
          <div className="w-full md:w-[648px]">
            <p className="font-inter font-normal text-[#061C3D] text-lg md:text-xl">
              {desc}
            </p>
          </div>
          <div className="flex flex-col justify-center gap-[15px] rounded-[40px] h-[176.83px]  shadow-[0px_1.29px_3.22px_0px_#0000004D] bg-[#201D1F] bg-impact-gradient">
            {children}
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 hidden md:flex justify-normal md:justify-end ">
        <div className="relative">
          <img
            src={imgUrl}
            alt="csae study image"
            className="w-full h-full object-cover md:rounded-tr-none md:rounded-br-none rounded-[32px] "
          />
          <div className="absolute inset-0 bg-[#2A744566] h-full w-full md:rounded-tr-none md:rounded-br-none rounded-[32px] "></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
