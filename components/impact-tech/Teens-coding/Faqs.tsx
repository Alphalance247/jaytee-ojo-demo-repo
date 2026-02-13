import React, { useState } from "react";
import FaqsCard from "./FaqsCard";
const faqs = [
  {
    question: "Who can apply for this program?",
    answer:
      "This program is open to teenagers aged 11–18, including beginners and students with little or no prior coding experience.",
  },
  {
    question: "Do students need a computer to participate?",
    answer:
      "This program is open to teenagers aged 11–18, including beginners and students with little or no prior coding experience.",
  },
  {
    question: "Is the program free or paid?",
    answer:
      "This program is open to teenagers aged 11–18, including beginners and students with little or no prior coding experience.",
  },
  {
    question: "How long does the program last?",
    answer:
      "This program is open to teenagers aged 11–18, including beginners and students with little or no prior coding experience.",
  },
  {
    question: " Is this an online or in-person program?",
    answer:
      "This program is open to teenagers aged 11–18, including beginners and students with little or no prior coding experience.",
  },
  {
    question: "What happens after I apply?",
    answer:
      "This program is open to teenagers aged 11–18, including beginners and students with little or no prior coding experience.",
  },
];
const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="bg-white h-fit w-full md:max-w-[1240px] rounded-10 mx-auto ">
      <div
        className="bg-white md:px-0 px-6 my-10 md:my-[91px] "
        style={{ boxShadow: "0px 12px 26px 0px #4A3AFF12" }}
      >
        <div className="font-inter">
          <div className="text-center text-[#050505] text-[24px] md:text-[48px] font-semibold">
            Frequently Asked Questions
          </div>
          <div className="pt-2 text-[#050505] text-lg md:text-[24px] text-center">
            Everything you need to know before applying.
          </div>
        </div>
        <div className="h-[500px] overflow-auto">
          {faqs.map((faq, index) => (
            <FaqsCard
              question={faq.question}
              answer={faq.answer}
              key={index}
              isOpen={openIndex === index}
              toggleButton={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            ></FaqsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
