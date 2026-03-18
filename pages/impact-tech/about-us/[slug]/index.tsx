import React from "react";
import ImpactTechLayout from "../../layout";
import Hero from "@/components/impact-tech/case-study/Hero";
import ProgramOverview from "@/components/impact-tech/case-study/ProgramOverview";
import PartnerWithUs from "@/components/impact-tech/case-study/PartnerWithUs";
import ProgramHighlights from "@/components/impact-tech/case-study/ProgramHighlights";
import Testimonial from "@/components/impact-tech/case-study/Testimonial";
import Image from "next/image";
import FunfactCard from "@/components/impact-tech/case-study/FunFactCard";
const training = [
  { text: "Instructor-led training sessions" },
  { text: "Practical exercises and projects" },
  { text: " Guided mentorship and support" },
  {
    text: "Structured curriculum aligned with modern tech education standards",
  },
];
const funFacts = [
  { impactValue: "10+", text: "educators successfully trained" },
  { impactValue: "50+", text: "secondary schools impacted" },
  {
    impactValue: "",
    text: "Teachers equipped to deliver coding education independently",
  },
  { impactValue: "", text: "Hundreds of students indirectly reached" },
];
const studyDetails = [
  {
    text: "Partner: Ekiti State Ministry of Education ",
    icon: (
      <Image
        src={"/assets/impact-tech/case-study/UIBlock/Vector.svg"}
        alt="icon"
        width={21.95}
        height={19.96}
        className=" flex items-center"
      />
    ),
  },
  {
    text: "Year: 2024",
    icon: (
      <Image
        src={"/assets/impact-tech/case-study/UIBlock/Group.svg"}
        alt="icon"
        width={20.77}
        height={20.61}
      />
    ),
  },
  {
    text: "Year: 2024",
    icon: (
      <Image
        src={"/assets/impact-tech/case-study/UIBlock/Vector1.svg"}
        alt="icon"
        width={15.97}
        height={19.96}
      />
    ),
  },
];
const CaseStudy = ({ params }: { params: { slug: string } }) => {
  return (
    <ImpactTechLayout>
      <Hero
        imgUrl="/assets/impact-tech/case-study/teaching.jpg"
        title="  CSS Train the Trainer Program"
        desc=" Empowering educators across Ekiti State with foundational web
              development skills to expand access to digital education."
      >
        {studyDetails.map((detail, index) => (
          <div key={index} className=" flex gap-[17.5px] items-center">
            <div className="h-6 w-6 flex items-center justify-center ml-6 md:ml-9">
              {" "}
              {detail.icon}
            </div>
            <div className="text-white font-inter text-[15px] font-medium uppercase">
              {detail.text}
            </div>
          </div>
        ))}
      </Hero>
      <ProgramOverview
        overview="In 2024, Impact Tech partnered with the Ekiti State Ministry of
            Education to deliver a CSS Train-the-Trainer program aimed at
            equipping educators with practical web development skills. The
            program focused on empowering teachers with the knowledge and
            confidence needed to teach students the fundamentals of web design
            and digital creation. Through structured workshops and hands-on
            sessions, educators learned how to apply CSS to design and style web
            pages, enabling them to bring modern digital skills into their
            classrooms."
        challenge=" Many secondary schools lacked educators with the technical
                training required to teach coding and digital skills
                effectively. Without proper training, students had limited
                exposure to practical technology education. This created a gap
                between traditional education and the growing demands of the
                digital world."
        approach={
          <ul className="pl-3 text-lg md:text-xl font-normal">
            {training.map((t, index) => (
              <li key={index} className="list-disc list-inside">
                {t.text}
              </li>
            ))}
          </ul>
        }
        trainingCourse="CSS"
      >
        {" "}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {funFacts.map((fact, index) => (
            <FunfactCard key={index}>
              <h5 className="text-[40px] font-bold">{fact.impactValue}</h5>
              <p className="text-sm">{fact.text}</p>
            </FunfactCard>
          ))}
        </div>
      </ProgramOverview>
      <ProgramHighlights />
      <Testimonial />
      <PartnerWithUs />
    </ImpactTechLayout>
  );
};

export default CaseStudy;
