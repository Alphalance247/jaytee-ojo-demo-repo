import Image from "next/image";
import React from "react";
import VolunteerWaysCard from "./VolunteerWaysCard";
const leftCol = [
  {
    url: "/assets/impact-tech/volunteer/Rectangle7.png",
    title: "Curriculum Contributor",
    desc: "Help design, review, or improve learning materials and lesson plans.",
    class: "w-[320px] md:w-[364px] h-[219px]",
  },
  {
    url: "/assets/impact-tech/volunteer/Rectangle8.png",
    title: "Community Ambassador",
    desc: "Promote programs, engage schools and communities, and help grow participation.",
    class: "w-[320px] md:w-[364px] h-[239px]",
  },
];

const rightCol = [
  {
    url: "/assets/impact-tech/volunteer/Rectangle6.png",
    title: "Mentor / Instructor",
    desc: "Guide learners through coding, digital skills, or career pathways through structured sessions and mentorship.Icon keywords: mentor, teacher, code, presentation",
    class: "w-[320px] md:w-[323px] md:h-fit",
  },
  {
    url: "/assets/impact-tech/volunteer/Rectangle9.png",
    title: "Program Facilitator",
    desc: "Support program delivery, classroom management, and learner engagement.",
    class: "w-[320px] md:w-[323px]",
  },
];
const WaysVoluntaryCan = () => {
  return (
    <div className="flex flex-col md:flex-row  w-full justify-between items-start max-w-[1441px] gap-10 mx-auto py-10 md:pt-[91px] md:px-0 px-6">
      {/* LEFT COLUMN */}
      <div className=" w-full md:max-w-[438px] flex flex-col ">
        <div className="">
          <h3 className="text-black text-[32px] md:text-[48px] font-semibold font-grostek leading-[100%] max-w-[378px]">
            Ways You Can Volunteer
          </h3>
          <p className="text-black text-base md:text-lg font-inter pt-5 max-w-[326px]">
            Choose a role that fits your skills, availability, and passion.
          </p>
        </div>

        <div className="flex flex-col gap-10 md:gap-[231px] pt-6  md:pt-[127px] ">
          {leftCol.map((item, index) => (
            <div key={index} className="relative ">
              <Image
                src={item.url}
                width={438}
                height={452}
                alt={item.title}
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute bottom-0 md:bottom-[23px] -right-0.5  md:-right-[233px]">
                <VolunteerWaysCard
                  title={item.title}
                  desc={item.desc}
                  className={item.class}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className=" w-full md:max-w-[438px] flex flex-col gap-10 md:gap-[267px]  ">
        {rightCol.map((item, index) => (
          <div key={index} className="relative w-full ">
            <Image
              src={item.url}
              width={438}
              height={453}
              alt={item.title}
              className="w-full md:h-auto object-cover rounded-lg"
            />

            <div className="absolute bottom-0 md:bottom-[59px] -right-0.5 md:-left-[171px]">
              <VolunteerWaysCard
                title={item.title}
                desc={item.desc}
                className={item.class}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaysVoluntaryCan;
