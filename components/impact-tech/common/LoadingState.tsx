import React from "react";
interface ClassName {
  className?: string;
}
const LoadingState = ({ className }: ClassName) => {
  return (
    <div
      className={`${className} bg-gray-200 w-full md:max-w-[1240px] rounded-[16px] mx-auto animate-pulse`}
    ></div>
  );
};

export default LoadingState;
