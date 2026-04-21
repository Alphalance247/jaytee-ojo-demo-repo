import React from "react";

const Hero = () => {
  return (
    <div className="h-[220px] md:h-[460px] flex justify-center items-center bg-[url('/assets/impact-tech/partners/excitedPeople.jpg')] bg-no-repeat bg-cover bg-center relative ">
      <div className="absolute inset-0 z-0 bg-[#68D5857A] h-[220px] md:h-[460px]" />
      <div className="absolute inset-0 h-[220px] md:h-[460px] bg-[#2A744566] z-10" />
      <div className="bg-[#00000033] absolute inset-0 h-[220px] md:h-[460px] w-full z-20"></div>
      <div className="z-50 absoulte text-white text-center font-inter md:px-0 px-6 w-full max-w-[667px] mx-auto">
        <h1 className="font-extrabold text-[32px] md:text-[64px] leading-[100%] md:leading-[72px]">
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
