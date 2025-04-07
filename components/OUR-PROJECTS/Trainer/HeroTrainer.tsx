const HeroTrainer = () => {
  return (
    <div
      className="h-[495px] bg-cover bg-center bg-no-repeat relative max-sm:h-[200px] max-md:h-[350px] max-lg:h-[500px]"
      style={{
        backgroundImage: 'url("../assets/Community/Trainer.png")',
      }}
    >
      <div
        className="absolute top-0 left-0 w-[100%] h-[100%] z-[10]"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>

      <div
        className=" text-white text-center absolute z-20 top-[50%] left-[50%]"
        style={{ transform: " translate(-50%, -50%)" }}
      >
        <h4 className=" mb-12 font-Roboto text-lg font-bold max-sm:text-xs max-sm:mb-2">
          WHAT WE DO
        </h4>
        <h1 className=" text-[51px] leading-6 font-bold font-RobotoSlab max-sm:text-[20px]">
          Train the Trainer
        </h1>
      </div>
    </div>
  );
};

export default HeroTrainer;
