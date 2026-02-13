import React from "react";

const ButtonFrame = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  return (
    <div
      className={`${className} md:h-[62px] h-10 rounded-tl-[35px] rounded-bl-[35px]  md:rounded-tl-[41px] md:rounded-bl-[41px]
      flex items-center  text-white capitalize font-bold text-sm md:text-[21px] 
      backdrop-blur-[12px] bg-white/20`}
    >
      <p className="pl-[33px] font-grahik">{text}</p>
    </div>
  );
};

export default ButtonFrame;
