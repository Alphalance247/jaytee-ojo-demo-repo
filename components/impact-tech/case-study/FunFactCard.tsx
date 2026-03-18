import React from "react";

const FunfactCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
    text-white
    rounded-2xl
    h-[130px]
    w-full md:w-[281px]
    uppercase
    flex flex-col justify-center
    px-4 md:px-[35px]
    bg-[#201D1F]
   shadow-impact-shadow
   bg-[linear-gradient(252.53deg,rgba(42,116,69,0.5)-0.87%,rgba(40,108,65,0.5)25.15%,rgba(42,116,69,0.425)97.92%)]
  "
    >
      {children}
    </div>
  );
};

export default FunfactCard;
