import React from "react";
import styled from "styled-components";

const SContainer = styled.div`
  margin: 0 15px;
`;
const SNameAndStatus = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 5px 0;
`;

const SName = styled.div`
  margin: 0 10px 0 0;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 0.9;
`;

const SStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  color: white;
  width: 60px;
  padding: 2px 15px;
  line-height: 1.1;
  border-radius: 10px;
`;
const SEmail = styled.div`
  color: orange;
  line-height: 1.1;
`;
const SPhone = styled.div`
  font-weight: bold;
  line-height: 1.1;
`;

////////////////////////////////////////////////////////////////////////////////////////

interface Props {
  name?: string;
  status?: string;
  email?: string;
  phone?: string;
}

export const ContactBadge = (props: Props) => {
  return (
    <SContainer>
      <SNameAndStatus>
        <SName> {props.name}</SName>
        <SStatus>{props.status} </SStatus>
      </SNameAndStatus>

      <SEmail>{props.email} </SEmail>
      <SPhone>{props.phone} </SPhone>
    </SContainer>
  );
};
