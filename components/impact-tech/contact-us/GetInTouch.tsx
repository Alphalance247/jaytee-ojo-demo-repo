import React from "react";
import ContactsCard from "./ContactsCard";
import { TfiEmail } from "react-icons/tfi";
import { MdLocalPhone } from "react-icons/md";
const contacts = [
  {
    text: <a href="mailtto:info@impacttech.com">info@impacttech.com</a>,
    icon: <TfiEmail className="text-white" />,
    heading: "Email us",
    imageUrl: "/assets/impact-tech/contact-us/IMG(4).png",
  },
  {
    text: "9675435231",
    icon: <MdLocalPhone className="text-white" />,
    heading: "Call us",
    imageUrl: "/assets/impact-tech/contact-us/IMG(5).png",
  },
  {
    text: "Ekiti State, Nigeria",
    icon: (
      <img
        src="/assets/impact-tech/contact-us/entypo_address.svg"
        alt="visit icon"
      />
    ),
    heading: "Visit us",
    imageUrl: "/assets/impact-tech/contact-us/image281.png",
  },
];
const GetInTouch = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex justify-center items-center h-fit md:h-[733px] md:px-0 px-6">
      <div className="h-full items-center">
        <div className="text-center text-[#061C3D] flex justify-center flex-col items-center md:mt-[70px] my-10 md:mb-[46px] w-full md:max-w-[692px] mx-auto ">
          {" "}
          <div className="text-[32px] md:text-[48px] font-sembold font-grostek">
            Get in Touch
          </div>
          <div className="w-full md:w-[608px] text-base md:text-lg font-graphik font-normal px-4 ">
            Whether you have questions about our programs, want to partner with
            us, or need support, our team is ready to assist you.
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[31px]">
          {contacts.map((contact, index) => (
            <ContactsCard
              key={index}
              heading={contact.heading}
              icon={contact.icon}
              imageUrl={contact.imageUrl}
              children={contact.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
