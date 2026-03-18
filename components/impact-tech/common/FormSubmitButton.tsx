import React from "react";
interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  className?: string;
}
const FormSubmitButton = ({ children, text, className }: ButtonProps) => {
  return (
    <button
      type="submit"
      className={`  flex justify-center  items-center h-10 md:h-12 cursor-pointer rounded-[30px]  md:rounded-[41px] ${className}`}
    >
      <div className="font-dm-sans capitalize text-sm md:text-base font-bold font-DMSans">
        {text}
      </div>
      {children && <span className="ml-2">{children}</span>}
    </button>
  );
};

export default FormSubmitButton;
