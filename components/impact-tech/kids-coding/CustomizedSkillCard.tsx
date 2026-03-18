import React from "react";

const CustomizedSkillCard = ({
  title,
  text,
  imageUrl,
  children,
}: {
  title: string;
  text: string;
  imageUrl: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-white rounded-[30px] w-full md:w-[400px] h-[440px] shadow-[0px_50px_80px_0px_#0000000D] ">
      {children}
      <div className="flex justify-center items-center flex-col gap-[58px]">
        <div className="mt-14">
          {" "}
          <img src={imageUrl} alt="icons" />
        </div>
        <div className="text-center font-nunito md:w-[322px] w-full">
          <p className="pb-3 text-[#1F1C14] font-bold  text-[28px] ">{title}</p>
          <p className="text-xl text-[#1F1C14B2] font-normal md:max-w-[295px] w-full ">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomizedSkillCard;
