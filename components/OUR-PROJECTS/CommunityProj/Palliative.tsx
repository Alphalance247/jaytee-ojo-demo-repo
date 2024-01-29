import Image from "next/image";

const Palliative: React.FC<{
  text: string;
  headings: string;
}> = ({ text, headings }) => {
  return (
    <div className="px-24 py-16">
      <div className=" mb-10">
        <h2 className=" font-RobotoSlab font-bold text-2xl text-[#262626] mb-3">
          {headings}
        </h2>
        <p className="text-[#595959] text-base font-Roboto font-normal w-[70%]">
          {text}
        </p>
      </div>

      <div className="grid grid-cols-3 items-center justify-center gap-x-4">
        <Image
          src="/assets/Community/treatment.png"
          alt="treatment"
          width={404}
          height={522}
        />
        <Image
          src="/assets/Community/visitation.png"
          alt="treatment"
          width={404}
          height={522}
        />
        <Image
          src="/assets/Community/palliatives.png"
          alt="treatment"
          width={404}
          height={522}
        />
      </div>
    </div>
  );
};

export default Palliative;
