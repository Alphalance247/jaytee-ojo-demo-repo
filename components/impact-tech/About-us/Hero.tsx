import React from "react";

const Hero = () => {
  return (
    <div className="bg-[url('/assets/impact-tech/about-us/hero.jpg')] bg-cover bg-center bg-no-repeat  h-[220px] md:h-[470px] flex justify-center items-center w-full relative">
      <div className="absolute inset-0 z-0 bg-[#68D5857A] h-[220px] md:h-[470px]" />
      <div className="absolute inset-0 h-[220px] md:h-[470px] bg-[#2A744566] z-10" />
      <div className="bg-[#00000033] absolute inset-0 h-[220px] md:h-[470px] w-full z-20"></div>
      <div className=" text-white text-center font-inter md:px-0 px-6 max-w-[1219px] mx-auto z-30">
        <h1 className=" font-extrabold text-[32px] md:text-[64px]">About Us</h1>
        <p className=" text-base md:text-lg">
          Empowering teens with real-world tech skills for the future.
        </p>
      </div>
    </div>
  );
};

export default Hero;
