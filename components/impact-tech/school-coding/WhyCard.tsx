import React from "react";

const WhyCard = ({ text }: { text: string }) => {
  return (
    <div className="bg-white rounded-[15px] w-[278px] h-[258px] shadow-[10px_10px_40px_0px_#00000026] flex flex-col gap-[25px] pl-4">
      <div className="mt-4">
        <img src="/assets/impact-tech/school-coding/Frame 57.png" alt="icon" />
      </div>
      <div className=" text-[#000000] font-inter font-semibold leading-[100%] text-lg md:text-2xl w-[130px] md:w-[188px] pb-4">
        {text}
      </div>
    </div>
  );
};

export default WhyCard;
