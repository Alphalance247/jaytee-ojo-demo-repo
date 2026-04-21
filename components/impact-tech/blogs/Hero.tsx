import React from "react";

const Hero = () => {
  return (
    <div className="h-[250px] md:h-[394px] bg-cover bg-no-repeat flex  items-center w-full relative bg-[url('/assets/impact-tech/blogs/fc28481609af4fe0453406d2002fb9e14562e7e8.jpg')]">
      <div className="absolute inset-0 z-0 bg-[#68D5857A] h-[250px] md:h-[394px]" />
      <div className="absolute inset-0 h-[250px] md:h-[394px] bg-[#2A744566] z-10" />
      <div className="bg-[#00000033] absolute inset-0 h-[250px] md:h-[394px] w-full z-20"></div>
      <div className="z-50  h-full items-center font-inter text-center text-white flex flex-col gap-4 md:gap-[34px] justify-center w-full max-w-[667px] mx-auto ">
        <h1 className="font-extrabold text-[32px] md:text-[72px]">Blogs</h1>
        <p className="font-medium  text-base md:text-lg w-full md:w-[633px] px-2 md:px-[17px]">
          Stories, insights, and updates from our programs, community, and
          mission to empower the next generation through technology.
        </p>
      </div>
    </div>
  );
};

export default Hero;
