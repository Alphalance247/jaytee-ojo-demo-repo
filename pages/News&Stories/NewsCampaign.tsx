import Layout from "@/app/layout";
import Impacts from "@/components/AboutComponent/Impacts";
import Build from "@/components/NewsComponent/Build";
import CaroNews from "@/components/NewsComponent/CaroNews";
import Empower from "@/components/NewsComponent/Empower";
import HeroNews from "@/components/NewsComponent/HeroNews";
import Program from "@/components/NewsComponent/Program";
import Textbook from "@/components/NewsComponent/Textbook";

const NewsCampaign = () => {
  return (
    <Layout>
      <HeroNews />
      <Empower />
      <Build />
      <Textbook />
      <Program />
      <Impacts
        textColor="text-[#E60303]"
        fill="#E60303"
        backgroundCol="bg-[#C2E2CE]"
        Padd="p-24"
        border="border-b-0"
        width="0"
        borderColor="border-black"
      />
      <CaroNews />
    </Layout>
  );
};

export default NewsCampaign;
