import React from "react";
import Input from "./FormInput";
import { IoChevronDown } from "react-icons/io5";
import Button from "./Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import FormSubmitButton from "../common/FormSubmitButton";
import Select from "../common/SelectInput";

const programs = [
  "Teens Coding",
  "Coding for Kids",
  "School Ccoding Club",
  "Train-the-Trainer",
];
const HowToApply = () => {
  return (
    <div
      id="applicationForm"
      className=" relative bg-[url(/assets/impact-tech/howToApplyBg.png)] h-[795px] bg-cover bg-no-repeat flex flex-col justify-center items-center mt-16 md:mt-0"
    >
      <div className="h-[120px] z-10">
        <div className=" text-[32px] md:text-[48px] font-bold text-white text-center font-inter">
          How to Apply
        </div>
        <p className="text-base md:text-[24px] text-white text-center font-inter">
          Complete the form below to get started.
        </p>
      </div>
      <div
        className="absolute inset-0 z-0 w-full h-[795px] "
        style={{
          backgroundImage: ` linear-gradient(180deg, rgba(104, 213, 133, 0.54) 0%, #2A7445 100%)`,
        }}
      ></div>
      <div className="w-full md:px-0 px-6 z-10">
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
                  <Select
                    placeholder="Pprogram interest"
                    options={programs}
                    heading="Program interest"
                    className="md:-right-52 right-0"
                  />
                  {/* <select
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
                  </select> */}
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
                <FormSubmitButton
                  text="apply now"
                  className="w-full bg-[#E60303] text-white"
                >
                  {" "}
                  <IoIosArrowRoundForward className="text-white h-6 w-6 pl-1" />
                </FormSubmitButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToApply;
