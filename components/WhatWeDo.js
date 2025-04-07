import React from "react";
import Image from "next/image";
import Container from "./common/container";

const WhatWeDo = () => {
  const data = [
    {
      title: "Give",
      description:
        " Our foodbanks and medical aid give dignity to the elderly of ages 80 and over. Our scholarship program give hope to young people aspiring for a degree or vocation.",
      image: "/assets/give.svg",
      link: "LEARN MORE",
    },
    {
      title: "Grow",
      description:
        "  Our farming not famine project help the young and able grow income, families grow sustenance and communities grow security.",
      image: "/assets/grow.svg",
      link: "LEARN MORE",
    },
    {
      title: "Globe",
      description:
        "Our training and apprenticeship schemes empower young people to compete globally and become leaders in their areas of expertise.",
      image: "/assets/globe.svg",
      link: "LEARN MORE",
    },
  ];
  return (
    <section className="bg-[#F5F5F5] border-t border-b border-[#D9D9D9]">
      <Container>
        <h2 className="text-4xl font-bold mb-20 text-center font-RobotoSlab text-[#262626]">
          What We Do for the Community
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-8">
          {data.map((item, index) => (
            <div className="flex flex-col items-center gap-y-5" key={index}>
              <Image src={item?.image} alt="Give Icon" width={48} height={48} />
              <div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  {item?.title}
                </h3>
                <p className="text-gray-600 text-center">{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhatWeDo;
