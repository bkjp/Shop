import React, { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import styled from "styled-components";
import axios from "axios";
import LockIcon from "@mui/icons-material/Lock";
import CPaypalButtonsWrapper from "./paypalButtonsWrapper";
////////////////////////////////////////////////////////////////////////////

const SContainer = styled.div``;

const SSecureInfos = styled.div`
  display: flex;
  align-items: center;
  margin: 25px 0;

  span {
    margin: 0 5px 0 0;
  }
`;

const STitle = styled.div`
  margin: 5px 0 15px 0;
  font-size: 1.5 rem;
  font-weight: bold;
`;

/////////////////////////////////////////////////////////////////////////////

export default function CPaypalPayment({ total, order_id }) {
  const [paypalClientId, setPaypalClientId] = useState("");

  // Getting paypal client_id
  useEffect(() => {
    const getPayPalClientId = async () => {
      const { data } = await axios({
        method: "get",
        url: "/api/secret/paypal/get_client_id",
      });

      setPaypalClientId(data.paypal_client_id);
    };

    getPayPalClientId();
  }, []);

  return (
    <SContainer>
      <STitle>Payer avec paypal en toute sécurité</STitle>

      <SSecureInfos>
        <span>
          <LockIcon />
        </span>
        <div>Toutes vos transactions sont sécurisées et cryptées.</div>
      </SSecureInfos>

      {!paypalClientId ? (
        <div>Loading...</div>
      ) : (
        <PayPalScriptProvider options={{ "client-id": paypalClientId }}>
          <CPaypalButtonsWrapper total={total} order_id={order_id} />
        </PayPalScriptProvider>
      )}

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis enim
        maiores sapiente sit voluptates suscipit necessitatibus soluta tenetur
        harum, assumenda cum consequatur nemo beatae sequi obcaecati laborum,
        itaque asperiores. Commodi!
      </p>
    </SContainer>
  );
}
