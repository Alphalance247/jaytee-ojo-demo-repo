import Link from "next/link";
import React from "react";
const links = [
  { url: "", text: "Explore Programs" },
  { url: "", text: "Become a Volunteer" },
  { url: "", text: "Partner With Us" },
];
const BePartCard = () => {
  return (
    <div className="bg-[#F5F5F5]  md:h-[197px] md:w-[470px] w-full h-[210px] rounded-tr-[50px] rounded-br-[50px] flex  items-center">
      <div className="flex flex-col gap-4 justify-center  h-full px-[21px] font-Roboto">
        <div className="flex items-center gap-2">
          <div className=" h-2.5 w-1 rounded-[12px] bg-[#F81539]"></div>
          <div className=" font-medium text-[#3E3232] text-lg ">
            Be Part of the Impact
          </div>
        </div>
        <p className="text-sm text-[#3E3232BF] w-full  md:max-w-[350px]">
          Join us in empowering the next generation through technology
          education.
        </p>
        <div className="flex md:flex-row flex-col gap-4 items-start  md:items-center">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="text-[#17494D] text-[11px] font-Arial font-normal  border-b-2 border-[#17494D]"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BePartCard;
