import React from "react";
import ImpactTechLayout from "../layout";
import Hero from "@/components/impact-tech/About-us/Hero";
import OurStory from "@/components/impact-tech/About-us/OuStory";
import OurMission from "@/components/impact-tech/About-us/OurMission";
import HowWeWork from "@/components/impact-tech/About-us/HowWeWork";
import OurImpact from "@/components/impact-tech/About-us/OurImpact";
import Team from "@/components/impact-tech/About-us/Team";
import Volunteer from "@/components/impact-tech/About-us/Volunteer";

const AboutUs = () => {
  return (
    <ImpactTechLayout>
      <Hero />
      <OurStory />
      <OurMission />
      <HowWeWork />
      <OurImpact />
      <Team />
      <Volunteer />
    </ImpactTechLayout>
  );
};

export default AboutUs;
