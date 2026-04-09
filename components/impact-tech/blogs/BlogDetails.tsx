"use client";
import React, { useEffect, useRef, useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine, RiWhatsappFill } from "react-icons/ri";

const socialMedia = [
  {
    url: "",
    media: <FaFacebookF className="text-[#2A7445] h-6 w-6" />,
  },
  {
    url: "",
    media: <RiTwitterXLine className="text-[#2A7445] h-6 w-6" />,
  },
  {
    url: "",
    media: <FaLinkedinIn className="text-[#152999] h-6 w-6" />,
  },
  {
    url: "",
    media: <RiWhatsappFill className="text-[#2A7445] h-6 w-6" />,
  },
];

const topics = [
  { id: "introduction", title: "Introduction" },
  { id: "bring-coding", title: "Bringing Coding to the Classroom" },
  { id: "real-impact", title: "Real Impact, Real Stories" },
  { id: "beyond-technical-skills", title: "Beyond Technical Skills" },
  { id: "looking-ahead", title: "Looking Ahead" },
];

const BlogDetails = ({
  imageUrl,
  title,
  date,
  time,
  team,
  children,
}: {
  imageUrl: string;
  title: string;
  date: string;
  time: string;
  team: string;
  children: React.ReactNode;
}) => {
  const [activeId, setActiveId] = useState(topics[0].id);
  const [isSticky, setIsSticky] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionElements = topics
      .map((topic) => document.getElementById(topic.id))
      .filter((el): el is HTMLElement => el !== null);

    // Active section observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-120px 0px -50% 0px",
        threshold: [0.3, 0.6, 1],
      },
    );

    sectionElements.forEach((section) => observer.observe(section));

    // Sticky sidebar control
    const lastSection = sectionElements[sectionElements.length - 1];
    const lastObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.boundingClientRect.top <= 0) {
            setIsSticky(false); // stop sticking when last section reached top
          } else {
            setIsSticky(true); // stick until last section
          }
        });
      },
      { threshold: [0] },
    );

    if (lastSection) lastObserver.observe(lastSection);

    return () => {
      observer.disconnect();
      lastObserver.disconnect();
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative mx-auto md:max-w-[1440px] w-full">
      <div className="flex md:flex-row flex-col md:gap-0 gap-6 pt-[34px] pb-10 md:pb-[101px] items-start relative">
        <div className="w-full md:w-2/3">
          <div id="article-boundary" className="flex flex-col gap-[30px]">
            <div className="relative h-full md:h-[462px] w-full md:max-w-[852px] rounded-none md:rounded-[10px] ">
              <img
                src="/assets/impact-tech/blogs/image5.png"
                alt="blog image"
                className="w-full h-full rounded-none md:rounded-[10px]"
              />
              <div className=" absolute inset-x-0 bottom-0 bg-[#0000001A] h-full md:h-[166px] rounded-none md:rounded-[10px] z-10 ">
                <div className=" flex flex-col gap-4 text-white px-4 pt-[42px] md:px-[36px] h-full rounded-none md:rounded-[10px] ">
                  <div className="md:w-[656px] w-full">
                    <h1 className=" font-grostek font-semibold text-lg md:text-[24px] leading-[100%] capitalize ">
                      {title}
                    </h1>
                  </div>
                  <div className="flex md:flex-row flex-col gap-4 md:gap-6 font-inter items-start md:items-center">
                    <div className="flex gap-1 items-center ">
                      <div>
                        <img
                          src="/assets/impact-tech/blogs/calendar.png"
                          alt="calendr icon"
                          className="w-6 h-6"
                        />
                      </div>
                      <div className="text-sm font-normal">{date}</div>
                    </div>
                    <div className="px-4 md:px-0">
                      <ul className="flex items-center gap-5 list-disc">
                        <li className="text-sm font-normal">{time} read</li>
                        <li className="text-[13px] italic font-light">
                          {team}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 h-full w-full bg-[#2A7445] opacity-[60%] rounded-none md:rounded-[10px]"></div>
            </div>
            {children}
          </div>
        </div>

        <div className="w-full md:w-1/3 relative md:px-0 px-6" ref={sidebarRef}>
          <div className={`${isSticky ? "md:sticky md:top-28" : ""}`}>
            <div className="w-full md:w-[341px] rounded-[10px] bg-[#2A7445] relative">
              <div className="p-5">
                <div className="text-white font-semibold text-base">
                  Share with your community!
                </div>
                <div className="flex gap-4 pt-2.5">
                  {socialMedia.map((media, index) => (
                    <Link
                      key={index}
                      href={media.url}
                      className="bg-white h-[30px] w-[30px] rounded-[5px] flex justify-center items-center"
                    >
                      {media.media}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="font-semibold text-xl">In this article</div>
              <div className="mt-5 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
                <div className="grid gap-4">
                  {topics.map((topic) => (
                    <a
                      key={topic.id}
                      href={`#${topic.id}`}
                      onClick={(e) => handleClick(e, topic.id)}
                      className={`h-[39px] capitalize text-base pl-3 border-l-2 transition-all duration-300 ${
                        activeId === topic.id
                          ? "border-[#2A7445] text-[#2A7445] font-semibold"
                          : "border-transparent text-[#1B1B1F] hover:text-[#2A7445]"
                      }`}
                    >
                      {topic.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
