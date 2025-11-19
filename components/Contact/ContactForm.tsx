import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import Container from "../common/container";

const ContactForm = () => {
  return (
    <Container>
      <div className="flex  max-sm:block">
        <div className="bg-[#F5F5F5] w-[100%] p-16 max-sm:p-5 max-lg:p-8">
          <form action="">
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
                    name="Firstname"
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
                    name="lastname"
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
                    id="email"
                    name="email"
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
                    type="number"
                    id="number"
                    name="number"
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
                  placeholder="Write your message here..."
                  id="Message"
                  className="w-[674px] border-[#595959] rounded-[3px] outline-none pb-[170px] pl-2 pt-4 pr-4 break-words max-sm:w-[100%] max-md:w-[100%]"
                />
              </div>
              <button className="font-Roboto font-black text-sm py-6 px-10 rounded bg-[#369458] uppercase text-white">
                submit message
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
