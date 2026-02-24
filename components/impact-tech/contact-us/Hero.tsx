import React from "react";

const Hero = () => {
  return (
    <div
      className="h-[220px] md:h-[470px]  flex justify-center items-center w-full"
      style={{
        background: `linear-gradient(0deg, rgba(104, 213, 133, 0.48), rgba(104, 213, 133, 0.48)),
linear-gradient(0deg, rgba(42, 116, 69, 0.4), rgba(42, 116, 69, 0.4)),
linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
 url('/assets/impact-tech/contact-us/telephone.jpg') background-position:  center;`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className=" text-white text-center font-inter md:px-0 px-6 w-full md:max-w-[667px] mx-auto">
        <div className=" flex flex-col  justify-center items-center h-full">
          <h1 className="text-[32px] md:text-[72px] font-extrabold">
            Contact US
          </h1>
          <p className="text-base md:text-lg font-normal md:w-[491px] md:pt-[34px]  ">
            Have a question, want to enroll, or looking to partner with us? Our
            team is here to help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
