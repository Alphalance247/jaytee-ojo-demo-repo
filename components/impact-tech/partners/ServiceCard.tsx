import React from "react";
import { RiGlobeFill } from "react-icons/ri";
import { MdVerifiedUser } from "react-icons/md";

const ServiceCard = ({
  icon,
  text,
  title,
}: {
  icon: React.ReactNode;
  text: string;
  title: string;
}) => {
  return (
    <div className={`bg-white rounded-[16px] w-[312px] h-fit`}>
      <div className="p-6">
        <div className="bg-[#2A7445] h-14 w-14 rounded-[8px] text-white flex justify-center items-center ">
          {icon}
        </div>
        <div className="font-inter pt-6">
          <h2 className=" text-base md:text-lg text[#061C3D] font-medium">
            {title}
          </h2>
          <div className="pt-3 h-fit">
            <p className="text-sm text-[#42526B] font-normal ">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
