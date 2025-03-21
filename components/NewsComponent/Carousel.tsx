import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="flex flex-col items-center justify-center">
        {/* <div className="flex flex-col items-center justify-center"> */}
        <Image
          width={934}
          height={550}
          src="/assets/news/community.png"
          alt="communityProj"
          className="m-auto"
        />
        {/* </div> */}
        <div className="font-Roboto text-sm flex flex-col items-center justify-center">
          <p className="w-[70%] text-left max-sm:w-[100%] max-md:w-[100%]">
            Lorem ipsum dolor sit amet consectetur. Facilisi posuere a purus
            pellentesque. Risus natoque velit nisl a elementum quam. Urna lacus
            egestas maecenas venenatis est ut in
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          width={934}
          height={550}
          src="/assets/news/community.png"
          alt="communityProj"
          className=" m-auto"
        />

        <div className="font-Roboto text-sm flex flex-col items-center justify-center">
          <p className="w-[70%] text-left max-sm:w-[100%] max-md:w-[100%]">
            Lorem ipsum dolor sit amet consectetur. Facilisi posuere a purus
            pellentesque. Risus natoque velit nisl a elementum quam. Urna lacus
            egestas maecenas venenatis est ut in
          </p>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
