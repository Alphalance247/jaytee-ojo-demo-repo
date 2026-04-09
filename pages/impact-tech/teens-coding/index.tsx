import AboutTheProgram from "@/components/impact-tech/Teens-coding/AboutTheProgram";
import Achievements from "@/components/impact-tech/Teens-coding/Achievements";
import FAQs from "@/components/impact-tech/Teens-coding/Faqs";
import HowToApply from "@/components/impact-tech/Teens-coding/HowToApply";
import ProgramDelivered from "@/components/impact-tech/Teens-coding/ProgramDelivered";
import SkillsGain from "@/components/impact-tech/Teens-coding/SkillsGain";
import TeensCodingProgram from "@/components/impact-tech/Teens-coding/TeensCodingProgram";
import Testimonial from "@/components/impact-tech/Teens-coding/Testimonial";
import React from "react";
import ImpactTechLayout from "../layout";

const TeensCoding = () => {
  return (
    <ImpactTechLayout>
      <TeensCodingProgram />
      <AboutTheProgram />
      <SkillsGain />
      <Achievements />
      <ProgramDelivered />
      <Testimonial />
      <HowToApply />
      <FAQs />
    </ImpactTechLayout>
  );
};

export default TeensCoding;
