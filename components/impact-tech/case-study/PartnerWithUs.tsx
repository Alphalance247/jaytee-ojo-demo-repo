import React from "react";
import MakeImpactSection from "../common/MakeImpactSection";
const PartnerWithUs = () => {
  return (
    <div
      className="h-full md:h-[655px] bg-[#201D1F] md:mt-0 mt-16
   shadow-[0px_1.29px_3.22px_0px_#0000004D,0px_0.32px_0px_0px_#FFFFFF0F_inset]
   bg-[linear-gradient(252.53deg,rgba(42,116,69,0.5)-0.87%,rgba(40,108,65,0.5)25.15%,rgba(42,116,69,0.425)97.92%)]
  "
    >
      <MakeImpactSection
        headingText="Partner With Us to Expand Digital Education"
        description="Collaborate with Impact Tech to bring transformative tech education programs to your institution or community."
        imageUrl="/assets/impact-tech/blogs/19991af8b47739029db60d08cb93a60a5239b743.png"
        linkTextClass="text-white border-white"
        headingTextClass="text-white w-full md:w-[709px]"
        descriptionClass="text-white"
        btnText="Partner With Us"
        imageClass="h-[425.33px]"
      />
    </div>
  );
};

export default PartnerWithUs;
