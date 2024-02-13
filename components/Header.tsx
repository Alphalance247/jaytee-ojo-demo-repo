// "use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaArrowLeft } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("");

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleActiveLink = (text: string) => {
    setIsActive(text);
  };
  return (
    <header className="bg-white text-black">
      <div className="flex items-center justify-between px-20 py-4 max-sm:p-2 max-sm:text-xs max-md:px-8 max-md:py-4">
        <div className="flex items-center">
          <Link href="/Home">
            <Image
              src="/logo.png"
              alt="Logo"
              width={189}
              height={56}
              className="mr-2 max-sm:w-[120px]"
            />
          </Link>
        </div>

        {/* Main Menu */}
        <div className="flex space-x-4 items-center ">
          <a
            href="#"
            className="px-4 py-2 bg-red-600 text-white flex  max-sm:py-1 max-sm:px-2 max-sm:text-xs"
          >
            <h3>
              <i>Donate Now ♥ </i>
            </h3>
          </a>
          <a
            href="#"
            className="px-4 py-2 bg-white text-black border border-green-500 text-green max-sm:py-1 max-sm:px-2 max-sm:text-xs"
          >
            <h3>Impact Tech ↗ </h3>
          </a>
        </div>
      </div>

      {/* Padding*/}
      {/* <div className="py-2" /> */}
      {/* Subheader */}

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
          className={`flex space-x-4 gap-7 ${
            isOpen ? "max-sm:grid" : "max-sm:hidden"
          }  max-sm:grid-cols-1 max-sm:z-50 max-sm:text-center max-sm:font-normal max-sm:w-[100%] max-sm:absolute max-sm:top-[3rem] max-sm:text-black max-sm:bg-white max-sm:h-[400px] max-sm:left-0 max-md:gap-2 max-md:space-x-2`}
        >
          <li
            className={`inline-block pb-4 max-sm:mt-4`}
            // onClick={() => handleActiveLink("/AboutUs/About")}
          >
            <Link
              href="/AboutUs/About"
              className={`text-white pb-4  border-transparent
             ${
               isActive === "/AboutUs/About" ? "border-b-2 border-white" : ""
             }hover:border-white border-b-2    max-sm:text-black max-md:pb-2 max-md:text-xs max-md:font-medium`}
              style={{ fontSize: "14px", fontWeight: `${900}` }}
              onClick={() => handleActiveLink("/AboutUs/About")}
            >
              ABOUT US
            </Link>
          </li>

          <li className="inline-block">
            <Link
              href=""
              className="text-white border-b-2 pb-4 border-transparent hover:border-white max-sm:text-black max-md:pb-2"
              style={{ fontSize: "14px", fontWeight: "900" }}
            >
              GET INVOLVED
            </Link>
          </li>
          <li className="inline-block">
            <Link
              href="/Project/ourProjects"
              className="text-white border-b-2 pb-4 border-transparent hover:border-white max-sm:text-black max-md:pb-2"
              style={{ fontSize: "14px", fontWeight: "900" }}
            >
              OUR PROJECTS
            </Link>
          </li>
          <li className="inline-block">
            <Link
              href="#"
              className="text-white border-b-2 pb-4 border-transparent hover:border-white max-sm:text-black max-md:pb-2"
              style={{ fontSize: "14px", fontWeight: "900" }}
            >
              MEDIA
            </Link>
          </li>
          <li className="inline-block">
            <Link
              href="/News&Stories/NewsCampaign"
              className="text-white border-b-2 pb-4 border-transparent hover:border-white max-sm:text-black max-md:pb-2"
              style={{ fontSize: "14px", fontWeight: "900" }}
            >
              NEWS & STORIES
            </Link>
          </li>
          <li className="inline-block">
            <Link
              href="/Contact/ContactUs"
              className="text-white border-b-2 pb-4 border-transparent hover:border-white max-sm:pb-2 max-sm:text-black max-md:pb-2"
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
