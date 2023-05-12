import React from "react";
import styled from "styled-components";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  overflow: hidden;
`;

const SIconWrapper = styled.div`
  margin: 5px 5px;
`;

const SName = styled.div``;

interface Props {
  name: string;
}

export const CompanyComp = (props: Props) => {
  return (
    <Container>
      <SIconWrapper>
        <BusinessOutlinedIcon fontSize="small" />
      </SIconWrapper>
      <SName>{props.name} </SName>
    </Container>
  );
};
