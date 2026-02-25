import Image from "next/image";
import Container from "./common/container";
import Link from "next/link";

// "The JayTee Ojo Foundation is a non-profit organization based in Ekiti State, Nigeria, committed to empowering young people and uplifting communities toward self-sustenance and global competitiveness.We believe that talent and potential should never be limited by circumstance.Through education, technology, and community development initiatives, we create opportunities that transform lives, strengthen communities, and inspire lasting change.",
// "Our work goes beyond ideas, it’s about real results. From empowering youths with digital skills to transforming communities through education, innovation, and sustainable development, the JayTee Ojo Foundation turns vision into measurable impact. Every project we undertake is driven by a commitment to build stronger, more resilient communities",
// "We believe in the power of collaboration to create lasting impact. The JayTee Ojo Foundation works closely with individuals, organizations, and community groups that share our vision of empowerment and sustainable development.Through strategic partnerships, we expand our reach, strengthen our programs, and deliver real change where it matters most.",

const LearnMore = () => {
  const learnMore = [
    {
      overview: "WHO WE ARE",
      heading: "About Jaytee Ojo Foundation",
      paragraph:
        "The JayTee Ojo Foundation is a non-profit organization based in Ekiti State, Nigeria, committed to empowering young people and uplifting communities toward self-sustenance and global competitiveness. We believe....",
      img: "/assets/who.png",
      link: "/about-us",
    },
    {
      overview: "OUR PORTFOLIO",
      heading: "Creating Impact Through Action",
      paragraph:
        "Our work goes beyond ideas, it’s about real results. From empowering youths with digital skills to transforming communities through education, innovation, and sustainable development, the JayTee Ojo Foundation turns vision into ..... ",
      img: "/assets/port.png",
      link: "/our-project",
    },
    {
      overview: "WHO WE ARE",
      heading: "OUR PARTNERSHIP",
      paragraph:
        "We believe in the power of collaboration to create lasting impact. The JayTee Ojo Foundation works closely with individuals, organizations, and community groups that share our vision of empowerment and sustainable development.Through strategic .....",
      img: "/assets/part.png",
      link: "/contact-us",
    },
  ];
  return (
    <Container>
      <div>
        <h1 className="text-3xl font-bold mb-20">Learn More About Us</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {learnMore.map((items, i) => (
            <div
              className="bg-white overflow-hidden w-full xl:w-[full]"
              key={i}
            >
              <Image
                src={items?.img}
                alt="Card 2"
                width={377}
                height={275}
                // className="w-full h-48 object-cover"
              />
              <p className="text-sm mt-4">{items?.overview}</p>
              <div className="">
                <h5 className="text-md font-bold mt-6">{items?.heading}</h5>
                <p className="text-gray-600 mt-4 mb-4">{items?.paragraph}</p>

                <Link
                  href={items?.link}
                  className="font-bold text-sm"
                  style={{ color: "#3BA361" }}
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default LearnMore;
