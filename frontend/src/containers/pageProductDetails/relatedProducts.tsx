import React from "react";
import styled from "styled-components";

const SContainer = styled.div`
  background-color: pink;
  margin: 20px;
`;

/////////////////////////////////////////////////////////////////////////

const CRelatedProducts = ({ product }) => {
  return (
    <SContainer>
      <h5>Related products</h5>
    </SContainer>
  );
};

export default CRelatedProducts;
