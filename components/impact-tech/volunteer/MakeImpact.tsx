import React from "react";
import Button from "../Teens-coding/Button";

const MakeImpact = () => {
  return (
    <div className="max-w-[1440px] mx-auto h-auto md:h-[601.33px] grid items-center">
      <div className="h-full items-center flex md:flex-row flex-col gap0\ md:gap-10">
        <div className="w-full md:w-2/3 font-arial md:px-0 px-6 pb-6 md:pb-0 md:pt-0 pt-6">
          <div className="font-bold  text-[#061C3D] text-[32px] md:text-[48px] leading-normal md:leading-[56px]">
            Ready to Make an Impact?
          </div>
          <p className="text-[#17494D] text-sm md:text-base   pt-6 w-full md:max-w-[515.42px]">
            Join a growing community of volunteers shaping the future through
            education and technology.
          </p>
          <div className="flex gap-4 items-center pt-[29px]">
            <Button
              text="Apply to Volunteer"
              className="text-white bg-[#E60303] w-[150px] md:w-[211px]"
              children=""
            />
            <div>
              <a
                href="/"
                className="text-[#17494D] text-[17px] font-bold border-b-2 border-[#17494D]"
              >
                Explore Programs
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <img
            src="/assets/impact-tech/volunteer/hands.png"
            alt="hands up"
            className="h-full w-full rounded-t-full md:block hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default MakeImpact;
