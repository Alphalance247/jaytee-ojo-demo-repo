import React from "react";

const TrainingWorkCard = ({
  icon,
  stepNo,
  title,
  duration,
  text,
}: {
  icon: React.ReactNode;
  stepNo: string;
  title: string;
  duration: string;
  text: string;
}) => {
  return (
    <div className="bg-white rounded-[16px] h-fit md:h-[242px] w-full md:w-[1017px] p-6 md:p-[33px] border border-[#E5E7EB]">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="flex justify-center items-center h-12 w-12 text-white text-center bg-[#007A55] font-inter text-base font-normal rounded-[10px]">
            {icon}
          </div>
          <div className="flex justify-center items-center h-10 w-10 bg-[#D0FAE5] text-center text-[#007A55] font-inter text-base font-normal rounded-full">
            {stepNo}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-[#101828] text-lg md:text-xl font-medium ">
            {title}
          </div>
          <div className="w-[90.61px] h-[30px] rounded-[10px] border border-[#E5E7EB] flex justify-center items-center text-[#4A5565]">
            {duration}
          </div>
          <div className="text-black text-base font-inter font-normal">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingWorkCard;
