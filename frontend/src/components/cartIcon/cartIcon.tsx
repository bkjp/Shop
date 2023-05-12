import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useAppSelector } from "../../redux/store";

////////////////////////////////////////////////////

const SContainer = styled.div``;

const SWrapper = styled.div`
  background-color: blue;
  display: flex;
  align-items: center;
  color: white;
  padding: 2px 15px;
  border-radius: 50px;
`;

const SLabel = styled.div`
  margin: 0 5px 0 0;
  font-size: 1.1rem;
  font-weight: bold;
`;

const SLogoWrapper = styled.div``;

const SNumber = styled.div`
  background-color: green;
  margin: 0 0 0 10px;
  font-size: 0.7rem;
  font-weight: bold;
  border-radius: 50px;
  padding: 5px 15px;
`;

////////////////////////////////////////////////////

const CCartIcon = () => {
  //-------------------------------------------------------------------------------
  // This part is used to calculate the number of items inside the cart and display it
  // to the cart icon component.

  const { cartItems } = useAppSelector((state) => state.cart);

  // We define the local state to count all quantities inside the cart adn display
  const [cartItemsCount, setCartitemsCount] = useState(0);

  // We use useEffect to update the number of item inside cartItems every time
  // cartItems state is updated
  useEffect(() => {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.qty;
    });
    setCartitemsCount(count);
  }, [cartItems, cartItemsCount]);
  //-------------------------------------------------------------------------------

  return (
    <SContainer>
      <SWrapper>
        <SLabel>Cart</SLabel>

        <SLogoWrapper>
          <ShoppingCartOutlinedIcon fontSize="small" />
        </SLogoWrapper>

        <SNumber>{cartItemsCount}</SNumber>
      </SWrapper>
    </SContainer>
  );
};

export default CCartIcon;
