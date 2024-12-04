import React from "react";

import { CustomSlider, Card } from "../../components";
import { images } from "../../assets";

import "./SliderPage.css";

function SliderPage() {
  return (
    <div className="slider-section">
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
    </div>
  );
}

export default SliderPage;
