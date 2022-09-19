import React from "react";
import Slider from "react-slick";
import SLIDER from "../../image/image9.png";

const Slide = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    arrows: false,
  };
  return (
    <div className="slide-top">
      <Slider {...settings}>
        <div className="slice-image1">
          <img src={SLIDER} alt="" />
        </div>
        <div className="slice-image1">
          <img src={SLIDER} alt="" />
        </div>
        <div className="slice-image1">
          <img src={SLIDER} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Slide;
