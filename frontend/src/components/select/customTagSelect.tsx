import React from "react";
import styled from "styled-components";
import Select from "react-select";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const SContainer = styled.div`
  margin: 10px 0;
`;

const SLabel = styled.div`
  font-size: var(--font-size-label);

  span {
    margin: 0 0 0 20px;
    cursor: pointer;
  }
`;

////////////////////////////////////////////////////////////////////////////////////

interface IProps {
  label: string;
  data: {
    id: number;
    name: string;
    user: string;
    created_at: string;
  }[];
}

export const CustomTagSelect = (props: IProps) => {
  const label = props.label;
  const data = props.data;

  const dataOptions = data.map((item: { name: string }) => ({
    label: item.name,
    value: item.name,
  }));

  // Fonction to add category when you click on the add icon mui.
  const handleAddTag = () => {
    console.log("add category");
  };

  return (
    <SContainer>
      <SLabel>
        {label}
        <span onClick={handleAddTag}>
          <PlaylistAddIcon color="primary" />
        </span>
      </SLabel>
      <Select options={dataOptions} />
    </SContainer>
  );
};
