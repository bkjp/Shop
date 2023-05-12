import React, { useState } from "react";
import styled from "styled-components";
import {
  useStripe,
  CardElement,
  PaymentElement,
  useElements,
} from "@stripe/react-stripe-js";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import axios from "axios";

/////////////////////////////////////////////////////////////

const SContainer = styled.div``;

const SButton = styled.button`
  background-color: #6565df;
  color: white;
  border: none;
  margin: 15px 0 10px 0;
  padding: 10px 15px;
  width: 100%;
`;

/////////////////////////////////////////////////////////////

export default function CStripePayementForm({ total, order_id }) {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState("");
  const [orderError, setOrderError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    // Confirmation of payment intent we have created previously.
    const { error, paymentIntent } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/`,
      },
      redirect: "if_required",
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      // Update the order to set it to be paid.
      try {
        const { data } = await axios({
          method: "post",
          url: "/api/order/is_paid",
          data: {
            order_id: order_id,
          },
        });
        if (data.dataResponse.is_paid) {
          toast.success("Payement succeeded.");
          router.push("/thank-you/thankYou");
        }
      } catch (error) {
        const feedback = error.response.data.feedback;
        setOrderError(feedback);
      }
    } else {
      setErrorMessage("Unexpected state");
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <Button
        sx={{ mt: 3 }}
        variant="contained"
        fullWidth
        disabled={!stripe}
        type="submit"
        onClick={handleSubmit}
      >
        {isProcessing ? "Processing..." : " Payer maintenant"}
      </Button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
      {orderError && <div>{orderError}</div>}
    </form>
  );
}
