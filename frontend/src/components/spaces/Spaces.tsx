import React from "react";
import styled from "styled-components";

interface Props {
  e: string;
}

const VerticalSpace = styled.div<Props>`
  margin: ${(props) => props.e}px 0;
`;

export const VSpace = ({ e }) => {
  return <VerticalSpace e={e}></VerticalSpace>;
};

///////////////////////////////////////////////////////

const HorizontalSpace = styled.div<Props>`
  margin: 0 ${(props) => props.e}px;
`;

export const HSpace = ({ e }) => {
  return <HorizontalSpace e={e}></HorizontalSpace>;
};
