import React, { useEffect, useState } from "react";
import FaqsCard from "../Teens-coding/FaqsCard";
import { useFaqsStore } from "@/store/impact-tech/teens-coding/faqsStore";
import LoadingState from "../common/LoadingState";
// const faqs = [
//   {
//     question: "Who can apply for this program?",
//     answer:
//       "This program is open to teenagers aged 11–18, including beginners and students with little or no prior coding experience.",
//   },
//   {
//     question: "Do students need a computer to participate?",
//     answer:
//       "This program is open to teenagers aged 11–18, including beginners and students with little or no prior coding experience.",
//   },
//   {
//     question: "Is the program free or paid?",
//     answer:
//       "This program is open to teenagers aged 11–18, including beginners and students with little or no prior coding experience.",
//   },
//   {
//     question: "How long does the program last?",
//     answer:
//       "This program is open to teenagers aged 11–18, including beginners and students with little or no prior coding experience.",
//   },
//   {
//     question: " Is this an online or in-person program?",
//     answer:
//       "This program is open to teenagers aged 11–18, including beginners and students with little or no prior coding experience.",
//   },
//   {
//     question: "What happens after I apply?",
//     answer:
//       "This program is open to teenagers aged 11–18, including beginners and students with little or no prior coding experience.",
//   },
// ];
const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { faqs, loading, error, hasFetched, fetchFaqs } = useFaqsStore();

  useEffect(() => {
    fetchFaqs("School Coding Club");
  }, [fetchFaqs]);
  return (
    <div className="bg-white h-fit w-full max-w-[1240px] rounded-10 mx-auto ">
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

        <div className="h-[500px] overflow-auto pb-10 md:pb-14">
          {loading ? (
            <div className="flex justify-center items-center  ">
              <LoadingState className="h-[400px] mx-[100px] my-10" />
            </div>
          ) : error ? (
            <div className="text-center text-red-500 flex justify-center items-center h-[500px]">
              {error}
            </div>
          ) : hasFetched && faqs.length === 0 ? (
            <div className="flex justify-center items-center h-full text-[#050505] text-lg">
              FAQs not available
            </div>
          ) : (
            faqs.map((faq, index) => (
              <FaqsCard
                key={faq.id || index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleButton={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
