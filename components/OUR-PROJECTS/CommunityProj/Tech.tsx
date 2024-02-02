import { Data } from "./Techdate";
import Image from "next/image";

const Tech = () => {
  return (
    <div className="p-24 border-t-2 border-[#D9D9D9] max-sm:p-4 max-md:p-8">
      <div className="flex items-center gap-72 px-16 max-sm:grid max-sm:gap-y-4 max-sm:px-4 max-md:px-8 max-md:gap-10">
        <div className="flex flex-col gap-y-4 w-[568px] max-sm:w-[300px] max-sm:gap-y-2 max-sm:grid max-md:w-[470px]">
          <h2 className=" font-RobotoSlab text-3xl font-bold">Tech & ICT</h2>
          <p className=" text-base font-Roboto text-[#595959]">
            Every project leaves a lasting legacy of change, showcasing the
            tangible impact of our dedication. From educational programs to
            healthcare initiatives, each one leaves an indelible mark on the
            communities it serves.
          </p>
        </div>
        <button
          style={{
            boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.08)",
          }}
          className="py-2 px-4 rounded  font-Roboto text-base font-black text-white bg-[#3BA361] max-md:text-[14px]"
        >
          LEARN MORE
        </button>
      </div>

      <div className="grid grid-cols-3 mt-20 justify-center gap-8 max-sm:block max-md:grid max-md:grid-cols-2">
        {Data.map((data) => (
          <div
            className="flex flex-col items-start gap-2 max-w-[377px] h-[403px] max-sm:mb-8"
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
  );
};

export default Tech;
