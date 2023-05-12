import React from "react";
import styled from "styled-components";
import Select from "react-select";

const SContainer = styled.div`
  width: 15vw;
`;

const SLabel = styled.div`
  font-size: var(--font-size-label);
`;

///////////////////////////////////////////////////////////////////////

interface IProps {
  label: string;
  data: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    phone: string;
    brand: string;
  }[];
}

export const CustomProvidersSelect = (props: IProps) => {
  const label = props.label;
  const data = props.data;

  const dataOptions = data.map((item: { first_name: string }) => ({
    label: item.first_name,
    value: item.first_name,
  }));

  return (
    <SContainer>
      <SLabel>{label} </SLabel>
      <Select options={dataOptions} />
    </SContainer>
  );
};
