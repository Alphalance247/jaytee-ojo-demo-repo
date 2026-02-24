import Image from "next/image";
import React from "react";

const ImpactTechCard = ({
  imageUrl,
  title,
  time,
  date,
}: {
  imageUrl: string;
  title: string;
  time: string;
  date: string;
}) => {
  return (
    <div className="bg-[#FFFFFF] border border-[#E6E8EC] rounded-[16px] h-fit md:pb-0 pb-4 md:h-[524px] w-full md:w-[396px]">
      <div className="flex flex-col gap-8">
        <Image src={imageUrl} width={396} height={312} alt="Blog image" />
        <div className="pl-4 md:pl-8">
          <p className="text-[#000000] text-sm font-normal">{time}</p>
          <p className="text-[#2A2A2A] text-lg font-medium">{title}</p>
        </div>
        <div className="flex gap-[5px] items-center pl-4 md:pl-8">
          <Image
            src={"/assets/impact-tech/blogs/calendar.svg"}
            width={24}
            height={24}
            alt="calendar icon"
          />
          <p className="text-[#061C3D] text-sm font-normal">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default ImpactTechCard;
