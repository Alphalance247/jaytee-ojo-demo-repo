import React from "react";

const ApplicationCard = ({
  icon,
  heading,
  content,
}: {
  icon: React.ReactNode;
  heading: string;
  content: string;
}) => {
  return (
    <div className="flex justify-center items-center h-[246px] px-[33px] w-[454px] rounded-[16px] bg-[linear-gradient(135deg,_#ECFDF5_50%,_#FFFFFF_100%)] border border-[#A4F4CF]">
      <div className="grid gap-6">
        <div className="flex justify-center items-center h-[64px] w-[64px] rounded-[16px] bg-[#007A55]">
          <div className="h-8 w-8 text-white"> {icon}</div>
        </div>
        <div>
          <div className="text-[#101828] font-inter font-medium text-lg md:text-xl">
            {heading}
          </div>
          <div className="mt-3 text-[#4A5565] text-sm md:text-base leading-[26px] font-inter font-normal">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
