import Image from "next/image";
import React, { useState } from "react";
import defaultImage from "../../assets/images/default/default_image.webp";
import styled from "styled-components";

///////////////////////////////////////////////////////////

const SContainer = styled.div`
  background-color: yellow;
`;

const SWrapperImages = styled.div``;

const SMainImage = styled.div`
  width: 100px;
  height: 100px;
`;

const SSmallImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: block;
    width: 50px;
    height: 50px;
    margin: 0 10px;
  }
`;

///////////////////////////////////////////////////////////

const CImageContainer = ({ product }) => {
  const images =
    product && product.product_images ? product.product_images : null;

  const [mainImage, setMainImage] = useState(images[0]);

  // We retrieve the id of the main image
  const main_image_id = images[0].id;
  // We filter all images with id different from the main image id.
  const smallImages = images.filter((item) => item.id !== main_image_id);

  return (
    <SContainer>
      <SWrapperImages>
        <SMainImage>
          <Image
            src={mainImage && mainImage.image ? mainImage.image : defaultImage}
            alt={mainImage.alt_text}
            layout="responsive"
            width={40}
            height={40}
          />
        </SMainImage>

        <SSmallImages>
          {smallImages ? (
            smallImages.map((item) => (
              <div key={item.id}>
                <Image
                  src={item.image ? item.image : defaultImage}
                  alt={mainImage.alt_text}
                  layout="responsive"
                  width={70}
                  height={70}
                />
              </div>
            ))
          ) : (
            <div></div>
          )}
        </SSmallImages>
      </SWrapperImages>
    </SContainer>
  );
};

export default CImageContainer;
