import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../Images/banner1.webp";
import banner2 from "../../../Images/banner2.jpg";
import banner3 from "../../../Images/Banner3.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={460}
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>The Right Lawyer</h2>
            <h3>Make all the difference</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={460}
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h2>Quality Representation</h2>
            <h3>for quality clients</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={460}
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h2>Deeper Understanding</h2>
            <h3>batter solutions</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
