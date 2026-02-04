import Image from "next/image";

interface ValueCard {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

const WhoWeAre = () => {
  const valueCards: ValueCard[] = [
    {
      icon: "icon1",
      title: "Mission-driven",
      description:
        "We exist to democratize access to digital skills across Africa.",
      bgColor: "bg-green-200",
    },
    {
      icon: "icon2",
      title: "Youth-focused",
      description:
        "From early learners to educators, we build long-term capacity.",
      bgColor: "bg-teal-200",
    },
    {
      icon: "icon3",
      title: "Community-led",
      description:
        "We partner with schools and communities for sustainable impact.",
      bgColor: "bg-cyan-200",
    },
    {
      icon: "icon4",
      title: "Future-ready",
      description: "Our programs align with real-world, in-demand tech skills.",
      bgColor: "bg-green-100",
    },
  ];

  return (
    <div className="w-full bg-white px-4 py-12 sm:py-16 md:py-20">
      <div className="max-w-[1222px] mx-auto">
        {/* Header Section */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center mb-12 sm:mb-14 md:mb-20">
          Who We Are
        </h2>

        {/* Logo and Description Section */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-14 md:mb-28">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <div className=" h-20 sm:h-24 md:h-28 rounded-lg flex items-center justify-center">
              <Image
                src="/assets/impact-tech/logo.png"
                width={518}
                height={160}
                alt="Impact Tech Logo"
              />
            </div>
          </div>

          {/* Divider and Description */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 sm:gap-8 md:gap-12 flex-1">
            {/* Vertical Divider */}

            {/* Description */}
            <div className="flex-1">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Impact Tech is an initiative of the Jaytee Ojo Foundation,
                created to equip African children and teenagers with practical,
                future-ready digital skills.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Through community programs and school partnerships, we teach
                young people how to think, build, and solve real problems using
                technology, starting with HTML, CSS, and JavaScript.
              </p>
            </div>
          </div>
        </div>

        {/* Values Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {valueCards.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-2xl p-6 border border-[#E6E8EC80] items-start text-left ${index === 1 ? " shadow-md" : ""}`}
            >
              {/* Icon Container */}
              <div
                className={`w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-lg  flex items-center justify-center mb-4 sm:mb-5 md:mb-6 text-2xl sm:text-3xl md:text-4xl`}
              >
                <Image
                  src={`/assets/impact-tech/${card.icon}.svg`}
                  alt={card.title}
                  width={64}
                  height={64}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#061C3D] mb-2 sm:mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#42526B] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
