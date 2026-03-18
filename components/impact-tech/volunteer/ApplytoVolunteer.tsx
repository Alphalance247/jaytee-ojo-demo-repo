import React from "react";
import Input from "../Teens-coding/FormInput";
import { IoIosArrowRoundForward } from "react-icons/io";
import FormSelect from "../common/FormSelect";
import FormSubmitButton from "../common/FormSubmitButton";
import { BiChevronRight } from "react-icons/bi";
import Select from "../common/SelectInput";
const roleInterested = [
  {
    role: "Mentor/Instructor",
  },
  {
    role: "Curriculum Contributor",
  },
  {
    role: "Program Facilitator",
  },
  {
    role: "Community Ambassador",
  },
];
const formats = [
  "In-person volunteering",
  "Virtual / Remote volunteering",
  "Hybrid (both in-person and remote)",
  "Flexible / Open to any",
];
const ApplytoVolunteer = () => {
  return (
    <div
      id="apply-to-volunteer"
      className="h-auto md:h-[1115px] mx-auto max-w-[1437px]"
    >
      <div className="h-fit">
        <div className="flex flex-col justify-center items-center font-inter md:px-0 px-6 md:pt-[101px] pt-10">
          <h5 className="text-[32px] md:text-[48px] text-[#061C3D] font-bold text-center">
            Apply to Volunteer
          </h5>
          <p className="pt-4 text-[#42526B] text-base md:text-lg text-center">
            Tell us a bit about yourself and how you’d like to contribute.
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
            <div className="grid   gap-4 w-full ">
              {" "}
              <Input type="email" placeholderText="Email" />
            </div>
            <div className="grid   gap-4 w-full ">
              {" "}
              <Input type="text" placeholderText="Location (City, Country)" />
            </div>
            <div className="grid   gap-4 w-full">
              {/* <Select> */}
              {/* <option value="" className="flex justify-between items-center">
                  <p> Role interested in</p>
                  <BiChevronRight />
                </option>
                {roleInterested.map((role, index) => (
                  <option key={index} value={role.role}>
                    {role.role}
                  </option>
                ))} */}
              {/* </Select> */}
              <Select
                placeholder="Role Interested in"
                options={roleInterested.map((r) => r.role)}
                heading="Role Interested In"
                className="md:-right-80 right-0"
              />
            </div>
            <div className="grid   gap-4 w-full">
              {/* <FormSelect value="" className="">
                <option value="">Preferred format</option>
                <option value="mentor">Mentor</option>
                <option value="trainer">Trainer</option>
                <option value="support">Support Staff</option>
              </FormSelect> */}
              <Select
                placeholder="Preferred format"
                options={formats}
                heading="Preferred format"
                className="md:-right-80 right-0"
              />
            </div>
            <div className="grid   gap-4 w-full">
              {" "}
              <Input
                type="text"
                placeholderText="Relevant skills or experience"
              />
            </div>
            <div className="grid   gap-4 w-full ">
              {" "}
              <textarea
                name=""
                id=""
                className="resize-none h-[145px] w-full border border-[#E6E8EC] placeholder:text-[#838E9E] text-[#101828] rounded-[5px] placeholder:pt-3 pl-[10.5px]"
                placeholder="Message / Additional info"
              ></textarea>
            </div>
            <div>
              {" "}
              <FormSubmitButton
                text="Submit Application"
                className=" w-[320px] md:w-[505px] bg-[#E60303] text-white mt-4 mb-8"
              >
                <IoIosArrowRoundForward className="text-white h-6 w-6 pl-1" />
              </FormSubmitButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplytoVolunteer;
