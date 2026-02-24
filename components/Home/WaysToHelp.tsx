import Container from "../common/container";
import Image from "next/image";
import Link from "next/link";

const WaysToHelp = () => {
  const data = [
    {
      img: "/assets/Home/1.png",
      heading: "Donate",
      subhead:
        "Your support can change lives. By donating to the JayTee Ojo Foundation, you help provide scholarships, ICT training, community development projects, and essential resources to youths and underserved communities in Ekiti State.",
      btnText: "Make donations",
      link: "/donate",
    },
    {
      img: "/assets/Home/2.png",
      heading: "Volunteer",
      subhead:
        "Join us in creating real impact. By volunteering with the JayTee Ojo Foundation, you can mentor youths, assist in ICT training, support community projects, and help empower communities across Ekiti State. Every hour you give transforms lives.",
      btnText: "view volunteer roles",
      link: "/volunteer",
    },
    {
      img: "/assets/Home/3.png",
      heading: "Partnership",
      subhead:
        "Collaborate with us to create meaningful change. By partnering with the JayTee Ojo Foundation, your organization can support programs in education, ICT training, and community development, multiplying impact and building stronger, sustainable communities.",
      btnText: "Become a Partner",
      link: "/contact-us",
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
