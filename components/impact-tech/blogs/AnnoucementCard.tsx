import Image from "next/image";
import React from "react";

const AnnoucementCard = ({
  imageUrl,
  title,
  content,
  date,
}: {
  imageUrl: string;
  title: string;
  content: string;
  date: string;
}) => {
  return (
    <div className="bg-[#FFFFFF] drop-shadow-[#0000000A] w-full md:w-[1256px] flex md:flex-row flex-col gap-10 md:gap-[88px] rounded-[32px] p-8">
      <div>
        <Image
          src={imageUrl}
          width={502}
          height={290}
          alt="announcement image"
          className="rounded-[16px]"
        />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-[5px]">
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
        <div className="font-inter">
          <h6 className="text-lg md:text-xl font-semibold text-[#061C3D]">
            {title}
          </h6>
          <p className="text-[#42526B] text-base font-normal">{content}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AnnoucementCard;
