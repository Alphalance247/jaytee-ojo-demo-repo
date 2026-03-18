import React from "react";
import ImpactTechLayout from "../layout";
import Hero from "@/components/impact-tech/train-the-trainer/Hero";
import WhyTrain from "@/components/impact-tech/train-the-trainer/WhyTrain";
import Educator from "@/components/impact-tech/train-the-trainer/Educator";
import WhatToWalkAwayWith from "@/components/impact-tech/train-the-trainer/WhatToWalkAwayWith";
import TheRippleEffect from "@/components/impact-tech/train-the-trainer/TheRippleEffect";
import HowTheTrainingWorks from "@/components/impact-tech/train-the-trainer/HowTheTrainingWorks";
import Testimonial from "@/components/impact-tech/train-the-trainer/Testimonial";
import Faqs from "@/components/impact-tech/train-the-trainer/Faqs";
import StartPartnership from "@/components/impact-tech/train-the-trainer/StartPartnership";
import HowToApply from "@/components/impact-tech/train-the-trainer/HowToApply";
import ReadyToTransformEducation from "@/components/impact-tech/train-the-trainer/ReadyToTransformEducation";

const index = () => {
  return (
    <ImpactTechLayout>
      <Hero />
      <WhyTrain />
      <Educator />
      <WhatToWalkAwayWith />
      <TheRippleEffect />
      <HowTheTrainingWorks />
      <HowToApply />
      <Testimonial />
      <StartPartnership />
      <Faqs />
      <ReadyToTransformEducation />
    </ImpactTechLayout>
  );
};

export default index;
