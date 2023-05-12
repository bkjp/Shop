import React from "react";
import styled from "styled-components";

interface IPropsStyled {
  fz: string;
}

const Container = styled.div<IPropsStyled>`
  display: flex;
  flex-direction: row;
  font-size: ${(props) => props.fz && props.fz};

  &::before {
    content: "";
    flex: 1 1;
    border-bottom: 1px solid;
    margin: auto;
    margin-right: 10px;
  }

  &::after {
    content: "";
    flex: 1 1;
    border-bottom: 1px solid;
    margin: auto;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

interface IProps {
  children?: React.ReactNode;
  e?: string;
  fz?: string;
}

export const Separation = (props: IProps) => {
  const { children, e, fz } = props;

  return <Container fz={fz}>{children}</Container>;
};
