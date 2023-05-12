import React from "react";
import styled from "styled-components";

const SContainer = styled.div`
  position: relative;
  background-color: yellow;
  padding: 50px 50px;

  :hover {
    background-color: red;
  }
`;

const SContent = styled.div`
  position: absolute;
  top: 5vh;
`;

const ToolTip = ({ children }) => {
  return (
    <SContainer>
      {children}
      <SContent>text</SContent>
    </SContainer>
  );
};

export default ToolTip;
