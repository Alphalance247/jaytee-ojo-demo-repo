import React from "react";
import ImpactTechLayout from "../layout";
import Hero from "@/components/impact-tech/school-coding/Hero";
import WhySchool from "@/components/impact-tech/school-coding/WhySchool";
import Faqs from "@/components/impact-tech/school-coding/Faqs";
import BenefitForSchool from "@/components/impact-tech/school-coding/BenefitForSchool";
import BringCoding from "@/components/impact-tech/school-coding/BringCoding";
import SimpleStructuredImplementation from "@/components/impact-tech/school-coding/SimpleStructuredImplementation";
import CompleteCoding from "@/components/impact-tech/school-coding/CompleteCoding";

const index = () => {
  return (
    <ImpactTechLayout>
      <Hero />
      <WhySchool />
      <CompleteCoding />
      <SimpleStructuredImplementation />
      <BenefitForSchool />
      <Faqs />
      <BringCoding />
    </ImpactTechLayout>
  );
};

export default index;
