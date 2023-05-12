import React from "react";
import styled from "styled-components";
import Select from "react-select";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const SContainer = styled.div`
  margin: 10px 0;
  span {
    margin: 0 0 0 20px;
    cursor: pointer;
  }
`;

const SLabel = styled.div`
  font-size: var(--font-size-label);
`;

///////////////////////////////////////////////////////////////////////

interface IProps {
  label: string;
  data: {
    id: number;
    name: string;
    is_active: boolean;
  }[];
}

export const CustomProductTypeSelect = (props: IProps) => {
  const label = props.label;
  const data = props.data;

  const dataOptions = data.map((item: { name: string }) => ({
    label: item.name,
    value: item.name,
  }));

  // Fonction to add category when you click on the add icon mui.
  const handleAddProductType = () => {
    console.log("add category");
  };

  return (
    <SContainer>
      <SLabel>
        {label}
        <span onClick={handleAddProductType}>
          <PlaylistAddIcon color="primary" />
        </span>
      </SLabel>
      <Select options={dataOptions} />
    </SContainer>
  );
};
