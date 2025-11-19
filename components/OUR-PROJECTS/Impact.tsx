import Image from "next/image";
import Container from "../common/container";

const Impact = () => {
  return (
    <div
      style={{
        background: "#369458",
      }}
      className="relative"
    >
      <Image
        src="/assets/Community/right.svg"
        className="absolute right-0 opacity-30"
        width={396}
        height={396}
        alt="right"
      />
      <Image
        src="/assets/Community/left.svg"
        className="absolute bottom-0 opacity-30"
        width={396}
        height={396}
        alt="left"
      />
      <Container>
        <div>
          <div
            className=" bg-white min-w-[90%]  mx-auto text-center"
            style={{
              borderRadius: ".9rem",
            }}
          >
            <div className="max-w-[780px] m-auto pt-[1.8rem] pb-[1.8rem] grid gap-4 max-sm:p-[.5rem] max-sm:gap-1 max-md:p-4">
              <h3 className="text-[#262626] font-bold text-[36px] font-RobotoSlab max-sm:text-[1rem] max-md:text-2xl">
                Explore Our Impact: Past and Present
              </h3>
              <p className="text-[#595959] font-Roboto text-base break-words leading-6 font-normal max-sm:text-[.7rem] max-sm:leading-3">
                {`  At the Jaytee Ojo Foundation, we take great pride in our ongoing
            commitment to creating positive change in the world. Our Projects
            Portfolio is a testament to the impact we've made and continue to
            make in communities near and far.`}
              </p>
              <p className=" text-[#595959] font-Roboto text-base break-words leading-6 font-normal max-sm:text-[.7rem] max-sm:leading-3">
                {`  Our journey is defined by our relentless dedication to the
            betterment of society. Through an array of past and present
            projects, we've addressed critical issues, empowered individuals,
            and brought hope to those who needed it most.`}
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
      </Container>
    </div>
  );
};

export default Impact;
