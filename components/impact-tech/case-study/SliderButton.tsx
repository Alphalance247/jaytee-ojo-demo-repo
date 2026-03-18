import React from "react";
interface SliderButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const SliderButton = ({
  children,
  onClick,
  disabled = false,
  className,
}: SliderButtonProps) => {
  return (
    <button
      className={` ${className} flex justify-center items-center h-7 w-7 md:h-10 md:w-10 bg-[#68D58575] rounded-md md:rounded-[12px] border border-[#E6E6E6] cursor-pointer`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default SliderButton;
