import React, { useState, useRef, useEffect } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const Select = ({
  options,
  placeholder,
  heading,
  className,
  onChange,
}: {
  options: string[];
  placeholder: string;
  heading?: string;
  className?: string;
  onChange?: (value: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const ref = useRef<HTMLDivElement | null>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleClick = (option: string) => {
    setSelected(option);
    setOpen(false);
    onChange?.(option);
  };
  return (
    <div className="relative w-full" ref={ref}>
      {/* Trigger */}
      <div
        onClick={() => setOpen(!open)}
        className="h-12 flex items-center justify-between px-3 border border-[#E6E8EC] rounded-[5px] cursor-pointer bg-white"
      >
        <span className={selected ? "text-[#101828]" : "text-[#838E9E]"}>
          {selected || placeholder}
        </span>

        {open ? (
          <BiChevronUp className="text-[#838E9E] h-4 w-4" />
        ) : (
          <BiChevronDown className="text-[#838E9E] h-4 w-4" />
        )}
      </div>

      {/* Dropdown */}
      {open && (
        <div
          className={`${className} absolute  md:top-0 top-full md:mt-0 mt-2 w-fit md:w-[280px] bg-white rounded-[8px] z-50 pb-[5px]
          shadow-[0px_4px_10px_0px_#0000004D,_inset_0px_1px_0px_0px_#FFFFFF0F]`}
        >
          {/* Header (optional) */}
          {heading && (
            <div
              className="flex justify-between items-center px-4 py-3 border-b border-[#E6E8EC]"
              onClick={() => setOpen(false)}
            >
              <span className="font-inter text-[#101828] font-medium capitalize">
                {heading}
              </span>
              <BiChevronUp className="text-[#838E9E] h-4 w-4" />
            </div>
          )}

          {/* Options */}
          <div className="flex flex-col">
            {options.map((option, index) => {
              const isSelected = selected === option;

              return (
                <div
                  key={index}
                  onClick={() => {
                    handleClick(option);
                  }}
                  className={`px-4 py-3 flex justify-between items-center cursor-pointer capitalize
                  ${isSelected ? "text-[#101828]" : "text-[#838E9E]"}`}
                >
                  {option}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
