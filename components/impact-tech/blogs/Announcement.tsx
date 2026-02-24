import { title } from "process";
import React from "react";
import AnnoucementCard from "./AnnoucementCard";
const annoucements = [
  {
    id: 1,
    imageUrl: "/assets/impact-tech/blogs/open.png",
    date: "15 Feb, 2026",
    title: "Applications Now Open for Teens Coding Program 2026",
    text: "We are excited to announce that applications for the Teens Coding Program are now open. This program introduces secondary school students to web development and programming fundamentals through hands-on learning and mentorship.",
  },
  {
    id: 2,
    imageUrl: "/assets/impact-tech/blogs/Photo7.png",
    date: "15 Feb, 2026",
    title: "Partnership with Ekiti State Ministry of Education Expanded",
    text: "Impact Tech is expanding its collaboration with the Ministry of Education to reach more schools and train more educators in digital skills and coding instruction.",
  },
];
const Announcement = () => {
  return (
    <div className="bg-[#F4F7FA] w-full h-fit">
      <div className="mx-auto md:max-w-[1440px] w-full flex justify-center items-center ">
        <div className=" py-10 md:pt-[p1px] md:pb-[96px] flex flex-col ">
          <div className=" flex flex-col justify-center items-center text-center pb-10 md:pb-20 gap-4 md:gap-8">
            <h5 className="text-[28px] md:text-[58px] font-bold text-[#061C3D] leading-9 md:leading-[60px] font-grostek">
              Announcement
            </h5>
            <p className="text-base md:text-lg font-normal text-[#42526B] w-full md:w-[608px] font-graphik">
              Stay updated on new programs, upcoming events, and important news
              from Impact Tech.
            </p>
          </div>
          <div className="grid gap-6 md:gap-[46px] ">
            {annoucements.map((announcement) => (
              <AnnoucementCard
                key={announcement.id}
                date={announcement.date}
                title={announcement.title}
                content={announcement.text}
                imageUrl={announcement.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
