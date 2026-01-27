import Image from "next/image";
import { useState } from "react";

const OurWork = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/assets/impact-tech/slide1.png",
    "/assets/impact-tech/2.png",
    "/assets/impact-tech/3.png",
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full bg-white px-4 py-12 sm:py-16 md:py-20">
      <div className="max-w-[1222px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-5 md:mb-6">
            Inside Our Work
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Moments from classrooms, communities, and training sessions where
            impact happens
          </p>
        </div>

        {/* Carousel Section */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 sm:gap-8 md:gap-12">
          {/* Left Navigation Dots */}
          <div className="hidden md:flex flex-col justify-center gap-4 sm:gap-5 md:gap-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-green-600 scale-125"
                    : "bg-green-300 hover:bg-green-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Main Image Carousel */}
          <div className="flex-1 relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-400">
            {/* TODO: Replace with actual carousel images */}
            <Image
              src={slides[currentSlide]}
              alt="Inside Our Work"
              width={908}
              height={500}
              className="w-full h-full object-cover"
            />

            {/* Mobile Navigation Dots */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex md:hidden gap-2 sm:gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? "bg-white scale-125"
                      : "bg-white bg-opacity-50 hover:bg-opacity-75"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Navigation Arrows */}
          <div className="hidden md:flex flex-col justify-center gap-6 sm:gap-8 md:gap-10">
            {/* Up Arrow */}
            <button
              onClick={handlePrev}
              className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 flex items-center justify-center text-green-600 hover:text-green-700 transition-colors"
              aria-label="Previous slide"
            >
              <svg
                className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>

            {/* Divider Line */}
            <div className="w-px h-12 sm:h-14 md:h-16 bg-gray-400"></div>

            {/* Down Arrow */}
            <button
              onClick={handleNext}
              className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 flex items-center justify-center text-green-600 hover:text-green-700 transition-colors"
              aria-label="Next slide"
            >
              <svg
                className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
          <button
            onClick={handlePrev}
            className="px-6 py-2 text-green-600 hover:text-green-700 transition-colors"
            aria-label="Previous slide"
          >
            ← Previous
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-2 text-green-600 hover:text-green-700 transition-colors"
            aria-label="Next slide"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
