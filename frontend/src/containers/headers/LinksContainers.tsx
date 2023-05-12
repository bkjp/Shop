import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";

interface IPropsStyled {
  direction?: string;
}

const Container = styled.div<IPropsStyled>`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 15px;
  font-size: 1.2rem;
  span {
    margin: 0 15px;
  }

  ${(props) => {
    switch (props.direction) {
      case "row":
        return css`
          flex-direction: row;
        `;

      case "col":
        return css`
          flex-direction: column;
          span {
            margin: 0 15px;
            margin-top: 10px;
          }
        `;

      default:
        return null;
    }
  }}
`;

interface IProps {
  direction?: string;
}

export const LinksContainers = (props: IProps) => {
  const { direction } = props;

  return (
    <Container direction={direction}>
      <span>
        <Link href="/">Acceuil</Link>
      </span>

      <span>
        <Link href="/contact">Contacter</Link>
      </span>
    </Container>
  );
};
