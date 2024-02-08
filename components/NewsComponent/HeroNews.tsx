import Button from "../Button";

const HeroNews = () => {
  return (
    <div
      className="bg-center bg-cover h-[640px] relative p-24 max-sm:p-4 max-sm:h-[300px] max-md:h-[450px] max-md:p-8 max-lg:p-10"
      style={{
        background: 'url("../assets/news/hero.png")',
      }}
    >
      <div className="absolute top-0 left-0 w-[57%] h-[100%] z-10 bg-[#205A35]"></div>
      <div className="text-white absolute z-20 w-[561px] h-[334px] flex flex-col items-start gap-y-6 max-sm:gap-y-3 max-sm:w-[300px]">
        <h4 className=" text-base font-Roboto font-bold max-sm:text-base">
          OUR ONGOING PROJECTS
        </h4>
        <h1 className=" text-[51px] leading-[61px] font-RobotoSlab font-bold max-sm:text-2xl">
          Schools Programming Program
        </h1>
        <p className=" text-lg font-Roboto text-[#FCFCFC] leading-7  max-sm:text-sm max-sm:leading-4">
          Lorem ipsum dolor sit amet consectetur. Facilisi posuere a purus
          pellentesque. Risus natoque velit nisl a elementum quam. Urna lacus
          egestas maecenas venenatis est ut in lorem feugiat.
        </p>

        <Button text="donate now" />
      </div>
    </div>
  );
};

export default HeroNews;
