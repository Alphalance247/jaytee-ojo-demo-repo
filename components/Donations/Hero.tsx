import Container from "../common/container";

const HeroD = () => {
  return (
    <div className="bg-center bg-cover bg-[url('/assets/donate/heropic.png')] relative py-12 max-sm:px-4 max-md:p-8 max-lg:p-10">
      <div
        className="absolute top-0 left-0 w-[100%] h-[100%] z-10"
        style={{
          background:
            "linear-gradient(90deg, #000 42.21%, rgba(0, 0, 0, 0.62) 63.96%, rgba(0, 0, 0, 0.29) 78.42%, rgba(0, 0, 0, 0.00) 96.23%)",
        }}
      ></div>
      <Container>
        <div className="text-white relative z-20  flex flex-col gap-y-6 max-sm:gap-y-3">
          <h4 className=" text-2xl font-RobotoSlab font-normal max-sm:text-base">
            Every ₦500 donated can provide ₦20 in aid
          </h4>
          <hr className=" bg-[#E60303] w-[391px] border-[#E60303] pb-2 max-sm:w-[200px]" />
          <h1 className=" text-[51px] leading-[61px] font-RobotoSlab font-bold w-[579px] max-sm:text-2xl max-sm:w-[300px]">
            Empower Change with Your Contribution
          </h1>
          <p className=" text-lg font-Roboto leading-7 w-[711px] max-sm:w-full max-sm:text-sm max-sm:leading-4 max-md:w-[80%]">
            Your support can change lives. By donating to the JayTee Ojo
            Foundation, you help provide scholarships, ICT training, community
            development projects, and essential resources to youths and
            underserved communities in Ekiti State.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default HeroD;
