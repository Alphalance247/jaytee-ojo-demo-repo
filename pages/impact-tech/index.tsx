import Hero from "@/components/impact-tech/hero";
import Layout from "../layout";
import WhatWeOffer from "@/components/impact-tech/whatWeOffer";
import WhoWeAre from "@/components/impact-tech/whoWeAre";
import OurWork from "@/components/impact-tech/ourWork";
import CommunityVoices from "@/components/impact-tech/communityVoices";
import GetInvolved from "@/components/impact-tech/getInvolved";
import ImpactTechLayout from "./layout";

const ImpactTechPage = () => {
  return (
    <ImpactTechLayout>
      <Hero />
      <WhatWeOffer />
      <WhoWeAre />
      <OurWork />
      <CommunityVoices />
      <GetInvolved />
    </ImpactTechLayout>
  );
};

export default ImpactTechPage;
