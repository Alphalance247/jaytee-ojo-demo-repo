import React from "react";

const Hero = () => {
  return (
    <div
      className="h-[250px] md:h-[394px] bg-cover bg-no-repeat flex  items-center"
      style={{
        background: `linear-gradient(0deg, rgba(104, 213, 133, 0.48), rgba(104, 213, 133, 0.48)),
linear-gradient(0deg, rgba(42, 116, 69, 0.4), rgba(42, 116, 69, 0.4)),
linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
url(/assets/impact-tech/blogs/fc28481609af4fe0453406d2002fb9e14562e7e8.jpg)`,
      }}
    >
      <div className="h-full items-center font-inter text-center text-white flex flex-col gap-4 md:gap-[34px] justify-center w-full md:max-w-[667px] mx-auto ">
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
