import React from "react";
import VolunteerCard from "../About-us/VolunteerCard";
const SomethingSpecific = () => {
  return (
    <div className="mx-auto md:max-w-[1121px] w-full pb-10 md:pb-[141px]  md:pt-[108px] px-6 md:px-0">
      <div className="flex flex-col justify-center items-center gap-4 text-center font-inter pb-10 md:pb-20">
        <div className="">
          <h4 className="text-[32px] md:text-[56px] leading-[40px] md:leading-[60px] text-[#061C3D] font-bold">
            Looking for Something Specific?
          </h4>
        </div>
        <div>
          <p className="font-normal text-[#42526B] md:text-lg text-base">
            Explore opportunities to learn, collaborate, or contribute to our
            mission.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-6 md:gap-[31px] ">
        <VolunteerCard
          btnText="Apply Now"
          className="bg-[#68D585]"
          title="Apply to a Program"
          description="Enroll in one of our coding programs and start learning today"
          photo="/assets/impact-tech/about-us/youngStudent.png"
        />
        <VolunteerCard
          btnText="Become a Volunteer"
          className="bg-[#473BF0]"
          title="Volunteer or Mentor"
          description="Share your skills and help young learners build digital expertise."
          photo="/assets/impact-tech/about-us/mentor.png"
        />
        <VolunteerCard
          btnText="Become a Partner"
          className="bg-[#F64B4B]"
          title="Sponsor or Partner"
          description="Support Impact Tech through funding, resources, or collaboration."
          photo="/assets/impact-tech/about-us/partners.png"
        />
      </div>
    </div>
  );
};

export default SomethingSpecific;
