import Image from "next/image";
import { GiveData } from "./GiveData";
import Container from "../common/container";

const Give = () => {
  return (
    <Container>
      <div className="">
        <div className="mb-16 text-center  m-auto max-sm:mb-8">
          <h3 className=" font-RobotoSlab font-bold text-4xl text-[#262626] mb-4 max-sm:text-xl">
            Why You Should Volunteer with Us
          </h3>
          <p className=" font-Roboto text-base text-[#595959] w-[70%] m-auto max-sm:w-[100%] max-sm:text-sm">
            Join us in creating real impact. By volunteering with the JayTee Ojo
            Foundation, you can mentor youths, assist in ICT training, support
            community projects, and help empower communities across Ekiti State.
            Every hour you give transforms lives.
          </p>
        </div>
        <div className=" grid grid-cols-3 items-center gap-x-16 max-sm:grid max-sm:grid-cols-1 gap-y-8">
          {GiveData.map((items, i) => {
            return (
              <div
                className="text-center flex flex-col gap-4 max-sm:gap-2"
                key={i}
              >
                <Image
                  width={48}
                  height={48}
                  src="/assets/give.svg"
                  alt="Give Icon"
                  className="m-auto"
                />
                <h5 className=" font-extrabold font-RobotoSlab text-xl text-[#262626]">
                  <span className="h-8 text-[#BFBFBF] text-4xl mr-8">-</span>{" "}
                  {items.header}
                  <span className="h-8 text-[#BFBFBF] text-4xl ml-8">-</span>
                </h5>
                <p className="font-Roboto text-base text-[#595959]">
                  {items.paragraph}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Give;
