import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ImagesCarousel = ({ pics }) => {
   return (
      <div style={{ widht: "500px" }}>
         <Carousel indicators={false}>
            {pics.map((image) => {
               return (
                  <Carousel.Item key={image}>
                     <div className="image-container">
                        <img src={image} alt="First slide" />
                        <h1 className="ribbon">Folded Ribbon</h1>
                     </div>
                  </Carousel.Item>
               );
            })}
         </Carousel>
      </div>
   );
};

export default ImagesCarousel;
