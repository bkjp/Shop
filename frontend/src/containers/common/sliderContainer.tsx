import React from "react";
import styled from "styled-components";
import defaultImage from "../../assets/images/default/default_image.webp";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

//////////////////////////////////////////////////////////////////////////////////

const SContainer = styled.div`
  background-color: yellow;
  height: 100%;
`;

const SImgWrapper = styled.div`
  position: relative;

  width: 30vw;

  height: 100%;
`;

/////////////////////////////////////////////////////////////////////////////////

const CSliderContainer = ({ images }) => {
  return (
    <SContainer>
      <Carousel showThumbs={false} autoPlay>
        {images && images !== null ? (
          images.map((item) => (
            <SImgWrapper key={item.id}>
              <Image
                src={item.image ? item.image : defaultImage}
                alt={item.alt_text}
                layout="fill"
                width={100}
                height={100}
              />
            </SImgWrapper>
          ))
        ) : (
          <div></div>
        )}
      </Carousel>
    </SContainer>
  );
};

export default CSliderContainer;
