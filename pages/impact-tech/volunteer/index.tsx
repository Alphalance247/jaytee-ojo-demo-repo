import React from "react";
import ImpactTechLayout from "../layout";
import Hero from "@/components/impact-tech/volunteer/Hero";
import WhyVolunteerSection from "@/components/impact-tech/volunteer/WhyVolunteerSection";
import WaysVoluntaryCan from "@/components/impact-tech/volunteer/WaysVoluntaryCan";
import HowVoluntryWorks from "@/components/impact-tech/volunteer/HowVoluntryWorks";
import WhatToGain from "@/components/impact-tech/volunteer/WhatToGain";
import MakeImpact from "@/components/impact-tech/volunteer/MakeImpact";
import ApplytoVolunteer from "@/components/impact-tech/volunteer/ApplytoVolunteer";
import WhoCanVolunteer from "@/components/impact-tech/volunteer/WhoCanVolunteer";

const Homepage = () => {
  return (
    <div>
      <ImpactTechLayout>
        <Hero />
        <WhyVolunteerSection />
        <WaysVoluntaryCan />
        <HowVoluntryWorks />
        <WhatToGain />
        <WhoCanVolunteer />
        <ApplytoVolunteer />
        <MakeImpact />
      </ImpactTechLayout>
    </div>
  );
};

export default Homepage;
