import Image from "next/image";
import Button from "../Button";
import Link from "next/link";

const Story = () => {
  return (
    <div className=" p-24 grid grid-cols-2 gap-x-20 bg-[#F5F5F5] max-sm:p-6 max-sm:grid max-sm:grid-cols-1 max-sm:gap-y-8 max-md:p-8 max-md:grid max-md:grid-cols-2 max-md:gap-x-8">
      <div className="grid justify-center items-center max-md:justify-normal">
        <Image
          width={596}
          height={410}
          src="/assets/About/Volunteer.jpg"
          alt="Volunteer"
        />
      </div>

      <div className=" flex flex-col items-start gap-y-4 max-sm:gap-4 max-sm:items-center max-sm:justify-center max-md:gap-y-2">
        <h1 className=" text-[#262626] font-RobotoSlab text-3xl font-bold max-sm:text-[2rem] max-md:text-[20px]">
          Our Story
        </h1>
        <p className=" text-[#595959] text-lg font-Roboto font-normal max-sm:text-[1rem] max-md:text-base">
          We have, among other projects, donated solar streetlights to light up
          communities at night, we have donated borehole water fountains, we
          have sponsored several medical interventions, food banks, sports
          intervention as well as farmer empowerment and local farming
          interventions.
        </p>
        <p className="text-[#595959] text-lg font-Roboto font-normal max-sm:text-[1rem] max-md:text-base mb-8">
          For all the intervention projects and works mentioned above and many
          more besides, we are prouder of the investments we make into the
          future via educational interventions from donating books to students,
          to multiple scholarship programmes that cover school fees, various
          examination registration fees, accommodation, and projects support.
        </p>
        <Link href={"/our-story"}>
          <Button text="LEARN MORE" />
        </Link>
      </div>
    </div>
  );
};

export default Story;
