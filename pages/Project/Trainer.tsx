import Layout from "@/app/layout";
import Educators from "@/components/OUR-PROJECTS/Trainer/Educators";
import HeroTrainer from "@/components/OUR-PROJECTS/Trainer/HeroTrainer";
import Toggle from "@/components/OUR-PROJECTS/Trainer/Toggle";
const Trainer = () => {
  return (
    <Layout>
      <HeroTrainer />
      <Educators />
      <Toggle />
    </Layout>
  );
};

export default Trainer;
