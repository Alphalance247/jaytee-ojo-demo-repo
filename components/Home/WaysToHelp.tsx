import Container from "../common/container";
import Image from "next/image";
import Link from "next/link";

const WaysToHelp = () => {
  const data = [
    {
      img: "/assets/home/1.png",
      heading: "Donate",
      subhead:
        "Lorem ipsum dolor sit amet consectetur. Arcu dignissim sed fermentum augue eget enim amet aenean. Viverra tortor odio vulputate scelerisque. Aenean vitae tempor scelerisque",
      btnText: "Make donations",
      link: "/donate",
    },
    {
      img: "/assets/home/2.png",
      heading: "Volunteer",
      subhead:
        "Lorem ipsum dolor sit amet consectetur. Arcu dignissim sed fermentum augue eget enim amet aenean. Viverra tortor odio vulputate scelerisque. Aenean vitae tempor scelerisque",
      btnText: "view volunteer roles",
      link: "/volunteer",
    },
    {
      img: "/assets/home/3.png",
      heading: "Partnership",
      subhead:
        "Lorem ipsum dolor sit amet consectetur. Arcu dignissim sed fermentum augue eget enim amet aenean. Viverra tortor odio vulputate scelerisque. Aenean vitae tempor scelerisque",
      btnText: "Become a Partner",
      link: "/",
    },
  ];
  return (
    <section className="border-t border-b border-[#D9D9D9]">
      <Container>
        <h4 className="text-4xl font-RobotoSlab text-[#262626] mb-20 font-bold text-center">
          Ways You Can Help
        </h4>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((el, i) => (
            <div key={i} className=" shadow-xl rounded-[5px]">
              <Image
                width={396}
                height={258}
                src={el?.img}
                alt="ways to help"
                className="rounded-tr-[5px] rounded-tl-[5px]"
              />
              <div className="text-center pt-6 pb-10 bg-inherit px-4">
                <p className=" text-2xl text-[#262626] font-RobotoSlab tracking-[-1%] mt-4 mb-6">
                  {el?.heading}
                </p>
                <p className="text-base text-[#595959] font-Roboto mb-8">
                  {el?.subhead}
                </p>
                <Link href={el?.link}>
                  <button className="w-full border border-[#8C8C8C] py-4 uppercase font-Roboto text-[#369458] text-sm font-black rounded-[3px]">
                    {el?.btnText}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WaysToHelp;
