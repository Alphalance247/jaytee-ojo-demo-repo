import React, { useEffect } from "react";
import ImpactTechCard from "./ImpactTechCard";
import { useBlogsStore } from "@/store/impact-tech/blogs/OurImpactBlogsStore";
import Link from "next/link";
import LoadingState from "../common/LoadingState";
const blogItems = [
  {
    id: 1,
    imageUrl: "/assets/impact-tech/blogs/students.png",
    title:
      "From Student to Instructor: How Impact Tech is Creating Future Tech Leaders",
    time: "5 min read",
    date: "15 Feb, 2026",
  },
  {
    id: 2,
    imageUrl: "/assets/impact-tech/blogs/Photocopy.png",
    title:
      "Building Digital Skills Through ICT Coding Clubs in Secondary Schools",
    time: "5 min read",
    date: "15 Feb, 2026",
  },
  {
    id: 3,
    imageUrl: "/assets/impact-tech/blogs/computer.png",
    title: "Strengthening Tech Education Through Train-the-Trainer Programs",
    time: "5 min read",
    date: "15 Feb, 2026",
  },
  {
    id: 4,
    imageUrl: "/assets/impact-tech/blogs/Photo2.png",
    title: "Strengthening Tech Education Through Train-the-Trainer Programs",
    time: "5 min read",
    date: "15 Feb, 2026",
  },
  {
    id: 5,
    imageUrl: "/assets/impact-tech/blogs/Photocopy.png",
    title:
      "From Student to Instructor: How Impact Tech is Creating Future Tech Leaders",
    time: "5 min read",
    date: "15 Feb, 2026",
  },
  {
    id: 6,
    imageUrl: "/assets/impact-tech/blogs/Photo.png",
    title:
      "Building Digital Skills Through ICT Coding Clubs in Secondary Schools",
    time: "5 min read",
    date: "15 Feb, 2026",
  },
];
const MoreFromImpactTech = () => {
  const { blogs, loading, error, fetchBlogs } = useBlogsStore();
  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);
  const ourImpactBlogs = blogs.slice(1);
  return (
    <div className="w-full">
      <div className="mx-auto max-w-[1240px] w-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-10 md:gap-[78px] py-10 md:py-[94px]">
          <div className="font-inter flex flex-col justify-center items-center text-center gap-4 md:gap-8">
            <h4 className="text-[28px] md:text-[56px] font-bold text-[#061C3D] leading-9 md:leading-[60px]">
              More from Impact Tech
            </h4>
            <p className="text-base md:text-lg font-normal text-[#42526B]">
              Stay informed with stories, insights, and highlights from our
              ecosystem
            </p>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-x-6 gap-6 md:gap-y-[78px] md:px-0 px-6">
            {loading ? (
              <div className="flex justify-center items-center h-full my-6">
                <LoadingState className="h-[400px]" />
              </div>
            ) : error ? (
              <div className="text-center text-red-500 flex justify-center items-center">
                {error}
              </div>
            ) : !loading && !ourImpactBlogs ? (
              <div className="flex justify-center items-center h-full text-[#050505] text-lg">
                Our impact blog is not available
              </div>
            ) : (
              ourImpactBlogs.map((blog, index) => (
                <Link
                  key={index}
                  href={`/impact-tech/blogs/${blog.key}`}
                  rel="noopener noreferrer"
                >
                  <ImpactTechCard
                    time={blog.minute_read}
                    title={blog.title}
                    imageUrl={blog.attachments[0].proxyUrl}
                    date={blog.date}
                  />
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreFromImpactTech;
