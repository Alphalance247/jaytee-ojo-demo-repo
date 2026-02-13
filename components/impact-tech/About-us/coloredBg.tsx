import React from "react";

const coloredBg = () => {
  return (
    <div
      className={`bg-[#459D60] md:h-[180px] md:w-[288px] h-[100px] :w-[180px] rounded-[40px] `}
      style={{
        background: `linear-gradient(0deg, #459D60, #459D60),
radial-gradient(100% 100% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0) 100%)`,
      }}
    ></div>
  );
};

export default coloredBg;
