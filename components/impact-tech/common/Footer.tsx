import Image from "next/image";
import React from "react";
import SocialPill from "./socialPill";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

// const socials = [FaXTwitter, RiInstagramFill, FaFacebookF, FaLinkedinIn];
const socials = [
  {
    url: "https://x.com/jayteeojofdn",
    icon: <FaXTwitter />,
  },
  {
    url: "https://www.instagram.com/jayteeojofnd?igsh=MWw4d3BmZW1hemw0",
    icon: <RiInstagramFill />,
  },
  {
    url: "https://www.facebook.com/share/1ADXdaVZck/",
    icon: <FaFacebookF />,
  },
  {
    url: "https://www.facebook.com/share/1ADXdaVZck/",
    icon: <FaLinkedinIn />,
  },
];
const Footer = () => {
  return (
    <div className="bg-[#F5F5F5] h-fit font-DMsans">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-[269px] pt-7 md:pt-14 px-6 md:px-0 max-w-[1239px] mx-auto">
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
      <div className=" border-t border-[#D9D9D9] mt-10 md:mt-20  max-w-[1239px] mx-auto ">
        <div className="flex  justify-between items-start  md:items-center pt-6 p-7 md:pb-14 ">
          <div className="text-[#8B8C8E] text-sm">© 2023 Impact Tech</div>
          <div className="flex gap-2 md:gap-3">
            {socials.map((social, index) => (
              <SocialPill key={index}>
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              </SocialPill>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
