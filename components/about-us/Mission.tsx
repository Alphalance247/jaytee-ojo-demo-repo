const Mission = () => {
  return (
    <div className="border-y-[1px] border-[#D9D9D9]  ">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 max-sm:grid max-sm:grid-cols-1">
        <div className=" border-[#D9D9D9] border-r-[1px] pr-24 py-24 max-sm:px-4  max-md:px-6 max-sm:py-6 max-sm:border-r-0 max-md:py-8 ">
          <h1 className="text-[#262626] font-RobotoSlab text-4xl font-bold mb-4 max-sm:text-[2rem] max-md:text-3xl">
            Our Vision
          </h1>
          <p className="text-[#595959] text-lg font-Roboto font-normal max-sm:text-base max-md:text-sm">
            Our vision is to impact 1 million young people and 100,000
            communities. Impact Tech was incorporated in 2019 as a Not for
            Profit Organization with the aim of offering practical solutions to
            myriads of social problems that will champion economic prosperity of
            local communities and to facilitate Nigerian youths to become
            globally competitive in the labour market.
            <br />
            <br />
            In achieving the above objectives, the foundation champions
            self-sustainability in Agriculture and encourages the youth to
            embrace the benefits of a 21st century computer education.
          </p>
        </div>

        <div className="py-24 pl-24 max-sm:py-6 max-sm:px-4 max-md:py-8 max-md:px-6">
          <h1 className="text-[#262626] font-RobotoSlab text-4xl font-bold mb-4 max-sm:text-[2rem]  max-md:text-3xl">
            Our Mission
          </h1>
          <p className="text-[#595959] text-lg font-Roboto font-normal max-sm:text-base max-md:text-sm">
            The aim of Impact Tech is to offer practical solutions that will
            make the young person globally competitive and help our local
            communities towards self sustenance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
