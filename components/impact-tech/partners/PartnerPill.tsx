import Image from "next/image";
import React from "react";

const PartnerPill = ({ photo }: { photo: string }) => {
  return (
    <div className="bg-white h-[90px] md:h-[143px] w-[180px] md:w-[230px] rounded-[20px] flex justify-center items-center flex-shrink-0">
      <Image
        src={photo}
        alt="alluvium logo"
        width={185.67}
        height={41.68}
        className="items-center h-auto mx-[22.17px] w-full"
      />
    </div>
  );
};

export default PartnerPill;
