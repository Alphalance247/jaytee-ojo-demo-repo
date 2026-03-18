import React from "react";
import WhyTrainCard from "./WhyTrainCard";
const items = [
  {
    text: "Schools and communities across the region want coding programs but lack the resources to implement them.",
    headingText: "Growing Demand",
    icon: "/assets/impact-tech/train-the-trainer/Icon.svg",
  },
  {
    text: "There aren't enough qualified instructors who can teach coding and digital skills effectively.",
    headingText: "Shortage of Instructors",
    icon: "/assets/impact-tech/train-the-trainer/Icon1.svg",
  },
  {
    text: "Relying on external facilitators is not sustainable or scalable for long-term growth and impact.",
    headingText: "Scalability Challenge",
    icon: "/assets/impact-tech/train-the-trainer/Icon2.svg",
  },
];
const WhyTrain = () => {
  return (
    <div className="bg-[#F4F7FA] h-full md:h-[584px] flex justify-center items-center px-6 md:px-0 md:py-0 py-10">
      <div className=" flex flex-col justify-center items-center">
        <div>
          <h2 className="font-grostek font-bold text-[#101828] md:text-5xl text-3xl text-center">
            Why Train-the-Trainer?
          </h2>
          <p className="text-center text-[#4A5565] font-inter font-normal text-lg">
            We&pos;re facing a critical gap in digital education that requires a
            sustainable, scalable solution.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 pt-[42px]">
          {items.map((item, index) => (
            <WhyTrainCard
              key={index}
              icon={item.icon}
              text={item.text}
              headingText={item.headingText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyTrain;
