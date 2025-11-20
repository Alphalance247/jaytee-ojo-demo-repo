import Projects from "@/components/OUR-PROJECTS/CommunityProj/Project";
import Techy from "@/components/OUR-PROJECTS/ICT/Techy";
import Tech from "@/components/OUR-PROJECTS/CommunityProj/Tech";
import Layout from "@/pages/layout";

const TechIct = () => {
  return (
    <Layout>
      <div className=" bg-center bg-no-repeat bg-cover h-[495px] bg-[url('/assets/Community/HeroSection.png')] relative max-sm:p-4 max-sm:h-[300px] max-md:p-8 max-lg:p-10"></div>
      <Projects />
      <Techy />
      <Tech text="Community" styles="bg-none" />
    </Layout>
  );
};

export default TechIct;
