import Link from "next/link";
import React from "react";
import { RxEnvelopeClosed } from "react-icons/rx";

const ReadyToTransformEducation = () => {
  return (
    <div className="bg-[#201D1F] bg-impact-gradient rounded-[16px] h-[450px] w-full shadow-[0px_4px_10px_0px_#0000004D,_inset_0px_1px_0px_0px_#FFFFFF0F]">
      <div className="mx-auto max-w-[1440px] flex justify-center items-center flex-col gap-10 h-[450px]">
        <div>
          <h6 className="font-semibold font-grostek text-white text-3xl md:text-5xl text-center">
            Ready to Transform Digital Education?
          </h6>

          <p className="text-center text-white font-inter font-normal text-base md:text-lg px-6 w-full  md:w-[722px] pt-6">
            Join a growing network of educators who are making coding accessible
            to every student. Together, we&apos;re building a future where
            digital literacy empowers communities and unlocks opportunities.
          </p>
        </div>
        <div>
          <Link
            href="/impact-tech/contact-us#contact-us-form"
            rel="noopener noreferer"
            className="flex gap-1 justify-center items-center h-[60px] w-[190.81px] border-2 border-[#00BC7D] rounded-[10px] bg-[#007A55]"
          >
            <RxEnvelopeClosed className="text-white h-5 w-5" />

            <p className="font-inter font-medium text-base text-white text-center">
              Contact Us
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadyToTransformEducation;
