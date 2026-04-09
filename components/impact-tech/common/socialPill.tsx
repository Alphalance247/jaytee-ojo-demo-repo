import React from "react";

const socialPill = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="md:h-10 md:w-10 h-6 w-6 rounded-full bg-[#3BA361] flex justify-center items-center">
        <div className="text-white">{children}</div>
      </div>
    </div>
  );
};

export default socialPill;
