import Button from "../Button";
import { Data } from "./Data/PastData";

const PastProj = () => {
  return (
    <div className=" bg-white">
      <div className="w-[90%] mr-auto ml-auto pt-12 pb-[4rem]">
        <div className="w-[90%] m-auto flex justify-center items-center gap-64 mb-20">
          <div className=" w-[600px] flex flex-col gap-4">
            <h3 className="text-[#262626] font-bold text-4xl font-RobotoSlab">
              Past Projects
            </h3>
            <p className="text-[#595959] text-base font-Roboto break-words leading-6 font-normal">
              Every project leaves a lasting legacy of change, showcasing the
              tangible impact of our dedication. From educational programs to
              healthcare initiatives, each one leaves an indelible mark on the
              communities it serves.
            </p>
          </div>
          <div>
            <button
              style={{
                marginTop: "40px",
                backgroundColor: "#3BA361",
                color: "white",
                boxShadow: " 0px 8px 16px 0px rgba(0, 0, 0, 0.08)",
              }}
              className="py-2 px-4 rounded font-Roboto text-[14px] font-extrabold flex justify-center items-center"
            >
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-8">
          {Data.map((data) => (
            <div className="flex flex-col items-start gap-2" key={data.id}>
              <img
                src={data.imageUrl}
                alt={data.imageAlt}
                className="max-w-[377px] max-h-[275px]"
              />
              <h4 className="text-[#3BA361] text-[14px] font-bold leading-7 font-Roboto">
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
