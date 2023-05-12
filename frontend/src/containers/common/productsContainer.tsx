import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { IProduct } from "../../../types/custom-typing/interface";
import defaultImage from "../../assets/images/default/default_image.webp";

const SContainer = styled.div``;

//////////////////////////////////////////////////////////////////////////

const CProductsContainer = ({ products }) => {
  const router = useRouter();

  return (
    <SContainer>
      <h5>my products</h5>

      <div>
        {products &&
        products !== undefined &&
        products !== null &&
        products.length !== 0 ? (
          products.map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div>No data</div>
        )}
      </div>
    </SContainer>
  );
};

export default CProductsContainer;

///////////////////////////////-------------------------------------////////////////////////////////

const SProductItem = styled.div`
  display: block;
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

//////////////////////////////////////////////////////////

export const ProductCard = ({ product }) => {
  const router = useRouter();
  // Function used to select id of product
  const onSelectProduct = (id: number) => {
    router.push(`/products/product-details/${id}`);
  };

  return (
    <div>
      <h1>ddffff</h1>
      <SProductItem onClick={() => onSelectProduct(product.id)}>
        {product && product.product_images && product.product_images[0] && (
          <Image
            src={
              product.product_images[0].image !== null &&
              product.product_images[0].image !== undefined
                ? product.product_images[0].image
                : defaultImage
            }
            alt={product.product_images[0].alt_text}
            layout="responsive"
            width={100}
            height={100}
          />
        )}
      </SProductItem>
    </div>
  );
};
