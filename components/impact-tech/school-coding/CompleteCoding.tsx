import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import Button from "../Teens-coding/Button";
import CategoryCard from "./CategoryCard";
const categories = [
  {
    title: "Beginner",
    ages: "6-9",
    child: (
      <ul className="list-disc grid gap-[30px]">
        <li> Logic building</li>
        <li> Block-based coding</li>
        <li> Interactive games</li>
      </ul>
    ),
  },
  {
    title: "Intermediate",
    ages: "10-13",
    child: (
      <ul className="list-disc grid gap-[30px]">
        <li> Scratch</li>
        <li>Web basics</li>
        <li> Problem solving</li>
      </ul>
    ),
  },
  {
    title: "Advanced",
    ages: "13-17",
    child: (
      <ul className="list-disc grid gap-[30px]">
        <li> Python</li>
        <li>Web development</li>
        <li> Real projects</li>
      </ul>
    ),
  },
];
const CompleteCoding = () => {
  return (
    <div className="w-full">
      <div className="py-10 md:pt-[91px] md:pb-[161.38px]">
        <div className="pb-5 md:pb-[44.62px] w-full md:max-w-[718px] mx-auto flex justify-center items-center px-3 md:px-0">
          <h3 className="text-[#1F1C14] text-2xl md:text-[48px] font-[800] font-grostek text-center leading-8 md:leading-[55px]">
            A Complete Coding Curriculum for Your Students
          </h3>
        </div>
        <div className=" mx-auto md:max-w-[1240px] rounded-[40px] h-full md:h-[1297px]  bg-[linear-gradient(252.53deg,rgba(42,116,69,0.5)_-0.87%,rgba(104,213,133,0.5)_-0.87%,rgba(40,108,65,0.5)_25.15%,rgba(42,116,69,0.425)_97.92%)] bg-[#201D1F] shadow-[0px_4px_10px_0px_#0000004D,_0px_1px_0px_0px_#FFFFFF0F_inset]">
          <div className=" pt-10 md:pt-[144px] pb-7 md:pb-[63px] flex flex-col gap-8 md:gap-[49px] w-full md:max-w-[1032px] mx-auto px-3 md:px-0">
            <div className="grid gap-8 px-3 md:px-0">
              {categories.map((category, index) => (
                <CategoryCard
                  key={index}
                  title={category.title}
                  age={category.ages}
                >
                  {category.child}
                </CategoryCard>
              ))}
            </div>
            <div className="flex justify-between items-center md:px-0 px-3">
              <div>
                <IoCodeSlash className="text-[#FFFFFF1F] w-[100px] h-auto md:w-[155.42px] md:h-[182px] font-bold" />
              </div>
              <div>
                <Button
                  url="/impact-tech/partners#start-partnership"
                  text="Partner With Us"
                  className="text-white bg-[#E60303] w-[150px] md:w-[187px]"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteCoding;
