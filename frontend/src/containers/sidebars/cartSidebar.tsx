import React from "react";
import styled, { css } from "styled-components";
import CancelIcon from "@mui/icons-material/Cancel";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  closeCartSidebar,
  closeLoginSidebar,
} from "../../redux/general/actions.general";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import CCartItemsContainer from "../pageCart/cartItemsContainer";

//////////////////////////////////////////////////////////////////////////////

interface ISprops {
  cartSidebarIsOpen: boolean;
}

const SContainer = styled.div<ISprops>`
  ${(props) =>
    props.cartSidebarIsOpen === true &&
    css`
      background-color: white;
      position: absolute;
      top: 0;
      right: 0;
      width: 18vw;
      height: 100vh;
      max-height: 100vh;
      padding: 5px 15px;
      z-index: 999999;
    `}

  ${(props) =>
    props.cartSidebarIsOpen === false &&
    css`
      display: none;
    `}
`;

const SHead = styled.div`
  display: inline-block;
  padding: 5px;
  cursor: pointer;
`;

const SBody = styled.div``;

const SContent = styled.div`
  margin: 10px 0 0 0;
`;

const SFoot = styled.div``;

const SStyledButton = styled.button`
  background-color: #7e7ee6;
  color: white;
  border: none;
  width: 100%;
  margin: 5px 0;
`;

const STitle = styled.div`
  color: blue;
  font-size: 1.4rem;
  font-weight: bold;
`;

const SBodyContent = styled.div`
  color: blue;
  font-size: 1.4rem;
  font-weight: bold;
`;

////////////////////////////////////////////////////////////////////////////

const CartSidebar = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { cartSidebarIsOpen } = useAppSelector((state) => state.sidebar);

  // Tis function is used to close the loginSidebar when clicking on the cancel icon
  const onCloseCartSidebar = () => {
    dispatch(closeCartSidebar());
  };

  const showCartPage = () => {
    // We redirect the user on cart page.
    router.push("/cart/cart");

    // We close cartsidebar
    dispatch(closeCartSidebar());
  };

  return (
    <SContainer cartSidebarIsOpen={cartSidebarIsOpen}>
      <SHead onClick={onCloseCartSidebar}>
        <CancelIcon color="primary" fontSize="medium" />
      </SHead>

      <SContent>
        <SBody>
          <STitle>Mon Panier</STitle>

          <Button variant="outlined" onClick={showCartPage}>
            Voir mon panier au complet
          </Button>

          <SBodyContent>
            <CCartItemsContainer />
          </SBodyContent>
        </SBody>

        <SFoot>
          <SStyledButton>Connectez-vous</SStyledButton>
        </SFoot>
      </SContent>
    </SContainer>
  );
};

export default CartSidebar;
