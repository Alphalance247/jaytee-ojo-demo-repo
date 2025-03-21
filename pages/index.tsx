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
          content="Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost."
        />
        <meta
          name="keywords"
          content="Alluvium, alluvium, team alluvium, atlassian products migration lab, migration, about alluvium, alluvians, cloud counter, Migration Experts, Software Consulting atlassian, confluence, jira"
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
