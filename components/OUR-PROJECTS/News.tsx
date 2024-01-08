import NewsData from "./Data/NewsData";
import Image from "next/image";

const News = () => {
  const date = new Date();
  return (
    <div className="bg-white">
      <div className="w-[90%] mr-auto ml-auto pt-12 pb-20">
        <h1 className="text-[41px] font-bold text-[#262626] font-RobotoSlab">
          News & Stories
        </h1>

        <div className="flex justify-center gap-8 mt-12">
          {NewsData.map((data) => (
            <div
              className="flex flex-col items-start"
              key={data.id}
              style={{ border: "1px solid #D9D9D9" }}
            >
              <Image
                src={data.imageUrl}
                alt={data.imageAlt}
                width={377}
                height={274}
                className="max-w-[377px] max-h-[275px]"
              />
              <div className="bg-white flex flex-col gap-4 max-w-[377px] p-8">
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
      </div>
    </div>
  );
};

export default News;
