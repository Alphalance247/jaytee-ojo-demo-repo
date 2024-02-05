import Layout from "@/app/layout";
import Tech from "@/components/OUR-PROJECTS/CommunityProj/Tech";
import News from "@/components/OUR-PROJECTS/News";
import PastProj from "@/components/OUR-PROJECTS/PastProject";

const PastProjectPage = () => {
  return (
    <Layout>
      <div
        className="h-[495px] bg-cover bg-center bg-no-repeat relative max-sm:h-[200px] max-md:h-[350px] max-lg:h-[500px]"
        style={{
          backgroundImage: 'url("../assets/HeroImg.jpg")',
        }}
      >
        <div
          className="absolute top-0 left-0 w-[100%] h-[100%] z-[10]"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>

        <div
          className=" text-white text-center absolute z-20 top-[50%] left-[50%]"
          style={{ transform: " translate(-50%, -50%)" }}
        >
          <h1 className=" mb-8 font-RobotoSlab text-5xl font-bold max-sm:text-3xl max-sm:mb-2">
            Our Past Projects
          </h1>
          <p className=" text-[18px] w-[887px] leading-6 font-normal font-Roboto max-sm:text-sm max-sm:w-[350px] max-md:w-[600px] max-lg:w-[650px]">
            Every project leaves a lasting legacy of change, showcasing the
            tangible impact of our dedication. From educational programs to
            healthcare initiatives, each one leaves an indelible mark on the
            communities it serves.
          </p>
        </div>
      </div>
      <PastProj text="Community" />
      <Tech text="Tech & ICT" styles="bg-[#D9D9D9]" />
      <News />
    </Layout>
  );
};

export default PastProjectPage;
