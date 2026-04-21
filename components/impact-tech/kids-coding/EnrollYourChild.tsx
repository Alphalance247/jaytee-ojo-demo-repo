import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Input from "../Teens-coding/FormInput";
// import Select from "../common/FormSelect";
import Select from "../common/SelectInput";
import FormSubmitButton from "../common/FormSubmitButton";
import { useApplicationForm } from "@/store/impact-tech/kids-coding/EnrollmentStore";
import { ToastContainer, toast, Bounce } from "react-toastify";
const programs = [
  "Coding For Kids",
  "Teens Coding",
  "School Coding Club",
  "Train the Trainer",
];
const EnrollYourChild = () => {
  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   role: "",
  //   organization: "",
  //   program: "",
  //   message: "",
  // });

  const { formInput, updateInputField, submitForm, loading, error, resetForm } =
    useApplicationForm();
  const [formErrors, setFormErrors] = useState<{
    full_name?: string;
    email?: string;
    program_interest?: string;
  }>({});
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
    <div id="enroll-form" className="bg-[#F4F7FA] h-fit  ">
      <div className="mx-auto w-full md:max-w-[607px] py-10 md:py-[91px]">
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
            onSubmit={handleSubmit}
            className="flex flex-col  gap-4 items-center px-4 md:px-[51px] pt-8"
          >
            <div className="grid  gap-4 w-full ">
              {" "}
              <Input
                type="text"
                placeholderText="Parent/Guardian Name "
                value={formInput.parent_guardian_name}
                onChange={(e) =>
                  updateInputField("parent_guardian_name", e.target.value)
                }
              />
              {/* {formErrors.parent_guardian_name && (
                <p className="text-red-500 text-sm mt-1 ml-1 font-graphik">
                  {formErrors.parent_guardian_name}
                </p>
              )} */}
            </div>
            <div className="grid   gap-4 w-full ">
              {" "}
              <Input
                type="email"
                placeholderText="Email"
                name="email"
                value={formInput.email}
                onChange={(e) => updateInputField("email", e.target.value)}
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1 ml-1 font-graphik">
                  {formErrors.email}
                </p>
              )}
            </div>
            {/* <div className="grid   gap-4 w-full ">
              {" "}
              <Input type="tel" placeholderText="Phone" value={formInput.phone} onChange={(e) => updateInputField("phone", e.target.value)} />
            </div> */}
            <div className="grid   gap-4 w-full">
              {" "}
              <Input
                type="text"
                placeholderText="Child Name"
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
                type="text"
                placeholderText="Age"
                value={formInput.age}
                onChange={(e) => updateInputField("age", e.target.value)}
              />
            </div>
            <div className="grid gap-4 w-full">
              <Select
                placeholder="program interest"
                options={programs}
                heading="Program interest"
                className="md:-right-52 right-0"
                value={formInput.program_interest}
                onChange={(value) =>
                  updateInputField("program_interest", value)
                }
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
              <Input
                type="text"
                placeholderText="School"
                value={formInput.school_name}
                onChange={(e) =>
                  updateInputField("school_name", e.target.value)
                }
              />
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
                text={loading ? "Submitting..." : "Enroll Now"}
                className=" w-[320px] md:w-[505px] bg-[#E60303] hover:bg-red-700 text-white mt-4 mb-8"
              >
                {" "}
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

export default EnrollYourChild;
