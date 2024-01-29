import Layout from "@/app/layout";
import Projects from "@/components/OUR-PROJECTS/CommunityProj/Project";
import Initiatives from "@/components/OUR-PROJECTS/CommunityProj/Initiatives";

const Community = () => {
  return (
    <Layout>
      <div
        className=" bg-center bg-cover h-[495px] relative max-sm:p-4 max-sm:h-[300px] max-md:p-8 max-lg:p-10"
        style={{
          background: 'url("../assets/Community/hero.png")',
        }}
      ></div>
      <Projects />
      <Initiatives />
    </Layout>
  );
};

export default Community;
