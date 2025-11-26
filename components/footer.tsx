"use client";
import Image from "next/image";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { environment } from "@/pages/env/env.local";
import toast from "react-hot-toast";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const link1 = [
    {
      link: "/about-us",
      name: " About Us",
    },
    {
      link: "/about-us",
      name: "Media",
    },
    {
      link: "/our-story",
      name: "Our Story",
    },
    {
      link: "/impact-tech",
      name: "Impact Tech",
    },
    {
      link: "/contact-us",
      name: "Contact Us",
    },
  ];
  const link2 = [
    {
      link: "/grow-campaign",
      name: "Schools programming program",
    },
    {
      link: "/",
      name: "Open programming program",
    },
    {
      link: "/grow-campaign",
      name: "Grow campaign",
    },
    {
      link: "/our-project/trainer",
      name: "Train the trainer",
    },
  ];

  const link3 = [
    {
      link: "/donate",
      name: "Sponsor a child",
    },
    {
      link: "/volunteer",
      name: "Volunteer",
    },
    {
      link: "/donate",
      name: "Make donations",
    },
    {
      link: "/",
      name: "Partnership",
    },
  ];

  const handleSubnmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post(
        `${environment?.baseUrl}/utilities/jof/email-sub`,
        {
          email,
        }
      );

      if (res.status === 200 || res.status === 201) {
        toast.success(res?.data?.success || "Email Submitted Successfully");
        setEmail("");
      }

      setLoading(false);
    } catch (err) {
      // Extract the error message from the response
      let errorMessage = "An error occurred please try again or contact Admin";
      if (err instanceof AxiosError) {
        // Check if err is an instance of AxiosError
        errorMessage = err.response?.data?.message || errorMessage;
      }

      toast.error(errorMessage);
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white ">
      <div className="max-w-[1280px] py-16 px-2 max-lg:px-4 max-lg:py-16 max-md:py-12 mx-auto grid gap-16 max-sm:w-[95%] max-lg:p-10">
        <div className=" grid grid-cols-4 gap-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-md:gap-10 max-lg:grid-cols-2">
          <div className="">
            <h2 className="font-bold font-RobotoSlab text-[25px] leading-6 mb-4">
              Company
            </h2>
            <ul className="text-[#FCFCFC] flex flex-col gap-4">
              {link1?.map((el, i) => (
                <li className="" key={i}>
                  <Link
                    href={el?.link || ""}
                    className="text-[#FCFCFC] font-Roboto text-base"
                  >
                    {el?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-bold font-RobotoSlab text-[25px] leading-6 mb-4">
              What we do
            </h2>
            <ul className="text-[#FCFCFC] flex flex-col gap-8">
              {link2?.map((el, i) => (
                <li className="" key={i}>
                  <Link
                    href={el?.link || ""}
                    className="text-[#FCFCFC] font-Roboto text-base"
                  >
                    {el?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h2 className="font-bold font-RobotoSlab text-[25px] leading-6 mb-4">
              Ways to Give
            </h2>

            <ul className="text-[#FCFCFC] flex flex-col gap-8">
              {link3?.map((el, i) => (
                <li className="" key={i}>
                  <Link
                    href={el?.link || ""}
                    className="text-[#FCFCFC] font-Roboto text-base"
                  >
                    {el?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-bold font-RobotoSlab text-[25px] leading-6 mb-4">
              Contact Us
            </h2>
            <div className="flex flex-col gap-8">
              <address className="mt-2 text-[#FCFCFC] ">
                No.1 JayTee Ojo Crescent, Off
                <br />
                Okemesi Road, Ikoro Ekiti, Ekiti
                <br />
                State, Nigeria.
              </address>

              <p className="font-Roboto text-base">Monday to Friday</p>
              <p className="font-Roboto text-base">
                8:00 a.m to 6:00 p.m (GMT)
              </p>
            </div>
          </div>

          {/* Quick Links */}
        </div>
        <div>
          <div className="flex gap-[17rem] border-t-[1px] border-b-[1px] border-[#454545] py-[2rem] max-sm:inline-block max-sm:py-4 max-md:w-fit max-md:py-5">
            <div className=" mb-4">
              <p className="font-semibold uppercase ">Follow Us</p>
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

          <div className="flex gap-[7rem]  border-b-[1px] border-[#454545] py-[2rem] max-sm:py-4 max-md:block max-md:border-none max-lg:block">
            <div className=" mb-4">
              <p className="font-semibold uppercase">
                Subscribe to our newsletter
              </p>
            </div>
            <form
              action="submit"
              onSubmit={handleSubnmit}
              className="w-[70%] max-md:w-full"
            >
              <div className="flex gap-3 max-md:flex-col">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  required
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className=" px-[14px] py-3 border text-black border-white block rounded outline-none w-[500px] italic max-md:w-full"
                />
                <button
                  className="bg-[#369458] block w-fit text-white rounded uppercase px-[24px] py-3 max-md:w-full"
                  type="submit"
                >
                  {loading ? "Subscribing..." : "Sign Up"}
                </button>
              </div>
            </form>
          </div>
          <div className="flex items-start gap-40 py-[2rem] max-sm:inline-block max-md:gap-24">
            <Image
              src="/jtoffooterlogo.svg"
              alt="Logo"
              width={189}
              height={56}
            />
            <div className="grid gap-6 leading-5">
              <p className=" text-[14px] font-Roboto break-words">
                Donations are tax-deductible as allowed by law. All content and
                materials on this website, including but not limited to text,
                images, graphics, and design elements, are the sole property of
                Jaytee Ojo Foundation. This site is protected by reCAPTCHA and
                the Google Privacy Policy and Terms of Service apply.
              </p>
              <p className=" text-[14px] font-Roboto  break-words">
                © 2023 JayTee Ojo Foundation. All rights reserved | Terms of Use
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
