import Layout from "@/app/layout";
import News from "@/components/OUR-PROJECTS/News";

const Transform = () => {
  return (
    <Layout>
      <div
        className="bg-center bg-cover bg-no-repeat h-[100vh] relative max-sm:h-[300px] max-md:h-[450px]"
        style={{
          background: 'url("../assets/news/grow.png")',
        }}
      >
        <div
          className="absolute top-0 left-0 w-[100%] h-[100%] z-10 opacity-50"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9421), rgba(0, 0, 0, 1))",
          }}
        ></div>
        <div className="text-white absolute left-20 top-56 z-20 flex flex-col gap-y-6 max-sm:gap-y-3 max-sm:left-4 max-sm:top-10 max-md:top-32 max-md:left-10">
          <p className=" text-sm uppercase font-Roboto font-medium max-sm:text-xs">
            upcoming event
          </p>
          <h3 className=" text-4xl font-RobotoSlab font-semibold w-[100%] max-sm:text-2xl">
            Celebrate & Transform: Our Future Together
          </h3>
          <p className=" text-lg font-Roboto leading-7 text-[#FAFBFB] w-[60%] max-sm:w-[80%] max-sm:text-sm max-sm:leading-4 max-md:w-[90%]">
            Lorem ipsum dolor sit amet consectetur. Scelerisque ridiculus sit
            pretium enim lobortis a. Cursus urna eros bibendum integer orci.
            Velit vitae Lorem ipsum dolor sit amet consectetur. Scelerisque
            ridiculus sit pretium enim lobortis a. Cursus urna eros bibendum
            integer orci. Velit vitae
          </p>
          <p className="font-Roboto font-semibold text-xs uppercase">
            BY kayode Adepoju | Aug 01, 2023
          </p>
        </div>
      </div>

      <News />
      <News />
      <div className="text-center p-16 max-sm:p-5 max-md:p-8 max-lg:p-12">
        <button className="font-Roboto font-black text-sm py-6 px-10 border-2 border-[#262626] rounded text-[#369458] uppercase hover:bg-[#369458] hover:text-white">
          Load More
        </button>
      </div>
    </Layout>
  );
};

export default Transform;
