import React, { useState } from "react";
import { IoChevronDown, IoChevronForward } from "react-icons/io5";

const FaqsCard = ({
  question,
  answer,
  isOpen,
  toggleButton,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleButton: () => void;
}) => {
  return (
    <div
      className={
        isOpen
          ? "w-full md:w-[835px] mx-auto rounded-[16px] h-[155.42px] mt-6 md:mt-[67px] border border-[#D9DBE9] bg-white"
          : "w-full md:w-[835px] mx-auto rounded-[16px] h-[86.42px] mt-6 md:mt-[67px] border border-[#D9DBE9] bg-white"
      }
      style={{ boxShadow: "0px 5px 15px 0px #19213D0F" }}
    >
      <div className="pt-4 md:pt-[26px] px-4 md:px-8">
        <div className="flex justify-between items-center  ">
          <div className="text-[#170F49] font-semibold text-base">
            {question}
          </div>
          <button
            onClick={toggleButton}
            className="flex justify-center items-center h-[34.42px] w-[34.42px] rounded-full"
            style={
              isOpen
                ? {
                    background:
                      "linear-gradient(193.06deg, #68D585 5.92%, #2A7445 89.21%)",
                    boxShadow:
                      "0px 2px 6px 0px #4A3AFF1A, 0px 1px 1.5px 0px #FFFFFF40 inset, 0px -1px 1px 0px #0000001F inset",
                  }
                : {
                    backgroundColor: "#F1F2F9",
                    boxShadow: " 0px 0.5px 1px 0px #19213D12",
                  }
            }
          >
            {isOpen ? (
              <IoChevronDown className="text-white items-center h-6 w-6" />
            ) : (
              <IoChevronForward className="text-[#6F6C8F] items-center h-6 w-6" />
            )}
          </button>
        </div>
        {isOpen && (
          <div className="text-[#6F6C8F] text-sm w-full md:max-w-[721px] md:text-base pt-4 ">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqsCard;
