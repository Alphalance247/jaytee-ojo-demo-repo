import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";

const testimonials = [
  {
    name: "John Doe",
    testimonial:
      "Their attention to detail and creative design approach transformed our website into a visually stunning and highly functional platform. We’ve seen a 30% increase in traffic since the relaunch. I highly recommend them to anyone seeking professional web design services!",
    status: "student",
    photo: "",
  },
  {
    name: "Jane Smith",
    testimonial:
      "The team's expertise in web development helped us create a seamless user experience that our customers love. Their attention to detail and professionalism made the entire process smooth and efficient.",
    status: "student",
    photo: "",
  },
  {
    name: "Michael Johnson",
    testimonial:
      "I was impressed by their ability to understand our vision and translate it into a functional, visually appealing website. The results exceeded my expectations!",
    status: "student",
    photo: "",
  },
  {
    name: "Sarah Williams",
    testimonial:
      "Working with this team was a game-changer for our business. Their innovative approach and dedication to quality helped us stand out in a competitive market.",
    status: "student",
    photo: "",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalLength = testimonials.length;
  const next = () => {
    setActiveIndex((prev) => (prev + 1) % totalLength);
    console.log(activeIndex);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalLength - 1 : prev - 1));
  };
  return (
    <div className="h-full w-full md:h-[497px] flex justify-start md:justify-center items-start md:items-center px-6 md:px-[101px]">
      <div className=" h-full flex flex-col md:flex-row w-full  items-center ">
        {/* <div className="flex items-center gap-6"> */}
        <div className="w-full md:w-1/3">
          <div className="py-4 text-sm font-medium text-[#2A7445] uppercase font-inter">
            Testimonial
          </div>
          <div className="text-[32px] md:text-[48px] texxt-[#1E1E1E] font-bold font-grostek">
            <h5>
              {" "}
              Our Impact <br /> Stories
            </h5>
          </div>
          <div className="flex gap-5 items-center mt-8">
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              className="disabled:cursor-not-allowed "
            >
              <HiChevronLeft className="text-[#2A7445] h-6 w-6 " />
            </button>
            <button
              onClick={next}
              disabled={activeIndex === totalLength - 1}
              className="disabled:cursor-not-allowed "
            >
              <HiChevronRight className="text-[#2A7445] h-6 w-6 " />
            </button>
          </div>
        </div>
        <div className="w-full md:w-2/3 overflow-auto  ">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-[30px] "
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full md:min-w-[600px]">
                <TestimonialCard
                  name={testimonial.name}
                  photo={testimonial.photo}
                  status={testimonial.status}
                  testimonial={testimonial.testimonial}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
