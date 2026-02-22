import React from "react";
import { BiChevronDown } from "react-icons/bi"; // or any icon library

const FormSelect = ({
  children,
  value,
  className,
  //   onChange,
}: {
  children: React.ReactNode;
  value: string;
  className: string;
  //   onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <div className="relative">
      <select
        className={`appearance-none border border-[#E6E8EC] h-12 rounded-[5px] placeholder:text-[#838E9E]  w-full text-[#838E9E] focus:outline-none pl-[10.5px] ${className}`}
      >
        {children}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
        <BiChevronDown className="w-4 h-4 text-[#838E9E]" />
      </div>
    </div>
  );
};

export default FormSelect;
