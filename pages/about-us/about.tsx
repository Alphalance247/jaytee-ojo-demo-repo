import Layout from "@/app/layout";
import Hero from "@/components/about-us/Hero";
import Story from "@/components/about-us/Story";
import Mission from "@/components/about-us/Mission";
import Inspire from "@/components/about-us/Inspire";
import Learning from "@/components/about-us/Learning";
import Leadership from "@/components/about-us/Leadership";

const About = () => {
  return (
    <Layout>
      <Hero />
      <Story />
      <Mission />
      <Inspire />
      <Learning />
      <Leadership />

      <div></div>
    </Layout>
  );
};

export default About;
