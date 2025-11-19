import News from "@/components/OUR-PROJECTS/News";
import NewsData from "@/components/OUR-PROJECTS/Data/NewsData";
import Image from "next/image";
import Layout from "@/pages/layout";
import Container from "@/components/common/container";

const Transform = () => {
  return (
    <Layout>
      <div className="bg-center bg-cover bg-[url('/assets/news/grow.png')] bg-no-repeat h-[600px] relative max-sm:h-[400px] max-md:h-[450px]">
        <div
          className="absolute top-0 left-0 w-[100%] h-[100%] z-10 opacity-50"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9421), rgba(0, 0, 0, 1))",
          }}
        ></div>

        <Container>
          <div className="text-white z-20 relative flex flex-col top-[10rem] gap-y-6 max-sm:gap-y-3 max-md:top-16">
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
        </Container>
      </div>

      {/* <div className="px-24 py-8 max-sm:p-5 max-md:p-8 max-lg:p-12">
        <div className="grid grid-cols-3  items-center justify-center gap-8 mt-12 max-sm:flex max-sm:flex-col max-md:grid max-md:grid-cols-2 max-md:mt-4 ">
          {NewsData.map((data) => (
            <div
              className="flex flex-col items-start max-sm:mb-4 max-sm:w-[342px]"
              key={data.id}
              style={{ border: "1px solid #D9D9D9" }}
            >
              <Image
                src={data.imageUrl}
                alt={data.imageAlt}
                width={377}
                height={274}
              />
              <div className="bg-white flex flex-col gap-4 max-w-[377px] p-8 max-sm:p-4">
                <h4 className="text-[#454545] text-[13px] font-[500] leading-7 font-Roboto uppercase">
                  {data.content}
                </h4>
                <h3 className="text-[#262626] font-[500] text-[23px] leading-7 font-RobotoSlab">
                  {data.headings}
                </h3>
                <p className="text-[#454545] text-[16px] font-[400] font-Roboto">
                  {data.paragraph}
                </p>
                <p className="font-Roboto font-semibold text-xs uppercase">
                  {data.name} {data.date}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3  items-center justify-center gap-8 mt-12 max-sm:flex max-sm:flex-col max-md:grid max-md:grid-cols-2 max-md:mt-4 ">
          {NewsData.map((data) => (
            <div
              className="flex flex-col items-start max-sm:mb-4 max-sm:w-[342px]"
              key={data.id}
              style={{ border: "1px solid #D9D9D9" }}
            >
              <Image
                src={data.imageUrl}
                alt={data.imageAlt}
                width={377}
                height={274}
              />
              <div className="bg-white flex flex-col gap-4 max-w-[377px] p-8 max-sm:p-4">
                <h4 className="text-[#454545] text-[13px] font-[500] leading-7 font-Roboto uppercase">
                  {data.content}
                </h4>
                <h3 className="text-[#262626] font-[500] text-[23px] leading-7 font-RobotoSlab">
                  {data.headings}
                </h3>
                <p className="text-[#454545] text-[16px] font-[400] font-Roboto">
                  {data.paragraph}
                </p>
                <p className="font-Roboto font-semibold text-xs uppercase">
                  {data.name} {data.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
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
