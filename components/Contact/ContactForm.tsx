"use client";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import Container from "../common/container";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";
import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    email_4: "",
    first_name_1: "",
    last_name_2: "",
    phone_number_5: "",
    message_3: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubnmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post(`${environment?.baseUrl}/jof/contact-us`, {
        ...form,
      });

      if (res.status === 200 || res.status === 201) {
        toast.success(res?.data?.message || "Form Submitted Successfully");
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

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container>
      <div className="flex  max-sm:block">
        <div className="bg-[#F5F5F5] w-[100%] p-16 max-sm:p-5 max-lg:p-8">
          <form action="submit" onSubmit={handleSubnmit}>
            <h3 className=" font-RobotoSlab font-bold text-4xl text-[#262626] mb-2 max-sm:text-2xl">
              Send us a message
            </h3>
            <p className=" font-Roboto text-base text-[#595959] max-sm:text-sm">
              Please allow up to 48 hours to receive a reply.
            </p>
            <div className="mt-8">
              <div className="grid grid-cols-2 gap-8 max-sm:grid max-sm:grid-cols-1 max-sm:gap-y-4">
                <div>
                  <label htmlFor="Firstname">
                    First name
                    <span className="text-[#E60303] font-Roboto text-sm">
                      *
                    </span>
                  </label>
                  <br />
                  <br />
                  <input
                    type="text"
                    id="Firstname"
                    name="first_name_1"
                    value={form?.first_name_1 || ""}
                    onChange={handleChange}
                    placeholder="Enter first name"
                    className=" outline-none border-2 rounded-[3px] w-[329px] p-2 max-sm:w-[100%] max-md:w-[100%]"
                  />
                </div>
                <div>
                  <label htmlFor="lastname">
                    Last Name
                    <span className="text-[#E60303] font-Roboto text-sm">
                      *
                    </span>
                  </label>
                  <br />
                  <br />

                  <input
                    type="text"
                    id="lastname"
                    required
                    name="last_name_2"
                    value={form?.last_name_2 || ""}
                    onChange={handleChange}
                    placeholder="Enter last name"
                    className="outline-none  border-2 rounded-[3px] w-[329px] p-2 max-sm:w-[100%] max-md:w-[100%]"
                  />
                </div>

                <div>
                  <label htmlFor="email">
                    Email
                    <span className="text-[#E60303] font-Roboto text-sm">
                      *
                    </span>
                  </label>
                  <br />
                  <br />

                  <input
                    type="email"
                    value={form?.email_4 || ""}
                    id="email"
                    required
                    name="email_4"
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className="outline-none  border-2 rounded-[3px] w-[329px] p-2 max-sm:w-[100%] max-md:w-[100%]"
                  />
                </div>

                <div>
                  <label htmlFor="number">
                    Number
                    <span className="text-[#E60303] font-Roboto text-sm">
                      *
                    </span>
                  </label>
                  <br />
                  <br />

                  <input
                    type="text"
                    id="number"
                    required
                    value={form?.phone_number_5 || ""}
                    onChange={handleChange}
                    name="phone_number_5"
                    placeholder="Enter phone number"
                    className="outline-none  border-2 rounded-[3px] w-[329px] p-2 max-sm:w-[100%] max-md:w-[100%]"
                  />
                </div>
              </div>
              <div className="mb-8 mt-8">
                <label htmlFor="Message">Message</label>
                <br />
                <br />
                <input
                  type="message"
                  onChange={handleChange}
                  value={form?.message_3}
                  name="message_3"
                  placeholder="Write your message here..."
                  id="Message"
                  className="w-[674px] border-[#595959] rounded-[3px] outline-none pb-[170px] pl-2 pt-4 pr-4 break-words max-sm:w-[100%] max-md:w-[100%]"
                />
              </div>
              <button
                className="font-Roboto font-black text-sm py-6 px-10 rounded bg-[#369458] uppercase text-white"
                type="submit"
              >
                {loading ? "Submitting..." : "submit message"}
              </button>
            </div>
          </form>
        </div>

        <div className="bg-[#369458] px-12 py-12 flex flex-col gap-y-8 max-sm:p-5">
          <h6 className=" font-RobotoSlab text-2xl font-bold text-white">
            Contact Us
          </h6>
          <div className="text-[#FCFCFC]">
            <p className="font-Roboto font-black text-[13px] uppercase">
              Service Center hours
            </p>
            <p className=" font-Roboto text-base">
              Monday to Friday <br /> 8:00 a.m to 4:00 p.m (WAT)
            </p>
          </div>
          <div className="text-[#FCFCFC]">
            <p className="font-Roboto font-black text-[13px] uppercase">
              OFFICE Address
            </p>
            <address className="font-Roboto text-base">
              No 10 Bolámgbé Mall, behind NNPC Bank road, Ado Ekiti
            </address>
          </div>

          <div className="text-[#FCFCFC] ">
            <p className="font-Roboto font-black text-[13px] uppercase">
              headquarter
            </p>
            <address className="font-Roboto text-base">
              No.1 JayTee Ojo Crescent, Off Okemesi Road, Ikoro Ekiti, Ekiti
              State, Nigeria.
            </address>
          </div>
          <div className="text-[#FCFCFC] ">
            <p className="font-Roboto font-black text-[13px] uppercase">
              email address
            </p>
            <p className="font-Roboto text-base">
              If you have any questions you can reach out via:
            </p>
            <li className=" list-none underline mt-2">
              <a href="email">jayteeojo@gmail.com</a>
            </li>
          </div>
          <div className="text-[#FCFCFC] ">
            <p className="font-semibold uppercase mb-6">socials</p>
            <div className="flex gap-x-4 items-center">
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
        </div>
      </div>
    </Container>
  );
};

export default ContactForm;
