import Image from "next/image";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import Head from "next/head";
import SectionWithImage from "../../components/SectionWithImage";
import OurPrograms from "../../components/OurPrograms";
import ProgramsCard from "../../components/ProgramsCard";
import WhatWeDo from "../../components/WhatWeDo";
import Impact from "../../components/Impact";
import Trainer from "../../components/Trainer";
import LearnMore from "../../components/LearnMore";
import "../../app/globals.css";
import "../../styles.css";
import Layout from "@/app/layout";

export default function Home() {
  return (
    <main>
      <Head>
        <title>JayTee Ojo Foundation</title>
        <link rel="icon" href="/favicon.ico" />
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
        <OurPrograms />
        <ProgramsCard />
        <WhatWeDo />
        <Impact />
        <Trainer />
        <LearnMore />
      </Layout>
    </main>
  );
}
