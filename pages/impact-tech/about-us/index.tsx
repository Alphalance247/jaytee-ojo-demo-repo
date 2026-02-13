import React from "react";
import ImpactTechLayout from "../layout";
import Hero from "@/components/impact-tech/About-us/Hero";
import OurStory from "@/components/impact-tech/About-us/OuStory";
import OurMission from "@/components/impact-tech/About-us/OurMission";

const AboutUs = () => {
  return (
    <ImpactTechLayout>
      <Hero />
      <OurStory />
      <OurMission />
    </ImpactTechLayout>
  );
};

export default AboutUs;
