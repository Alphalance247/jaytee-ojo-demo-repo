import Image from "next/image";
import React from "react";
import PartnerPill from "./PartnerPill";
const partners = [
  { photo: "/assets/impact-tech/partners/Alluvium-logo.png" },
  { photo: "/assets/impact-tech/partners/Alluvium-logo.png" },
  { photo: "/assets/impact-tech/partners/Alluvium-logo.png" },
  { photo: "/assets/impact-tech/partners/Alluvium-logo.png" },
  { photo: "/assets/impact-tech/partners/Alluvium-logo.png" },
  { photo: "/assets/impact-tech/partners/Alluvium-logo.png" },
  { photo: "/assets/impact-tech/partners/Alluvium-logo.png" },
];
// @keyframes carousel {
//   0% {
//     transform: translateX(0);
//   }
//   100% {
//     transform: translateX(-50%);
//   }
// }

// .animate-carousel {
//   animation: carousel 20s linear infinite;
// }
const OtherPartners = () => {
  return (
    <div className="">
      <Image
        className="w-full object-cover bg-no-repeat"
        src={"/assets/impact-tech/partners/children.png"}
        width={1446}
        height={684}
        alt="background image"
      />
      <div
        className="w-full h-[350px] md:h-[463px] flex items-center "
        style={{
          backgroundImage: `
            linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 100%),
            radial-gradient(circle at center, #68D585 0%, #2A7445 70%)
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
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
        <div className="w-full">
          <h3 className="text-[32px] md:text-[48px] text-white font-[800] font-inter  px-6 md:px-[107px]">
            Our Partners
          </h3>

          {/* ✅ carousel wrapper */}
          <div className="pt-10 md:pt-[68px] overflow-hidden w-full">
            {/* ✅ animated track */}
            <div className="flex w-max gap-6 md:gap-10 animate-carousel whitespace-nowrap px-6 md:px-[107px]">
              {partners.map((partner, index) => (
                <PartnerPill key={index} photo={partner.photo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherPartners;
