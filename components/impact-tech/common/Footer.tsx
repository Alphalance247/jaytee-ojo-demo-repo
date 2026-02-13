import Image from "next/image";
import React from "react";
import SocialPill from "./socialPill";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const socials = [
  <FaXTwitter />,
  <RiInstagramFill />,
  <FaFacebookF />,
  <FaLinkedinIn />,
];
const Footer = () => {
  return (
    <div className="bg-[#F5F5F5] h-fit font-DMsans">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-[269px] pt-7 md:pt-14 px-6 md:px-[100px]">
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/impact-tech/impact_tech.png"
            alt="impact-tech-logo"
            className="md:w-[332px] w-[180px]  h-[55px]"
            width={332}
            height={75}
          />
        </div>
        <div className="w-full md:w-1/2 text-[#454545] text-base">
          We are more than just a team; we are a family of diverse, talented
          individuals who bring unique skills and perspectives to the table. Our
          team is united by a shared passion for technology, a commitment to
          sustainability, or a dedication to creativity.
        </div>
      </div>
      {/* <div className=""></div> */}
      <div className="md:px-[100px] border-t border-[#D9D9D9] mt-10 md:mt-20">
        <div className="flex  justify-between items-start  md:items-center pt-6 p-7 md:pb-14">
          <div className="text-[#8B8C8E] text-sm">© 2023 Impact Tech</div>
          <div className="flex gap-2 md:gap-3">
            {socials.map((social, index) => (
              <SocialPill children={social} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
