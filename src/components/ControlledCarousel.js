import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import NintendoCarouselImage from "../assets/nintendoCarousel.png";
import XboxCarouselImage from "../assets/xboxCarousel.png";
import PlaystationCarouselImage from "../assets/playstationCarousel.png";
import "./ControlledCarousel.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="carousel-image" src={XboxCarouselImage} alt="Xbox" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image"
          src={NintendoCarouselImage}
          alt="Nintendo"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image"
          src={PlaystationCarouselImage}
          alt="Playstation"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
