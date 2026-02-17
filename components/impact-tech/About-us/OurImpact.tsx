import React from "react";
import ImpactProject from "./ImpactProject";
const impacts = [
  {
    title: "CSS Train The Trainer Program (2024)",
    desc: "We trained educators across Ekiti State in CSS fundamentals, empowering them to deliver high-quality digital skills training to secondary school students. This program strengthened classroom delivery and improved student engagement with web technologies.",
    sponsor: "Ekiti State Ministry of Education ",
    url: "/assets/impact-tech/about-us/workers.png",
  },
  {
    title: "HTML Train the Trainer Program  (2023)",
    desc: "This initiative equipped teachers with practical HTML skills, enabling them to integrate coding into school curricula and improve digital literacy among students statewide.",
    sponsor: "Ekiti State Ministry of Education (2024)",
    url: "/assets/impact-tech/about-us/codes.png",
  },
  {
    title: "Open Python Programming Training (2022)",
    desc: "We delivered an open Python training program that introduced young learners to programming fundamentals, problem-solving, and real-world applications of code.",
    sponsor: "Community Training Program",
    url: "/assets/impact-tech/about-us/developer.png",
  },
  {
    title: "ICT Coding Clubs in Secondary Schools  (2023)",
    desc: "We established ICT coding clubs in over 10 schools, providing students with ongoing access to coding education, mentorship, and hands-on projects.",
    sponsor: "10+ Secondary Schools",
    url: "/assets/impact-tech/about-us/youngStudent.png",
  },
  {
    title: "HTML Textbook Distribution Program (2023)",
    desc: "We developed and distributed HTML textbooks to secondary schools, improving access to structured learning resources and supporting classroom instruction across the state.",
    sponsor: "Ministry of Education",
    url: "/assets/impact-tech/about-us/programmingBook.png",
  },
  {
    title: "Student Innovation Showcase  (2023)",
    desc: "Student Innovation Showcase  (2023)",
    sponsor: "Ministry of Innovation, Science & Digital Economy",
    url: "/assets/impact-tech/about-us/youngStudent.png",
  },
];
const OurImpact = () => {
  return (
    <div>
      <div className="text-center text-[#061C3D] pt-10 md:pt-[91px] flex justify-center items-center pb-10 md:pb-[97px]">
        <div className="">
          <div className=" text-[32px] md:text-[48px] font-grostek font-bold ">
            Our Impact
          </div>
          <div className=" pt-4 text-base md:text-lg font-inter w-full md:max-w-[536px]">
            Real-world outcomes from our programs across schools, communities,
            and institutions.
          </div>
        </div>
      </div>

      {impacts.map((impact, index) => (
        <div
          className={`w-full ${index === 0 ? "border-b border-[#2A7445]" : ""}`}
        >
          <div className="grid gap-[101px] ">
            <ImpactProject
              key={index}
              className={`
                ${index % 2 === 1 ? " flex gap-6 md:gap-[112px] md:flex-row-reverse" : "flex flex-col md:flex-row gap-6 md:gap-[112px]"}
              `}
              index={index}
              projectDesc={impact.desc}
              projectSponsor={impact.sponsor}
              projectTitle={impact.title}
              projectImage={impact.url}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurImpact;
