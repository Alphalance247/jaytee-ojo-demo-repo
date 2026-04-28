import React, { useEffect } from "react";
import ImpactTechLayout from "../../layout";
import BlogDetails from "@/components/impact-tech/blogs/BlogDetails";
import BlogDetailsCard from "@/components/impact-tech/blogs/BlogDetailsCard";
import BePartCard from "@/components/impact-tech/blogs/BePartCard";
import { DocBody } from "@/store/impact-tech/case-study/CaseStudyStore";
import parse, { domToReact } from "html-react-parser";
// import { useBlogsStore } from "@/store/impact-tech/blogs/OurImpactBlogsStore";
interface BlogDetailsProp {
  id: string;
  key: string;
  title: string;
  body: string;
  minute_read: string;
  tech_program: string;
  date: string;
  bringing_coding_to_the_classroom: string;
  real_impact_real_stories: string;
  beyond_technical_skills: string;
  looking_ahead: string;
  attachments: [];
  // detailUrl: string;
}
interface BlogDetails {
  result: BlogDetailsProp;
}
export default function FullBlog({
  data,
  error,
}: {
  data: BlogDetails;
  error: string;
}) {
  // const { blogs, loading, error, fetchBlogs } = useBlogsStore();
  // const blog = blogs.find((b) => b.key === params.slug);
  // useEffect(() => {
  //   fetchBlogs();
  // }, [fetchBlogs]);
  const stripHTML = (html: any) => {
    return String(html ?? "").replace(/<[^>]+>/g, "");
  };
  const formatHtmlDate = (html: any) => {
    const clean = String(html ?? "")
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
  // const renderRichText = (doc: any) => {
  //   if (!doc?.content) return null;

  //   return doc.content.map((block: any, index: number) => {
  //     if (block.type === "paragraph") {
  //       return (
  //         <p key={index} className="mb-4">
  //           {block.content?.map((child: any) => child.text).join("")}
  //         </p>
  //       );
  //     }

  //     return null;
  //   });
  // };
  const options = {
    replace: (domNode: any) => {
      if (domNode.name === "ul") {
        return (
          <ul className="list-disc ml-7">{domToReact(domNode.children)}</ul>
        );
      }

      if (domNode.name === "li") {
        return <li className="">{domToReact(domNode.children)}</li>;
      }
      if (domNode.name === "p") {
        return <p className="">{domToReact(domNode.children)}</p>;
      }
    },
  };
  const safeParse = (html: any, options?: any) => {
    if (!html || typeof html !== "string") return null;
    return parse(html, options);
  };
  return (
    <ImpactTechLayout>
      {error ? (
        <div className="text-center text-black font-graphik h-[500px] flex justify-center items-center">
          {error}
        </div>
      ) : !data.result ? (
        <div className="text-center text-[#050505] text-lg">
          Case study details not available
        </div>
      ) : (
        <>
          <BlogDetails
            imageUrl=""
            title={data.result.title}
            date={formatHtmlDate(data.result?.date)}
            time={data.result.minute_read}
            team={data.result.tech_program}
          >
            <div className="px-6 md:px-0">
              <BlogDetailsCard headingText="Intoduction" id="introduction">
                {/* <p>{params.slug}</p> */}
                <p className="font-inter text-base font-normal pt-5">
                  {stripHTML(data.result.body)}
                  {/* Technology is shaping every part of our world, from how we
                  communicate to how we work and solve problems. Yet, many young
                  students in underserved communities lack access to the skills
                  and resources needed to participate in this digital future. At
                  Impact Tech, our mission is to bridge that gap by introducing
                  secondary school students to coding and digital skills early,
                  empowering them to become creators, not just consumers of
                  technology. */}
                </p>
              </BlogDetailsCard>
              <BlogDetailsCard
                headingText="Bringing Coding to the Classroom"
                id="bring-coding"
              >
                <p className="font-inter text-base font-normal pt-5">
                  {stripHTML(data.result.bringing_coding_to_the_classroom)}
                </p>
              </BlogDetailsCard>
              <BlogDetailsCard
                headingText="Real Impact, Real Stories"
                id="real-impact"
              >
                <p className="font-inter text-base font-normal pt-5">
                  {stripHTML(data.result.real_impact_real_stories)}
                </p>
              </BlogDetailsCard>
              <BlogDetailsCard
                headingText="Beyond Technical Skills"
                id="beyond-technical-skills"
              >
                <p className="font-inter text-base font-normal pt-5">
                  {safeParse(data.result.beyond_technical_skills, options)}
                </p>
                {/* <ul className="list-disc ml-6">
                  <li>Confidence in their abilities </li>
                  <li> Problem-solving skills </li>
                  <li>Team collaboration experience</li>
                  <li> Exposure to real-world technology applications</li>
                </ul>
                <p className="font-inter text-base font-normal ">
                  These skills prepare them not just for careers in tech, but
                  for success in any field they choose.
                </p> */}
              </BlogDetailsCard>
              <BlogDetailsCard headingText="Looking Ahead" id="looking-ahead">
                <p className="font-inter text-base font-normal pt-5">
                  {stripHTML(data.result.looking_ahead)}
                </p>
              </BlogDetailsCard>
              <div className="pt-6 md:pt-0">
                <BePartCard />
              </div>
            </div>
          </BlogDetails>
        </>
      )}
    </ImpactTechLayout>
  );
}

// export default FullBlog;
export async function getServerSideProps({
  params,
}: {
  params: { blogId: string };
}) {
  try {
    const res = await fetch(
      `https://site-api.alluvium.net/impact-tech/api/blogs/${params?.blogId}/`,
    );
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await res.json();
    console.log(data);
    console.log(params);
    const formattedDate = new Date(data.result.date).toLocaleDateString(
      "en-US",
      {
        month: "short",
        day: "numeric",
        timeZone: "UTC", // ✅ important
      },
    );
    return {
      props: {
        data: {
          ...data,
          result: {
            ...data.result,
            formattedDate,
          },
        },
      },
    };
  } catch (error) {
    return { props: { data: null, error: "Failed to fetch case study" } };
  }
}
