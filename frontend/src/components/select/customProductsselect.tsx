import React from "react";
import styled from "styled-components";
import Select from "react-select";

const SContainer = styled.div`
  width: 85%;
`;

const SLabel = styled.div`
  font-size: var(--font-size-label);
`;

///////////////////////////////////////////////////////////////////////

interface IProps {
  label: string;
  data: {
    id: number;
    category: string;
    product_type: string;
    tag: string;
    name: string;
    brand: string;
    stock: number;
    price: number;
    code: string;
  }[];
}

export const CustomProductSelect = (props: IProps) => {
  const label = props.label;
  const data = props.data;

  const dataOptions = data.map((item: { name: string }) => ({
    label: item.name,
    value: item.name,
  }));

  return (
    <SContainer>
      <SLabel>{label} </SLabel>
      <Select options={dataOptions} />
    </SContainer>
  );
};
