import React from "react";

const ProgramPod = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div
      className="bg-[#0D0F1B] w-full md:w-[411px] h-full md:h-[203px] rounded-[16px]"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.125) 68.53%)",
        backdropFilter: "blur(32px)",
      }}
    >
      <div className=" mx-[32px] md:mx-[54px] my-[26px] md:my-[30px] font-inter ">
        <h3 className="text-white text-xl md:text-[29.61px] font-bold ">
          {title}
        </h3>
        <p className="text-white mt-4 text-base md:text-[20px] leading[26.92px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProgramPod;
