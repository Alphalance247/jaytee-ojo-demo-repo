import React from "react";
import Image from "next/image";
import Container from "./common/container";

const Impact = () => {
  const impact = [
    {
      icon: "/assets/book.svg",
      number: "20,000",
      subText:
        "  Lorem ipsum dolor sit amet consectetur. Phasellus nibh pulvinar viverra bibendum viverra bibendum viverra bibendum.",
    },
    {
      icon: "/assets/book.svg",
      number: "20,000",
      subText:
        "  Lorem ipsum dolor sit amet consectetur. Phasellus nibh pulvinar viverra bibendum viverra bibendum viverra bibendum.",
    },
    {
      icon: "/assets/book.svg",
      number: "20,000",
      subText:
        "  Lorem ipsum dolor sit amet consectetur. Phasellus nibh pulvinar viverra bibendum viverra bibendum viverra bibendum.",
    },
    {
      icon: "/assets/book.svg",
      number: "20,000",
      subText:
        "  Lorem ipsum dolor sit amet consectetur. Phasellus nibh pulvinar viverra bibendum viverra bibendum viverra bibendum.",
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
              Lorem ipsum dolor sit amet consectetur. Phasellus nibh pulvinar
              viverra bibendum magna fusce risus ac. Quis condimentum.
            </p>
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
