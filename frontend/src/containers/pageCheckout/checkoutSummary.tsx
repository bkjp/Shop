import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Formik, Form } from "formik";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SecurityIcon from "@mui/icons-material/Security";
import CustomCircularLoading from "../../components/loading/CircularLoading";
import * as Yup from "yup";
import CCouponInput from "../../components/shipping/couponInput";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { addCouponAction } from "../../redux/cart/actions.cart";
import CCartSummaryDetails from "../common/cartSummaryDetails";
import { useCustomStepContext } from "../../contexts/stepsContext";
import CChoosePayementMethod from "./choosePayement";
import CCustomStripePayement from "./payements/stripe-payement/customStripePayement";
import CPaypalPayment from "./payements/paypal-payement/paypalPayment";

//////////////////////////////////////////////////////////////////////////

const SContainer = styled.div`
  font-size: var(--font-size-text);
`;

const SApplyCouponContainer = styled.div<{ is_active: boolean }>`
  ${(props) =>
    props.is_active === false &&
    css`
      display: none;
    `}
`;

const SCouponWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    color: white;
    margin: 0 10px 0 0;
  }
`;

const SInputAndButtonWrapper = styled.div``;

const SApplyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  width: 100%;
  height: 5vh;
  border: none;
  line-height: 0.9;
`;

const SCheckoutSummaryInfos = styled.div`
  background-color: var(--bg-page);
  margin: 3vh 0;
  padding: 10px 15px;
`;

const SInfosItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;

const SPlaceOrderButton = styled.button`
  background-color: #5353e0;
  color: white;
  width: 100%;
  height: 5vh;
  margin: 1vh 0;
  border: none;

  &:hover {
    background-color: #9494e4;
    color: white;
    border: none;
  }
`;

const SSecurityInfos = styled.div`
  display: flex;
  margin: 5vh 0;
`;

const SLogoSecurity = styled.div`
  flex: 1;
`;

const SConfidentiality = styled.div`
  flex: 5;
`;

const SInputWrapper = styled.div<{ couponExist: boolean }>`
  ${(props) =>
    props.couponExist === true &&
    css`
      width: 0;
      height: 0;
      overflow: hidden;
    `}
`;

///////////////////////////////////////////////////////////////////////////

const CCheckoutSummary = ({
  discount,
  shippingFees,
  taxes,
  cartTotalPrice,
  totalAfterDiscount,
  setTotalAfterDiscount,
}) => {
  ////////////////////////////////////////////////////////////////////////////

  const dispatch = useAppDispatch();

  const { step, setStep } = useCustomStepContext();

  //-------------------------------------------------------------------------------------
  // This part is used to close coupon input if the check input was successful.
  // After making request to check coupon, if the request is successful, the coupon state
  // of cart state is updated and we can then close the input so that user cannot apply
  // many times.
  const { coupon } = useAppSelector((state) => state.cart);
  const { dataResponse } = useAppSelector((state) => state.orderCreated);

  const methodOfPayement = dataResponse.payement_method;

  //---------------------------------------------------------------------------------------

  return (
    <SContainer>
      {step && step.stepNumber !== 4 ? (
        <div>
          <CChoosePayementMethod />

          <Formik
            initialValues={{ couponName: "" }}
            validationSchema={Yup.object({
              couponName: Yup.string().required("Sorry, this is required"),
            })}
            onSubmit={(values) => dispatch(addCouponAction(values))}
          >
            {(formik) => (
              <Form>
                <SApplyCouponContainer
                  is_active={coupon.couponResponse.is_active}
                >
                  <p style={{ color: "blue" }}>
                    Avez vous un coupon ? Veuillez l'appliquer
                  </p>
                  <SInputAndButtonWrapper>
                    <SCouponWrapper>
                      <SInputWrapper couponExist={coupon.success}>
                        <CCouponInput
                          type="text"
                          id="couponName"
                          name="couponName"
                          placeholder="Entrer le code du coupon"
                        />
                      </SInputWrapper>

                      <SApplyButton type="submit" disabled={coupon.success}>
                        {coupon.loading && (
                          <CustomCircularLoading type="spin" width="15px" />
                        )}
                        {coupon.success && (
                          <div>
                            <span>
                              <CheckCircleIcon
                                fontSize="medium"
                                color="success"
                              />
                            </span>
                            <span> {coupon.successMsg} </span>
                          </div>
                        )}
                        {coupon.error && (
                          <div>
                            <span>
                              <HighlightOffIcon
                                fontSize="medium"
                                color="warning"
                              />
                            </span>
                            <span>{coupon.errorMsg} </span>
                          </div>
                        )}
                        {!coupon.success &&
                          !coupon.error &&
                          "Entrer le code coupon"}
                      </SApplyButton>
                    </SCouponWrapper>
                    {formik.errors.couponName && formik.touched.couponName && (
                      <p>{formik.errors.couponName} </p>
                    )}
                  </SInputAndButtonWrapper>
                </SApplyCouponContainer>
              </Form>
            )}
          </Formik>

          <CCartSummaryDetails />

          {/* <SPlaceOrderButton>Place Order</SPlaceOrderButton> */}

          <SSecurityInfos>
            <SLogoSecurity>
              <SecurityIcon fontSize="large" />
            </SLogoSecurity>

            <SConfidentiality>
              <h6>Sécurité et confidentialité</h6>
              <div>
                Toute transaction effectuée à Épicerie d'Afrique est sécurisée.
                Tous les renseignements personnels que vous nous fournissez
                seront traités en vertu de notre politique de confidentialité.
              </div>
            </SConfidentiality>
          </SSecurityInfos>
        </div>
      ) : (
        <div>
          {methodOfPayement === "paypal" ? (
            <CPaypalPayment
              total={dataResponse.total_price}
              order_id={dataResponse.id}
            />
          ) : (
            <CCustomStripePayement
              total={dataResponse.total_price}
              order_id={dataResponse.id}
            />
          )}
        </div>
      )}
    </SContainer>
  );
};

export default CCheckoutSummary;
