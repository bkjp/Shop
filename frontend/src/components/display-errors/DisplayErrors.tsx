import React, { ReactElement } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #d96565;
  color: white;
  line-height: 1.1;
  padding: 5px 5px;
`;

export const CdisplayErrors = (children: ReactElement) => {
  return <Container>{children}</Container>;
};
