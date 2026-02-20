import React from "react";
import ImpactTechLayout from "../layout";
import Hero from "@/components/impact-tech/partners/Hero";
import WhyPartner from "@/components/impact-tech/partners/WhyPartner";
import WaysToPartner from "@/components/impact-tech/partners/WaysToPartner";
import OtherPartners from "@/components/impact-tech/partners/OtherPartners";
import PartnershipWork from "@/components/impact-tech/partners/PartnershipWork";
import StartPartnership from "@/components/impact-tech/partners/StartPartnership";

const Partners = () => {
  return (
    <ImpactTechLayout>
      <Hero />
      <WhyPartner />
      <WaysToPartner />
      <OtherPartners />
      <PartnershipWork />
      <StartPartnership />
    </ImpactTechLayout>
  );
};

export default Partners;
