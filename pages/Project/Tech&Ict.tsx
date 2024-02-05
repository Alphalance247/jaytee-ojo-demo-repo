import Layout from "@/app/layout";
import Projects from "@/components/OUR-PROJECTS/CommunityProj/Project";
import Techy from "@/components/OUR-PROJECTS/ICT/Techy";
import Tech from "@/components/OUR-PROJECTS/CommunityProj/Tech";

const TechIct = () => {
  return (
    <Layout>
      <div
        className=" bg-center bg-cover h-[495px] relative max-sm:p-4 max-sm:bg-contain max-sm:h-[300px] max-md:p-8 max-lg:p-10"
        style={{
          background: 'url("../assets/Community/HeroSection.png")',
        }}
      ></div>
      <Projects />
      <Techy />
      <Tech text="Community" styles="bg-none" />
    </Layout>
  );
};

export default TechIct;
