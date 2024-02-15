import Layout from "@/app/layout";
import Give from "@/components/Contact/Give";
import Help from "@/components/Contact/Help";
import Leadership from "@/components/Contact/Leadership";

const Volunteer = () => {
  return (
    <Layout>
      <div
        className="h-[528px] bg-cover bg-center bg-no-repeat relative max-sm:h-[200px] max-md:h-[350px] max-lg:h-[500px]"
        style={{
          backgroundImage: 'url("../assets/news/grow.png")',
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
          <p className=" mb-12 font-Roboto text-lg font-bold max-sm:text-xs max-sm:mb-2">
            GET INVOLVED
          </p>
          <h4 className=" text-[51px] leading-6 font-bold font-RobotoSlab max-sm:text-[20px] max-md:text-[25px]">
            Become a Volunteer
          </h4>
        </div>
      </div>
      <div className="p-24 border-[#D9D9D9] border-b-2 max-sm:p-5 max-md:p-8">
        <h3 className=" font-RobotoSlab font-bold text-4xl text-[#369458] text-center max-sm:text-xl max-md:text-2xl">
          Our National Distribution Center in Omaha is looking for great
          volunteers to help us help other nonprofit organizations.
        </h3>
      </div>

      <Leadership />
      <Help />
      <Give />
    </Layout>
  );
};

export default Volunteer;
