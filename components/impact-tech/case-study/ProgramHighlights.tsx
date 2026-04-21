import Slider from "react-slick";
import SliderCarousel from "../common/SliderCarousel";
import { useRef, useState } from "react";
import SliderButton from "./SliderButton";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Image from "next/image";

const programsHighlights = [
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
interface ProgramHighlight {
  ImageUrl: string;
}

const ProgramHighlights = ({ programs }: { programs: ProgramHighlight[] }) => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => sliderRef.current?.slickNext();
  const prevSlide = () => sliderRef.current?.slickPrev();
  const slidesToShow = 2; // same as your slider
  const totalSlides = programs.length;

  return (
    <div className="w-full md:pb-0 pb-10 md:px-0 px-6">
      <div className="flex items-center justify-between md:pt-[91px] md:pb-12 pt-10 pb-6 w-full  mx-auto max-w-[1236px]">
        <div className="">
          <h4 className="font-grostek text-2xl md:text-5xl text-[#3E3232] capitalize font-semibold">
            Program Highlights
          </h4>
        </div>
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
          <SliderButton
            onClick={nextSlide}
            className={
              currentSlide === totalSlides - slidesToShow
                ? "disabled:cursor-not-allowed text-[#3E323280]"
                : "text-[#2A7445] cursor-pointer"
            }
          >
            <HiChevronRight className="text-[#2A7445] h-4 w-4 md:h-6 md:w-6" />
          </SliderButton>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div className=" ml-0 md:ml-[calc((100vw-1236px)/2)]">
          <SliderCarousel
            slidesToShow={2}
            sliderRef={sliderRef}
            afterChange={(index) => setCurrentSlide(index)}
          >
            {programsHighlights.map((program, index) => (
              <div key={index}>
                <div className="relative h-auto md:h-[693px] w-full md:w-[659px] rounded-[20px] overflow-hidden">
                  <img
                    src={program.ImageUrl}
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                  <div className="absolute inset-0 bg-[#2A74454D]" />
                </div>
              </div>
            ))}
          </SliderCarousel>
        </div>
      </div>
    </div>
  );
};

export default ProgramHighlights;
