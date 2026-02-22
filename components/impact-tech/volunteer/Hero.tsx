import React from "react";
import Button from "../Teens-coding/Button";
import Image from "next/image";

const Hero = () => {
  return (
    // <div className="max-w-[1441px]">
    <div className="flex flex-col md:flex-row   items-center">
      <div className=" mx-6 md:mr-0 md:ml-[101px] w-full md:w-2/3 md:px-0 px-6 md:py-0 py-10 ">
        <div className="text-[#061C3D] ">
          <h1 className="text-[32px] md:text-[72px] font-bold font-grostek leading-10 md:leading-[80px] w-full md:w-[631px]">
            Become a Volunteer. Shape the Future of Tech.
          </h1>
          <div className="md:pt-[25px] py-6 md:pb-[39px] font-graphik  font-normal md:max-w-[606px] w-full text-base md:text-xl">
            Join a community of mentors empowering young minds with real-world
            tech skills
          </div>
        </div>
        <Button
          className="text-white bg-[#E60303] md:w-[211px] w-full  "
          text="Apply to Volunteer"
          children=""
        />
      </div>
      <div className="w-full md:w-1/3 md:block hidden ">
        <div className="relative h-[636px] w-full ">
          <img
            src={"/assets/impact-tech/volunteer/slideSquareBG.png"}
            alt="bg"
            width={566}
            height={636}
            className="h-[636px] object-cover w-full  "
          />
          <Image
            src={"/assets/impact-tech/volunteer/Photo.png"}
            width={450}
            height={502}
            alt="bg"
            className="h-[502px] absolute bottom-[100px] w-[450px] -left-[129px] "
          />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Hero;
