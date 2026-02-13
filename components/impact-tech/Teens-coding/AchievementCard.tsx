import React from "react";

const AchievementCard = ({
  title,
  icon,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
}) => {
  return (
    <div className="flex gap-[22.2px]">
      <div className="h-10 w-10 bg-[#2A7445] rounded-full flex items-center justify-center shrink-0">
        <div className=" flex items-center justify-center "> {icon}</div>
      </div>
      <div className="flex flex-col gap-[10px] font-graphik">
        <div className="font-bold text-lg md:text-[21px] text-[#161C2D">
          {title}
        </div>
        <div className=" text-base md:text-[17px] text-[#161C2D">
          {description}
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
