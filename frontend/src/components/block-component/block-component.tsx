import React from "react";
import styled from "styled-components";

interface ISProps {
  bg?: string;
}

const SContainer = styled.div`
  margin: 0 0 25px 0;
`;

const STitle = styled.div<ISProps>`
  background-color: ${(props) => (props.bg ? props.bg : "#f6f8f9")};
  display: inline-block;
  padding: 10px;
  border-radius: 10px;
`;

const SContent = styled.div<ISProps>`
  background-color: ${(props) => (props.bg ? props.bg : "#f6f8f9")};
  height: auto;
  padding: 15px 10px 15px 1vw;
`;

////////////////////////////////////////////////////////////////////////////

interface IProps {
  title?: string;
  bg?: string;
  children: JSX.Element;
}

export const BlockGroup = (props: Partial<IProps>) => {
  const { bg, title, children } = props;

  return (
    <SContainer>
      <STitle bg={bg}>{title}</STitle>
      <SContent bg={bg}>{children}</SContent>
    </SContainer>
  );
};
