import React from "react";
import VolunteerCard from "./VolunteerCard";

const Volunteer = () => {
  return (
    // <div className="w-full">
    <div className="w-full  py-[91px]">
      <div className="flex flex-col justify-center items-center gap-4 text-[#061C3D]  font-inter md:pb-20 pb-10  text-center">
        <div className=" text-[32px] md:text-[48px] font-bold">
          Be a Part of Our Mission
        </div>
        <div className="text-center text-base md:text-lg w-full md:w-[536px] ">
          Real-world outcomes from our programs across schools, communities, and
          institutions.
        </div>
      </div>
      <div className=" md:px-0 px-6 mx-auto max-w-[1112px] grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[31px]">
        {/* <div className=""> */}
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
        {/* </div> */}
        {/* <div>
          <VolunteerCard
            btnText="Become a Volunteer"
            className="bg-[#473BF0]"
            title="Volunteer or Mentor"
            description="Share your skills and help young learners build digital expertise."
            photo="/assets/impact-tech/about-us/mentor.png"
          />
        </div>
        <VolunteerCard
          btnText="Become a Partner"
          className="bg-[#F64B4B]"
          title="Sponsor or Partner"
          description="Support Impact Tech through funding, resources, or collaboration."
          photo="/assets/impact-tech/about-us/partners.png"
        />
      </div> */}
      </div>
    </div>
  );
};

export default Volunteer;
