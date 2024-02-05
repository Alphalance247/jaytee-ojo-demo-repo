import Layout from "@/app/layout";
import Hero from "@/components/OUR-PROJECTS/HeroPage";
import "../../styles.css";
import Impact from "@/components/OUR-PROJECTS/Impact";
import PastProj from "@/components/OUR-PROJECTS/PastProject";
import Ongoing from "@/components/OUR-PROJECTS/OngoingProj";
import News from "@/components/OUR-PROJECTS/News";

const Project = () => {
  return (
    <Layout>
      <Hero />
      <Impact />
      <PastProj text="Past Projects" />
      <Ongoing />
      <News />
    </Layout>
  );
};

export default Project;
