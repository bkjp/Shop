import React, { useRef, useState } from "react";
import styled from "styled-components";
import Radio from "@mui/material/Radio";
import paypalImage from "../../assets/images/payements/paypal/paypal2.png";
import creditImage from "../../assets/images/payements/visacard/creditcard1.png";
import Image from "next/image";
import { useAppDispatch } from "../../redux/store";
import { addPayementMethod } from "../../redux/cart/actions.cart";
////////////////////////////////////////////////////////////////////////

const SContainer = styled.div``;

const SPayementItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    background-color: pink;
  }
`;

const SImageWrapper = styled.div`
  flex: 20;
  position: relative;
  height: 8vh;
`;

const SRadioButtonWrapper = styled.div`
  flex: 1;
`;

const SCreditCard = styled.div``;

const SCash = styled.div``;

/////////////////////////////////////////////////////////////////////////

//{ payementMethod, setPayementMethod }
const CChoosePayementMethod = () => {
  const dispatch = useAppDispatch();

  const [payementMethod, setPayementMethod] = useState("jules paulin");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayementMethod(e.target.value);
    dispatch(addPayementMethod(e.target.value));
  };

  // const onChoosePaypal = () => {
  //   //setPayementMethod("paypal");
  //   dispatch(addPayementMethod("paypal"));
  // };

  // const onChooseCreditCard = () => {
  //   // setPayementMethod("credit-card");
  //   dispatch(addPayementMethod("credit-card"));
  // };

  return (
    <SContainer>
      <h6>Choisir la méthode de payement</h6>

      <div>
        <SPayementItem>
          <SRadioButtonWrapper>
            <Radio
              checked={payementMethod === "paypal"}
              onChange={handleChange}
              value="paypal"
              name="payement-method"
              inputProps={{ "aria-label": "A" }}
            />
          </SRadioButtonWrapper>
          <SImageWrapper>
            <Image src={paypalImage} alt="paypal-image" layout="fill" />
          </SImageWrapper>
        </SPayementItem>

        <SPayementItem>
          <SRadioButtonWrapper>
            <Radio
              checked={payementMethod === "credit-card"}
              onChange={handleChange}
              value="credit-card"
              name="payement-method"
              inputProps={{ "aria-label": "B" }}
            />
          </SRadioButtonWrapper>

          <SImageWrapper>
            PayPal
            <Image src={creditImage} alt="paypal-image" layout="fill" />
          </SImageWrapper>
        </SPayementItem>
      </div>
    </SContainer>
  );
};

export default CChoosePayementMethod;
