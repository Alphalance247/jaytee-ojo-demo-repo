import Layout from "@/app/layout";
import News from "@/components/OUR-PROJECTS/News";

const Transform = () => {
  return (
    <Layout>
      <div
        className="bg-center bg-cover h-[640px] relative  max-sm:p-4 max-sm:h-[300px] max-md:p-8 max-lg:p-10"
        style={{
          background: 'url("../assets/news/grow.png")',
        }}
      >
        <div
          className="absolute top-0 left-0 w-[100%] h-[100%] z-10 opacity-50"
          style={{
            background:
              // "linear-gradient(90deg, #000 42.21%, rgba(0, 0, 0.62, 0) 63.96%, rgba(0, 0, 0, 0.29) 78.42%, rgba(0, 0, 0, 0.00) 96.23%)",
              "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9421), rgba(0, 0, 0, 1))",
          }}
        ></div>
        <div className="text-white absolute left-20 top-60 z-20 w-[849px] h-[334px] flex flex-col gap-y-6 max-sm:gap-y-3 max-sm:w-[300px] max-md:w-[450px]">
          <p className=" text-sm uppercase font-Roboto font-medium max-sm:text-sm">
            upcoming event
          </p>
          <h3 className=" text-4xl font-RobotoSlab font-semibold w-[579px] max-sm:text-2xl max-sm:w-[300px]">
            Empower Change with Your Contribution
          </h3>
          <p className=" text-lg font-Roboto leading-7 text-[#FAFBFB] w-[711px] max-sm:w-[340px] max-sm:text-sm max-sm:leading-4">
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
      );
      <News />
      <News />
      <div className="text-center p-24">
        <button className="font-Roboto font-black text-sm py-6 px-10 border-2 border-[#262626] rounded text-[#369458] uppercase hover:bg-[#369458] hover:text-white">
          Load More
        </button>
      </div>
    </Layout>
  );
};

export default Transform;
