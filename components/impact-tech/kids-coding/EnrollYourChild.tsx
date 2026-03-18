import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Input from "../Teens-coding/FormInput";
// import Select from "../common/FormSelect";
import Select from "../common/SelectInput";
import FormSubmitButton from "../common/FormSubmitButton";
const programs = [
  "Coding for Kids",
  "Teens Coding",
  "School Ccoding Club",
  "Train-the-Trainer",
];
const EnrollYourChild = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    organization: "",
    program: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  return (
    <div id="enroll-form" className="bg-[#F4F7FA] h-fit  ">
      <div className="mx-auto w-full md:w-[607px] py-10 md:py-[91px]">
        <div className="text-center font-inter">
          <h5 className="font-bold text-3xl md:text-5xl text-[#061C3D]">
            Enroll Your Child Today
          </h5>
          <p className="text-base md:text-lg font-normal text-[#42526B] pt-4">
            Give your child a head start in digital skills.
          </p>
        </div>
        <div
          className="md:px-0 px-6 w-full md:max-w-[607px] mx-auto bg-[#FFFFFF] h-fit  rounded-[16px]  mt-6 md:mt-[74px]"
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
              <Input type="text" placeholderText="Parent/Guardian Name " />
            </div>
            <div className="grid   gap-4 w-full ">
              {" "}
              <Input
                type="email"
                placeholderText="Email"
                name="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
            <div className="grid   gap-4 w-full ">
              {" "}
              <Input type="tel" placeholderText="Phone" />
            </div>
            <div className="grid   gap-4 w-full">
              {" "}
              <Input type="text" placeholderText="Child Name" />
            </div>
            <div className="grid   gap-4 w-full ">
              {" "}
              <Input type="text" placeholderText="Age" />
            </div>
            <div className="grid gap-4 w-full">
              <Select
                placeholder="program interest"
                options={programs}
                heading="Program interest"
                className="md:-right-52 right-0"
                onChange={(value) => handleChange("program", value)}
              />
              {/* <Select value="" className="">
                <option value="">Partnership</option>
                <option value="mentor">Mentor</option>
                <option value="trainer">Trainer</option>
                <option value="support">Support Staff</option>
              </Select> */}
            </div>
            <div className="grid   gap-4 w-full ">
              {" "}
              <Input type="text" placeholderText="School" />
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
              <FormSubmitButton
                text="Enroll Now"
                className=" w-[320px] md:w-[505px] bg-[#E60303] text-white mt-4 mb-8"
              >
                {" "}
                <IoIosArrowRoundForward className="text-white h-6 w-6 pl-1" />
              </FormSubmitButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnrollYourChild;
