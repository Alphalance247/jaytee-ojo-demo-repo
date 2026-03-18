import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const AnnoucementCard = ({
  imageUrl,
  title,
  content,
  date,
  btnText,
}: {
  title: string;
  content: string;
  date: string;
  btnText: string;
  imageUrl: string;
}) => {
  return (
    <div className="bg-[#FFFFFF] drop-shadow-[#0000000A] w-full md:max-w-[1256px] md:h-[354px] flex md:flex-row flex-col items-center gap-10 md:gap-[88px] rounded-[32px] p-6 md:p-8">
      <div className="relative w-full md:w-[502px] h-full md:md:h-[290px] rounded-[16px] overflow-hidden">
        <img
          src={imageUrl}
          className="md:w-full h-full object-cover "
          alt="announcement image"
        />
        <div className="absolute inset-0 bg-[#2A744566]"></div>
      </div>
      <div className="flex flex-col gap-6 w-full md:max-w-[594px] md:px-0 px-6">
        <div className="flex items-center gap-[5px] ">
          <Image
            src={"/assets/impact-tech/blogs/calendar.svg"}
            width={24}
            height={24}
            alt="calendar icon"
          />
          <p className="text-[#061C3D] text-base font-inter font-normal">
            {date}
          </p>
        </div>
        <div className="font-inter pr-4 md:pr-[25px] w-full md:max-w-[524px]">
          <h6 className="text-lg md:text-xl font-semibold text-[#061C3D]">
            {title}
          </h6>
          <p className="text-[#42526B] text-base font-normal pt-3 ">
            {content}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <button className="bg-[#E60303] flex items-center justify-center h-12 w-[185px] rounded-[7px] text-[#FFFFFF]">
            {btnText}
            <IoIosArrowRoundForward className="text-white h-6 w-6 pl-1" />
          </button>
          <div className="border-l border-[#CDD2D8] w-8 h-8"></div>
        </div>
      </div>
    </div>
  );
};

export default AnnoucementCard;
