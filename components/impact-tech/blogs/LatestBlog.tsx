"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useBlogsStore } from "@/store/impact-tech/blogs/OurImpactBlogsStore";
import parse, { domToReact } from "html-react-parser";
import LoadingState from "../common/LoadingState";
const LatestBlog = () => {
  const router = useRouter();
  const { blogs, loading, error, fetchBlogs } = useBlogsStore();
  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);
  const latestBlog = blogs[0];
  console.log(latestBlog);
  const stripHTML = (html?: unknown) => {
    if (!html) return "";
    return String(html)
      .replace(/<[^>]+>/g, "")
      .trim();
  };
  const formatHtmlDate = (html: string) => {
    const safeHtml = String(html || "");

    const clean = safeHtml
      .replace(/<p>|<\/p>/g, "")
      .replace(/<del>(\d{2})<\/del>/, "-$1-");

    const date = new Date(clean);

    return isNaN(date.getTime())
      ? ""
      : date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });
  };
  const modifiedBlog = [
    {
      img: "/assets/impact-tech/blogs/calendar.png",
      date: "Feb 16",
      time: "5 min",
      publisher: "Impact Tech team",
      slug: "coding-transforming-ekiti-students",
      title:
        "How Coding is Transforming the Future of Secondary School Students in Ekiti State",
      details:
        "Technology is shaping every part of our world, from how we communicate to how we work and solve problems. Yet, many young students in underserved communities lack access to the skills and resources needed to participate in this digital future.",
    },
  ];
  const getFirstTwoSentences = (text: string) => {
    if (!text) return "";

    const sentences = text.match(/[^.]+\.?/g) || [];

    return sentences.slice(0, 2).join("").trim();
  };
  return (
    <div className="bg-[#F5F5F5] w-full ">
      <div className="mx-auto w-full max-w-[1230px] py-10 md:pt-[98px] md:pb-[95px]">
        <div className="flex gap-[5px] items-center pb-10 md:pb-[51px] pl-6 md:pl-0">
          <div className="border-r-4 border-[#F81539] rounded-[12px] h-[38px] "></div>
          <div>
            <h2 className="text-[32px] md:text-[48px] font-semibold font-grostek text-[#3E3232]">
              latest Blog
            </h2>
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-full my-6">
            <LoadingState className="h-[400px] mx-[100px]" />
          </div>
        ) : error ? (
          <div className="text-center text-red-500 flex justify-center items-center">
            {error}
          </div>
        ) : !loading && !latestBlog ? (
          <div className="flex justify-center items-center h-full text-[#050505] text-lg">
            Latest blog not available
          </div>
        ) : (
          <div className=" relative h-[662px] bg-[url(/assets/impact-tech/blogs/unsplash_XyZxxJI8g30.png)] bg-cover bg-no-repeat flex  items-center rounded-[12px]">
            <div className="absolute bottom-16 md:bottom-[31px] h-fit md:h-[324px] bg-[#FFFFFF1A] w-full md:w-[1152px] backdrop-blur-[35px] rounded-[20px] left-0 md:left-[31.7px]">
              <div className="px-6 md:pl-[65px] py-10 md:py-[39px]">
                <div className="text-white w-full md:max-w-[860px] flex flex-col gap-4 ">
                  <div className="flex gap-6 font-inter items-center">
                    <div className="flex gap-1 items-center ">
                      <div>
                        <img
                          src={`/assets/impact-tech/blogs/calendar.png`}
                          alt="calendr icon"
                          className="w-6 h-6"
                        />
                      </div>
                      <div className="text-sm font-normal">
                        {formatHtmlDate(latestBlog?.date)}
                      </div>
                    </div>
                    <div className="">
                      <ul className="flex  items-center gap-5 list-disc">
                        <li className="text-sm font-normal">
                          {stripHTML(latestBlog?.minute_read) || ""} read
                        </li>
                        <li className="text-[13px]  italic font-light">
                          {stripHTML(latestBlog?.tech_program) || ""} team
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h3 className="font-grostek text-[24px] md:text-[40px] font-semibold leading-[100%]">
                    {latestBlog?.title}
                  </h3>
                  <div className="text-base md:text-lg font-inter font-normal leading-[150%]">
                    {getFirstTwoSentences(latestBlog?.body)}{" "}
                    <span>
                      <Link
                        href={`/impact-tech/blogs/${latestBlog?.key}`}
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                      >
                        Read More{" "}
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestBlog;
