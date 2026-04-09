import React from "react";

const Ball = ({ className }: { className: string }) => {
  return <div className={`${className} w-[31px] h-[31px] rounded-full`}></div>;
};

export default Ball;
