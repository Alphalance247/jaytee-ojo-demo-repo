import Image from "next/image";

const GetInvolved = () => {
  return (
    <div className="w-full bg-white px-4 py-12 sm:py-16 md:py-20">
      <div className="max-w-[1222px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-5 md:mb-6">
            Get Involved
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Impact Tech is more than a program, it&apos;s a movement to equip
            the next generation with future-ready skills. Whether you&apos;re a
            student, parent, educator, organization, or volunteer, there&apos;s
            a place for you here.
          </p>
        </div>

        {/* Image Section */}
        <div className="mb-6 sm:mb-8 md:mb-10 rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-400 h-64 sm:h-80 md:h-96 lg:h-[500px]">
          {/* TODO: Replace with actual get involved image */}
          <Image
            src="/assets/impact-tech/learning.png"
            alt="Get Involved"
            width={1152}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* CTA Section */}
        <div className="bg-red-600 rounded-2xl sm:rounded-3xl px-6 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-10 md:py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8 md:gap-10">
          {/* Text */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            Enroll, partner, or support our mission to empower the next
            generation
          </h3>

          {/* Button */}
          <div className="flex-shrink-0">
            <button
              style={{
                backgroundColor: "white",
                color: "#DC143C",
              }}
              className="py-3 px-6 sm:px-8 rounded-full inline-flex justify-center items-center font-Roboto text-base font-bold hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Get Started →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
