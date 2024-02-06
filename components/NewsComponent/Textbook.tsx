import Image from "next/image";

const Textbook = () => {
  return (
    <div className="grid grid-cols-2 text-white bg-[#369458]">
      <Image
        width={643}
        height={449}
        src="/assets/news/textbook.png"
        alt="htmltextbook"
      />
      <div className=" bg-[#369458] p-24 flex flex-col gap-y-4">
        <p className=" font-Roboto font-bold text-base">Our next goal is to:</p>
        <h4 className=" font-RobotoSlab font-bold text-[32px] leading-8">
          Supply HTML Textbooks to Schools
        </h4>
        <p className=" font-Roboto text-xl font-normal">
          HTML Text Book to be Published and Donated to all Public Secondary
          Schools in Ekiti State
        </p>
      </div>
    </div>
  );
};

export default Textbook;
