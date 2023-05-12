import React from "react";
import styled from "styled-components";
import { Footer, Header } from "../../containers";
import CDialog from "../../containers/dialogs/dialog";
import Announcement from "../../containers/homePage/announcement";
import CartSidebar from "../../containers/sidebars/cartSidebar";
import LoginSidebar from "../../containers/sidebars/loginSidebar";
import { useAppSelector } from "../../redux/store";

const SContainer = styled.div`
  position: relative;
`;

const SHead = styled.div``;

const SContent = styled.div``;

export default function HomePageLayout({ children }) {
  const { loginSidebarIsOpen } = useAppSelector((state) => state.sidebar);

  return (
    <SContainer>
      <LoginSidebar />
      <CartSidebar />
      <CDialog />

      <SHead>
        <Announcement />
        <Header />
      </SHead>

      <SContent>{children}</SContent>
      <Footer />
    </SContainer>
  );
}
