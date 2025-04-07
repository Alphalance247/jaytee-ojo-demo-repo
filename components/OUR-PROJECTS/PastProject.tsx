import { Data } from "./Data/PastData";
import Image from "next/image";
import Link from "next/link";

const PastProj: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className=" bg-white">
      <div className="w-[90%] mr-auto ml-auto pt-12 pb-[4rem] max-sm:w-[95%] max-sm:pt-[1rem] max-sm:pb-[1rem] ">
        <div className="w-[90%] m-auto flex justify-center items-center gap-64 mb-20 max-sm:w-[95%] max-sm:gap-3 max-sm:items-start max-sm:justify-start max-sm:block max-sm:mb-8 max-md:block max-md:w-[100%]">
          <div className=" w-[600px] flex flex-col gap-4 max-sm:gap-1 max-sm:w-fit">
            <h3 className="text-[#262626] font-bold text-4xl font-RobotoSlab max-sm:text-[1.25rem]">
              {text}
            </h3>
            <p className="text-[#595959] text-base font-Roboto break-words leading-6 font-normal max-sm:text-[.8rem] max-sm:leading-4 max-sm:break-words">
              Every project leaves a lasting legacy of change, showcasing the
              tangible impact of our dedication. From educational programs to
              healthcare initiatives, each one leaves an indelible mark on the
              communities it serves.
            </p>
          </div>
          <div>
            <Link
              href={`${
                text === "Past Projects"
                  ? "/Project/PastProjectsPage"
                  : "/Project/Community"
              }`}
            >
              <button
                style={{
                  boxShadow: " 0px 8px 16px 0px rgba(0, 0, 0, 0.08)",
                }}
                className="text-white mt-[40px] bg-[#3BA361] py-2 px-4 rounded font-Roboto text-[14px] font-extrabold max-sm:mt-6 max-sm:w-[100%] max-md:w-[100%]"
              >
                LEARN MORE
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 justify-center gap-8 max-sm:block max-md:grid max-md:grid-cols-2">
          {Data.map((data) => (
            <div
              className="flex flex-col items-start gap-2 max-w-[377px] max-sm:mb-8"
              key={data.id}
            >
              <Image
                src={data.imageUrl}
                alt={data.imageAlt}
                width={377}
                height={274}
              />
              <h4 className="text-[#3BA361] text-[14px] font-bold leading-7 font-Roboto max-sm:leading-4">
                {data.content}
              </h4>
              <p className="text-[#595959] text-[18px] font-[400] font-Roboto">
                {data.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastProj;
