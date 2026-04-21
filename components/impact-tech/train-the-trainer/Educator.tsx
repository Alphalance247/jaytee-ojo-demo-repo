import React from "react";
import Sticker from "./Sticker";

const Educator = () => {
  return (
    <div className="w-full max-w-[1197px] mx-auto md:py-[91px]">
      {/* <div className="max-w-[1197px] mx-auto"> */}
      <div className="relative shadow-[0px_25px_50px_-12px_#1018281A] rounded-none md:rounded-[16px] ">
        <img
          src="/assets/impact-tech/train-the-trainer/bg.png"
          alt="bg"
          className="w-full md:w-[1197px] object-cover rounded-none md:rounded-[16px] h-[420px] md:h-[621px]"
        />

        <div
          className="absolute inset-0 w-full md:w-[1197px] rounded-none md:rounded-[16px] h-[320px] sm:h-[420px] md:h-[621px] z-0"
          style={{
            background: `linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)),
               linear-gradient(0deg, rgba(42,116,69,0.2), rgba(42,116,69,0.2)),
               linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2))`,
          }}
        ></div>
        <div className="absolute bottom-4 left-0 md:bottom-2.5 z-10 md:-left-[34px]  ">
          <Sticker />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Educator;
