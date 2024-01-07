import Layout from "@/app/layout";
import Hero from "@/components/OUR-PROJECTS/HeroPage";
import "../styles.css";
import Impact from "@/components/OUR-PROJECTS/Impact";
import PastProj from "@/components/OUR-PROJECTS/PastProject";

const Project = () => {
  return (
    <Layout>
      <Hero />
      <Impact />
      <PastProj />
    </Layout>
  );
};

export default Project;
