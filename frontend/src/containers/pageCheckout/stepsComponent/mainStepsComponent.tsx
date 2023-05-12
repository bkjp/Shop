import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useCustomStepContext } from "../../../contexts/stepsContext";
import CBillingAddressStep from "./billingAddressStep";
import CCheckAndPay from "./checkAndPay";
import CDeliveryAddressStep from "./deliveryAddressStep";
import COrderDetailsStep from "./orderDetailsStep";

/////////////////////////////////////////////////////////////////////////

const SContainer = styled.div``;

//////////////////////////////////////////////////////////////////////////

const CContainerStepsComponent = () => {
  const { step, setStep } = useCustomStepContext();

  const conditionalComponent = () => {
    switch (step.stepNumber) {
      case 1:
        return <CDeliveryAddressStep step={step} setStep={setStep} />;

      case 2:
        return <CBillingAddressStep step={step} setStep={setStep} />;

      case 3:
        return <CCheckAndPay step={step} setStep={setStep} />;

      case 4:
        return <COrderDetailsStep step={step} setStep={setStep} />;

      default:
        return <CDeliveryAddressStep step={step} setStep={setStep} />;
    }
  };

  return (
    <SContainer>
      <div>{conditionalComponent()}</div>
    </SContainer>
  );
};

export default CContainerStepsComponent;
