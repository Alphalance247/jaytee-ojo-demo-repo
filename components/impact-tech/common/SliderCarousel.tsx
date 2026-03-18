import React, { useState, ReactNode, RefObject } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderCarouselProps {
  children: ReactNode;
  sliderRef: RefObject<Slider>;
  afterChange?: (index: number) => void;
  gap: number;
  slidesToShow: number;
}

const SliderCarousel = ({
  children,
  sliderRef,
  afterChange,
  slidesToShow,
  gap,
}: SliderCarouselProps) => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    afterChange: afterChange,
    gap: gap,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          gap: 43,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
          gap: 16,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          initialSlide: 0,
          gap: 10,
        },
      },
      {
        breakpoint: 360,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          initialSlide: 0,
          gap: 10,
        },
      },
    ],
  };
  const slides = React.Children.toArray(children).map((child, index) => (
    <div key={index} className={`px-[${gap / 2}px]`}>
      {child}
    </div>
  ));
  return (
    <div className="slider-container w-full ">
      <Slider ref={sliderRef} {...settings}>
        {slides}
      </Slider>
    </div>
  );
};

export default SliderCarousel;
