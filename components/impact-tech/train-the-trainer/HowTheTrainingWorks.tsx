import React from "react";
import TrainingWorkCard from "./TrainingWorkCard";
import { LuFileCheck, LuGraduationCap, LuVideo } from "react-icons/lu";
import { MdOutlineCalendarToday } from "react-icons/md";
const trainingContexts = [
  {
    icon: <MdOutlineCalendarToday className="h-6 w-6" />,
    stepNo: "1",
    title: "4–6 Weeks Intensive Training",
    duration: "Weeks 1-6",
    text: "Structured program covering coding fundamentals, curriculum design, and teaching methodologies tailored for educators.",
  },
  {
    icon: <LuVideo className="h-6 w-6" />,
    stepNo: "2",
    title: "Live Sessions & Practical Workshops",
    duration: "Throughout",
    text: "Interactive online sessions with expert facilitators, hands-on practice labs, and collaborative learning activities.",
  },
  {
    icon: <LuFileCheck className="h-6 w-6" />,
    stepNo: "3",
    title: "Assessment & Teaching Simulation",
    duration: "Week 5",
    text: "Demonstrate your mastery through peer teaching sessions, lesson plan creation, and practical classroom simulations.",
  },
  {
    icon: <LuGraduationCap className="h-6 w-6" />,
    stepNo: "4",
    title: "Final Evaluation & Certification",
    duration: "Week 6",
    text: "Complete a comprehensive evaluation and receive your official certification as a certified coding instructor.",
  },
];
const HowTheTrainingWorks = () => {
  return (
    <div className="bg-[#F4F7FA] py-10 md:py-[91px] px-6 md:px-0">
      <div className="mx-auto max-w-[1017px]">
        <div>
          <h4 className="text-[#101828] text-center font-grostek font-semibold text-3xl md:text-5xl leading-9">
            How the Training Works
          </h4>
          <p className="text-[#4A5565] text-base md:text-lg font-inter font-normal leading-7 text-center pt-4 ">
            A comprehensive, step-by-step journey from educator to certified
            coding instructor.
          </p>
        </div>
        <div className="grid gap-6 mt-16 items-center  justify-center">
          {trainingContexts.map((context) => (
            <TrainingWorkCard
              key={context.stepNo}
              icon={context.icon}
              stepNo={context.stepNo}
              text={context.text}
              title={context.title}
              duration={context.duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowTheTrainingWorks;
