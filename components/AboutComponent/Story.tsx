import Image from "next/image";
import Button from "../Button";

const Story = () => {
  return (
    <div className=" p-24 flex gap-20 bg-[#F5F5F5]">
      <Image
        width={596}
        height={410}
        src="/assets/About/Volunteer.jpg"
        alt="Volunteer"
      />
      <div className=" flex flex-col justify-start items-start gap-8">
        <h1 className=" text-[#262626] font-RobotoSlab text-3xl font-bold">
          Our Story
        </h1>
        <p className=" text-[#595959] text-lg font-Roboto font-normal">
          We have, among other projects, donated solar streetlights to light up
          communities at night, we have donated borehole water fountains, we
          have sponsored several medical interventions, food banks, sports
          intervention as well as farmer empowerment and local farming
          interventions.
        </p>
        <p className="text-[#595959] text-lg font-Roboto font-normal">
          For all the intervention projects and works mentioned above and many
          more besides, we are prouder of the investments we make into the
          future via educational interventions from donating books to students,
          to multiple scholarship programmes that cover school fees, various
          examination registration fees, accommodation, and projects support.
        </p>
        <Button text="LEARN MORE" />
      </div>
    </div>
  );
};

export default Story;
