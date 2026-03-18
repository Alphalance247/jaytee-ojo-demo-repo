import React from "react";

const InteractiveCard = ({
  titleClass,
  textClass,
  children,
  text,
  title,
}: {
  textClass: string;
  titleClass: string;
  children: React.ReactNode;
  text: string;
  title: string;
}) => {
  return (
    <div className="bg-white w-full md:w-[353px] h-[328px] rounded-[30px] border border-[#0000001A] shadow-[4px 4px 30px 0px #0000001A] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center bg-[#2A7445] h-[100px] w-[100px] rounded-full">
          {children}
        </div>
        <div className=" pt-5   leading-[150%] w-full md:w-[322px] mx-auto flex items-center flex-col gap-3">
          <p
            className={`text-[#1F1C14] font-bold font-grostek text-xl md:text-[28px] text-center ${titleClass}`}
          >
            {" "}
            {title}
          </p>

          <p
            className={`${textClass} text-[#1F1C14B2] text-lg font-normal font-nunito w-full md:w-[272px] text-center `}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCard;
