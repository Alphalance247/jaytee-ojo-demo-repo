import React from "react";
import Button from "../Teens-coding/Button";
import { IoIosArrowRoundForward } from "react-icons/io";

const HeadStartTechnology = () => {
  return (
    <div className="w-full">
      <div className="py-10 md:py-[91px] mx-auto bg-[#68D585] w-full md:max-w-[1245px] shadow-colored-shadow bg-impact-radical h-[392px] grid items-center justify-center rounded-[11px]">
        <div className="text-center text-white px-6 md:px-0">
          <h6 className="font-grostek font-semibold text-3xl md:text-5xl ">
            Give Your Child a Head Start in Technology
          </h6>
          <p className="pt-4">
            Don&apos;t hesitate to leave us your phone number. We will contact
            you to discuss any questions you may have
          </p>
          <div className="flex justify-center items-center mt-8">
            <Button
              text="get started"
              url="/impact-tech/contact-us#contact-us-form"
              className=" w-full md:w-[156px] bg-[#E60303] text-white mt-4 mb-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadStartTechnology;
