const HeroD = () => {
  return (
    <div
      className="bg-center bg-cover h-[534px] relative p-24 max-sm:p-4 max-sm:h-[300px] max-md:p-8 max-lg:p-10"
      style={{
        background: 'url("../assets/donate/heropic.png")',
      }}
    >
      <div
        className="absolute top-0 left-0 w-[100%] h-[100%] z-10"
        style={{
          background:
            "linear-gradient(90deg, #000 42.21%, rgba(0, 0, 0, 0.62) 63.96%, rgba(0, 0, 0, 0.29) 78.42%, rgba(0, 0, 0, 0.00) 96.23%)",
        }}
      ></div>
      <div className="text-white absolute z-20 w-[800px] h-[334px] flex flex-col gap-y-6 max-sm:gap-y-3 max-sm:w-[300px] max-md:w-[450px]">
        <h4 className=" text-2xl font-RobotoSlab font-normal max-sm:text-base">
          Every ₦500 donated can provide ₦20 in aid
        </h4>
        <hr className=" bg-[#E60303] w-[391px] border-[#E60303] pb-2 max-sm:w-[200px]" />
        <h1 className=" text-[51px] leading-[61px] font-RobotoSlab font-bold w-[579px] max-sm:text-2xl max-sm:w-[300px]">
          Empower Change with Your Contribution
        </h1>
        <p className=" text-lg font-Roboto leading-7 w-[711px] max-sm:w-[340px] max-sm:text-sm max-sm:leading-4 max-md:w-[350px]">
          Lorem ipsum dolor sit amet consectetur. Ultrices egestas faucibus
          ornare nec ante vel tempus. Et potenti venenatis turpis hendrerit
          viverra ultrices integer. Mauris tortor vel aenean eget tellus at in
          dui. Ac at sodales etiam sed. Lacus a dui sodales risus neque massa
          duis quis. Sed feugiat id non urna viverra.
        </p>
      </div>
    </div>
  );
};

export default HeroD;
