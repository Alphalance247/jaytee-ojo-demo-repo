import React from "react";

const FeaturedCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: String;
  desc: String;
}) => {
  return (
    <div className="h-[234px] w-full bg-[#2A7445] rounded-[20px] flex flex-col gap-4  border-[2px] border-[#243752] pl-6 py-6 pr-1">
      <div className="bg-[#68D58566] h-14 w-14 rounded-[16px] flex justify-center items-center ">
        {icon}
      </div>
      <div className="text-[#FFFFFF] font-grostek text-lg">{title}</div>
      <div className="text-[#FFFFFF] font-graphik text-sm w-[264px]">
        {desc}
      </div>
    </div>
  );
};

export default FeaturedCard;
