import React, { createContext, useContext, useState } from "react";
import styled from "styled-components";
import { Footer } from "../../containers";
import CDialog from "../../containers/dialogs/dialog";
import CCartHeader from "../../containers/headers/cartHeader";
import CartSidebar from "../../containers/sidebars/cartSidebar";
import LoginSidebar from "../../containers/sidebars/loginSidebar";

//////////////////////////////////////////////////////////////////

const SContainer = styled.div``;

//////////////////////////////////////////////////////////////////

export default function CartLayout({ children }) {
  return (
    <div>
      <LoginSidebar />
      <CartSidebar />
      <CDialog />

      <CCartHeader />

      <div>{children}</div>

      <Footer />
    </div>
  );
}
