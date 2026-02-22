import Image from "next/image";
import React from "react";
import { IoIosNotifications } from "react-icons/io";
import Button from "../Teens-coding/Button";
const lists = [
  {
    title: " Apply",
    desc: "Complete the volunteer form and tell us how you’d like to contribute.",
  },
  {
    title: "Screening & Onboarding",
    desc: "We review your application, conduct a short interview, and provide orientation.",
  },
  {
    title: "Training & Matching",
    desc: "You receive training and are matched to a program or role that fits your skills.",
  },
  {
    title: "Start Volunteering",
    desc: "Begin contributing through sessions, mentorship, or support activities.",
  },
];
const HowVoluntryWorks = () => {
  return (
    <div className="py-10 md:py-[91px]">
      <div className="font-inter text-center text-[#061C3D] flex flex-col items-center justify-center  md:px-0 px-6">
        <h4 className="text-[32px] md:text-[48px] leading-[90%%] md:leading-[80px] font-bold">
          How Volunteering Works
        </h4>
        <p className="max-w-[536px] text-lg md:text-xl font-normal  mt-4">
          A simple, structured process designed to respect your time and
          maximize impact.
        </p>
      </div>
      <div className="mx-auto w-full md:max-w-[1174px] flex md:flex-row flex-col items-center gap-[420px] md:gap-[217px] md:px-0 px-6  h-auto md:h-[571px] mt-10 md:mt-[67px] ">
        <div className="w-full md:w-1/2 h-full">
          <div className="relative w-full md:w-[420px] ">
            <div className="absolute w-full md:w-[358px] h-auto md:h-[500px] top-[67px] bg-[#2A7445]/10 rounded-[20px] left-0 md:left-[152px] z-0"></div>
            <div className="bg-[#161C2D] w-[341px] h-[111px] rounded-[14px] flex items-center gap-4  shadow-xl absolute top-64 md:top-[364px] z-20 left-0 px-6">
              <div className="h-[42px] w-[42px] rounded-full bg-[#68D585] flex items-center justify-center ">
                <IoIosNotifications className="h-6 w-6 text-[#2D2D2D]" />
              </div>
              <div>
                <p className="text-white/70 text-[15px]">
                  You are shaping the future
                </p>
                <p className="text-white font-bold text-[17px]">
                  Congratulations!!
                </p>
              </div>
            </div>
            <Image
              src="/assets/impact-tech/volunteer/volunteer.png"
              alt="Volunteer"
              width={425}
              height={571}
              className="rounded-[20px] w-full md:w-[425px] h-auto md:h-[571px] object-cover absolute left-0 md:left-[69px] z-10"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 gap-10 flex flex-col pl-6 md:pl-16 ">
          {lists.map((list, index) => (
            <div className="flex gap-[22.57px] font-graphik  ">
              <div className="bg-[#2A7445] h-[43px] w-[43.43px] rounded-full flex justify-center items-center flex-shrink-0">
                <p className="text-[#FFFFFF] font-graphik font-bold text-[17px]">
                  {index + 1}
                </p>
              </div>
              <div className="text-[#161C2D]  w-full  md:max-w-[408px]">
                <div className=" text-lg md:text-[21px] font-bold">
                  {list.title}
                </div>
                <div className="text-[15px] md:text-[17px] pt-2.5 max-w-[342.4px]">
                  {list.desc}
                </div>
              </div>
            </div>
          ))}
          <Button
            className="bg-[#E60303] text-white w-full md:w-[211px]"
            text="Apply to Volunteer"
            children=""
          />
        </div>
      </div>
    </div>
  );
};

export default HowVoluntryWorks;
