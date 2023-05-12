import React, { useContext } from "react";
import styled from "styled-components";
import { useCustomStepContext } from "../../contexts/stepsContext";


//////////////////////////////////////////////////////////////////////////////////////

const SContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 3vw;
`;

const SWrapper = styled.div`
  display: flex;
  align-items: center;
  height: auto
  margin: 10px 0;
  padding: 10px;
`;

const SStepIconWrapper = styled.div`
  background-color: green;
  color: white;
  padding: 0.25vw 1vw;
  font-size: 1vw;
  font-weight: bold;
  border-radius: 50%;
`;

const SLinkedLine = styled.div`
  background-color: red;
  width: 50%;
  height: 10px;
`;

const SLabel = styled.div`
  background-color: blue;
  color: white;
  padding: 5px 10px;
`;

/////////////////////////////////////////////////////////////////////////////////

export default function CCustomStepComponent() {
  const { step, setStep } = useCustomStepContext();

  const maxStep = 7;

  const enumerateTheNumberOfSteps = () => {
    return (
      <SWrapper>
        {[...Array(maxStep).keys()].map((x) => (
          <SWrapper key={x + 1}>
            <SStepIconWrapper> {x + 1}</SStepIconWrapper>
            <SLinkedLine></SLinkedLine>
          </SWrapper>
        ))}
      </SWrapper>
    );
  };

  return (
    <SContainer>
      <SLabel> {step.label} </SLabel>
      <div>{enumerateTheNumberOfSteps()}</div>
    </SContainer>
  );
}
