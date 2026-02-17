import Image from "next/image";
import React from "react";

const TeamCard = ({
  imageUrl,
  name,
  role,
}: {
  imageUrl: string;
  name: string;
  role: string;
}) => {
  return (
    <div className="bg-[#FFFFFF] rounded-[40px] border border-[#F5F6F7]  h-[396px] ">
      <div className="flex flex-col gap-4 justify-center items-center h-full p-6 ">
        <Image
          className="flex justify-center items-center w-full object-cover rounded-[40px] h-full "
          src={imageUrl}
          width={264}
          height={264}
          alt="team member"
        />
        <div className="font-inter flex flex-col justify-center items-center gap-2">
          <p className="font-semibold  text-[#061C3D] text-lg md:text-xl capitalize">
            {name}
          </p>
          <p className="text-[#6A778B] text-sm md:text-base capitalize">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
