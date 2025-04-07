import Head from "next/head";
import SectionWithImage from "@/components/SectionWithImage";
import OurPrograms from "@/components/OurPrograms";
import ProgramsCard from "@/components/ProgramsCard";
import WhatWeDo from "@/components/WhatWeDo";
import Impact from "@/components/Impact";
import Trainer from "@/components/Trainer";
import LearnMore from "@/components/LearnMore";
import Layout from "./layout";
import WaysToHelp from "@/components/Home/WaysToHelp";
import News from "@/components/OUR-PROJECTS/News";

export default function Home() {
  return (
    <main>
      <Head>
        <title>JayTee Ojo Foundation</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="description"
          content="JayTee Ojo Foundation is a non-profit organization dedicated to empowering communities through education, healthcare, and sustainable development initiatives."
        />
        <meta
          name="keywords"
          content=" JayTee Ojo Foundation, non-profit, community empowerment, education, healthcare, sustainable development"
        />
      </Head>

      <Layout>
        <SectionWithImage />
        <ProgramsCard />
        <WhatWeDo />
        <Impact />
        <Trainer />
        <LearnMore />
        <WaysToHelp />
        <News />
      </Layout>
    </main>
  );
}
