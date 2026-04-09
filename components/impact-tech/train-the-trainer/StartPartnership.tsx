import React, { useState } from "react";
import Input from "../Teens-coding/FormInput";
import { IoIosArrowRoundForward } from "react-icons/io";
import Select from "../common/SelectInput";
import FormSubmitButton from "../common/FormSubmitButton";
import { useApplicationForm } from "@/store/impact-tech/train-the-trainer/partnershipStore";
import { ToastContainer, toast, Bounce } from "react-toastify";

const programs = [
  "Train The Trainer",
  "Coding for Kids",
  "Teens Coding",
  "School Coding Club",
];
const StartPartnership = () => {
  const [formErrors, setFormErrors] = useState<{
    full_name?: string;
    email?: string;
    program_interest?: string;
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

    if (!formInput.program_interest) {
      errors.program_interest = "Select a program";
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
    <div id="start-partnership" className="h-fit">
      <div className="flex flex-col justify-center items-center font-inter md:px-0 px-6 pt-10 md:pt-[101px]">
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
          onSubmit={handleSubmit}
          className="flex flex-col  gap-4 items-center px-4 md:px-[51px] pt-8"
        >
          <div className="grid  gap-4 w-full ">
            {" "}
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
          <div className="grid   gap-4 w-full">
            {" "}
            <Input
              type="text"
              placeholderText="Role"
              value={formInput.role}
              onChange={(e) => updateInputField("role", e.target.value)}
            />
          </div>
          <div className="grid   gap-4 w-full ">
            {" "}
            <Input
              type="text"
              placeholderText="Organization/School"
              value={formInput.school_organization_name}
              onChange={(e) =>
                updateInputField("school_organization_name", e.target.value)
              }
            />
          </div>
          <div className="grid gap-4 w-full">
            <Select
              placeholder="Program interest"
              options={programs}
              heading="Program interest"
              className="md:-right-52 right-0"
              value={formInput.program_interest}
              onChange={(value) => updateInputField("program_interest", value)}
            />
            {formErrors.program_interest && (
              <p className="text-red-500 text-sm mt-1 ml-1 font-graphik">
                {formErrors.program_interest}
              </p>
            )}
            {/* <Select value="" className="">
              <option value="">Program interest</option>
              <option value="Train the Trainer"> Train-the-Trainer</option>
              <option value="Coding for Kids">Coding for Kids</option>
              <option value="support">Teens Coding</option>
              <option value="support">School Ccoding Club</option>
            </Select> */}
          </div>

          <div className="grid   gap-4 w-full ">
            {" "}
            <textarea
              name=""
              id=""
              className="resize-none h-[145px] w-full border border-[#E6E8EC] text-[#101828] rounded-[5px] placeholder:pt-3 pl-[10.5px] pt-3"
              placeholder="Message / Additional info"
              value={formInput.message}
              onChange={(e) => updateInputField("message", e.target.value)}
            ></textarea>
          </div>
          <div>
            {" "}
            <FormSubmitButton
              text={loading ? "Submitting..." : "Submit Partnership Request"}
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
  );
};

export default StartPartnership;
