import React from "react";
import VolunteerWaysButton from "./VolunteerWaysButton";

const VolunteerWaysCard = ({
  title,
  desc,
  className,
}: {
  title: string;
  desc: string;
  className: string;
}) => {
  return (
    <div
      className={`bg-white h-fit rounded-[20px] md:rounded-[30px] ${className}`}
      style={{ boxShadow: "0px 4px 40px 0px #5B21B630" }}
    >
      <div className="py-6 md:py-10 mx-6 md:mx-10 flex flex-col gap-4">
        <div className="text-[24px] font-semibold font-grostek text-[#1F2937] ">
          {title}
        </div>
        <div className="text-sm font-medium text-[#6B7280] font-rubik leading-[146%] max-w-[265px] pr-[21px]">
          {desc}
        </div>
        <VolunteerWaysButton />
      </div>
    </div>
  );
};

export default VolunteerWaysCard;
