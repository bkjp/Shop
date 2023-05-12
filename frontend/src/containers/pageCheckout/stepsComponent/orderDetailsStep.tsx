import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../redux/store";

//////////////////////////////////////////////////////////
const SContainer = styled.section`
  padding: 15px 2vw;
`;

const SHeader = styled.div``;

const SRow = styled.div``;

const SColumn = styled.div``;

const SQrCodeWrapper = styled.div`
  display: block;
  width: 3vw;
  height: 3vh;
`;

const STrackOrder = styled.div`
  background-color: blue;
  color: white;
  padding: 0px 15px;
  border-radius: 20px;
`;

//////////////////////////////////////////////////////////

export default function COrderDetailsStep({ step, setStep }) {
  const { dataResponse } = useAppSelector((state) => state.orderCreated);

  const status = dataResponse.is_paid ? "paid" : "Not paid"

  return (
    <SContainer>
      <SHeader>
        <SRow>
          <Grid container>
            <Grid item xs={12} md={3} lg={3}>
              <SColumn>
                <h5>Order ID: {dataResponse.id}</h5>
              </SColumn>
            </Grid>

            <Grid item xs={12} md={3} lg={3}>
              <SColumn></SColumn>
            </Grid>

            <Grid item xs={12} md={3} lg={3}>
              <SColumn>Invoice</SColumn>
            </Grid>

            <Grid item xs={12} md={3} lg={3}>
              <SColumn>
                <STrackOrder>Track order</STrackOrder>
              </SColumn>
            </Grid>
          </Grid>
        </SRow>

        <SRow>
          <Grid container>
            <Grid item xs={12} md={9} lg={9}>
              <SColumn>
                <div>
                  Shipping address: {dataResponse.billing_address.address}
                </div>
                <div>Payement method: {dataResponse.payement_method}</div>
                <h4>
                  Total Price: $ {dataResponse.total_price}
                  <span> Status: {status}</span>
                </h4>
              </SColumn>
            </Grid>

            <Grid item xs={12} md={3} lg={3}>
              <SColumn>
                <SQrCodeWrapper>
                  <Image
                    src={dataResponse.qr_code}
                    alt="qr-code"
                    width={100}
                    height={100}
                  />
                </SQrCodeWrapper>
              </SColumn>
            </Grid>
          </Grid>
        </SRow>
      </SHeader>
      <hr />

      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio eum
        velit delectus fuga, nemo odio voluptas saepe accusantium. Esse,
        dolores. Culpa, mollitia! Earum aut rerum tempore magni corporis, ut
        inventore?
      </div>
    </SContainer>
  );
}
