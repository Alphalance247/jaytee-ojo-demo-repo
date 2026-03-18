import Slider from "react-slick";
import SliderCarousel from "../common/SliderCarousel";
import { useRef, useState } from "react";
import SliderButton from "./SliderButton";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Image from "next/image";

const programs = [
  {
    ImageUrl: "/assets/impact-tech/case-study/teaching.jpg",
  },
  {
    ImageUrl: "/assets/impact-tech/case-study/teaching.jpg",
  },
  {
    ImageUrl: "/assets/impact-tech/case-study/teaching.jpg",
  },
  {
    ImageUrl: "/assets/impact-tech/case-study/teaching.jpg",
  },
  {
    ImageUrl: "/assets/impact-tech/case-study/teaching.jpg",
  },
  {
    ImageUrl: "/assets/impact-tech/case-study/teaching.jpg",
  },
];

const ProgramHighlights = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => sliderRef.current?.slickNext();
  const prevSlide = () => sliderRef.current?.slickPrev();
  return (
    <div className="w-full md:pb-0 pb-10 md:px-0 px-6">
      <div className="flex items-center justify-between md:pt-[91px] md:pb-12 pt-10 pb-6 w-full md:max-w-[1440px] mx-auto ">
        <h4 className="font-grostek text-2xl md:text-5xl text-[#3E3232] capitalize font-semibold">
          Program Highlights
        </h4>
        <div className="flex gap-5">
          <SliderButton
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={
              currentSlide === 0
                ? "disabled:cursor-not-allowed text-[#3E323280]"
                : "text-[#2A7445] cursor-pointer"
            }
          >
            <HiChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
          </SliderButton>
          <SliderButton onClick={nextSlide}>
            <HiChevronRight className="text-[#2A7445] h-4 w-4 md:h-6 md:w-6" />
          </SliderButton>
        </div>
      </div>
      <div className="flex w-full flex-shrink-0 pl-[90px]">
        <div className="w-full">
          {/* <SliderCarousel
            gap={43}
            slidesToShow={2}
            sliderRef={sliderRef}
            afterChange={(index) => setCurrentSlide(index)}
          >
            {programs.map((program, index) => (
              <div key={index} className="">
                <div className="relative h-auto md:h-[693px] w-full rounded-[20px] overflow-hidden">
                  <img
                    src={program.ImageUrl}
                    alt="program highlight image"
                    className="rounded-[20px] h-auto md:h-[693px] w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-[#2A74454D] rounded-[20px]" />
                </div>
              </div>
            ))}
          </SliderCarousel> */}
          <SliderCarousel
            slidesToShow={2}
            sliderRef={sliderRef}
            afterChange={(index) => setCurrentSlide(index)}
            gap={30}
          >
            {programs.map((program, index) => {
              return (
                <div key={index} className="">
                  <div className="relative h-auto md:h-[693px] w-full rounded-[20px] overflow-hidden">
                    <img
                      src={program.ImageUrl}
                      alt="program highlight image"
                      className="rounded-[20px] h-auto md:h-[693px] w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-[#2A74454D] rounded-[20px]" />
                  </div>
                </div>
              );
            })}
          </SliderCarousel>
        </div>
      </div>
    </div>
  );
};

export default ProgramHighlights;
