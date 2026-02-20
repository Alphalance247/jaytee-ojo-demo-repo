import React from "react";
import PartnerCard from "./PartnerCard";
const partnerWays = [
  {
    title: "Sponsor a Program",
    desc: "Support a specific program through funding, equipment, internet access, learning materials, or infrastructure.",
    photo: "/assets/impact-tech/about-us/youngStudent.png",
    btnText: "Sponsor a Program",
  },
  {
    title: "School or Organization Partnership",
    desc: "Partner with us to bring coding and digital skills training to your school, organization, or community.",
    photo: "/assets/impact-tech/about-us/mentor.png",
    btnText: "Partner With Us",
  },
  {
    title: "Volunteer or Corporate Mentorship",
    desc: "Provide mentors, trainers, or industry exposure to guide and inspire our learners.",
    photo: "/assets/impact-tech/about-us/partners.png",
    btnText: "Become a Volunteer",
  },
];
const WaysToPartner = () => {
  return (
    <div className="">
      <div className="w-full md:max-w-[1134px] h-fit mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[31px] md:px-0 px-6 py-10 md:py-[106px]">
        {partnerWays.map((way, index) => (
          <PartnerCard
            key={index}
            btnText={way.btnText}
            className="h-[483px] "
            title={way.title}
            description={way.desc}
            photo={way.photo}
          />
        ))}
      </div>
    </div>
  );
};

export default WaysToPartner;
