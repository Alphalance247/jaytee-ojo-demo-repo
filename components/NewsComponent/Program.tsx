import Button from "../Button";
import Image from "next/image";

const Program = () => {
  return (
    <div className="grid grid-cols-2 items-center max-sm:grid-cols-1">
      <div className="bg-white p-24 flex flex-col gap-y-4 items-start max-sm:p-5 max-md:p-8 max-lg:p-10">
        <p className=" font-Roboto font-medium text-sm text-[#454545]">
          REPORT
        </p>
        <h3 className="font-RobotoSlab font-bold text-4xl text-[#262626] max-sm:text-2xl max-md:text-3xl">
          Our Program Plan
        </h3>
        <p className="text-base font-Roboto text-[#595959] max-sm:text-sm max-md:text-sm">
          We have, among other projects, donated solar streetlights to light up
          communities at night, we have donated borehole water fountains, we
          have sponsored several medical interventions, food banks, sports
          intervention as well as farmer empowerment and local farming
          interventions.
        </p>
        <Button text="Read the highlights" />
      </div>
      <Image
        width={720}
        height={704}
        src="/assets/news/books.png"
        alt="textbook"
      />
    </div>
  );
};

export default Program;
