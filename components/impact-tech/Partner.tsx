import React from "react";
import PartnerPill from "./partners/PartnerPill";
const partners = [
  { photo: "/assets/impact-tech/partners/Alluvium-logo.png" },
  { photo: "/assets/impact-tech/partners/Alluvium-logo.png" },
  { photo: "/assets/impact-tech/partners/Alluvium-logo.png" },
  { photo: "/assets/impact-tech/partners/Alluvium-logo.png" },
  { photo: "/assets/impact-tech/partners/Alluvium-logo.png" },
  { photo: "/assets/impact-tech/partners/Alluvium-logo.png" },
  { photo: "/assets/impact-tech/partners/Alluvium-logo.png" },
];
const Partner = () => {
  return (
    <div
      className="w-full h-[350px] md:h-[528px] flex items-center  bg-[#2A7445]"
      //   style={{
      //     backgroundImage: `
      //         linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 100%),
      //         radial-gradient(circle at center, #68D585 0%, #2A7445 70%)
      //       `,
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //     backgroundRepeat: "no-repeat",
      //   }}
    >
      {/* <div className=" h-full items-center w-full">
          <div>
            <h3 className="text-[32px] md:text-[48px] text-white font-[800] font-inter h-[58px] pt-[35px] px-6 md:px-[107px]">
              Our Partners
            </h3>
            <div className="pt-10 md:pt-[68px] relative md:overflow-hidden w-full">
              <div className="flex w-full md:w-max gap-6 md:gap-10 animate-carousel whitespace-nowrap ">
                {partners.map((partner, index) => (
                  <PartnerPill key={index} photo={partner.photo} />
                ))}
              </div>
            </div>
          </div>
        </div> */}
      <div className="w-full ">
        <div className="max-w-[1030px] mx-auto ">
          <div className="flex justify-between items-center flex-col md:flex-row gap-6 md:gap-[131px] px-6 md:px-0">
            <div className="w-full md:w-1/2 ">
              <h6 className="text-2xl md:text-[32px] text-white font-bold font-inter  w-full  leading-10">
                Building impact with trusted partners
              </h6>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-lg text-[#FFFFFF] font-inter font-normal w-full md:w-[428px]">
                These organizations collaborate with us to deliver training,
                mentorship, and impact at scale.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 md:pt-[68px] overflow-hidden w-full">
          <div className="flex w-max gap-6 md:gap-10 animate-carousel whitespace-nowrap px-6 md:px-[107px]">
            {partners.map((partner, index) => (
              <PartnerPill key={index} photo={partner.photo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
