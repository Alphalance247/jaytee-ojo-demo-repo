import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const VolunteerCard = ({
  className,
  title,
  description,
  photo,
  btnText,
}: {
  className: string;
  title: string;
  description: string;
  photo: string;
  btnText: string;
}) => {
  return (
    <div className={`${className} h-fit w-full md:w-[350px] rounded-[40px]`}>
      <div className="w-full px-[19px] flex flex-col justify-center gap-7 md:gap-10">
        <div className="pt-[15px]">
          {" "}
          <Image
            src={photo}
            alt="volunteer photo"
            width={317}
            height={219}
            className="w-full h-[219px] rounded-[40px]   object-cover"
          />
        </div>
        <div>
          <div className="font-graphik font-bold text-lg md:text-[24px] text-white text-center">
            {title}
          </div>
          <div className=" text-[15px] md:text-[17px] font-normal font-graphik text-white text-center md:w-[296px] pt-[7px] ">
            {description}
          </div>
        </div>
        <div className="flex justify-center pb-7 md:pb-[38px]">
          <button className="outline-none focus:outline-none text-white font-bold text-[15px] md:text-[17px] flex gap-1">
            <p className="">{btnText}</p>{" "}
            <IoIosArrowRoundForward className="text-white h-6 w-6 pl-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;
