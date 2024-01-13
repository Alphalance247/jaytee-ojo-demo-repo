// import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  // const [isActive, setISActive] = useState(false);

  // const handleClick = () => {
  //   setISActive(true);
  // };
  return (
    <header
      className="bg-white text-black"
      style={{ position: "relative", zIndex: 1 }}
    >
      <div className="container mx-auto flex items-center justify-between pl-20 pr-20">
        <div className="flex items-center">
          <Link href="/Home">
            <Image
              src="/logo.png"
              alt="Logo"
              width={189}
              height={56}
              className=" mr-2"
            />
          </Link>
        </div>

        {/* Main Menu */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="px-4 py-2 bg-red-600 text-white flex items-center"
          >
            <h3>
              <i>Donate Now ♥ </i>
            </h3>
          </a>
          <a
            href="#"
            className="px-4 py-2 bg-white text-black border border-green-500 text-green"
          >
            <h3>Impact Tech ↗ </h3>
          </a>
        </div>
      </div>

      {/* Padding*/}
      <div className="py-2" />
      {/* Subheader */}
      <div className=" text-white" style={{ background: "#369458" }}>
        <div
          className="container mx-auto flex items-center justify-center"
          style={{ height: "65px" }}
        >
          <ul className="flex space-x-4 gap-7">
            <li className="inline-block">
              <Link
                href="/AboutUs/About"
                className={`text-white  pb-4 ${"border-b-2"} border-transparent hover:border-white border-white`}
                style={{ fontSize: "14px", fontWeight: `${900}` }}
                // onClick={handleClick}
              >
                ABOUT US
              </Link>
            </li>
            <li className="inline-block">
              <Link
                href="/AboutUs"
                className="text-white border-b-2 pb-4 border-transparent hover:border-white"
                style={{ fontSize: "14px", fontWeight: "900" }}
              >
                GET INVOLVED
              </Link>
            </li>
            <li className="inline-block">
              <Link
                href="/Project/ourProjects"
                className="text-white border-b-2 pb-4 border-transparent hover:border-white"
                style={{ fontSize: "14px", fontWeight: "900" }}
              >
                OUR PROJECTS
              </Link>
            </li>
            <li className="inline-block">
              <Link
                href="#"
                className="text-white border-b-2 pb-4 border-transparent hover:border-white"
                style={{ fontSize: "14px", fontWeight: "900" }}
              >
                MEDIA
              </Link>
            </li>
            <li className="inline-block">
              <Link
                href="#"
                className="text-white border-b-2 pb-4 border-transparent hover:border-white"
                style={{ fontSize: "14px", fontWeight: "900" }}
              >
                NEWS & STORIES
              </Link>
            </li>
            <li className="inline-block">
              <Link
                href="#"
                className="text-white border-b-2 pb-4 border-transparent hover:border-white"
                style={{ fontSize: "14px", fontWeight: "900" }}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Header;
