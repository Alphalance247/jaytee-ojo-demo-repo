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
        className="absolute top-0 left-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          width: "100%",
          height: "100%",
          zIndex: "10",
        }}
      ></div>

      <div
        className=" text-white text-center absolute"
        style={{ zIndex: "20", top: "15rem", left: "32rem" }}
      >
        <p className=" mb-5 font-serif" style={{ fontSize: "1rem" }}>
          OUR PROJECTS
        </p>
        <h1 className="text-[51px] font-bold font-['Roboto Slab'] ">
          Our Portfolio
        </h1>
      </div>
    </div>
  );
};

export default Hero;
