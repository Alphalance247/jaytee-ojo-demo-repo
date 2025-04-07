import Container from "../common/container";
import NewsData from "./Data/NewsData";
import Image from "next/image";

const News = () => {
  const date = new Date();
  return (
    <div className="bg-white">
      <Container>
        <h1 className="text-[41px] font-bold text-[#262626] font-RobotoSlab max-sm:text-[1.5rem]">
          News & Stories
        </h1>

        <div className="grid grid-cols-3 gap-8 mt-12 max-sm:flex max-sm:flex-col  max-md:grid max-lg:grid-cols-2  max-md:mt-4">
          {NewsData.map((data) => (
            <div
              className="flex cursor-pointer flex-col items-start max-sm:mb-4 w-[397px] max-xl:w-fit"
              key={data.id}
              style={{ border: "1px solid #D9D9D9" }}
            >
              <Image
                src={data.imageUrl}
                alt={data.imageAlt}
                width={395}
                height={274}
                layout="responsive"
              />
              <div className="bg-white flex flex-col py-6 px-6 gap-4">
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
      </Container>
    </div>
  );
};

export default News;
