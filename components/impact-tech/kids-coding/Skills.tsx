import React from "react";
import CustomizedSkillCard from "./CustomizedSkillCard";
const skills = [
  {
    title: "Coding Basics",
    text: "Understanding how coding works using simple and visual tools.",
    imageUrl: "/assets/impact-tech/kids-coding/image295.png",
    child: (
      <div className="relative">
        <div className="absolute top-4 left-4 ">
          <img src="/assets/impact-tech/kids-coding/GroupLeft.png" alt="" />
        </div>
        <div className="absolute top-0 left-48  ">
          <img src="/assets/impact-tech/kids-coding/Groupcenter.png" alt="" />
        </div>
        <div className="absolute top-8 right-0 ">
          <img src="/assets/impact-tech/kids-coding/Groupright.png" alt="" />
        </div>
      </div>
    ),
  },
  {
    title: "Logical Thinking",
    text: "Developing problem-solving and structured thinking.",
    imageUrl: "/assets/impact-tech/kids-coding/image288.png",
    child: (
      <div className="relative">
        <div className="absolute top-0">
          <img src="/assets/impact-tech/kids-coding/Groupleft3.png" alt="" />
        </div>
        <div className="absolute top-[13px] right-[29px]">
          <img src="/assets/impact-tech/kids-coding/Groupright3.png" alt="" />
        </div>
      </div>
    ),
  },
  {
    title: "Digital Literacy",
    text: "Teaching safe and smart technology use.",
    imageUrl: "/assets/impact-tech/kids-coding/image291.png",
    child: (
      <div className="relative">
        <div className="absolute top-[31px]">
          <img src="/assets/impact-tech/kids-coding/Groupleft2.png" alt="" />
        </div>
        <div className="absolute top-16 right-[31px]">
          <img src="/assets/impact-tech/kids-coding/Groupright2.png" alt="" />
        </div>
      </div>
    ),
  },
  {
    title: "Computer Confidence",
    text: "Helping kids become comfortable using computers.",
    imageUrl: "/assets/impact-tech/kids-coding/image292.png",
    child: (
      <div className="relative">
        <div className="absolute top-4 left-4 ">
          <img src="/assets/impact-tech/kids-coding/GroupLeft.png" alt="" />
        </div>
        <div className="absolute top-0 left-48  ">
          <img src="/assets/impact-tech/kids-coding/Groupcenter.png" alt="" />
        </div>
        <div className="absolute top-8 right-0 ">
          <img src="/assets/impact-tech/kids-coding/Groupright.png" alt="" />
        </div>
      </div>
    ),
  },
  {
    title: "Creativity",
    text: "Creating animations, games, and digital stories",
    imageUrl: "/assets/impact-tech/kids-coding/Group4.png",
    child: (
      <div className="relative">
        <div className="absolute top-0">
          <img src="/assets/impact-tech/kids-coding/Groupleft4.png" alt="" />
        </div>
        <div className="absolute top-[13px] right-[29px]">
          <img src="/assets/impact-tech/kids-coding/Groupright3.png" alt="" />
        </div>
      </div>
    ),
  },
  {
    title: "Digital Literacy",
    text: "Teaching safe and smart technology use.",
    imageUrl: "/assets/impact-tech/kids-coding/image291.png",
    child: (
      <div className="relative">
        <div className="absolute top-[31px]">
          <img src="/assets/impact-tech/kids-coding/Groupleft2.png" alt="" />
        </div>
        <div className="absolute top-16 right-[31px]">
          <img src="/assets/impact-tech/kids-coding/Groupright2.png" alt="" />
        </div>
      </div>
    ),
  },
];
const Skills = () => {
  return (
    <div className="h-full">
      <div className="text-center py-[91px]">
        <h2 className="text-[#1F1C14] text-3xl md:text-5xl font-[800] font-grostek leading-[55px] ">
          Skills Your Child Will Develop
        </h2>
        <p className="text-black font-normal text-lg md:text-2xl font-nunito pt-[23px]">
          We teach foundational skills through fun and hands-on activities.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center  md:px-0 px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-x-[41px]  gap-10 md:gap-y-28 -mb-[840px]">
          {skills.map((skill, index) => (
            <CustomizedSkillCard
              key={index}
              title={skill.title}
              text={skill.text}
              imageUrl={skill.imageUrl}
            >
              {skill.child}
            </CustomizedSkillCard>
          ))}
        </div>
      </div>
      <div className="bg-[#2A7445] mt-28 h-[728px]"></div>
    </div>
  );
};

export default Skills;
