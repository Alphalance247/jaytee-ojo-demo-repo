import React from "react";
import ColoredBg from "./coloredBg";
import Image from "next/image";
const OuStory = () => {
  return (
    <div className="w-full bg-white min-h-[500px] md:min-h-[710px] grid items-center">
      <div className="  px-6 md:px-[110px] py-[50px] md:py-[91px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-20 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="font-grostek text-[#061C3D] text-[32px] md:text-[48px] font-bold pb-[30px] ">
              Our Story
            </h2>
            <p className="text-base font-normal text-[#121212] w-full md:max-w-[513px]">
              Impact Tech was founded to bridge the digital skills gap among
              young people and underserved communities. As a technology arm of
              the Jaytee Ojo Foundation, we focus on equipping learners with
              practical, future-ready digital skills that empower them to thrive
              in a technology-driven world. Impact Tech was founded to bridge
              the digital skills gap among young people and underserved
              communities. As a technology arm of the Jaytee Ojo Foundation, we
              focus on equipping learners with practical, future-ready digital
              skills that empower them to thrive in a technology-driven world.
            </p>
          </div>

          <div className="md:flex hidden justify-center  h-[528px] mr-[53px]">
            <div className="relative w-full max-w-[562px]">
              {/* TOP GREEN BG */}
              <div className="">
                <ColoredBg />
              </div>

              {/* BOTTOM GREEN BG */}
              <div className="absolute bottom-0 z-0 right-[35px]">
                <ColoredBg />
              </div>

              {/* IMAGE */}
              <div className="absolute top-[51px] left-[76px] z-20">
                <Image
                  src="/assets/impact-tech/about-us/excitedpeople.png"
                  alt="excited people"
                  width={486}
                  height={376}
                  className="rounded-[40px] "
                />
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col md:flex-row items-center  gap-12 md:gap-20 px-6 md:px-[110px] w-full max-w-[1240px]  ">
        <div className="w-full md:w-1/2">
          <h2 className="font-grostek text-[#061C3D] text-[32px] md:text-[48px] font-bold ">
            Our Story
          </h2>
          <p className="text-base font-normal text-[#121212] w-full md:max-w-[513px]">
            Impact Tech was founded to bridge the digital skills gap among young
            people and underserved communities. As a technology arm of the
            Jaytee Ojo Foundation, we focus on equipping learners with
            practical, future-ready digital skills that empower them to thrive
            in a technology-driven world. Impact Tech was founded to bridge the
            digital skills gap among young people and underserved communities.
            As a technology arm of the Jaytee Ojo Foundation, we focus on
            equipping learners with practical, future-ready digital skills that
            empower them to thrive in a technology-driven world.
          </p>
        </div>
        <div className=" w-full md:w-1/2 flex justify-center h-full">
          <div className="relative  ">
            <ColoredBg className="absolute -bottom-[101px] right-[35px] z-0" />
            <ColoredBg className="absolute -top-[51px] -left-[76px] z-0" />

            <Image
              src="/assets/impact-tech/about-us/excitedpeople.png"
              alt="excited people"
              className="relative z-50  ml-12"
              width={486}
              height={376}
            />
          </div>
        </div>
      </div> */}
        </div>
      </div>
    </div>
  );
};

export default OuStory;
