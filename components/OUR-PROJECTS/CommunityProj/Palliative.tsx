import Image from "next/image";

const Palliative: React.FC<{
  text: string;
  headings: string;
  image1: string;
  img2: string;
  img3: string;
  alt1: string;
  alt2: string;
  alt3: string;
}> = ({ text, headings, image1, img2, img3, alt1, alt2, alt3 }) => {
  return (
    <div className="">
      <div className="mb-6 max-sm:m-4">
        <h2 className=" font-RobotoSlab font-bold text-2xl text-[#262626] mb-3 max-sm:text-xl">
          {headings}
        </h2>
        <p className="text-[#595959] text-base font-Roboto font-normal w-[70%] max-sm:w-[100%]">
          {text}
        </p>
      </div>

      <div className="grid grid-cols-3 items-center justify-center gap-x-4">
        <Image src={image1} alt={alt1} width={404} height={522} />
        <Image src={img2} alt={alt2} width={404} height={522} />
        <Image src={img3} alt={alt3} width={404} height={522} />
      </div>
    </div>
  );
};

export default Palliative;
