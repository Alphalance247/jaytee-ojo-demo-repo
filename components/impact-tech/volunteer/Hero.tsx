import React from "react";
import Button from "../Teens-coding/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full relative">
      <div className="h-[636px] w-[566px] bg-[url('/assets/impact-tech/volunteer/slideSquareBG.png')] bg-cover bg-right absolute right-0 top-0 -z-10 md:block hidden "></div>
      <div className="flex flex-col md:flex-row items-center max-w-[1240px] mx-auto h-[300px] md:h-[636px] ">
        <div className="mx-6 md:mr-0 md:ml-0 w-full md:w-2/3 md:px-0 px-6 md:py-0 py-10">
          <div className="text-[#061C3D]  ">
            <h1 className="text-[32px] md:text-[72px] font-bold font-grostek leading-10 md:leading-[80px] w-full md:w-[631px]">
              Become a Volunteer. Shape the Future of Tech.
            </h1>
            <div className="md:pt-[25px] py-6 md:pb-[39px] font-graphik  font-normal md:max-w-[606px] w-full text-base md:text-xl">
              Join a community of mentors empowering young minds with real-world
              tech skills
            </div>
          </div>
          <Button
            url="#apply-to-volunteer"
            className="text-white bg-[#E60303] hover:bg-red-700 md:w-[211px] w-full  "
            text="Apply to Volunteer"
          ></Button>
        </div>
        <div className="w-full md:w-1/3  ">
          <Image
            src={"/assets/impact-tech/volunteer/volunteerPhoto.png"}
            width={450}
            height={502}
            alt="bg"
            className="h-[502px]  w-[450px] rounded-[20px] object-cover md:block hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
