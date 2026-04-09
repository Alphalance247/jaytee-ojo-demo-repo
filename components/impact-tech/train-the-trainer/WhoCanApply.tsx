import { title } from "process";
import React from "react";
import { FiMonitor } from "react-icons/fi";
import { LuBookOpen, LuGraduationCap } from "react-icons/lu";
import ApplicationCard from "./ApplicationCard";
import Image from "next/image";
import Link from "next/link";
const applications = [
  {
    icon: <LuGraduationCap className="h-8 w-8" />,
    text: "Primary and secondary school teachers looking to integrate coding into their curriculum.",
    title: "Teachers",
  },
  {
    icon: <FiMonitor className="h-8 w-8" />,
    text: "Technology coordinators and IT staff who manage school digital programs.",
    title: "School ICT Coordinators",
  },
  {
    icon: (
      <Image
        src="/assets/impact-tech/train-the-trainer/Icon5.svg"
        width={32}
        height={32}
        alt="icon"
      />
    ),
    title: "Youth Facilitators",
    text: "Community leaders running youth programs, after-school clubs, or tech workshops.",
  },
  {
    icon: <LuBookOpen className="h-8 w-8" />,
    title: "Community Educators",
    text: "Library staff, tutors, and informal educators passionate about digital literacy.",
  },
  {
    icon: (
      <Image
        src="/assets/impact-tech/train-the-trainer/Icon3.svg"
        width={32}
        height={32}
        alt="icon"
        className=""
      />
    ),
    text: "Education program managers from non-profits focused on youth development.",
    title: "NGO Program Leads",
  },
  //   {
  //     icon: "Contact Us",
  //     text: "If you have a passion for education and commitment to empowering youth with digital skills, we encourage you to apply.",
  //     title: "Not sure if you qualify?",
  //   },
];
const lastIndex = applications.length - 1;
const WhoCanApply = () => {
  return (
    <div className="">
      <div className="w-full md:max-w-[956px] mx-auto flex justify-center items-center h-fit md:h-[1142px] md:px-0 px-6 py-10 md:py-0">
        <div className="flex flex-col gap-[64px] justify-center items-center">
          <div>
            <h4 className="font-grostek font-bold leading-10 text-3xl md:text-5xl text-[#101828] text-center">
              Who Can Apply?
            </h4>
            <p className="text-center text-[#4A5565] text-base md:text-xl font-normal font-inter leading-7 w-full md:w-[742px] px-10 mt-[14px]">
              We welcome passionate educators from diverse backgrounds who are
              committed to bringing digital skills to their communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[23px] gap-x-12">
            {applications.map((application, index) => (
              <>
                <ApplicationCard
                  key={index}
                  icon={application.icon}
                  heading={application.title}
                  content={application.text}
                />
                {index === lastIndex && (
                  <div className="flex justify-center items-center h-[246px] px-[33px] w-full md:w-[454px] rounded-[16px] bg-[#2B643D] ">
                    <div className="grid gap-6">
                      <div>
                        <div className="text-white font-inter font-medium text-lg md:text-xl">
                          Not sure if you qualify?
                        </div>
                        <div className="mt-3 text-white text-sm md:text-base leading-[26px] font-inter font-normal">
                          If you have a passion for education and commitment to
                          empowering youth with digital skills, we encourage you
                          to apply.
                        </div>
                      </div>
                      <div>
                        <Link
                          href="/impact-tech/contact-us#contact-us-form"
                          className="bg-white rounded-[10px] h-10 flex justify-center items-center w-fit px-5 text-[#009966] text-center font-medium font-inter text-sm leading-5"
                        >
                          Contact us
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoCanApply;
