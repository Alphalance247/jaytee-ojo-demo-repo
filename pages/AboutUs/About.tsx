import Layout from "@/app/layout";
import Hero from "@/components/AboutComponent/Hero";
import Story from "@/components/AboutComponent/Story";
import Mission from "@/components/AboutComponent/Mission";

const About = () => {
  return (
    <Layout>
      <Hero />
      <Story />
      <Mission />
    </Layout>
  );
};

export default About;
