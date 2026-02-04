import Image from "next/image";
import PrimaryButton from "../common/button";
import MeasuredImpact from "./measuredImpact";

const Hero = () => {
  return (
    <>
      <div className="w-full bg-white py-8 sm:py-12 md:py-16 px-4">
        {/* Content Container */}
        <div className="max-w-[1262px] mx-auto">
          {/* Heading Section */}
          <div className="text-center max-w-full w-full mx-auto mb-8 sm:w-full md:w-[80%] sm:mb-10 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-[52px] md:leading-[67px] font-bold text-black mb-4 sm:mb-5 md:mb-6 leading-tight">
              Empowering the Next Generation Through Technology
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-7 md:mb-8">
              Training, mentoring, and equipping African youth with future–ready
              tech skills.
            </p>
            <PrimaryButton text="View Programs →" />
          </div>

          {/* Image Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12 md:mt-16">
            {/* Left Card - Tech/Coding */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden h-48 sm:h-56 md:h-64">
              {/* TODO: Replace with actual tech/coding image */}
              <Image
                src="/assets/impact-tech/hero-1.png"
                alt="Tech Coding"
                width={623}
                height={167}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Card - Youth/People */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden h-48 sm:h-56 md:h-64">
              {/* TODO: Replace with actual youth/community image */}
              <Image
                src="/assets/impact-tech/hero-2.png"
                alt="Tech Coding"
                width={623}
                height={167}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Measured Impact Section */}
          <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-16">
            <MeasuredImpact />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
