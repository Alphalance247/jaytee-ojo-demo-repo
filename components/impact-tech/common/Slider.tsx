import React from "react";
import Slider from "react-slick";

function MultipleItems({
  children,
  sliderRef,
}: {
  children: React.ReactNode;
  sliderRef?: React.RefObject<Slider>;
}) {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </div>
  );
}

export default MultipleItems;
