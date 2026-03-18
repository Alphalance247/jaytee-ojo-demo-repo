"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../Teens-coding/Button";
import Link from "next/link";
import { LuGraduationCap, LuMonitor } from "react-icons/lu";
import { FiBookOpen } from "react-icons/fi";
import { IoCode } from "react-icons/io5";
import { BiChevronDown } from "react-icons/bi";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { url: "/impact-tech/", text: "home" },
  { url: "/impact-tech/about-us", text: "about" },
  { url: "", text: "programs" },
  { url: "/impact-tech/blogs", text: "blog" },
  { url: "/impact-tech/contact-us", text: "contact" },
  { url: "/impact-tech/partners", text: "partnership" },
  { url: "/impact-tech/volunteer", text: "volunteering" },
];

const programOptions = [
  {
    icon: <IoCode />,
    url: "/impact-tech/kids-coding",
    text: "Kids Coding & Digital Discovery",
  },
  {
    icon: <LuGraduationCap />,
    url: "/impact-tech/school-coding",
    text: "School Coding Program",
  },
  {
    icon: <FiBookOpen />,
    url: "/impact-tech/train-the-trainer",
    text: "Train the Trainer Program",
  },
  {
    icon: <LuMonitor />,
    url: "/impact-tech/teens-coding",
    text: "Teens Coding Clubs",
  },
];

const Header = () => {
  const [showPrograms, setShowPrograms] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobilePrograms, setMobilePrograms] = useState(false);

  const togglePrograms = () => setShowPrograms(!showPrograms);

  return (
    <div className="border-b border-[#F0F0F0] relative">
      <div className="flex justify-between items-center py-4 px-3 md:px-[100px]">
        {/* Logo */}
        <Image
          src="/assets/impact-tech/impactTech-logo.png"
          alt="impact-tech-logo"
          className="w-[180px] md:w-[256px] h-[45px] md:h-[51px]"
          width={256}
          height={51}
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <div key={link.text} className="relative">
              {link.text === "programs" ? (
                <>
                  <button
                    onClick={togglePrograms}
                    className="flex items-center gap-1"
                  >
                    <p className="text-base capitalize text-[#364153] font-inter">
                      {link.text}
                    </p>
                    <BiChevronDown className="h-4 w-4" />
                  </button>

                  {showPrograms && (
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg z-50 w-fit rounded-[20px] pb-[37px]">
                      <div className="text-[#101828] font-semibold text-2xl pt-[27px] px-12 pb-8">
                        Our Programs
                      </div>

                      <div className="flex flex-col gap-8 md:w-[435px]">
                        {programOptions.map((option) => (
                          <div
                            key={option.text}
                            className="flex items-center gap-[26px] pl-12"
                          >
                            <div className="h-12 w-12 rounded-[10px] bg-[#2A7445] flex justify-center items-center text-white text-2xl">
                              {option.icon}
                            </div>

                            <Link
                              href={option.url}
                              className="text-[#101828] font-inter font-medium"
                              onClick={() => setShowPrograms(false)}
                            >
                              {option.text}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.url}
                  className="capitalize text-[#364153] font-inter text-base"
                >
                  {link.text}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button
            text="contact us"
            url="/impact-tech/contact-us#contact-us-form"
            className="w-[156px] bg-[#E60303] text-white"
          ></Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-6">
          <div className="flex flex-col gap-6 pt-6">
            {links.map((link) => (
              <div key={link.text}>
                {link.text === "programs" ? (
                  <>
                    <button
                      onClick={() => setMobilePrograms(!mobilePrograms)}
                      className="flex items-center justify-between w-full"
                    >
                      <span className="capitalize text-[#364153]">
                        {link.text}
                      </span>
                      <BiChevronDown />
                    </button>

                    {mobilePrograms && (
                      <div className="flex flex-col gap-4 mt-4 pl-4">
                        {programOptions.map((option) => (
                          <Link
                            key={option.text}
                            href={option.url}
                            className="flex items-center gap-3 text-sm"
                            onClick={() => setMobileMenu(false)}
                          >
                            <span className="h-8 w-8 rounded-[6px] bg-[#2A7445] flex justify-center items-center text-white text-xl">
                              {option.icon}
                            </span>
                            {option.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.url}
                    className="capitalize text-[#364153]"
                    onClick={() => setMobileMenu(false)}
                  >
                    {link.text}
                  </Link>
                )}
              </div>
            ))}

            <Button
              text="contact us"
              url="/impact-tech/contact-us#contact-us-form"
              className="w-full bg-[#E60303] text-white"
            ></Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
