import { Button, Grid } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import CCartSummaryDetails from "../common/cartSummaryDetails";
import CCartItemsContainer from "./cartItemsContainer";
import CPayementMethodDetails from "./payementMethod";

////////////////////////////////////////////////////////////////////

const SContainer = styled.div`
  width: 100%;
  padding: 5vh 0;
`;

const SCartItems = styled.div`
  background-color: white;
  padding: 15px 20px;
`;

const SSummary = styled.div`
  background-color: white;
  padding: 0 10px;
`;

const SPayementMethod = styled.div`
  background-color: white;
  margin: 15px 0;
`;

////////////////////////////////////////////////////////////////////

const CProductsCart = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  //-------------------------  Calculate the total price ----------------

  const { cartItems } = useAppSelector((state) => state.cart);

  const cartTotalPrice = cartItems
    .reduce((acc, item) => acc + item.qty * item.price, 0)
    .toFixed(2);

  //----------------------------------------------------------------------

  // Function used to redirect user to checkout page
  const redirectToCheckoutPage = () => {
    console.log("checkout");
    router.push("/checkout/checkout-page");
  };

  return (
    <SContainer>
      <Grid container rowSpacing={0} columnSpacing={3}>
        <Grid item xs={12} md={9} lg={9}>
          <SCartItems>
            <CCartItemsContainer />
          </SCartItems>
        </Grid>

        <Grid item xs={12} md={3} lg={3}>
          <SSummary>
            <div>
              <h4>Résumé</h4>
              <CCartSummaryDetails />
            </div>

            <Button
              sx={{ width: "60%", height: "50px" }}
              variant="contained"
              color="success"
              onClick={redirectToCheckoutPage}
            >
              Effectuer le paiement
            </Button>
          </SSummary>

          <SPayementMethod>
            <CPayementMethodDetails />
          </SPayementMethod>
        </Grid>
      </Grid>
    </SContainer>
  );
};

export default CProductsCart;
