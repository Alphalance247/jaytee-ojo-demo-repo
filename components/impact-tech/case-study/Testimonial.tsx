import { useRef, useState } from "react";
import SliderCarousel from "../common/SliderCarousel";
import TestimonialCard from "../Teens-coding/TestimonialCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Slider from "react-slick";

const testimonials = [
  {
    name: "Program Participant",
    testimonial:
      "The training gave me the confidence to teach coding to my students. It opened new possibilities for both educators and learners",
    status: "student",
    photo: "",
  },
  {
    name: "Program Participant",
    testimonial:
      "The training gave me the confidence to teach coding to my students. It opened new possibilities for both educators and learners",
    status: "student",
    photo: "",
  },
  {
    name: "Program Participant",
    testimonial:
      "The training gave me the confidence to teach coding to my students. It opened new possibilities for both educators and learners",
    status: "student",
    photo: "",
  },
  {
    name: "Program Participant",
    testimonial:
      "The training gave me the confidence to teach coding to my students. It opened new possibilities for both educators and learners",
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
    <div className="h-full w-full  md:h-[497px] flex justify-start md:justify-center items-start md:items-center pl-6 md:pl-[101px]">
      <div className=" h-full flex flex-col md:flex-row w-full items-center ">
        <div className="w-full md:w-1/3">
          <div className="py-4 text-sm font-medium text-[#2A7445] uppercase font-inter">
            Testimonial
          </div>
          <div className="text-[32px] md:text-[48px] text-[#1E1E1E] font-bold font-grostek w-full md:max-w-[410px] leading-[50px] md:leading-[60px]">
            <h5>Program Testimonials</h5>
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
                    className="h-[268px]"
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
