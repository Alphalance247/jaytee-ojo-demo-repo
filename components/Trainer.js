import React from "react";
import Button from "./Button";
import Container from "./common/container";
import Link from "next/link";

const Trainer = () => {
  return (
    <section className="border-[#D9D9D9] border-t">
      <Container>
        <div className="border-[#3BA361] border-[15px] items-center grid gap-x-16 md:grid-cols-2 ">
          <div className="">
            <img
              src="/assets/trainer.png"
              width={605}
              height={536}
              alt="trainer"
            />
          </div>

          <div className=" max-md:px-8 max-md:py-10 max-sm:px-4 max-sm:py-6">
            <p className="text-[#454545] font-Roboto uppercase text-sm mb-2">
              OUR INITIATIVE
            </p>
            <h5 className="text-[41px] leading-[50px] tracking-[-1%] font-bold mb-4 font-RobotoSlab text-[#262626] max-sm:text-3xl">
              Train the Trainer
            </h5>
            <p className="text-base text-[#595959] font-Roboto mb-8 max-sm:text-sm">
              Our Train the Trainer initiative ensures that knowledge keeps spreading long after our programs end. We equip passionate educators, community leaders, and volunteers with the skills and tools needed to deliver ICT and empowerment training within their communities.
              By empowering trainers, we multiply our reach, create sustainable learning networks, and build a culture of continuous knowledge-sharing across Ekiti State and beyond
            </p>
            <Link href={"/our-project/trainer"}>
              <Button text="LEARN MORE" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Trainer;
