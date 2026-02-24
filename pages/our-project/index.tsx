import Layout from "../layout";
import Hero from "@/components/OUR-PROJECTS/HeroPage";
import Impact from "@/components/OUR-PROJECTS/Impact";
import PastProj from "@/components/OUR-PROJECTS/PastProject";
import Ongoing from "@/components/OUR-PROJECTS/OngoingProj";

const Project = () => {
  return (
    <Layout>
      <Hero />
      <Impact />
      <PastProj text="Past Projects" />
      <Ongoing />
      {/* <News /> */}
    </Layout>
  );
};

export default Project;
