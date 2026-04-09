import React from "react";

const FormInput = ({
  type,
  placeholderText,
  value,
  onChange,
  name,
}: {
  type: string;
  placeholderText: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="border border-[#E6E8EC] h-12 rounded-[5px] placeholder:text-[#838E9E]  w-full text-[#101828] focus:outline-none pl-[10.5px]"
        placeholder={placeholderText}
      />
    </div>
  );
};

export default FormInput;
