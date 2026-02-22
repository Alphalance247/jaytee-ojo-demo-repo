import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const VolunteerWaysButton = () => {
  return (
    <button className="bg-[#EA4335] text-white flex justify-center gap-2 rounded-[20px] h-8 items-center w-[130px]">
      <div className="text-sm font-medium font-graphik">Get started</div>
      <IoIosArrowRoundForward className="text-white h-5 w-5" />
    </button>
  );
};

export default VolunteerWaysButton;
