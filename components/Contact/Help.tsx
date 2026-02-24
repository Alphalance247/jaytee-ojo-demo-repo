import Link from "next/link";
import Container from "../common/container";

const Help = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url("../assets/Contact/volunteer.png")',
      }}
    >
      <Container>
        <div
          className="absolute top-0 left-0 w-[100%] h-[100%] z-[10]"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>

        <div className=" text-white text-center relative z-20 p-24 max-sm:p-5 max-md:p-8">
          <p className=" mb-12 font-Roboto text-lg font-bold max-sm:text-xs max-sm:mb-2 max-md:mb-8 max-md:text-base">
            HOW TO HELP
          </p>
          <h4 className=" text-[51px] leading-6 font-bold font-RobotoSlab mb-12 max-sm:text-[25px] max-sm:mb-2 max-md:mb-8 max-md:text-3xl">
            Become a Volunteer
          </h4>
          <p className="mb-12 text-base font-Roboto w-[70%] m-auto max-sm:w-[100%] max-sm:text-xs max-sm:mb-4 max-md:mb-8 max-md:text-sm max-md:w-[100%]">
            Join us in creating real impact. By volunteering with the JayTee Ojo
            Foundation, you can mentor youths, assist in ICT training, support
            community projects, and help empower communities across Ekiti State.
            Every hour you give transforms lives.
          </p>

          <Link href={"/contact-us"}>
            <button className="font-Roboto font-black text-sm py-6 px-10 rounded bg-[#369458] hover:bg-black uppercase text-white max-sm:px-4 max-sm:py-2">
              VOLUNTEER WITH US
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Help;
