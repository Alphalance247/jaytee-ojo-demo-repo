import Image from "next/image";
import React from "react";
import Button from "../Teens-coding/Button";
import { IoIosArrowRoundForward } from "react-icons/io";

const ImpactProject = ({
  projectImage,
  projectSponsor,
  projectTitle,
  projectDesc,
  className,
  index,
}: {
  projectImage: string;
  projectSponsor: string;
  projectTitle: string;
  projectDesc: string;
  className: string;
  index: number;
}) => {
  return (
    <div className=" w-full md:max-w-[1227px] mx-auto px-6 md:px-0 py-10">
      <div
        className={`flex flex-col md:flex-row gap-10 md:gap-[122px] ${className}`}
      >
        <div className="w-full md:w-1/2">
          <Image
            src={projectImage}
            alt="project image"
            width={513}
            height={318}
            className="rounded-[40px] w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="flex flex-col gap-3 text-[#061C3D]">
            <div className="font-inter text-sm font-normal">
              {projectSponsor}
            </div>
            <div className="font-grostek font-bold text-lg md:text-[32px]">
              {projectTitle}
            </div>
          </div>

          <div className="text-[#061C3D] font-inter text-base">
            {projectDesc}
          </div>

          <Button
            text="View Case Study"
            children={
              <IoIosArrowRoundForward className="text-[#2A7445] h-6 w-6 pl-1" />
            }
            className="bg-[#68D5854D] text-[#2A7445] w-[233px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ImpactProject;
