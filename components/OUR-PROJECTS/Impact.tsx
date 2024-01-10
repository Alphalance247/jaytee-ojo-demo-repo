import Image from "next/image";

const Impact = () => {
  return (
    <div
      className="relative h-[450px] max-sm:h-[250px]"
      style={{
        background: "#369458",
      }}
    >
      <div
        className=" bg-white min-w-[90%] h-[350px] mr-auto  text-center absolute top-[50%] left-[50%] max-sm:w-[95%] max-sm:h-[200px]"
        style={{
          borderRadius: ".9rem",
          transform: " translate(-50%, -50%)",
        }}
      >
        <div className="max-w-[780px] m-auto pt-[1.8rem] pb-[1.8rem] grid gap-4 max-sm:p-[.5rem] max-sm:gap-1 max-md:p-4">
          <h3 className="text-[#262626] font-bold text-[36px] font-RobotoSlab max-sm:text-[1rem] ">
            Explore Our Impact: Past and Present
          </h3>
          <p className="text-[#595959] font-Roboto text-base break-words leading-6 font-normal max-sm:text-[.7rem] max-sm:leading-3">
            At the Jaytee Ojo Foundation, we take great pride in our ongoing
            commitment to creating positive change in the world. Our Projects
            Portfolio is a testament to the impact we've made and continue to
            make in communities near and far.
          </p>
          <p className=" text-[#595959] font-Roboto text-base break-words leading-6 font-normal max-sm:text-[.7rem] max-sm:leading-3">
            Our journey is defined by our relentless dedication to the
            betterment of society. Through an array of past and present
            projects, we've addressed critical issues, empowered individuals,
            and brought hope to those who needed it most.
          </p>

          <div className="">
            <Image
              src="/logo.png"
              alt="Logo"
              width={189}
              height={56}
              className=" m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
