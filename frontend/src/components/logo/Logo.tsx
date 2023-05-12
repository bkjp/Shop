import React from "react";
import Link from "next/link";
import styled from "styled-components";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { Separation } from "../separation/Separation";
import { device } from "../../responsive/Responsive";

const Container = styled.div`
  line-height: 1.1;
  font-size: 30px;
  color: white;
  cursor: pointer;

  @media ${device.mobile} {
    font-size: 30px;
    width: 250px;
  }
`;

export const Logo = () => {
  return (
    <Container>
      <Link href="/">
        <div>Shopping</div>
      </Link>
    </Container>
  );
};
