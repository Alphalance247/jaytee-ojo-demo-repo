import React, { useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import SliderCarousel from "../common/SliderCarousel";
import Slider from "react-slick";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
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
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => sliderRef.current?.slickNext();
  const prevSlide = () => sliderRef.current?.slickPrev();
  return (
    <div className="h-full w-full md:h-[497px] flex justify-start md:justify-center items-start md:items-center pl-6 md:pl-[101px]">
      <div className=" h-full flex flex-col md:flex-row w-full items-center ">
        <div className="w-full md:w-1/3">
          <div className="py-4 text-sm font-medium text-[#2A7445] uppercase font-inter">
            Testimonial
          </div>
          <div className="text-[32px] md:text-[48px] text-[#1E1E1E] font-bold font-grostek w-full md:max-w-[410px] leading-[50px] md:leading-[60px]">
            <h5>Our Impact Stories</h5>
          </div>

          <div className="flex gap-5 items-center mt-8">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="disabled:cursor-not-allowed"
            >
              <HiChevronLeft className="text-[#2A7445] h-6 w-6" />
            </button>
            <button onClick={nextSlide}>
              <HiChevronRight className="text-[#2A7445] h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="w-full md:w-2/3  ">
          <SliderCarousel
            slidesToShow={2}
            sliderRef={sliderRef}
            afterChange={(index) => setCurrentSlide(index)}
            gap={30}
          >
            {testimonials.map((testimonial, index) => {
              return (
                <div key={index} className="flex ">
                  <TestimonialCard
                    className="h-[324px]"
                    photo={testimonial.photo}
                    testimonial={testimonial.testimonial}
                  >
                    <div className=" text-xl font-extrabold text-[#2A7445] capitalize my-6 font-manrope">
                      {testimonial.name}
                    </div>
                  </TestimonialCard>
                </div>
              );
            })}
          </SliderCarousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
