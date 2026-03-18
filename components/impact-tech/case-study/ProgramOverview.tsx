import React from "react";
import ProgramOverviewCard from "./ProgramOverviewCard";

const ProgramOverview = ({
  overview,
  challenge,
  approach,
  trainingCourse,
  children,
}: {
  overview: string;
  challenge: string;
  approach: React.ReactNode;
  trainingCourse: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full">
      <div className="w-full mx-auto  md:max-w-[1440px] px-6 md:px-0 font-inter text-center flex flex-col md:justify-center items-center ">
        <div className=" py-10 md:py-[91px] w-full md:w-[1129px]">
          <h2 className="font-bold text-[#061C3D] text-[32px] md:text-[48px]">
            Program Overview
          </h2>
          <p className="font-normal text-base leading-[32px] md:text-xl text-[#464646] pt-7 md:pt-[51px]">
            {overview}
          </p>
        </div>
      </div>
      <div className="bg-[#2A7445] w-full ">
        <div className="w-full md:max-w-[1440px] mx-auto px-4 md:px-0 ">
          <div className="py-10 md:py-[91px] md:w-[983px] w-full flex flex-col gap-[38px]">
            <ProgramOverviewCard title="The Challenge">
              <p className="text-lg md:text-xl font-normal pt-8 md:pt-[46px] pr-6 md:pr-[52px] whitespace-pre-line ">
                {challenge}
              </p>
            </ProgramOverviewCard>
            <ProgramOverviewCard title="Our Approach">
              <p className="text-lg md:text-xl font-normal pt-[46px] pr-6 md:pr-[52px] whitespace-pre-line ">
                Impact Tech designed and delivered hands-on training workshops
                that focused on practical learning and real-world application.
                <br />
                The program included:
              </p>
              {approach}
              <p className="text-lg md:text-xl font-normal">
                {" "}
                Educators actively participated in building and styling web
                pages using {trainingCourse}.
              </p>
            </ProgramOverviewCard>
          </div>
        </div>
        <div className="md:pb-[51px] pb-10 bg-[#2A7445] bg-[url(/assets/impact-tech/hand-trophy.png)] bg-no-repeat bg-right-bottom bg-blend-overlay">
          <div className="">
            <div className="bg-white rounded-[50px] md:rounded-tl-none md:rounded-bl-none md:py-0 py-10 h-fit md:h-[797px] w-full md:w-[879px] flex justify-center items-center">
              <div className=" font-inter mx-6 md:mx-[116px] text-[#090909]  w-full md:max-w-[648px]">
                <h4 className=" text-2xl md:text-[56px] font-bold md:leading-[60px] ">
                  Impact and <br /> Outcomes
                </h4>
                <p className="text-base md:text-lg font-normal pt-6 mr-10">
                  The training empowered educators to confidently introduce
                  coding into their classrooms, expanding access to digital
                  education across multiple schools.
                </p>
                <div className="pt-12 mr-0 md:mr-10">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramOverview;
