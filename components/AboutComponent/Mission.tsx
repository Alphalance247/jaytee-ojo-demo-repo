const Mission = () => {
  return (
    <div
      className=" p-24 gap-36 border-y-[1px] border-[#D9D9D9]"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <div className=" border-[#D9D9D9]">
        <h1 className="text-[#262626] font-RobotoSlab text-3xl font-bold mb-4">
          Our Vision
        </h1>
        <p className="text-[#595959] text-lg font-Roboto font-normal">
          Our vision is to impact 1 million young people and 100,000
          communities. Impact Tech was incorporated in 2019 as a Not for Profit
          Organization with the aim of offering practical solutions to myriads
          of social problems that will champion economic prosperity of local
          communities and to facilitate Nigerian youths to become globally
          competitive in the labour market.
          <br />
          <br />
          In achieving the above objectives, the foundation champions
          self-sustainability in Agriculture and encourages the youth to embrace
          the benefits of a 21st century computer education.
        </p>
      </div>

      <div className="">
        <h1 className="text-[#262626] font-RobotoSlab text-3xl font-bold mb-4">
          Our Mission
        </h1>
        <p className="text-[#595959] text-lg font-Roboto font-normal">
          The aim of Impact Tech is to offer practical solutions that will make
          the young person globally competitive and help our local communities
          towards self sustenance.
        </p>
      </div>
    </div>
  );
};

export default Mission;
