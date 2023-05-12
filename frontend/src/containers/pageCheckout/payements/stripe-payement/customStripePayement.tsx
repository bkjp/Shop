import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import LockIcon from "@mui/icons-material/Lock";
import CStripePayementForm from "./stripePaymentForm";
/////////////////////////////////////////////////////////////////////////

const SContainer = styled.div``;

const SSecureInfos = styled.div`
  display: flex;
  align-items: center;
  margin: 25px 0;

  span {
    margin: 0 10px 0 0;
  }
`;

const STitle = styled.div`
  margin: 5px 0 15px 0;
  font-size: 1.5 rem;
  font-weight: bold;
`;

////////////////////////////////////////////////////////////////////////

export default function CCustomStripePayement({ total, order_id }) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  //const stripePromise = loadStripe(stripe_public_key);

  // We get publishable_key from Nextjs Api in oder to use loadStripe.
  useEffect(() => {
    const getPublishableKey = async () => {
      try {
        const { data } = await axios({
          method: "get",
          url: "/api/secret/stripe/get_publishable_key",
        });

        const publishable_key = data.publishable_key;
        setStripePromise(loadStripe(publishable_key));
      } catch (error) {
        return;
      }
    };

    getPublishableKey();
  }, []);

  // We get client secret from payement intent to pass it as props to Elements Provider.
  useEffect(() => {
    const getClientSecret = async () => {
      try {
        const { data } = await axios({
          method: "post",
          url: "/api/secret/stripe/create_payement_intent",
          data: {
            total_price: Number(total),
          },
        });

        setClientSecret(data.client_secret);
      } catch (error) {
        console.log(error.message);

        return;
      }
    };

    getClientSecret();
  }, []);

  return (
    <>
      <STitle>Enter your card informations</STitle>
      <SSecureInfos>
        <span>
          <LockIcon />
        </span>
        <div>Toutes les transactions sont sécurisées et cryptées.</div>
      </SSecureInfos>
      {stripePromise && clientSecret && (
        <Elements
          stripe={stripePromise}
          options={{ clientSecret }}
          key={clientSecret}
        >
          <CStripePayementForm total={total} order_id={order_id} />
        </Elements>
      )}
    </>
  );
}
