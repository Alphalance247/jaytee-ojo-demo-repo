import Image from "next/image";

const Leadership = () => {
  return (
    <div className=" p-24 grid grid-cols-2 gap-x-20 bg-white max-sm:p-6 max-sm:grid max-sm:grid-cols-1 max-sm:gap-y-8 max-md:p-8 max-md:grid max-md:grid-cols-2 max-md:gap-x-8">
      <div className=" flex flex-col justify-start items-start gap-y-8 max-sm:gap-4 max-sm:items-start max-sm:justify-center max-md:gap-y-2">
        <h3 className=" text-[#262626] font-RobotoSlab text-4xl font-bold max-sm:text-[2rem] max-md:text-[20px]">
          Our Leadership
        </h3>
        <p className=" text-[#595959] text-base font-Roboto font-normal max-sm:text-[14px] max-md:text-base">
          Lorem ipsum dolor sit amet consectetur. Facilisi posuere a purus
          pellentesque. Risus natoque velit nisl a elementum quam. Urna lacus
          egestas maecenas venenatis est ut in lorem feugiat. At purus netus
          nisl magna pharetra eget vitae cum. A at nec at tincidunt tortor arcu
          sollicitudin. Sed viverra sed consectetur viverra. Magna eget nibh
          pellentesque dictumst egestas sed tincidunt. Erat ullamcorper netus.
          Lorem ipsum dolor sit amet consectetur. Facilisi posuere a purus
          pellentesque. Risus natoque velit nisl a elementum quam. Urna lacus
          egestas maecenas venenatis est ut in lorem feugiat. At purus netus
          nisl magna pharetra eget vitae cum. A at nec at tincidunt tortor arcu
          sollicitudin. Sed viverra sed consectetur viverra. Magna eget nibh
          pellentesque dictumst egestas sed tincidunt. Erat ullamcorper netus.
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
  );
};

export default Leadership;
