import React from "react";
import Button from "../Teens-coding/Button";
import Link from "next/link";

const MakeImpactSection = ({
  headingText,
  description,
  imageUrl,
  linkTextClass,
  descriptionClass,
  headingTextClass,
  imageClass,
  btnText,
}: {
  headingText: string;
  description: string;
  imageUrl: string;
  btnText: string;
  linkTextClass: string;
  descriptionClass: string;
  headingTextClass: string;
  imageClass: string;
}) => {
  return (
    <div className="w-full md:max-w-[1440px] mx-auto h-auto md:h-[601.33px] grid items-start md:items-center ">
      <div className="h-full items-center flex md:flex-row flex-col gap-0 md:gap-10">
        <div className="w-full md:w-2/3 font-arial md:px-0 px-6 pb-6 md:pb-0 md:pt-0 pt-6">
          <div
            className={` ${headingTextClass} font-bold  text-[32px] md:text-[48px] leading-[40px] md:leading-[56px]`}
          >
            {headingText}
          </div>
          <p
            className={`${descriptionClass}  text-base pt-6 w-full md:max-w-[515.42px]`}
          >
            {description}
          </p>

          <div className="flex  gap-4 md:gap-[44px] items-start sm:items-center pt-[29px]">
            <Button
              url="/impact-tech/volunteer#apply-to-volunteer"
              text={btnText}
              className="bg-[#E60303] text-white w-[150px] sm:w-[211px]"
            />
            <Link
              href="/impact-tech#our-programs"
              rel="noopener noreferrer"
              className={`${linkTextClass} text-[17px] font-bold border-b-2 `}
            >
              Explore Programs
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <img
            src={imageUrl}
            alt="hands up"
            className={` ${imageClass} h-full w-full rounded-t-full md:block hidden`}
          />
        </div>
      </div>
    </div>
  );
};

export default MakeImpactSection;
