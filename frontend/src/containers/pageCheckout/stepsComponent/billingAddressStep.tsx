import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Formik, Form } from "formik";
import Radio from "@mui/material/Radio";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import CShippingInput from "../../../components/shipping/shippingInput";
import { BillingValidationForm } from "../../../helpers/formik_validation";
import { Button, Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IBillingAddress } from "../../../../types/custom-typing/interface";
import { addBillingAddress } from "../../../redux/cart/actions.cart";
import { toast } from "react-toastify";

///////////////////////////////////////////////////////////////////////

const SContainer = styled.div`
  padding: 2vh 2vw;
`;

const SLineItem = styled.div`
  display: flex;
  align-items: center;
`;

const SBillingBox = styled.div<{ openBillingBox: boolean }>`
  ${(props) =>
    props.openBillingBox === false &&
    css`
      display: none;
    `}

  ${(props) =>
    props.openBillingBox === true &&
    css`
      background-color: #f7f1f2;
      font-size: 1.1rem;
      padding: 1vw 2vw;
      margin: 1vw 2vw;
    `}
`;

const SButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4vh 0;
`;

const SWrapperBlock = styled.div``;

const SItem = styled.div`
  margin: 5px 1vw 0 0;
`;

///////////////////////////////////////////////////////////////////////
const CBillingAddressStep = ({ step, setStep }) => {
  const dispatch = useAppDispatch();

  //---------------------   Radio button  -----------------------------

  // Local state to open and close billing box
  const [openBillingBox, setOpenBillingBox] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch(addPayementMethod(e.target.value));

    if (e.target.value === "different-from-shipping-address") {
      setOpenBillingBox(true);
    }
  };

  const handleOpenBillingBox = () => {
    setOpenBillingBox(true);
  };

  const handleCloseBillingBox = () => {
    setOpenBillingBox(false);
  };

  //------------------------  Formik  ---------------------------------

  // Function used to back to the previuos step component (deliveryAddress component.)
  const backToPreviuosStepHandler = () => {
    setStep({
      ...step,
      label: "Addresses de livraison",
      stepNumber: step.stepNumber - 1,
    });
  };

  // We retrieve the deliveryAddress and payement method to initialize the form values of formik.
  const { payementMethod, billingAddress } = useAppSelector(
    (state) => state.cart
  );

  // Function used when apply onSubmit function of formik
  const applyBillingAddressHandler = (values: IBillingAddress) => {
    // We check if payement method has been choosed
    if (payementMethod === "") {
      toast.error("Please select payement method to your right");
      return;
    } else {
      // We dispatch billing address to the store
      dispatch(addBillingAddress(values));

      // We pass to the next step
      setStep({
        ...step,
        label: "Verification",
        stepNumber: step.stepNumber + 1,
      });
    }
  };

  //--------------------------------------------------------

  return (
    <SContainer>
      <h6>Addresse de facturation</h6>
      <h1>{step.stepNumber}</h1>
      <div>
        <SLineItem>
          <Radio
            checked={openBillingBox === false}
            onChange={handleChange}
            value="same-as-shipping-address"
            name="billing-address"
            inputProps={{ "aria-label": "A" }}
            onClick={handleCloseBillingBox}
          />
          <div>Identique a l'addresse de livraison</div>
        </SLineItem>
      </div>

      <div>
        <SLineItem>
          <Radio
            checked={openBillingBox === true}
            onChange={handleChange}
            value="different-from-shipping-address"
            name="billing-address"
            inputProps={{ "aria-label": "B" }}
            onClick={handleOpenBillingBox}
          />
          <div>Autre addresse pour la facturation</div>
        </SLineItem>
        <SBillingBox openBillingBox={openBillingBox}>
          <Formik
            initialValues={billingAddress}
            validationSchema={BillingValidationForm}
            onSubmit={applyBillingAddressHandler}
          >
            {(formik) => (
              <Form>
                <SWrapperBlock>
                  <Grid container rowSpacing={0} columnSpacing={3}>
                    <Grid item xs={12} md={6} lg={6}>
                      <CShippingInput
                        label="First Name"
                        type="text"
                        id="billingFirstName"
                        name="billingFirstName"
                        placeholder="Entrer le code du coupon"
                      />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                      <CShippingInput
                        label="Last Name"
                        type="text"
                        id="billingLastName"
                        name="billingLastName"
                        placeholder="Entrer le code du coupon"
                      />
                    </Grid>
                  </Grid>

                  <Grid container rowSpacing={0} columnSpacing={3}>
                    <Grid item xs={12} md={6} lg={6}>
                      <CShippingInput
                        label="Email"
                        type="email"
                        id="billingEmail"
                        name="billingEmail"
                        placeholder="Email address"
                      />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                      <CShippingInput
                        label="No Tel"
                        type="text"
                        id="billingPhoneNumber"
                        name="billingPhoneNumber"
                        placeholder="Téléphone"
                      />
                    </Grid>
                  </Grid>

                  <Grid container rowSpacing={0} columnSpacing={3}>
                    <Grid item xs={12} md={4} lg={4}>
                      <CShippingInput
                        label="Country"
                        type="text"
                        id="billingCountry"
                        name="billingCountry"
                        placeholder="Pays"
                      />
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                      <CShippingInput
                        label="Province/État"
                        type="text"
                        id="billingProvince"
                        name="billingProvince"
                        placeholder="Province"
                      />
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                      <CShippingInput
                        label="Ville"
                        type="text"
                        id="billingTown"
                        name="billingTown"
                        placeholder="Ville"
                      />
                    </Grid>
                  </Grid>
                </SWrapperBlock>

                <Grid container rowSpacing={0} columnSpacing={3}>
                  <Grid item xs={12} md={5} lg={5}>
                    <CShippingInput
                      label="Addresse"
                      type="text"
                      id="billingAddress"
                      name="billingAddress"
                      placeholder="Nom de rue "
                    />
                  </Grid>
                  <Grid item xs={12} md={2} lg={2}>
                    <CShippingInput
                      label="Code postal"
                      type="text"
                      id="billingZipCode"
                      name="billingZipCode"
                      placeholder="Zip code"
                    />
                  </Grid>

                  <Grid item xs={12} md={5} lg={5}>
                    <CShippingInput
                      label="Apt"
                      type="number"
                      id="billingUnitNumber"
                      name="billingUnitNumber"
                    />
                  </Grid>
                </Grid>
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
        </SBillingBox>
      </div>
    </SContainer>
  );
};

export default CBillingAddressStep;
