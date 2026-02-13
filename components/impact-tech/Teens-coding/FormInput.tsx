import React from "react";

const FormInput = ({
  type,
  placeholderText,
}: {
  type: string;
  placeholderText: string;
}) => {
  return (
    <div>
      <input
        type="text"
        className="border border-[#E6E8EC] h-12 rounded-[5px] placeholder:text-[#838E9E]  w-full text-[#838E9E] focus:outline-none pl-[10.5px]"
        placeholder={placeholderText}
      />
    </div>
  );
};

export default FormInput;
