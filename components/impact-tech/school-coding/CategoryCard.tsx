import React from "react";
import { IoCodeSlash } from "react-icons/io5";

const CategoryCard = ({
  children,
  title,
  age,
}: {
  children: React.ReactNode;
  title: string;
  age: string;
}) => {
  return (
    <div className=" backdrop-blur-[32px]  bg-[linear-gradient(180deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.075)_68.53%)] h-fit md:h-[265px] rounded-[16px] ">
      <div className="ml-9 flex flex-col md:flex-row gap-8 md:gap-4 justify-between py-11">
        <div className="flex gap-8 w-full md:w-1/2">
          <div className="">
            {" "}
            <IoCodeSlash className="text-[#FFFFFF54] w-[46.45px] h-[51.53px] font-bold" />
          </div>
          <div className="flex flex-col gap-2 text-white font-bold font-grostek">
            <p className=" text-2xl md:text-4xl leading-[100%]">{title}</p>
            <p className="leading-[30px] text-lg md:text-2xl">{`(Ages ${age} )`}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 font-inter font-semibold leading-[100%] text-xl md:text-[32px] text-white px-8 md:px-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
