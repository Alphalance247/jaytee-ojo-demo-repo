import React from "react";
import ImpactTechLayout from "../../layout";
import BlogDetails from "@/components/impact-tech/blogs/BlogDetails";
import BlogDetailsCard from "@/components/impact-tech/blogs/BlogDetailsCard";
import BePartCard from "@/components/impact-tech/blogs/BePartCard";
const FullBlog = ({ params }: { params: { slug: string } }) => {
  return (
    <ImpactTechLayout>
      <BlogDetails
        imageUrl=""
        title="How Coding is Transforming the Future of Secondary School Students in Ekiti State"
        date="Feb 16, 2026"
        time="5 min"
        team="Impact Tech team"
      >
        {" "}
        <div className="px-6 md:px-0">
          <BlogDetailsCard headingText="Intoduction" id="introduction">
            {" "}
            {/* <p>{params.slug}</p> */}
            <p className="font-inter text-base font-normal pt-5">
              Technology is shaping every part of our world, from how we
              communicate to how we work and solve problems. Yet, many young
              students in underserved communities lack access to the skills and
              resources needed to participate in this digital future. At Impact
              Tech, our mission is to bridge that gap by introducing secondary
              school students to coding and digital skills early, empowering
              them to become creators, not just consumers of technology.
            </p>
          </BlogDetailsCard>
          <BlogDetailsCard
            headingText="Bringing Coding to the Classroom"
            id="bring-coding"
          >
            <p className="font-inter text-base font-normal pt-5">
              Our coding programs are designed to be practical, engaging, and
              accessible. Students learn foundational skills in HTML, CSS, and
              Python, enabling them to build their own websites and simple
              applications. Through our ICT Coding Club initiative, we have
              established coding clubs in over 10 secondary schools across Ekiti
              State. These clubs provide students with consistent exposure to
              technology, guided by trained instructors and mentors. Students
              are not only learning technical skills—they are learning how to
              think critically, solve problems, and express their creativity.
            </p>
          </BlogDetailsCard>
          <BlogDetailsCard
            headingText="Real Impact, Real Stories"
            id="real-impact"
          >
            <p className="font-inter text-base font-normal pt-5">
              One of our proudest moments was seeing a student from our ICT
              Coding Club present their HTML project at a state technology event
              organized by the Ministry of Innovation, Science and Digital
              Economy. Moments like these demonstrate the potential that exists
              when young people are given the right opportunities and support.
              Additionally, several graduates of our programs have gone on to
              become instructors themselves, teaching other students and
              multiplying the impact across communities.
            </p>
          </BlogDetailsCard>
          <BlogDetailsCard
            headingText="Beyond Technical Skills"
            id="beyond-technical-skills"
          >
            <p className="font-inter text-base font-normal pt-5">
              Our programs focus on more than just coding. Students also
              develop:{" "}
            </p>
            <ul className="list-disc ml-6">
              <li>Confidence in their abilities </li>
              <li> Problem-solving skills </li>
              <li>Team collaboration experience</li>
              <li> Exposure to real-world technology applications</li>
            </ul>
            <p className="font-inter text-base font-normal ">
              These skills prepare them not just for careers in tech, but for
              success in any field they choose.
            </p>
          </BlogDetailsCard>
          <BlogDetailsCard headingText="Looking Ahead" id="looking-ahead">
            <p className="font-inter text-base font-normal pt-5">
              As technology continues to evolve, the need for digital skills
              will only grow. Impact Tech remains committed to expanding access
              to tech education, reaching more schools, and empowering more
              young people. We believe that the next generation of innovators,
              creators, and leaders can come from anywherewith the right
              support.
            </p>
          </BlogDetailsCard>
          <div className="pt-6 md:pt-0">
            <BePartCard />
          </div>
        </div>
      </BlogDetails>
    </ImpactTechLayout>
  );
};

export default FullBlog;
