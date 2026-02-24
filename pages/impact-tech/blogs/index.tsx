import React from "react";
import ImpactTechLayout from "../layout";
import Hero from "@/components/impact-tech/blogs/Hero";
import LatestBlog from "@/components/impact-tech/blogs/LatestBlog";
import MoreFromImpactTech from "@/components/impact-tech/blogs/MoreFromImpactTech";
import Announcement from "@/components/impact-tech/blogs/Announcement";

const index = () => {
  return (
    <ImpactTechLayout>
      <Hero />
      <LatestBlog />
      <MoreFromImpactTech />
      <Announcement />
    </ImpactTechLayout>
  );
};

export default index;
