import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { DeliveryValidationForm } from "../../../helpers/formik_validation";
import CShippingInput from "../../../components/shipping/shippingInput";
import { Button, Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IDeliveryAddress } from "../../../../types/custom-typing/interface";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { addDeliveryAddress } from "../../../redux/cart/actions.cart";
import { useCustomStepContext } from "../../../contexts/stepsContext";

///////////////////////////////////////////////////////////////////////

const SContainer = styled.div`
  padding: 2vh 2vw;
`;

const SBlockGroup = styled.div`
  background-color: #f8eff0;
  padding: 0 1vw;
`;

const SButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 4vh 0;
`;

const SItem = styled.div`
  margin: 5px 1vw 0 0;
`;

const SWrapperBlock = styled.div``;

////////////////////////////////////////////////////////////////////////

const CDeliveryAddressStep = ({ step, setStep }) => {
  const dispatch = useAppDispatch();

  // Function used to implement onSubmit function of formik.
  const applyDeliveryAddressHandler = (values: IDeliveryAddress) => {
    // We dispatch the deliveryAddress to the store
    dispatch(addDeliveryAddress(values));

    // We update the step state to pass to the next step.
    setStep({
      ...step,
      label: "Addresses de facturation",
      stepNumber: step.stepNumber + 1,
    });
  };

  // We retrieve the deliveryAddress to initialize the form values of formik.
  const { deliveryAddress } = useAppSelector((state) => state.cart);

  return (
    <SContainer>
      <h1>{step.stepNumber}</h1>
      <Formik
        initialValues={deliveryAddress}
        validationSchema={DeliveryValidationForm}
        onSubmit={applyDeliveryAddressHandler}
      >
        {(formik) => (
          <Form>
            <SBlockGroup>
              <h6>Addresses de livraison</h6>
              <SWrapperBlock>
                <Grid container rowSpacing={0} columnSpacing={3}>
                  <Grid item xs={12} md={6} lg={6}>
                    <CShippingInput
                      label="Prénom"
                      type="text"
                      id="deliveryFirstName"
                      name="deliveryFirstName"
                      placeholder="Entrer le code du coupon"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <CShippingInput
                      label="Nom de famille"
                      type="text"
                      id="deliveryLastName"
                      name="deliveryLastName"
                      placeholder="Entrer le code du coupon"
                    />
                  </Grid>
                </Grid>

                <Grid container rowSpacing={0} columnSpacing={3}>
                  <Grid item xs={12} md={6} lg={6}>
                    <CShippingInput
                      label="Email"
                      type="email"
                      id="deliveryEmail"
                      name="deliveryEmail"
                      placeholder="Email address"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <CShippingInput
                      label="No Tel"
                      type="text"
                      id="deliveryPhoneNumber"
                      name="deliveryPhoneNumber"
                      placeholder="Téléphone"
                    />
                  </Grid>
                </Grid>

                <Grid container rowSpacing={0} columnSpacing={3}>
                  <Grid item xs={12} md={4} lg={4}>
                    <CShippingInput
                      label="Country"
                      type="text"
                      id="deliveryCountry"
                      name="deliveryCountry"
                      placeholder="Pays"
                    />
                  </Grid>
                  <Grid item xs={12} md={4} lg={4}>
                    <CShippingInput
                      label="Province/État"
                      type="text"
                      id="deliveryProvince"
                      name="deliveryProvince"
                      placeholder="Province"
                    />
                  </Grid>
                  <Grid item xs={12} md={4} lg={4}>
                    <CShippingInput
                      label="Ville"
                      type="text"
                      id="deliveryTown"
                      name="deliveryTown"
                      placeholder="Ville"
                    />
                  </Grid>
                </Grid>

                <Grid container rowSpacing={0} columnSpacing={3}>
                  <Grid item xs={12} md={5} lg={5}>
                    <CShippingInput
                      label="Addresse"
                      type="text"
                      id="deliveryAddress"
                      name="deliveryAddress"
                      placeholder="Nom de rue "
                    />
                  </Grid>
                  <Grid item xs={12} md={2} lg={2}>
                    <CShippingInput
                      label="Code postal"
                      type="text"
                      id="deliveryZipCode"
                      name="deliveryZipCode"
                      placeholder="Zip code"
                    />
                  </Grid>

                  <Grid item xs={12} md={5} lg={5}>
                    <CShippingInput
                      label="Apt"
                      type="number"
                      id="deliveryUnitNumber"
                      name="deliveryUnitNumber"
                    />
                  </Grid>
                </Grid>
              </SWrapperBlock>
            </SBlockGroup>

            <SButtonWrapper>
              <Button variant="contained" type="submit">
                Suivant
                <span>
                  <ArrowForwardIosIcon fontSize="small" />
                </span>
              </Button>
            </SButtonWrapper>
          </Form>
        )}
      </Formik>
    </SContainer>
  );
};

export default CDeliveryAddressStep;
