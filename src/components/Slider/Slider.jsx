import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.css";
import Cooper1 from '../../assets/cooper/cooper1.jpg';
import Cooper2 from '../../assets/cooper/cooper2.jpg';
import Cooper3 from '../../assets/cooper/cooper3.jpg';
import Cooper4 from '../../assets/cooper/cooper4.jpg';



export default function Slider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="carousel-wrapper" id="slider">
        <div className="carousel-heading">My Photos</div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        showDots={true}
      >
        <div className="item-wrapper">
          <img className="carousel-img" src={Cooper1} alt="213"></img>
        </div>
        <div className="item-wrapper">
          <img className="carousel-img" src={Cooper2} alt="213"></img>
        </div>
        <div className="item-wrapper">
          <img className="carousel-img" src={Cooper3} alt="213"></img>
        </div>
        <div className="item-wrapper">
          <img className="carousel-img" src={Cooper4} alt="213"></img>
        </div>

      </Carousel>
      ;
    </div>
  );
}
