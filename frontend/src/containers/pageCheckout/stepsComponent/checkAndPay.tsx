import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CCartItemsContainer from "../../pageCart/cartItemsContainer";
import axios from "axios";
import { toast } from "react-toastify";
import {
  getCouponPrice,
  getShippingPrice,
  getSubTotal,
  getTaxPrice,
  getTotalItems,
  getTotalPrice,
} from "../../../helpers/functions/cartFunctions";
import { addOrderAction } from "../../../redux/order/actions.order";
import { useRouter } from "next/router";

/////////////////////////////////////////////////////////////////////////////////

const SContainer = styled.div`
  /* background-color: #f8eff0; */
  padding: 2vh 2vw;
`;

const SButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4vh 0;
`;

const SAddressContainer = styled.div`
  border: 1px solid black;
  padding: 2vh 2vw;
`;

const SRow = styled.div`
  background-color: white;
  margin: 3vh 0;
`;

const SRowPayementMethod = styled.div`
  background-color: yellow;
  display: flex;
  align-items: center;
  padding: 0.5vh 2vw;

  span {
    margin: 0 0 0 20px;
  }
`;

const SMainDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

/////////////////////////////////////////////////////////////////////////////////

const CCheckAndPay = ({ step, setStep }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  // We retrieve all cart state to construct the order to send to the backend.
  const { cartItems, payementMethod, deliveryAddress, billingAddress, coupon } =
    useAppSelector((state) => state.cart);

  // Function used to back to the previuos step component (deliveryAddress component.)
  const backToPreviuosStepHandler = () => {
    setStep({
      ...step,
      label: "Addresses de Facturation",
      stepNumber: step.stepNumber - 1,
    });
  };

  // Here we are in the previous last step for payement. We set the step at 4 and place order.
  const [oredrError, setOrderError] = useState("");

  const checkAndApplyOrderHandler = async () => {
    // We construcet the order and place it.
    const order = {
      cartItems: cartItems,
      payementMethod: payementMethod,
      deliveryAddress,
      billingAddress,
      subTotal: getSubTotal(),
      couponRate: coupon.couponResponse.coupon_rate,
      couponPrice: getCouponPrice(),
      shippingPrice: getShippingPrice(),
      taxPrice: getTaxPrice(),
      totalPrice: getTotalPrice(),
    };

    try {
      const { data } = await axios({
        method: "post",
        url: "/api/order/create",
        data: {
          order: order,
        },
      });

      // We dispatch the order data to the store
      dispatch(addOrderAction(data));

      // We update the step state to pass to the next step.
      setStep({
        ...step,
        label: "Vérifier et payez. Merci.",
        stepNumber: step.stepNumber + 1,
      });
    } catch (error) {
      if (error.response.status === 401) {
        router.push("/account/login");
      }
      setOrderError(error.response.data.feedbackResponse);
      toast.error(error.response.data.feedbackResponse);
      return;
    }
  };

  return (
    <SContainer>
      <h2>Check and pay component</h2>
      <h1>{step.stepNumber}</h1>

      <SRow>
        <SRowPayementMethod>
          <h6>Méthode de paiement choisie</h6>
          <span>{payementMethod} </span>
        </SRowPayementMethod>
      </SRow>

      <SRow>
        <Grid container rowSpacing={0} columnSpacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <div>
              <h6>Addresses de livraison</h6>
              <SAddressContainer>
                <SMainDetails>
                  <strong>
                    {deliveryAddress.deliveryUnitNumber}-
                    {deliveryAddress.deliveryAddress}
                  </strong>
                  <span>
                    <CheckCircleIcon fontSize="medium" color="success" />
                  </span>
                </SMainDetails>
                <div>
                  {deliveryAddress.deliveryFirstName} -
                  {deliveryAddress.deliveryLastName}
                </div>
                <div>
                  {deliveryAddress.deliveryUnitNumber}-
                  {deliveryAddress.deliveryAddress}
                </div>
                <div>
                  {deliveryAddress.deliveryTown},{" "}
                  {deliveryAddress.deliveryProvince},{" "}
                  {deliveryAddress.deliveryZipCode}
                </div>
                <div>{deliveryAddress.deliveryPhoneNumber}</div>
              </SAddressContainer>
            </div>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <div>
              <h6>Addresses de Facturation</h6>
              <SAddressContainer>
                <SMainDetails>
                  <strong>
                    {billingAddress.billingUnitNumber}-
                    {billingAddress.billingAddress}
                  </strong>
                  <span>
                    <CheckCircleIcon fontSize="medium" color="success" />
                  </span>
                </SMainDetails>
                <div>
                  {billingAddress.billingFirstName} -
                  {billingAddress.billingLastName}
                </div>
                <div>
                  {billingAddress.billingUnitNumber}-
                  {billingAddress.billingAddress}
                </div>
                <div>
                  {billingAddress.billingTown}, {billingAddress.billingProvince}
                  , {billingAddress.billingZipCode}
                </div>
                <div>{billingAddress.billingPhoneNumber}</div>
              </SAddressContainer>
            </div>
          </Grid>
        </Grid>
      </SRow>

      <SRow>
        <h6>Nombre d'articles dans votre panier ( {cartItems.length} )</h6>
        <CCartItemsContainer />
      </SRow>

      <SButtonWrapper>
        <Button
          variant="contained"
          color="success"
          onClick={backToPreviuosStepHandler}
        >
          <span>
            <ArrowBackIosNewIcon fontSize="small" />
          </span>
          Précédent
        </Button>
        <div>{oredrError}</div>
        <Button variant="contained" onClick={checkAndApplyOrderHandler}>
          Faire le payement
          <span>
            <ArrowForwardIosIcon fontSize="small" />
          </span>
        </Button>
      </SButtonWrapper>
    </SContainer>
  );
};

export default CCheckAndPay;
