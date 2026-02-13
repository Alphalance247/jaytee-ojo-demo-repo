import Image from "next/image";
import React from "react";

const TestimonialCard = ({
  name,
  testimonial,
  status,
  photo,
}: {
  name: string;
  testimonial: string;
  status: string;
  photo: string;
}) => {
  return (
    <div
      className="bg-white  h-full w-[600px] "
      style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)" }}
    >
      <div className=" p-6 md:p-10 ">
        <div className="flex gap-2 items-center">
          {photo ? (
            <Image
              src={photo}
              alt="student"
              width={50}
              height={50}
              className="w-10 h-10 rounded-full object-cover bg-[#4E5550]"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-[#4E5550]" />
          )}

          <div className="my-6 font-manrope">
            <div className=" text-xl font-extrabold text-[#2A7445] capitalize">
              {name}
            </div>
            <div className="text-lg text-[#555555] capitalize">{status}</div>
          </div>
        </div>

        <div className="font-inter">{testimonial}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
