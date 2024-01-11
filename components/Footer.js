import React from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 ">
      <div className="w-[90%]  mx-auto grid gap-16">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h2 className="font-semibold">Company</h2>
            <ul className="mt-2">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Media</a>
              </li>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Impact Tech</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold">What we do</h2>
            <ul className="mt-2">
              <li>
                <a href="#">Schools programming program</a>
              </li>
              <li>
                <a href="#">Open programming program</a>
              </li>
              <li>
                <a href="#">Grow campaign</a>
              </li>
              <li>
                <a href="#">Grow campaign</a>
              </li>
            </ul>
          </div>

          <div className="">
            <h2 className="font-semibold">Ways to Give</h2>
            <ul className="mt-2">
              <li>
                <a href="#">Sponsor a child</a>
              </li>
              <li>
                <a href="#">Volunteer</a>
              </li>
              <li>
                <a href="#">Make donations</a>
              </li>
              <li>
                <a href="#">Partnership</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">Ways to Give</h2>
            <address className="mt-2">
              123 Main Street
              <br />
              City, State ZIP
              <br />
              Phone: (123) 456-7890
            </address>
          </div>

          {/* Quick Links */}
        </div>
        <div>
          <div className="flex gap-[17rem] border-t-[1px] border-b-[1px] border-[#454545] py-[2rem]">
            <div>
              <p className="font-semibold uppercase">Follow Us</p>
            </div>
            <div className="flex space-x-4">
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="flex gap-[7rem]  border-b-[1px] border-[#454545] py-[2rem]">
            <div>
              <p className="font-semibold uppercase">
                Subscribe to our newsletter
              </p>
            </div>
            <div className="flex x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className=" px-[14px] py-3 border text-black border-white rounded outline-none w-[556px] mr-4"
              />
              <button className="bg-[#369458] text-white rounded uppercase px-[24px] py-3">
                SignUp
              </button>
            </div>
          </div>
          <div className="flex gap-40 py-[2rem]">
            <Image
              src="/jtoffooterlogo.svg"
              alt="Logo"
              width={189}
              height={56}
            />
            <div className="grid gap-6 leading-5">
              <p className=" text-[14px] font-Roboto">
                Donations are tax-deductible as allowed by law. All content and
                materials on this website, including but not limited to text,
                images, graphics, and design elements, are the sole property of
                Jaytee Ojo Foundation. This site is protected by reCAPTCHA and
                the Google Privacy Policy and Terms of Service apply.
              </p>
              <p className=" text-[14px] font-Roboto">
                © 2023 JayTee Ojo Foundation. All rights reserved | Terms of Use
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
