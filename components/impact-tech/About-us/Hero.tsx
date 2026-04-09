import React from "react";

const Hero = () => {
  return (
    <div
      className=" h-[441px] flex justify-center items-center"
      style={{
        background: `linear-gradient(0deg, rgba(104, 213, 133, 0.48), rgba(104, 213, 133, 0.48)),
    linear-gradient(0deg, rgba(42, 116, 69, 0.4), rgba(42, 116, 69, 0.4)),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url('/assets/impact-tech/about-us/collaboration.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className=" text-white text-center font-inter md:px-0 px-6">
        <h1 className=" font-extrabold text-[32px] md:text-[48px]">About Us</h1>
        <p className=" text-base md:text-lg">
          Empowering teens with real-world tech skills for the future.
        </p>
      </div>
    </div>
  );
};

export default Hero;
