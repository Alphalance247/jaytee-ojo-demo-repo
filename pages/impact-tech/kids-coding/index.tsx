import React from "react";
import ImpactTechLayout from "../layout";
import Hero from "@/components/impact-tech/kids-coding/Hero";
import FunIntroduction from "@/components/impact-tech/kids-coding/FunIntroduction";
import EnrollYourChild from "@/components/impact-tech/kids-coding/EnrollYourChild";
import Faqs from "@/components/impact-tech/kids-coding/Faqs";
import HeadStartTechnology from "@/components/impact-tech/kids-coding/HeadStartTechnology";
import YoungCreators from "@/components/impact-tech/kids-coding/YoungCreators";
import DesignedWithKids from "@/components/impact-tech/kids-coding/DesignedWithKids";
import Skills from "@/components/impact-tech/kids-coding/Skills";
import InteractiveAndGuided from "@/components/impact-tech/kids-coding/InteractiveAndGuided";

const index = () => {
  return (
    <ImpactTechLayout>
      <Hero />
      <FunIntroduction />
      <Skills />
      <InteractiveAndGuided />
      <DesignedWithKids />
      <YoungCreators />
      <EnrollYourChild />
      <Faqs />
      <HeadStartTechnology />
    </ImpactTechLayout>
  );
};

export default index;
