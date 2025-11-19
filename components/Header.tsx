"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import Container from "./common/container";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("");

  const router = useRouter();

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleActiveLink = (text: string) => {
    setIsActive(text);
  };
  return (
    <header className="bg-white text-black">
      <div className="flex items-center max-w-[1280px] mx-auto justify-between px-20 py-4 max-sm:p-2 max-sm:text-xs max-md:px-8 max-md:py-4">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={189}
              height={56}
              className="mr-2 max-sm:w-[120px]"
            />
          </Link>
        </div>

        {/* Main Menu */}
        <div className="flex space-x-4 items-center ">
          <Link
            href="/donate"
            className="px-4 py-2 bg-red-600 text-white flex  max-sm:py-1 max-sm:px-2 max-sm:text-xs hover:bg-white hover:text-black hover:border-2 border-red-600"
          >
            <h3>
              <i>Donate Now ♥ </i>
            </h3>
          </Link>

          <Link
            href=""
            className="px-4 py-2 bg-white text-black border border-green-500 text-green hover:bg-green-400 max-sm:py-1 max-sm:px-2 max-sm:text-xs"
          >
            <h3>Impact Tech ↗ </h3>
          </Link>
        </div>
      </div>

      <div className="text-white bg-[#369458] h-[65px] flex items-center justify-center max-sm:relative max-sm:pr-8 max-sm:justify-end max-md:h-[50px]">
        <FaBars
          onClick={handleMenuClick}
          className={`hidden max-sm:text-2xl max-sm:${
            isOpen ? <FaArrowLeft /> : "grid"
          } max-md:hidden`}
        />
        <FaArrowLeft
          className={`hidden max-sm:text-2xl max-sm:${
            isOpen ? "grid" : "hidden"
          } max-md:hidden`}
          onClick={handleMenuClick}
        />
        <ul
          className={`flex space-x-12 gap-7 ${
            isOpen ? "max-sm:grid" : "max-sm:hidden"
          }  max-sm:grid-cols-1 max-sm:z-50 max-sm:text-center max-sm:font-normal max-sm:w-[100%] max-sm:absolute max-sm:top-[3rem] max-sm:py-8 max-sm:text-black max-sm:bg-white max-sm:h-[auto] max-sm:left-0 max-md:gap-2 max-md:space-x-2`}
        >
          <li>
            <Link
              href="/about-us"
              className={`text-white pb-5  ${
                router.pathname === "/about-us"
                  ? "border-b-4 border-[white]"
                  : "hover:border-white hover:border-b-4"
              }  max-sm:text-black max-md:pb-2 max-md:text-xs max-md:font-medium`}
              style={{ fontSize: "14px", fontWeight: `${900}` }}
              onClick={() => handleActiveLink("about-us")}
            >
              ABOUT US
            </Link>
          </li>

          <li className={`inline-block `}>
            <Link
              href="/volunteer"
              className={`text-white  ${
                router.pathname === "/volunteer"
                  ? "border-b-4 border-[white]"
                  : "hover:border-white hover:border-b-4"
              } pb-5 border-transparent hover:border-white max-sm:text-black max-md:pb-2`}
              style={{ fontSize: "14px", fontWeight: "900" }}
            >
              GET INVOLVED
            </Link>
          </li>
          <li className="inline-block">
            <Link
              href="/our-project"
              className={`text-white ${
                router.pathname === "/our-project"
                  ? "border-b-4 border-[white]"
                  : "hover:border-white hover:border-b-4"
              } pb-5  hover:border-white max-sm:text-black max-md:pb-2`}
              style={{ fontSize: "14px", fontWeight: "900" }}
            >
              OUR PROJECTS
            </Link>
          </li>
          <li className="inline-block">
            <Link
              href="/media"
              className={`text-white ${
                router.pathname === "/media"
                  ? "border-b-4 border-[white]"
                  : "hover:border-white hover:border-b-4"
              } pb-5  hover:border-white max-sm:text-black max-md:pb-2`}
              style={{ fontSize: "14px", fontWeight: "900" }}
            >
              MEDIA
            </Link>
          </li>
          <li className="inline-block">
            <Link
              href="/news"
              className={`text-white pb-5 ${
                router.pathname === "/news"
                  ? "border-b-4 border-[white]"
                  : "hover:border-white hover:border-b-4"
              } hover:border-white max-sm:text-black max-md:pb-2`}
              style={{ fontSize: "14px", fontWeight: "900" }}
            >
              NEWS & STORIES
            </Link>
          </li>
          <li className="inline-block">
            <Link
              href="/contact-us"
              className={`text-white pb-5 ${
                router.pathname === "/contact-us"
                  ? "border-b-4 border-[white]"
                  : "hover:border-white hover:border-b-4"
              } hover:border-white max-sm:pb-2 max-sm:text-black max-md:pb-2`}
              style={{ fontSize: "14px", fontWeight: "900" }}
            >
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
