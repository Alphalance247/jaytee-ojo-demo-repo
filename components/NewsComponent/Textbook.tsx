import Image from "next/image";

const Textbook = () => {
  return (
    <div className="grid grid-cols-2 text-white bg-[#369458] max-sm:grid-cols-1">
      <Image
        width={643}
        height={449}
        src="/assets/news/textbook.png"
        alt="htmltextbook"
      />
      <div className=" bg-[#369458] p-24 flex flex-col gap-y-4 max-sm:p-5 max-sm:gap-y-2 max-md:p-8 max-lg:p-10">
        <p className=" font-Roboto font-bold text-base max-sm:text-sm">
          Our next goal is to:
        </p>
        <h4 className=" font-RobotoSlab font-bold text-[32px] leading-8 max-sm:text-2xl max-md:text-[28px]">
          Supply HTML Textbooks to Schools
        </h4>
        <p className=" font-Roboto text-xl font-normal max-sm:text-lg max-md:text-lg">
          HTML Text Book to be Published and Donated to all Public Secondary
          Schools in Ekiti State
        </p>
      </div>
    </div>
  );
};

export default Textbook;
