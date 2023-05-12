import React from "react";
import styled from "styled-components";

const SContainer = styled.form`
  display: flex;
  width: 100%;
`;

const SInputWrapper = styled.div`
  flex: 6;

  input {
    width: 100%;
    height: 100%;
    outline: none;
    padding: 5px 10px;
  }
`;

const SSearchWrapper = styled.div`
  flex: 1;
  button {
    background-color: pink;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

/////////////////////////////////////////////

const CSearchInput = () => {
  return (
    <SContainer>
      <SInputWrapper>
        <input type="search" />
      </SInputWrapper>
      <SSearchWrapper>
        <button type="submit">Search</button>
      </SSearchWrapper>
    </SContainer>
  );
};

export default CSearchInput;
