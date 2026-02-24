import React from "react";
import ImpactTechLayout from "../layout";
import Hero from "@/components/impact-tech/contact-us/Hero";
import GetInTouch from "@/components/impact-tech/contact-us/GetInTouch";
import SendUsMessage from "@/components/impact-tech/contact-us/SendUsMessage";
import SomethingSpecific from "@/components/impact-tech/contact-us/SomethingSpecific";

const ContactUs = () => {
  return (
    <ImpactTechLayout>
      <Hero />
      <GetInTouch />
      <SendUsMessage />
      <SomethingSpecific />
    </ImpactTechLayout>
  );
};

export default ContactUs;
