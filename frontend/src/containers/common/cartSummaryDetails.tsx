import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../redux/store";

///////////////////////////////////////////////////////

const SContainer = styled.div``;

const SCheckoutSummaryInfos = styled.div`
  background-color: var(--bg-page);
  margin: 3vh 0;
  padding: 10px 15px;
`;

const SInfosItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  border-top: 1px solid black;
  padding: 8px 0;
`;

/////////////////////////////////////////////////////////

export default function CCartSummaryDetails() {
  const { coupon, cartItems } = useAppSelector((state: any) => state.cart);

  // We calculate total price of cart items.
  const cartTotalPrice = cartItems
    .reduce((acc, item) => acc + item.qty * item.price, 0)
    .toFixed(2);

  // We calculate the discount price
  const discount_price =
    (cartTotalPrice * coupon.couponResponse.discount_percentage) / 100;

  // We calculate shipping fees price
  const shipping_price = cartItems
    .reduce((acc, item) => acc + item.shipping_fees_percentage * item.price, 0)
    .toFixed(2);

  //--------------------------------------------------------------------------------
  // We define the local state to count all quantities inside the cart adn display
  const [cartItemsCount, setCartitemsCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.qty;
    });
    setCartitemsCount(count);
  }, [cartItems, cartItemsCount]);

  //---------------------------------------------------------------------------------

  return (
    <SContainer>
      <SCheckoutSummaryInfos>
        <SInfosItem>
          <span>Nombre d'article</span>
          <span>{cartItemsCount} </span>
        </SInfosItem>
        <SInfosItem>
          <span>Sous Total</span>
          <span>$ {cartTotalPrice} </span>
        </SInfosItem>
        <SInfosItem>
          <span>Rabais sur la commande</span>
          <span>$ {discount_price} </span>
        </SInfosItem>

        <SInfosItem>
          <span>Frais de livraison</span>
          <span>$ {shipping_price} </span>
        </SInfosItem>

        <SInfosItem>
          <span>Taxes</span>
          <span>$ 18</span>
        </SInfosItem>

        <SInfosItem>
          <h5>Total facture</h5>
          <h5>$ 5</h5>
        </SInfosItem>
      </SCheckoutSummaryInfos>
    </SContainer>
  );
}
