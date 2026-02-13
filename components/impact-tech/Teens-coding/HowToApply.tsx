import React from "react";
import Input from "./FormInput";
import { IoChevronDown } from "react-icons/io5";
import Button from "./Button";
import { IoIosArrowRoundForward } from "react-icons/io";

const options = ["web development", "graphics design"];
const HowToApply = () => {
  return (
    <div className=" bg-[url(/assets/impact-tech/how-to-apply-bg.png)] h-[795px] bg-cover bg-no-repeat flex flex-col justify-center items-center">
      <div className="h-[120px]">
        <div className=" text-[32px] md:text-[48px] font-bold text-white text-center font-inter">
          How to Apply
        </div>
        <p className="text-base md:text-[24px] text-white text-center font-inter">
          Complete the form below to get started.
        </p>
      </div>
      <div className="w-full md:px-0 px-6">
        <div
          className="bg-white w-full md:w-[660px] rounded-[16px] mx-auto  "
          style={{
            boxShadow: "0px 24px 56px 0px #061C3D1F",
          }}
        >
          <div className="py-5 md:py-8 mx-4 md:mx-[41px] font-inter">
            <div className="text-[#061C3D] text-lg md:text-xl font-medium text-center pb-4 md:pb-8">
              Get Started Today
            </div>
            <form action="" className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <div>
                  <Input type="text" placeholderText="Full name" />
                </div>
                <div>
                  <Input type="text" placeholderText="Age" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <div>
                  <Input type="text" placeholderText="Parent/Guardian Name" />
                </div>
                <div>
                  <Input type="email" placeholderText="Email" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <div className="relative w-full">
                  <select
                    name=""
                    id=""
                    className="w-full h-12 border border-[#E6E8EC] rounded-[5px] text-[#838E9E] capitalize px-[10.5px]  appearance-none bg-white focus:outline-none"
                  >
                    <option value="" className="text-[#838E9E]">
                      Program Interest
                    </option>
                    {options.map((option, index) => (
                      <option value="" key={index}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <IoChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#838E9E] pointer-events-none" />
                </div>
                <div>
                  <Input type="text" placeholderText="School Name" />
                </div>
              </div>
              <div>
                <textarea
                  name=""
                  id=""
                  className="resize-none h-[88px] w-full border border-[#E6E8EC] text-[#838E9E] rounded-[5px] placeholder:pt-3 pl-[10.5px]"
                  placeholder="Message / Additional info"
                ></textarea>
              </div>
              <div>
                {" "}
                <Button
                  text="apply now"
                  children={
                    <IoIosArrowRoundForward className="text-white h-6 w-6 pl-1" />
                  }
                  className="w-full bg-[#E60303]"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToApply;
