import React from "react";
const SkillsPill = ({
  className,
  icon,
  text,
}: {
  className: string;
  icon?: React.ReactNode;
  text: string;
}) => {
  return (
    <div
      className={`border border-[#FFFFFF0D] rounded-[20px] md:rounded-[40px] h-14 md:h-[95px] text-white font-bold text-[15px] md:text-lg  
 ${className}`}
      style={{
        background:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 100%)",
        backdropFilter: "blur(32px)",
      }}
    >
      <div className="px-[15px] md:px-[35px] flex items-center gap-[14px] h-full ">
        {icon && <div className="">{icon}</div>}
        <div className="font-graphik">{text}</div>
      </div>
    </div>
  );
};

export default SkillsPill;
