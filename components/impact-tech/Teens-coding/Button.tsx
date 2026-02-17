import React from "react";
import { DM_Sans } from "next/font/google";
interface ButtonProps {
  children: React.ReactNode;
  text: string;
  className: string;
}
const Button = ({ children, text, className }: ButtonProps) => {
  return (
    <button
      className={`  flex justify-center  items-center h-10 md:h-12 cursor-pointer rounded-[30px]  md:rounded-[41px] ${className}`}
    >
      <div className="font-dm-sans capitalize text-sm md:text-base font-bold font-DMSans">
        {text}
      </div>
      <div className=" ">{children}</div>
    </button>
  );
};

export default Button;
