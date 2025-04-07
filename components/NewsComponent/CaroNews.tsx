import Carousel from "./Carousel";

const CaroNews = () => {
  return (
    <div className="py-24 max-sm:p-5 max-md:p-8 max-lg:p-10 overflow-hidden">
      <div className="text-center mb-8">
        <p className="mb-4 font-medium text-sm font-Roboto">REPORT</p>
        <h3 className=" font-RobotoSlab font-bold text-4xl max-sm:text-2xl">
          Helping the Community
        </h3>
      </div>

      <Carousel />
    </div>
  );
};

export default CaroNews;
