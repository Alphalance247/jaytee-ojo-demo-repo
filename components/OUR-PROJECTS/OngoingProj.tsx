import ReuseAble from "./ReuseAble";
import DataUtil from "./Data/OngoingDta";

const Ongoing = () => {
  return (
    <div className=" bg-[#F5F5F5]">
      <div className="w-[90%] mr-auto ml-auto pt-[6rem] pb-[6rem]">
        <div className="w-[90%] m-auto">
          <ReuseAble
            paragraph="wear"
            text="We are continuously seeking new ways to create a brighter, more inclusive world. The Present Projects section showcases our current efforts, offering insight into the areas where we are currently making a difference."
            word={false}
            heading="Ongoing Projects"
          />
        </div>

        <div className="flex justify-center gap-8 mt-16">
          {DataUtil.map((data) => (
            <div className="flex flex-col items-start gap-2" key={data.id}>
              <img
                src={data.imageUrl}
                alt={data.imageAlt}
                className="max-w-[377px] max-h-[275px]"
              />
              <h4 className="text-[#8C8C8C] text-[14px] font-bold leading-7 font-[Roboto] uppercase">
                {data.content}
              </h4>
              <p className="text-[#454545] text-[18px] font-[400]">
                {data.paragraph}
              </p>
              <button className="text-[14px] font-[900] text-[#369458] border-none outline-none">
                LEARN MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ongoing;
