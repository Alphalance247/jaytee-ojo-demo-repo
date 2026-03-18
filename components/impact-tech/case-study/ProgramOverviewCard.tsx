import React, { ReactNode } from "react";

const ProgramOverviewCard = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className=" bg-[#0000001A] backdrop-blur-[189.55px] rounded-[40px] ">
      <div className="font-inter w-full md:w-[983px]  text-white md:pl-[82px] pl-4 rounded-[40px] py-10 md:pt-[67px] md:pb-[81px]">
        <h3 className="text-2xl md:text-5xl font-bold capitalize">{title}</h3>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ProgramOverviewCard;
