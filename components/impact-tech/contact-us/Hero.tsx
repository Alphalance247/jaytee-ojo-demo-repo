import React from "react";

const Hero = () => {
  return (
    <div className="h-[220px] md:h-[470px]  justify-center bg-cover bg-no-repeat flex bg-center  items-center w-full relative bg-[url('/assets/impact-tech/contact-us/telephone.jpg')]">
      <div className="absolute inset-0 z-0 bg-[#68D5857A] h-[220px] md:h-[470px]" />
      <div className="absolute inset-0 h-[220px] md:h-[470px] bg-[#2A744566] z-10" />
      <div className="bg-[#00000033] absolute inset-0 h-[220px] md:h-[470px] w-full z-20"></div>
      <div className="z-50 absolute text-white text-center font-inter md:px-0 px-6 w-full max-w-[667px] mx-auto">
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
