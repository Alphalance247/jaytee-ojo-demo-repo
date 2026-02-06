import React from "react";
import Link from "next/link";

const SectionWithImage = () => {
  return (
    <div className=" relative bg-[url('/assets/image01.png')] bg-cover bg-center">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: "1",
        }}
      ></div>
      <div className=" relative z-10  text-white text-center py-16 md:py-40">
        <h1 className="text-[58px] font-RobotoSlab font-black leading-[70px] w-[90%] mx-auto max-sm:text-3xl max-sm:w-full">
          Our Aim is to Offer <br /> Practical Solutions to Our Communities
        </h1>

        <p className="mt-8 text-lg text-[#FCFCFC] font-Roboto w-[60%] mx-auto max-sm:w-full max-sm:text-sm">
          We are building a future where every young person and community can thrive. Through education, technology, <br />
          and sustainable development, the JayTee Ojo Foundation empowers people to break barriers, <br /> unlock potential, and create lasting change.

          {/* bibendum integer orci. Velit vitae eleifend odio ut ipsum gravida. */}
        </p>

        <Link href="/donate">
          <button
            className="bg-#369458 hover:bg-green-600 text-white font-semibold rounded-md inline-flex items-center justify-center mt-6"
            style={{
              background: "#369458",
              fontSize: "14px",
              height: "48px",
              width: "185px",
              marginTop: "32px",
            }}
          >
            MAKE DONATIONS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SectionWithImage;
