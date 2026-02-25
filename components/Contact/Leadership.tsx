import Image from "next/image";
import Container from "../common/container";

const Leadership = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-x-20 items-center bg-white max-sm:grid max-sm:grid-cols-1 max-sm:gap-y-8 max-md:grid max-md:grid-cols-2 max-md:gap-x-8">
        <div className=" flex flex-col justify-start items-start gap-y-8 max-sm:gap-4 max-sm:items-start max-sm:justify-center max-md:gap-y-2">
          <h3 className=" text-[#262626] font-RobotoSlab text-4xl font-bold max-sm:text-[2rem] max-md:text-[20px]">
            Our Leadership
          </h3>
          <p className=" text-[#595959] text-base font-Roboto font-normal max-sm:text-[14px] max-md:text-base">
            The JayTee Ojo Foundation is led by a passionate and dedicated team
            committed to creating positive change in Ekiti State. Our leadership
            team brings a wealth of experience in community development, youth
            empowerment, and philanthropy, driving our mission forward with
            vision and integrity.
          </p>
        </div>
        <div className="grid justify-center items-center max-md:justify-normal">
          <Image
            width={596}
            height={410}
            src="/assets/About/Volunteer.jpg"
            alt="Volunteer"
          />
        </div>
      </div>
    </Container>
  );
};

export default Leadership;
