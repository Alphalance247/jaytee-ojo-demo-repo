import Layout from "@/app/layout";
import Hero from "@/components/AboutComponent/Hero";
import Story from "@/components/AboutComponent/Story";
import Mission from "@/components/AboutComponent/Mission";
import Inspire from "@/components/AboutComponent/Inspire";
import Learning from "@/components/AboutComponent/Learning";
import Leadership from "@/components/AboutComponent/Leadership";

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
