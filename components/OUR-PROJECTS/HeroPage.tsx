const Hero = () => {
  return (
    <div
      className=" bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: ' url("assets/HeroImg.jpg")',
        height: "640px",
      }}
    >
      <div
        className="absolute top-0 left-0 w-[100%] h-[100%] z-[10]"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>

      <div className=" text-white text-center absolute z-20 top-60 left-[32rem]">
        <p className=" mb-5 font-Roboto text-lg font-bold">OUR PROJECTS</p>
        <h1 className=" text-[51px] leading-6 font-bold font-RobotoSlab">
          Our Portfolio
        </h1>
      </div>
    </div>
  );
};

export default Hero;
