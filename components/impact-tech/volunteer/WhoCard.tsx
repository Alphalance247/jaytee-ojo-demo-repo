import React from "react";

const WhoCard = ({
  icon,
  text,
  className,
  textClass,
}: {
  icon: React.ReactNode;
  text: string;
  className: string;
  textClass: string;
}) => {
  return (
    // <div
    //   className={`${className} w-[289px] h-[68px] rounded-[40px] border border-[#FFFFFF0D]`}
    //   style={{
    //     background:
    //       "linear-gradient(0deg, #2A7445, #2A7445), linear-gradient(180deg, rgba(85, 85, 85, 0.03) 0%, rgba(25, 24, 24, 0) 100%)",
    //     backdropFilter: "blur(32px)",
    //   }}
    // >
    //   <div className="h-[26px] w-[26px] text-white">{icon}</div>
    //   <div className="text-lg font-semibold  font-graphik text-white">
    //     {text}
    //   </div>
    // </div>
    <div
      className={`${className} w-[289px] h-[68px] rounded-[40px] border border-[#FFFFFF0D] 
      `}
      style={{
        background:
          "linear-gradient(0deg, #2A7445, #2A7445), linear-gradient(180deg, rgba(85, 85, 85, 0.03) 0%, rgba(25, 24, 24, 0) 100%)",
        backdropFilter: "blur(32px)",
      }}
    >
      <div className="h-[26px] w-[26px] flex items-center justify-center text-white">
        {icon}
      </div>

      <div
        className={`text-lg font-semibold font-graphik text-[#F9F9F9] text-center ${textClass}`}
      >
        {text}
      </div>
    </div>
  );
};

export default WhoCard;
