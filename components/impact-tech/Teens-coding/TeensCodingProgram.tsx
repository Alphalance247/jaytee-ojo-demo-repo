import React from "react";
import ButtonFrame from "./ButtonFrame";
import Button from "../Teens-coding/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
const programs = [
  "age 11-12",
  "beginners",
  "curious minds",
  "schools & communities",
];
const TeensCoding = () => {
  return (
    <div className="pt-8 md:pt-[57px] px-4 sm:px-6 md:px-[110px]">
      <div className="relative h-[520px] sm:h-[588px] w-full rounded-[24px] sm:rounded-[44px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/assets/impact-tech/teenCoding-bg.png"
          alt="Teens Coding Background"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(252.53deg, rgba(42, 116, 69, 0.5) -0.87%, rgba(104, 213, 133, 0.5) -0.87%, rgba(40, 108, 65, 0.5) 25.15%, rgba(42, 116, 69, 0.425) 97.92%)",
          }}
        />
        <div className="absolute top-[25px] md:top-[91px] left-5  md:left-[70px] ">
          <div>
            <h1 className="text-white font-black text-[24px] md:text-[72px] leading-[24px] md:leading-[72px] pb-5 md:pb-[34px] font-grostek">
              {" "}
              Teens Coding & <br /> Digital Skills{" "}
            </h1>
            <p className="text-white text-base md:text-lg font-semibold font-inter">
              Empowering teens with real-world tech skills for the future.
            </p>
          </div>
          <div className=" pt-5 md:pt-[52px] flex items-start  md:items-center md:flex-row flex-col gap-4">
            {programs.map((program, index) => (
              <div key={index} className="pb-4">
                <ButtonFrame
                  text={program}
                  className={
                    index === programs.length - 1
                      ? "w-[220px] md:w-[303px]"
                      : " w-[170px] md:w-[237px]"
                  }
                />
              </div>
            ))}
          </div>
          <div className=" pt-3 md:pt-[45px]">
            <Button
              text="apply now"
              children={
                <IoIosArrowRoundForward className="text-white h-6 w-6 pl-1" />
              }
              className="w-[156px] bg-[#E60303]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeensCoding;
