import Image from "next/image";

interface OfferItem {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  badges: { label: string; icon: string }[];
  imageOnLeft?: boolean;
}

const WhatWeOffer = () => {
  const offerItems: OfferItem[] = [
    {
      title: "Coding for Kids\n(Ages 6–10)",
      description:
        "Teaching children how to code at a young age offers numerous benefits. First and foremost, it cultivates critical thinking and problem-solving skills as youngsters break down complex challenges into manageable steps. This early exposure to coding nurtures creativity and innovation, encouraging children to think creatively and develop new solutions.",
      buttonText: "Start Learning →",
      image: "/assets/impact-tech/1.png",
      badges: [
        { label: "Play based learning", icon: "✱" },
        { label: "Digital Thinking", icon: "✱" },
        { label: "Early confidence", icon: "✱" },
      ],
      imageOnLeft: false,
    },
    {
      title: "School Coding Clubs",
      description:
        "Teaching children how to code at a young age offers numerous benefits. First and foremost, it cultivates critical thinking and problem-solving skills as youngsters break down complex challenges into manageable steps. This early exposure to coding nurtures creativity and innovation, encouraging children to think creatively and develop new solutions. ",
      buttonText: "Start Learning →",
      image: "/assets/impact-tech/2.png",
      badges: [
        { label: "TODO: Badge 1", icon: "✱" },
        { label: "TODO: Badge 2", icon: "✱" },
        { label: "TODO: Badge 3", icon: "✱" },
      ],
      imageOnLeft: true,
    },
    {
      title: "Train-the-Trainer Program",
      description:
        "Teaching children how to code at a young age offers numerous benefits. First and foremost, it cultivates critical thinking and problem-solving skills as youngsters break down complex challenges into manageable steps. This early exposure to coding nurtures creativity and innovation, encouraging children to think creatively and develop new solutions. ",
      buttonText: "Start Learning →",
      image: "/assets/impact-tech/3.png",
      badges: [
        { label: "TODO: Badge 1", icon: "✱" },
        { label: "TODO: Badge 2", icon: "✱" },
        { label: "TODO: Badge 3", icon: "✱" },
      ],
      imageOnLeft: false,
    },
  ];

  return (
    <div className="w-full bg-white px-4 py-12 sm:py-16 md:py-20">
      <div className="max-w-[1222px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-5 md:mb-6">
            What We Offer
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            We provide tailored solutions to simplify workflows, enhance team
            collaboration, and help you achieve your business objectives
            efficiently.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12 sm:space-y-14 md:space-y-16">
          {offerItems.map((item, index) => (
            <div key={index}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center ${
                  item.imageOnLeft ? "lg:grid-cols-2" : ""
                }`}
              >
                {/* Content Section */}
                <div
                  className={`flex flex-col ${
                    item.imageOnLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-5 md:mb-6 whitespace-pre-line">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-10 md:mb-12 leading-relaxed">
                    {item.description}
                  </p>
                  <div>
                    <button
                      style={{
                        backgroundColor: "#DC143C",
                        color: "white",
                      }}
                      className="py-3 px-6 sm:px-8 rounded-full inline-flex justify-center items-center font-Roboto text-base font-bold hover:opacity-90 transition-opacity"
                    >
                      {item.buttonText}
                    </button>
                  </div>
                </div>

                {/* Image Section */}
                <div
                  className={`relative h-80 sm:h-96 md:h-full md:min-h-[450px] ${
                    item.imageOnLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {/* Main Image */}
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-full">
                    {/* TODO: Replace with actual program image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={643}
                      height={444}
                    />
                  </div>
                </div>
              </div>

              {/* Divider Line */}
              {index < offerItems.length - 1 && (
                <div className="mt-12 sm:mt-14 md:mt-16 border-t border-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
