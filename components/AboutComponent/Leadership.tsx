import Button from "../Button";
import Image from "next/image";

const Leadership = () => {
  return (
    <div className="p-24 grid grid-cols-2 gap-x-24 max-sm:p-6 max-sm:flex max-sm:flex-col max-sm:gap-y-8 max-md:p-8 max-md:gap-x-12">
      <div className="flex flex-col justify-center items-start">
        <h2 className="text-[#262626] text-4xl font-bold font-RobotoSlab mb-4 max-sm:text-2xl max-md:text-3xl">
          Our Leadership
        </h2>
        <p className="text-[#595959] text-lg font-Roboto font-normal max-sm:text-base max-md:text-base">
          We have, among other projects, donated solar streetlights to light up
          communities at night, we have donated borehole water fountains, we
          have sponsored several medical interventions, food banks, sports
          intervention as well as farmer empowerment and local farming
          interventions.
        </p>
        <Button text="MEET OUR PEOPLE" />
      </div>
      <Image
        width={596}
        height={410}
        src="/assets/About/Volunteer.jpg"
        alt="Volunteer"
      />
    </div>
  );
};

export default Leadership;
