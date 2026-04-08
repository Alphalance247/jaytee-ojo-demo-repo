import React, { useEffect } from "react";
import ImpactTechLayout from "../../layout";
import Hero from "@/components/impact-tech/case-study/Hero";
import ProgramOverview from "@/components/impact-tech/case-study/ProgramOverview";
import PartnerWithUs from "@/components/impact-tech/case-study/PartnerWithUs";
import ProgramHighlights from "@/components/impact-tech/case-study/ProgramHighlights";
import Testimonial from "@/components/impact-tech/case-study/Testimonial";
import Image from "next/image";
import FunfactCard from "@/components/impact-tech/case-study/FunFactCard";
import {
  useCaseStudyDetailsStore,
  CaseStudyStore,
} from "@/store/impact-tech/case-study/CaseStudyDetails";

const training = [
  { text: "Instructor-led training sessions" },
  { text: "Practical exercises and projects" },
  { text: " Guided mentorship and support" },
  {
    text: "Structured curriculum aligned with modern tech education standards",
  },
];
const funFacts = [
  { impactValue: "10+", text: "educators successfully trained" },
  { impactValue: "50+", text: "secondary schools impacted" },
  {
    impactValue: "",
    text: "Teachers equipped to deliver coding education independently",
  },
  { impactValue: "", text: "Hundreds of students indirectly reached" },
];

export interface CaseStudyResponse {
  result: CaseStudyStore;
}
interface Props {
  overview: React.ReactNode;
  challenge: React.ReactNode;
  approach: React.ReactNode;
}
export default function CaseStudy({
  data,
  error,
}: {
  data: CaseStudyResponse;
  error: string;
}) {
  console.log(data);
  //   const { caseStudyId } = await params;

  // { params }: { params: { slug: string } }
  // const { caseStudyDetails, loading, error, fetchCaseStudyDetails } =
  //   useCaseStudyDetailsStore();
  // useEffect(() => {
  //   fetchCaseStudyDetails(caseStudyId);
  // }, [fetchCaseStudyDetails]);
  const renderRichText = (doc: any) => {
    if (!doc?.content) return null;

    return doc.content.map((block: any, index: number) => {
      if (block.type === "paragraph") {
        return (
          <p key={index} className="mb-4">
            {block.content?.map((child: any) => child.text).join("")}
          </p>
        );
      }

      return null;
    });
  };
  const date = new Date(data.result.year);
  const formattedDate = date.getFullYear();
  const studyDetails = [
    {
      text: { text: `Partner: ${data.result.partners}` },
      icon: (
        <Image
          src={"/assets/impact-tech/case-study/UIBlock/Vector.svg"}
          alt="icon"
          width={21.95}
          height={19.96}
          className=" flex items-center"
        />
      ),
    },
    {
      text: { text: `Year: ${formattedDate}` },
      icon: (
        <Image
          src={"/assets/impact-tech/case-study/UIBlock/Group.svg"}
          alt="icon"
          width={20.77}
          height={20.61}
        />
      ),
    },
    {
      text: { text: `Year: ${formattedDate}` },
      icon: (
        <Image
          src={"/assets/impact-tech/case-study/UIBlock/Vector1.svg"}
          alt="icon"
          width={15.97}
          height={19.96}
        />
      ),
    },
  ];
  const programHighlights = data.result.program_highlights.map(
    (highlight: any) => ({
      ImageUrl: highlight.proxyUrl,
    }),
  );
  const testimonials = data.result.program_testimonials.map(
    (testimonial: any) => ({
      ImageUrl: testimonial.photo?.proxyUrl || "",
      name: testimonial.name,
      text: testimonial.quote,
    }),
  );
  console.log(programHighlights);

  return (
    <ImpactTechLayout>
      <>
        {error ? (
          <div className="text-center text-black font-graphik h-[500px] flex justify-center items-center">
            {error}
          </div>
        ) : !data ? (
          <div className="text-center text-[#050505] text-lg">
            Case study details not available
          </div>
        ) : (
          <>
            <Hero
              imgUrl="/assets/impact-tech/case-study/teaching.jpg"
              title={data.result.title}
              desc=" Empowering educators across Ekiti State with foundational web
              development skills to expand access to digital education."
            >
              {studyDetails.map((detail, index) => (
                <div key={index} className=" flex gap-[17.5px] items-center">
                  <div className="h-6 w-6 flex items-center justify-center ml-6 md:ml-9">
                    {" "}
                    {detail.icon}
                  </div>
                  <div className="text-white font-inter text-[15px] font-medium uppercase">
                    {detail.text.text}
                  </div>
                </div>
              ))}
            </Hero>
            <ProgramOverview
              overview={renderRichText(data.result.program_overview)}
              challenge={renderRichText(data.result.the_challenge)}
              approach={renderRichText(data.result.our_approach)}
            >
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                {/* {funFacts.map((fact, index) => ( */}
                {renderRichText(data.result.impact_outcomes) && (
                  <FunfactCard>
                    <h5 className="text-[40px] font-bold">
                      {/* {fact.impactValue} */}
                    </h5>
                    <p className="text-sm">
                      {renderRichText(data.result.impact_outcomes)}
                    </p>
                  </FunfactCard>
                )}

                {/* ))} */}
              </div>
            </ProgramOverview>
            <ProgramHighlights programs={programHighlights} />

            <Testimonial testimonials={testimonials} />
            <PartnerWithUs />
          </>
        )}
      </>
    </ImpactTechLayout>
  );
}

// export default CaseStudy;
export async function getServerSideProps({
  params,
}: {
  params: { aboutId: string };
}) {
  try {
    const res = await fetch(
      `https://site-api.alluvium.net/impact-tech/api/case-studies/${params?.aboutId}/`,
    );
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await res.json();
    console.log(data);
    console.log(params);
    return { props: { data } };
  } catch (error) {
    return { props: { data: null, error: "Failed to fetch case study" } };
  }
}
