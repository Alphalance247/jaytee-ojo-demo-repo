import React from "react";
import Image from "next/image";
import Container from "./common/container";

const Impact = () => {
  const impact = [
    {
      icon: "/assets/book.svg",
      number: "20,000",
      subText: "Over 2,000 young people have completed our ICT and programming programs, gaining digital skills to compete globally.",
    },
    {
      icon: "/assets/book.svg",
      number: "20,000",
      subText:
        "More than 500 students have received scholarships, exam support, and accommodation assistance to pursue their education.",
    },
    {
      icon: "/assets/book.svg",
      number: "20,000",
      subText:
        "We’ve impacted 30+ communities through solar lighting projects, boreholes, food support, and medical outreach.",
    },
    {
      icon: "/assets/book.svg",
      number: "20,000",
      subText:
        "Over 50 secondary schools now benefit from our donations of tech-focused learning materials and digital literacy initiatives.",
    },
  ];
  return (
    <section>
      <Container>
        <div className="grid md:grid-cols-[40%auto] gap-4">
          <div className="lg:py-0 ">
            <h2 className="text-[41px] leading-[50px] tracking-[-1%] font-bold mb-4 font-RobotoSlab text-[#262626] md:w-[70%]">
              Your Impact Over the Years
            </h2>
            <p className="text-base text-[#595959] font-Roboto md:w-[80%]">
              Together, we’re changing lives and building brighter futures. Through our programs, thousands of young people and communities have gained access to education, digital skills, and sustainable opportunities. </p>
          </div>

          {/* stats place */}
          <div className="grid grid-cols-1  sm:grid-cols-2 gap-x-14 gap-y-14">
            {impact.map((items, i) => (
              <div key={i}>
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={"/assets/book.svg"}
                    width={32}
                    height={32}
                    alt="Give Icon"
                    className=""
                  />
                  <h5 className="font-RobotoSlab font-bold text-[46px] text-[#369458] leading-[120%]">
                    {items?.number}
                  </h5>
                </div>
                <hr />
                <p className="text-base text-[#595959] font-Roboto mt-4">
                  {items?.subText}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Impact;
