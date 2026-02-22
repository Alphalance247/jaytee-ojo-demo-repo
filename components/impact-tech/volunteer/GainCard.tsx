import React from "react";

const GainCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => {
  return (
    <div className="bg-white w-full md:w-[529px] border border-[#E6E8EC80] rounded-[20px] h-[192px] md:h-[172px] flex gap-4 p-6 md:p-10">
      <div className="bg-[#2A7445] h-[76px] w-[76px] rounded-[10px] flex justify-center items-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex flex-col gap-3 font-inter w-full md:max-w-[341px]">
        <div className=" text-[#061C3D] font-medium text-base md:text-[24px]">
          {title}
        </div>
        <div className="text-[#42526B] font-normal text-sm md:text-base">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default GainCard;
