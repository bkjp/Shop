import React from "react";
import styled from "styled-components";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
`;

const SIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SFullAddress = styled.div`
  line-height: 1.1;
`;

interface Props {
  streetNumber?: string;
  streetName?: string;
  postalCode?: string;
  town?: string;
  province?: string;
  country?: string;
}
export const AddressComp = (props: Props) => {
  //const { streetNumber, streetName, postalCode } = props;
  return (
    <Container>
      <SIconWrapper>
        <LocationOnOutlinedIcon fontSize="medium" />
      </SIconWrapper>

      <SFullAddress>
        <span>
          {props.streetNumber} {props.streetName}
        </span>
        <br />
        <span>
          {props.town}, {props.province}, {props.postalCode}, {props.country}
        </span>
      </SFullAddress>
    </Container>
  );
};

///////////////////////////////////////////
// 6 props
//  <AddressComp
//   streetNumber=""
//   streetName=""
//   postalCode=""
//   town=""
//   province=""
//   country=""
// />

