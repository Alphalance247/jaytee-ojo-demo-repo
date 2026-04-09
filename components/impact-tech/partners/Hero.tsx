import React from "react";

const Hero = () => {
  return (
    <div
      className="h-[220px] md:h-[441px] flex justify-center items-center"
      style={{
        background: `linear-gradient(0deg, rgba(104, 213, 133, 0.48), rgba(104, 213, 133, 0.48)),
    linear-gradient(0deg, rgba(42, 116, 69, 0.4), rgba(42, 116, 69, 0.4)),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url('/assets/impact-tech/partners/excitedPeople.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className=" text-white text-center font-inter md:px-0 px-6 w-full md:max-w-[667px] mx-auto">
        <h1 className=" font-extrabold text-[32px] md:text-[72px] leading-[100%] md:leading-[72px]">
          Partner With Impact Tech
        </h1>
        <div className=" flex justify-center items-center  md:px-[88px] pt-4 md:pt-[34px]">
          <p className=" text-base md:text-lg items-center leading-[18px] font-semibold ">
            Join us in expanding access to digital skills education across
            communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
