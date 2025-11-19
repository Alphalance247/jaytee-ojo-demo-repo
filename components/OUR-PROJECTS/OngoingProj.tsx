import ReuseAble from "./ReuseAble";
import DataUtil from "./Data/OngoingDta";
import Image from "next/image";
import Container from "../common/container";

const Ongoing = () => {
  return (
    <div className=" bg-[#F5F5F5]">
      <Container>
        <div className="w-[100%] mr-auto ml-auto pt-[6rem] pb-[6rem] max-sm:w-[95%] max-sm:pt-[2rem] max-sm:pb-[2rem]">
          <div className="w-[90%] m-auto max-md:w-[95%]">
            <ReuseAble
              paragraph="wear"
              text="We are continuously seeking new ways to create a brighter, more inclusive world. The Present Projects section showcases our current efforts, offering insight into the areas where we are currently making a difference."
              word={false}
              heading="Ongoing Projects"
            />
          </div>

          <div className="grid grid-cols-3 justify-center gap-8 mt-16 max-sm:block max-sm:mt-10 max-md:grid max-md:grid-cols-2">
            {DataUtil.map((data) => (
              <div
                className="flex flex-col items-start gap-2 max-w-[377px] max-sm:mb-4"
                key={data.id}
              >
                <Image
                  src={data.imageUrl}
                  alt={data.imageAlt}
                  width={377}
                  height={274}
                />
                <h4 className="text-[#8C8C8C] text-[14px] font-bold leading-7 font-Roboto uppercase">
                  {data.content}
                </h4>
                <p className="text-[#454545] text-[18px] font-[400] font-Roboto">
                  {data.paragraph}
                </p>
                <button className="text-[14px] font-[900] text-[#369458] border-none outline-none font-Roboto">
                  LEARN MORE
                </button>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Ongoing;
