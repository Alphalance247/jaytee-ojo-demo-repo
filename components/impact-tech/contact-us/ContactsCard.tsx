import Image from "next/image";
import React from "react";

const ContactsCard = ({
  imageUrl,
  heading,
  children,
  icon,
}: {
  imageUrl: string;
  heading: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) => {
  return (
    <div className="h-[378px] bg-white rounded-b-[10px] shadow-md ">
      <Image
        src={imageUrl}
        alt=""
        width={350}
        height={258}
        className="rounded-t-[10px] md:w-[350px] w-full object-cover"
      />
      <div className="pt-8 pl-[17px] font-inter">
        <div className="text-[15px] font-sembold text-[#161C2D]">{heading}</div>
        <div className="flex gap-4 items-center pt-[13px] ">
          <div className="flex justify-center items-center h-[46px] w-[46px] rounded-full bg-[#2A7445]">
            {icon}
          </div>
          <div className="text-black text-sm md:text-xl  font-normal">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsCard;
