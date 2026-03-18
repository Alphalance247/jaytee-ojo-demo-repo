import Image from "next/image";
import React from "react";

const TestimonialCard = ({
  testimonial,
  photo,
  children,
  className,
}: {
  testimonial: string;
  photo: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`bg-white w-full  rounded-[12px] ${className}`}
      style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)" }}
    >
      <div className=" p-6 md:p-10 ">
        <div className="flex gap-[15px] items-center">
          {photo ? (
            <Image
              src={photo}
              alt="student"
              width={50}
              height={50}
              className="w-20 h-20 rounded-full object-cover bg-[#4E5550]"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-[#4E5550]" />
          )}

          {children}
        </div>

        <div className="font-inter pt-6 w-full md:max-w-[520px] text-base font-[#1E1E1E] md:text-lg pb-10 h-fit">
          {testimonial}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
