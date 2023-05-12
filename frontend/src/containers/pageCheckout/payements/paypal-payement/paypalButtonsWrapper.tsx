import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import styled from "styled-components";
//////////////////////////////////////////////////////////////

const SContainer = styled.div`
  margin: 10px 0;
`;

//////////////////////////////////////////////////////////////////////

export default function CPaypalButtonsWrapper({ total, order_id }) {
  const createOrderHandler = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: "some description",
          amount: {
            currency_code: "USD",
            value: total,
          },
        },
      ],
    });
  };

  const onApproveHandler = async (data, actions) => {
    const order = await actions.order.capture();

    console.log("//////////////////////////////////");
    console.log(order);

    // Call backend to update order to set it to is_paid
    //.....
  };

  const onCancelHandler = () => {};

  const onErrorHandler = (error) => {
    console.log(error);
  };

  return (
    <SContainer>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={createOrderHandler}
        onApprove={onApproveHandler}
        onCancel={onCancelHandler}
        onError={onErrorHandler}
      ></PayPalButtons>
    </SContainer>
  );
}
