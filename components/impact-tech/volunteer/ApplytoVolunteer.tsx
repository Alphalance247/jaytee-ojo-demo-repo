import React, { use, useState } from "react";
import Input from "../Teens-coding/FormInput";
import { IoIosArrowRoundForward } from "react-icons/io";
import FormSelect from "../common/FormSelect";
import FormSubmitButton from "../common/FormSubmitButton";
import { BiChevronRight } from "react-icons/bi";
import { useApplicationForm } from "@/store/impact-tech/volunteer/StartVolunteerStore";
import Select from "../common/SelectInput";
import { toast, ToastContainer, Bounce } from "react-toastify";
const roleInterested = [
  {
    role: "Mentor / Instructor",
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
  const [formErrors, setFormErrors] = useState<{
    full_name?: string;
    email?: string;
    preferred_format?: string;
    role_interested_in?: string;
  }>({});
  const { formInput, updateInputField, submitForm, loading, error, resetForm } =
    useApplicationForm();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: typeof formErrors = {};
    // Required fields
    if (!formInput.full_name.trim()) {
      errors.full_name = "Full name is required";
    }

    if (!formInput.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formInput.email)) {
      errors.email = "Enter a valid email";
    }

    if (!formInput.preferred_format) {
      errors.preferred_format = "Select a program";
    }
    if (!formInput.role_interested_in) {
      errors.role_interested_in = "Select a role";
    }
    // If errors exist → stop submit
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    // Clear errors
    setFormErrors({});

    const success = await submitForm();

    if (success) {
      toast.success("Application submitted successfully!");
      resetForm();
    } else {
      toast.error(
        error ||
          "An error occurred while submitting the form. Please try again.",
      );
    }
  };
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
            onSubmit={handleSubmit}
            className="flex flex-col  gap-4 items-center px-4 md:px-[51px] pt-8"
          >
            <div className="grid  gap-4 w-full ">
              <Input
                type="text"
                placeholderText="Full name"
                value={formInput.full_name}
                onChange={(e) => updateInputField("full_name", e.target.value)}
              />
              {formErrors.full_name && (
                <p className="text-red-500 text-sm mt-1 ml-1 font-graphik">
                  {formErrors.full_name}
                </p>
              )}
            </div>
            <div className="grid   gap-4 w-full ">
              {" "}
              <Input
                type="email"
                placeholderText="Email"
                value={formInput.email}
                onChange={(e) => updateInputField("email", e.target.value)}
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1 ml-1 font-graphik">
                  {formErrors.email}
                </p>
              )}
            </div>
            <div className="grid   gap-4 w-full ">
              {" "}
              <Input
                type="text"
                placeholderText="Location (City, Country)"
                value={formInput.location}
                onChange={(e) => updateInputField("location", e.target.value)}
              />
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
                value={formInput.role_interested_in}
                onChange={(value) =>
                  updateInputField("role_interested_in", value)
                }
              />
              {formErrors.role_interested_in && (
                <p className="text-red-500 text-sm mt-1 ml-1 font-graphik">
                  {formErrors.role_interested_in}
                </p>
              )}
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
                value={formInput.preferred_format}
                onChange={(value) =>
                  updateInputField("preferred_format", value)
                }
              />
              {formErrors.preferred_format && (
                <p className="text-red-500 text-sm mt-1 ml-1 font-graphik">
                  {formErrors.preferred_format}
                </p>
              )}
            </div>
            <div className="grid   gap-4 w-full">
              {" "}
              <Input
                type="text"
                placeholderText="Relevant skills or experience"
                value={formInput.skills_experience}
                onChange={(e) =>
                  updateInputField("skills_experience", e.target.value)
                }
              />
            </div>
            <div className="grid   gap-4 w-full ">
              {" "}
              <textarea
                name=""
                id=""
                className="resize-none h-[145px] w-full border border-[#E6E8EC] placeholder:text-[#838E9E] text-[#101828] rounded-[5px] placeholder:pt-3 pl-[10.5px] pt-3"
                placeholder="Message / Additional info"
                value={formInput.message}
                onChange={(e) => updateInputField("message", e.target.value)}
              ></textarea>
            </div>
            <div>
              {" "}
              <FormSubmitButton
                text={loading ? "Submitting..." : "Submit Application"}
                className=" w-[320px] md:w-[505px] bg-[#E60303] text-white mt-4 mb-8"
              >
                <IoIosArrowRoundForward className="text-white h-6 w-6 pl-1" />
              </FormSubmitButton>
            </div>
          </form>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </div>
      </div>
    </div>
  );
};

export default ApplytoVolunteer;
