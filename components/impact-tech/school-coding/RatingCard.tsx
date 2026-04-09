import React from "react";
import { Quicksand } from "next/font/google";
import { FaStar } from "react-icons/fa";
const RatingCard = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  return (
    <div
      className={`${className} bg-white rounded-[16px] shadow-[0px_8px_24px_0px_#00000026] flex items-center`}
    >
      <div className="flex flex-col gap-[9px] ml-5">
        <div className="flex gap-1 items-center">
          <div>
            <FaStar className="text-[#F8BD38] w-5 h-[19.02px]" />
          </div>
          <p className="text-[#1D1D1D] font-Quicksand uppercase font-bold text-[12px] text-center">
            So far
          </p>
        </div>
        <p className="font-grostek font-semibold text-[21.26px] text-[#1D1D1D] leading-[100%]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default RatingCard;
