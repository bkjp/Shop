import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  text-decoration: none;
`;

interface IProps {
  children: React.ReactNode;
}

export const StyledLink = (props: IProps) => {
  const { children } = props;

  return <Container>{children}</Container>;
};
