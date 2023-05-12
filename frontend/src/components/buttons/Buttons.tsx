import React, { SVGProps } from "react";
import styled, { css } from "styled-components";

interface IPropsStyled {
  bg?: string;
  fz?: string;
  border?: string;
  br?: string;
  width?: string;
  height?: string;
  margin?: string;
  pd?: string;
}

const Container = styled.button<IPropsStyled>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  font-size: ${(props) => (props.fz ? props.fz : "1.1rem")};
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: ${(props) => (props.br ? props.br : "5px")};
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
  margin: ${(props) => props.margin && props.margin};
  padding: ${(props) => (props.pd ? props.pd : "10px")};

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    content: "";
    background-color: #38ad38;
    opacity: 0;
    transform: translate(-50%, -50%);
    width: 0%;
    height: 100%;
    z-index: 11;
    transition: opacity 300ms, width 300ms;
  }

  &:hover {
    opacity: 0.6;
  }
  &:active {
    opacity: 0.5;
    &::before {
      width: 100%;
      opacity: 0.7;
    }
  }

  ${(props) => {
    switch (props.bg) {
      case "primary":
        return css`
          background-color: #d662d6;
          color: white;
        `;
      case "secondary":
        return css`
          background-color: #66cdaa;
        `;
      case "success":
        return css`
          background-color: #2da44e;
          color: white;
        `;
      case "info":
        return css`
          background-color: #0a95ff;
          color: white;
        `;
      case "danger":
        return css`
          background-color: red;
          color: white;
        `;
      case "warning":
        return css`
          border: none;
        `;
      case "black":
        return css`
          background-color: black;
          color: white;
        `;
      case "transparent":
        return css`
          background-color: transparent;
          color: inherit;
        `;
      default:
        return css`
          background-color: blue;
          color: white;
        `;
    }
  }}
`;

const Left = styled.div`
  padding: 5px;
`;

const Center = styled.div`
  margin: 0 10px;
`;

const Right = styled.div`
  padding: 5px;
`;

interface IProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  width?: string;
  margin?: string;
  pd?: string;
  bg?: string;
  color?: string;
  fz?: string;
  border?: string;
  br?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = (props: IProps) => {
  const {
    children,
    leftIcon,
    rightIcon,
    onClick,

    width,
    margin,
    pd,
    bg,
    color,
    fz,
    border,
    br,
  } = props;

  return (
    <Container
      onClick={onClick}
      bg={bg}
      color={color}
      fz={fz}
      width={width}
      margin={margin}
      pd={pd}
      border={border}
      br={br}
    >
      <Left>
        <> {leftIcon} </>
      </Left>
      <Center>{children}</Center>
      <Right>
        <>{rightIcon} </>
      </Right>
    </Container>
  );
};
