import React from "react";
import styled, { css } from "styled-components";

interface IPropsStyled {
  bg: string;
  bgFocus: string;
  fz: string;
  border: string;
  br: string;
  width: string;
  height: string;
  margin: string;
  pd: string;
  color: string;
  borderBottom: string;
  outline: string;
}

const SContainer = styled.div<Partial<IPropsStyled>>`
  width: ${(props) => props.width && props.width};
  margin: ${(props) => (props.margin ? props.margin : "15px 0 0 0")};
`;
const Label = styled.label<IPropsStyled>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fz && props.fz};
`;

const Input = styled.input<Partial<IPropsStyled>>`
  display: block;
  border-radius: 5px;
  width: 100%;

  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  padding: ${(props) => (props.pd ? props.pd : "5px 10px")};
  font-size: ${(props) => props.fz && props.fz};
  height: ${(props) => props.height && props.height};
  border: ${(props) => props.border && props.border};
  border-bottom: ${(props) => props.borderBottom && props.borderBottom};
  outline: ${(props) => props.outline && props.outline};

  &:focus {
    background-color: ${(props) => props.bgFocus};
  }
`;

const Error = styled.div``;

interface IProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;

  label: string;
  width: string;
  height: string;
  margin: string;
  pd: string;
  bg: string;
  bgFocus: string;
  fz: string;
  color: string;
  border: string;
  borderBottom: string;
  br: string;
  outline: string;

  type: string;
  name: string;
  value: number | string;
  pattern: string;
  title: string;
  placeholder: string;
  error: string;
  variant: string;
  leftIcon: React.ReactNode;
  rightIcon: React.ReactNode;
}

//////////////////////////////////////////////////////////////////////////////////

export const CTextField = (props: Partial<IProps>) => {
  const {
    label,
    bg,
    fz,
    bgFocus,
    color,
    border,
    borderBottom,
    width,
    height,
    margin,
    outline,

    type,
    name,
    value,
    pattern,
    title,
    placeholder,
    error,
    onChange,
  } = props;

  return (
    <SContainer>
      {/* <Label fz={fz} color={color}>
        {label}
      </Label> */}
      <Input
        bg={bg}
        fz={fz}
        bgFocus={bgFocus}
        color={color}
        border={border}
        borderBottom={borderBottom}
        width={width}
        height={height}
        margin={margin}
        outline={outline}
        type={type}
        name={name}
        value={value}
        pattern={pattern}
        title={title}
        placeholder={placeholder}
        onChange={onChange}
      />
      <Error>{error}</Error>
    </SContainer>
  );
};
