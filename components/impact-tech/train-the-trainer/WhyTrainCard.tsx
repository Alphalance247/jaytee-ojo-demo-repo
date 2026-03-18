import React from "react";

const WhyTrainCard = ({
  icon,
  headingText,
  text,
}: {
  icon: string;
  headingText: string;
  text: string;
}) => {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-[16px] px-[33px] pt-[33px] w-full md:w-[289.33px] h-fit md:h-[288px]">
      <div className="bg-[#D0FAE5] rounded-[10px] flex justify-center items-center text-[#009966] h-12 w-12">
        <img src={icon} alt="icon" className="h-6 w-6 " />
      </div>
      <div className="pt-6">
        <h1 className="text-[#101828] font-medium text-lg md:text-xl font-inter font-inter">
          {headingText}
        </h1>
        <p className="pt-3 text-[#4A5565] text-base leading-[26px] font-inter font-normal md:pb-0 pb-2">
          {text}
        </p>
      </div>
    </div>
  );
};

export default WhyTrainCard;
