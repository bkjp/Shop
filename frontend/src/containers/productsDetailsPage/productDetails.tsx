import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import defaultImage from "../../assets/images/default/default_image.webp";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { addToCart } from "../../redux/cart/actions.cart";
import { toast } from "react-toastify";

///////////////////////////////////////////////////////////////////////

const SContainer = styled.div``;

const SProductReference = styled.div``;

const SProductTags = styled.div`
  display: inline-block;
  background-color: red;
  color: white;
  margin: 10px 0 0 0;
  padding: 5px 15px;
  border-radius: 10px;
  font-size: 0.8rem;
`;

const SImgWrapper = styled.div`
  display: block;
  width: 50px;
  height: 50px;
`;

const SProductName = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  margin: 10px 0;
`;

const SProductPrice = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const SProductEvaluation = styled.div``;

const SProductDelivery = styled.div`
  background-color: #f4f6f9;
  margin: 15px 0;
  padding: 5vh 5vw;
`;

const STabContent = styled.div``;

const SButtonWrapper = styled.div`
  button {
    width: 50%;
    height: 100%;
    border: none;
  }
`;

const SDeliveryInfos = styled.div`
  color: blue;
  span {
    margin: 0 5px 0 0;
  }
`;

const SAddToCartButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;

  button {
    background-color: #ffce01;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

//////////////////////////////////////////////////////////////////////

const CProductDetails = ({ product }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { cartItems } = useAppSelector((state) => state.cart);

  const addToCartHandler = () => {
    const existsItem = cartItems.find((item) => item.id === product.id);
    const qty = existsItem ? existsItem.qty + 1 : 1;

    // // We check if quantity is greater than the stock.
    if (product.stock < qty) {
      toast.error("Stock is limited. Please reduce your quntity.");
      return;
    }

    //  We dispatch the action. addToCart
    if (dispatch && dispatch !== undefined && dispatch !== null) {
      dispatch(
        addToCart({
          ...product,
          qty,
        })
      );
    }
  };

  return (
    <SContainer>
      <SProductReference>
        <SImgWrapper>
          <Image
            src={product && product.qr_code ? product.qr_code : defaultImage}
            alt={product && product.name ? product.name : "default"}
            layout="responsive"
            width={100}
            height={100}
          />
        </SImgWrapper>
      </SProductReference>

      <SProductTags>Premium</SProductTags>

      <SProductName>{product.name}</SProductName>
      <div>{product.reference}</div>

      <SProductEvaluation>
        <span>
          <StarIcon color="success" />
          <StarIcon color="success" />
          <StarIcon color="success" />
          <StarIcon color="success" />
          <StarHalfIcon color="success" />
        </span>
        <span>(24 évaluations) écrire une évaluation</span>
      </SProductEvaluation>

      <div>
        <span>
          <RemoveRedEyeOutlinedIcon />
        </span>
        <span>(1458 vues)</span>
      </div>

      <div>Vendu et expédié par:</div>

      <SProductPrice>$ {product.price}</SProductPrice>

      <SProductDelivery>
        <SButtonWrapper>
          <button>Livraison</button>
          <button>Ramassage</button>
        </SButtonWrapper>

        <STabContent></STabContent>

        <SDeliveryInfos>
          <div>
            <span>
              <LocalShippingOutlinedIcon />
            </span>
            <span>Expédition disponible</span>
          </div>

          <p>Cet article sera livré dès le 21 février 2023</p>

          <p>
            Profitez de l'expédition rapide et gratuite sur la plupart des
            commandes de plus de 35 $.
          </p>
        </SDeliveryInfos>

        <SAddToCartButton>
          <button disabled={product.stock <= 0} onClick={addToCartHandler}>
            {product.stock > 0
              ? " Ajouter au panier"
              : "Pas de produit en stock"}
          </button>
        </SAddToCartButton>
      </SProductDelivery>
    </SContainer>
  );
};

export default CProductDetails;
