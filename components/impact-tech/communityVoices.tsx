import Image from "next/image";
import { useState } from "react";

interface Testimonial {
  rating: number;
  text: string;
  name: string;
  role: string;
  avatar: string;
}

const CommunityVoices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: Testimonial[] = [
    {
      rating: 5,
      text: '"Impact Tech helped us introduce structured digital skills training to our students. The results were immediate, increased confidence, creativity, and engagement."',
      name: "Ajero Alara",
      role: "Ekill",
      avatar: "/assets/impact-tech/avatar.svg",
    },
    {
      rating: 5,
      text: "TODO: Add second testimonial",
      name: "TODO: Name",
      role: "TODO: Role",
      avatar: "/assets/impact-tech/avatar.svg",
    },
    {
      rating: 5,
      text: "TODO: Add third testimonial",
      name: "TODO: Name",
      role: "TODO: Role",
      avatar: "/assets/impact-tech/avatar.svg",
    },
    {
      rating: 5,
      text: "TODO: Add fourth testimonial",
      name: "TODO: Name",
      role: "TODO: Role",
      avatar: "/assets/impact-tech/avatar.svg",
    },
    {
      rating: 5,
      text: "TODO: Add fifth testimonial",
      name: "TODO: Name",
      role: "TODO: Role",
      avatar: "/assets/impact-tech/avatar.svg",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <div className="w-full bg-white px-4 py-12 sm:py-16 md:py-20">
      <div className="max-w-[1222px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] lg:items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Left Section */}
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-black max-w-xs">
              Voices From Our Community
            </h2>

            {/* Navigation Buttons */}
            <div className="flex gap-4 sm:gap-6">
              <button
                onClick={handlePrev}
                className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-lg bg-green-200 hover:bg-green-300 transition-colors flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-green-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-lg bg-green-200 hover:bg-green-300 transition-colors flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-green-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Section - Testimonial Card */}
          <div className=" border-[1rem] border-[#2A744580] rounded-3xl p-6 sm:p-8 md:p-10 bg-white">
            {/* Stars */}
            <div className="flex gap-1 sm:gap-2 mb-4 sm:mb-6 md:mb-8">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <span
                  key={i}
                  className="text-2xl sm:text-3xl text-[#FF8800] md:text-4xl"
                >
                  ★
                </span>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-6 sm:mb-8 md:mb-10 leading-relaxed font-light">
              {currentTestimonial.text}
            </p>

            {/* User Info */}
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
              {/* Avatar */}
              <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                {/* TODO: Replace with actual user avatar */}
                <Image
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name and Role */}
              <div>
                <p className="text-base sm:text-lg font-bold text-black">
                  {currentTestimonial.name}
                </p>
                <p className="text-sm sm:text-base text-gray-600">
                  {currentTestimonial.role}
                </p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex gap-2 sm:gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 sm:w-4 h-3 sm:h-4 rounded-full transition-all ${
                    index === currentSlide
                      ? "bg-green-600 w-6 sm:w-8"
                      : "bg-gray-400 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityVoices;
