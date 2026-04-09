import React from "react";

const WorkCard = ({
  icon,
  title,
  desc,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  className: string;
}) => {
  return (
    <>
      <div className="flex gap-[30px] ">
        <div className="flex items-center h-[60px] md:h-[79px] w-[60px] md:w-[79px] justify-center rounded-[15px] bg-[#2A74458A]/10 flex-shrink-0">
          {icon}
        </div>
        <div className="flex flex-col font-graphik text-[#161C2D] gap-y-[15px] ">
          <div className=" text-lg md:text-[21px] font-bold ">{title}</div>
          <div className={`text-base md:text-[17px] font-normal  ${className}`}>
            {desc}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
