import React from "react";
import Input from "../Teens-coding/FormInput";
import Button from "../Teens-coding/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
const StartPartnership = () => {
  return (
    <div className="h-fit">
      <div className="flex flex-col justify-center items-center font-inter md:px-0 px-6">
        <h5 className="text-[32px] md:text-[48px] text-[#061C3D] font-bold text-center">
          Start a Partnership
        </h5>
        <p className="pt-4 text-[#42526B] text-base md:text-lg">
          Complete the form below and our team will contact you within 24–48
          hours.
        </p>
      </div>
      <div
        className="md:px-0 px-6 w-full md:max-w-[607px] mx-auto bg-[#FFFFFF] h-fit mt-6 md:mt-[74px] rounded-[16px] mb-12 md:mb-[101px]"
        style={{ boxShadow: "0px 24px 56px 0px #061C3D1F" }}
      >
        <div className="text-center flex justify-center items-center pt-8">
          Get Started Today
        </div>
        <form
          action=""
          className="flex flex-col  gap-4 items-center px-4 md:px-[51px] pt-8"
        >
          <div className="grid  gap-4 w-full ">
            {" "}
            <Input type="text" placeholderText="Full name" />
          </div>
          <div className="grid   gap-4 w-full">
            {" "}
            <Input type="text" placeholderText="Parent/Guadian Name" />
          </div>
          <div className="grid   gap-4 w-full ">
            {" "}
            <Input type="email" placeholderText="Email" />
          </div>
          <div className="grid   gap-4 w-full ">
            {" "}
            <Input type="text" placeholderText="School Name" />
          </div>
          <div className="grid   gap-4 w-full ">
            {" "}
            <textarea
              name=""
              id=""
              className="resize-none h-[145px] w-full border border-[#E6E8EC] text-[#838E9E] rounded-[5px] placeholder:pt-3 pl-[10.5px]"
              placeholder="Message / Additional info"
            ></textarea>
          </div>
          <div>
            {" "}
            <Button
              text="Submit Partnership Request"
              children={
                <IoIosArrowRoundForward className="text-white h-6 w-6 pl-1" />
              }
              className=" w-[320px] md:w-[505px] bg-[#E60303] text-white mt-4 mb-8"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default StartPartnership;
