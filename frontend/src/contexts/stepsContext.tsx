import React, { createContext, useContext, useState } from "react";

interface ContextProviderType {
  children?: React.ReactNode;
}

interface IStep {
  label: string;
  stepNumber: number;
}
interface IStepContextType {
  step: IStep;
  setStep: React.Dispatch<React.SetStateAction<IStep>>;
}

// Create the step context and initialize
export const CustomStepContext = createContext<IStepContextType>({
  step: {
    label: "",
    stepNumber: 0,
  },
  setStep: () => {},
});

export default function StepsContextProvider({
  children,
}: ContextProviderType) {
  // Defining local state to pass to the context
  const [step, setStep] = useState({
    label: "",
    stepNumber: 1,
  });

  return (
    <CustomStepContext.Provider value={{ step, setStep }}>
      {children}
    </CustomStepContext.Provider>
  );
}

export const useCustomStepContext = () => useContext(CustomStepContext);
