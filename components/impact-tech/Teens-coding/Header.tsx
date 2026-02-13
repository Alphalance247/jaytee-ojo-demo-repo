import Image from "next/image";
import React from "react";
import Button from "../Teens-coding/Button";
const Header = () => {
  return (
    <div className="border-b border-[#F0F0F0">
      <div className="flex justify-between items-center py-4">
        <div className="pl-3 md:pl-[100px]">
          <Image
            src="/assets/impact-tech/impactTech-logo.png"
            alt="impact-tech-logo"
            className="w-[180px] md:w-[256px] h-[45px] md:h-[51px]"
            width={256}
            height={51}
          />
        </div>
        <div className="pr-3 md:pr-[99px]">
          <Button
            text="get started"
            children=""
            className=" w-[120px] md:w-[156px] bg-[#E60303]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
