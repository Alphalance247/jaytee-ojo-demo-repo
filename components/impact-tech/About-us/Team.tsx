import React from "react";
import Button from "../Teens-coding/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import TeamCard from "./TeamCard";
const teamMembers = [
  {
    photo: "/assets/impact-tech/Bg.png",
    name: "taiwo ojo",
    role: "product design",
  },
  {
    photo: "/assets/impact-tech/Bg.png",
    name: "taiwo ojo",
    role: "product design",
  },
  {
    photo: "/assets/impact-tech/Bg.png",
    name: "taiwo ojo",
    role: "product design",
  },
  {
    photo: "/assets/impact-tech/Bg.png",
    name: "taiwo ojo",
    role: "product design",
  },
  {
    photo: "/assets/impact-tech/Bg.png",
    name: "taiwo ojo",
    role: "product design",
  },
  {
    photo: "/assets/impact-tech/Bg.png",
    name: "taiwo ojo",
    role: "product design",
  },
];
const Team = () => {
  return (
    <div className=" pt-8 md:pt-[119px] pb-6 md:pb-[56px]">
      <div className="w-full md:max-w-[1227px] mx-auto bg-[#F0FBF375] ">
        <div className="flex justify-between items-center px-6 md:px-[105px] pt-[65px] ">
          <div>
            <div className="font-grostek, text-[#061C3D] font-bold text-[24px] md:text-[48px]">
              Meet the Team
            </div>
            <div className="text-lg text-[#061C3D]">
              The brains behind our impacts
            </div>
          </div>
          <div>
            <Button
              text="Volunteer"
              className="text-white bg-[#E60303] w-[110px] md:w-[201px]"
              children={
                <IoIosArrowRoundForward className="text-white h-6 w-6 pl-1 " />
              }
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 px-6 md:px-[105px] py-10 md:pt-[60px] md:pb-[113px]  ">
          {teamMembers.map((team, index) => (
            <TeamCard
              key={index}
              imageUrl={team.photo}
              name={team.name}
              role={team.role}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
