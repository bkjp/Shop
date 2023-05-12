import React from "react";
import styled from "styled-components";
///////////////////////////////////////////////////////////////////

const SContainer = styled.div`
  background-color: pink;
  height: 50vh;
  width: 100vw;
`;

//////////////////////////////////////////////////////////////////////

export default function CBanner() {
  return (
    <SContainer>
      <h1>Banner</h1>
    </SContainer>
  );
}
