import Hero from "@/components/about-us/Hero";
import Story from "@/components/about-us/Story";
import Mission from "@/components/about-us/Mission";
import Inspire from "@/components/about-us/Inspire";
import Learning from "@/components/about-us/Learning";
import Leadership from "@/components/about-us/Leadership";
import Layout from "../layout";

const About = () => {
  return (
    <Layout>
      <Hero />
      <Story />
      <Mission />
      <Inspire />
      <Learning />
      <Leadership />
    </Layout>
  );
};

export default About;
