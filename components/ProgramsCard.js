import Image from "next/image";
import Link from "next/link";
import Container from "./common/container";
import OurPrograms from "./OurPrograms";

const ProgramsCard = () => {
  const data = [
    {
      title: "Schools Programming Program",
      description:
        "Lorem ipsum dolor sit amet consectetur. Scelerisque ridiculus sit pretium enim lobortis a. Cursus urna eros bibendum integer orci. Velit vitae eleifend odio.",
      image: "/assets/cardone.png",
      link: "/grow-campaign",
    },
    {
      title: "Open Programming Program",
      description:
        "Lorem ipsum dolor sit amet consectetur. Scelerisque ridiculus sit pretium enim lobortis a. Cursus urna eros bibendum integer orci. Velit vitae eleifend odio.",
      image: "/assets/open.png",
      link: "/",
    },
    {
      title: "Grow Campaign",
      description:
        "Lorem ipsum dolor sit amet consectetur. Scelerisque ridiculus sit pretium enim lobortis a. Cursus urna eros bibendum integer orci. Velit vitae eleifend odio.",
      image: "/assets/grow.png",
      link: "/",
    },
  ];
  return (
    <Container>
      <OurPrograms />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3  mt-20">
        {data.map((item, index) => (
          <div className="w-full mb-8" key={index}>
            <div className="bg-white overflow-hidden">
              <Image src={item?.image} alt="Card 2" width={377} height={275} />
              <div className="">
                <h5 className="text-2xl font-bold mt-4 mb-2 font-RobotoSlab text-[#262626]">
                  {item?.title}
                </h5>
                <p className=" text-[#595959] font-Roboto">
                  {item?.description}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <Link href={item?.link}>
                <button className="font-black font-Roboto text-sm text-[#369458]">
                  LEARN MORE
                </button>
              </Link>
            </div>
          </div>
        ))}

        {/* <div
        className="w-full md:w-1/3 px-4 mb-8"
        style={{ width: "377px", borderRadius: "3px" }}
      >
        <div className="bg-white overflow-hidden">
          <img
            src="assets/open.png"
            alt="Card 2"
            className="w-full h-48 object-cover"
          />
          <div className="">
            <h5 className="text-xl font-bold mt-4 mb-2">
              Open Programming Program
            </h5>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Scelerisque ridiculus sit
              pretium enim lobortis a. Cursus urna eros bibendum integer orci.
              Velit vitae eleifend odio.
            </p>
          </div>
        </div>
        <div className="mt-4">
          <a href="" className="font-bold text-sm" style={{ color: "#3BA361" }}>
            LEARN MORE
          </a>
        </div>
      </div>

      <div
        className="w-full md:w-1/3 px-4 mb-8"
        style={{ width: "377px", borderRadius: "3px" }}
      >
        <div className="bg-white overflow-hidden">
          <img
            src="assets/grow.png"
            alt="Card 2"
            className="w-full h-48 object-cover"
          />
          <div className="">
            <h5 className="text-xl font-bold mt-4 mb-2">Grow Campaign</h5>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Scelerisque ridiculus sit
              pretium enim lobortis a. Cursus urna eros bibendum integer orci.
              Velit vitae eleifend odio.
            </p>
          </div>
        </div>
        <div className="mt-4">
          <a href="" className="font-bold text-sm" style={{ color: "#3BA361" }}>
            LEARN MORE
          </a>
        </div>
      </div> */}
      </div>
    </Container>
  );
};

export default ProgramsCard;
