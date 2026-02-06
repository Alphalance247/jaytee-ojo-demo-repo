import Image from "next/image";
import Link from "next/link";
import Container from "./common/container";
import OurPrograms from "./OurPrograms";

const ProgramsCard = () => {
  const data = [
    {
      title: "Schools Programming Program",
      description:
        "Education is the seed of transformation. By teaching programming and digital literacy in secondary schools, we inspire a new generation of thinkers and creators — young people who can use technology to change their lives and uplift their communities.",
      image: "/assets/news/hero.png",
      link: "/grow-campaign",
    },
    {
      title: "Open Programming Program",
      description:
        "Our Open Programming Program offers free ICT and coding training to young people across Ekiti State and beyond. Participants learn valuable digital skills, including programming with Python, empowering them to pursue careers, build startups, and contribute meaningfully to the digital economy.",
      image: "/assets/open.png",
      link: "/",
    },
    {
      title: "Grow Campaign",
      description:
        "The Grow Campaign supports community growth and self-sustenance through agricultural empowerment, training, and access to essential resources. We help local farmers and small businesses thrive, fostering food security, job creation, and sustainable livelihoods across Ekiti State.",
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
