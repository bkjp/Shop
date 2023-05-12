import React, { createContext, useContext, useState } from "react";

interface ContextProviderType {
  children?: React.ReactNode;
}

interface StateContextType {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const StateContext = createContext<StateContextType>({
  activeMenu: false,
  setActiveMenu: () => {},
});

export default function ContextProvider({ children }: ContextProviderType) {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);

  return (
    <StateContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);
