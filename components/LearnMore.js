import Image from "next/image";
import Container from "./common/container";
import Link from "next/link";

const LearnMore = () => {
  const learnMore = [
    {
      overview: "WHO WE ARE",
      heading: "About Jaytee Ojo Foundation",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur. Scelerisque ridiculus sit pretium enim lobortis a. Cursus urna eros bibendum integer orci. Velit vitae eleifend odio.",
      img: "/assets/who.png",
      link: "/about-us",
    },
    {
      overview: "OUR PORTFOLIO",
      heading: "Creating Impact Through Action",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur. Scelerisque ridiculus sit pretium enim lobortis a. Cursus urna eros bibendum integer orci. Velit vitae eleifend odio.",
      img: "/assets/port.png",
      link: "/our-project",
    },
    {
      overview: "WHO WE ARE",
      heading: "OUR PARTNERSHIP",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur. Scelerisque ridiculus sit pretium enim lobortis a. Cursus urna eros bibendum integer orci. Velit vitae eleifend odio.",
      img: "/assets/part.png",
      link: "/",
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
