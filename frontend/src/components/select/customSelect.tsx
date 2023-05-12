import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface IStyledProps {
  open?: boolean;
  width?: string;
  height?: string;
}

////////////////////////////////////////////////////////////////////

const SContainer = styled.div<IStyledProps>`
  position: relative;
  display: inline-block;

  height: auto;
`;

const SHeader = styled.div<IStyledProps>`
  background-color: white;
  display: flex;
  width: ${(props) => (props.width ? props.width : "10vw")};
  height: ${(props) => (props.height ? props.height : "30px")};
  width: 100%;
  align-items: center;
`;

const SInputWrapper = styled.input`
  display: inline-block;
  height: 100%;
  width: 80%;
  border: none;
  outline: none;
  padding: 5px 10px;
`;

const SDrpdownWrapper = styled.div<IStyledProps>`
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  border-left: 1px solid blue;
  background-color: white;
`;

const SBody = styled.div<IStyledProps>`
  position: absolute;
  top: ${(props) => (props.height ? props.height : "35px")};
  left: 0;
  z-index: 50;
  width: 100%;
  height: 20vh;
  overflow-y: scroll;
  background-color: white;
  margin: 5px 0 0 0;

  div {
    padding: 10px 10px;
    cursor: pointer;
    :hover {
      background-color: #eeeef2;
    }
  }

  ${(props) =>
    props.open === false &&
    css`
      width: 0;
      height: 0;
      overflow: hidden;
    `}
`;

////////////////////////////////////////////////////////////////////////////////////

interface TextFieldProps {
  id?: string;
  value?: string;
  name: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  width?: string;
  height?: string;
  localState?: string;
  updateParentState: any;
  dataOptions?: string[];
}

///////////////////////////////////////////////////////////////////////////////////

const CustomSelect = (props: TextFieldProps) => {
  // destructured some props
  const dataOptions = props.dataOptions;
  const localState = props.localState;
  const updateParentState = props.updateParentState;
  const height = props.height;
  const width = props.width;

  // Some local states
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);

  const inputElem = useRef("");

  // Function used to open listItems
  const toggleInput = () => {
    setOpen(!open);
  };

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };
  //----------------------------------------------------------------------------

  // Local state to store the selected item name
  const [itemName, setItemName] = useState("");
  // Function used to add item on input or to update parent state.
  const onItemSelected = (opt: string) => {
    updateParentState(opt);
    setInputValue(opt);
    setOpen(false);
  };

  //------------------------------------------------------------------------------

  return (
    <SContainer>
      <SHeader height={height}>
        <SInputWrapper
          placeholder="Select..."
          name={props.name}
          value={inputValue}
          onClick={toggleInput}
          onChange={onInputChange}
        />

        <SDrpdownWrapper onClick={toggleInput}>
          <KeyboardArrowDownIcon color="primary" />
        </SDrpdownWrapper>
      </SHeader>

      <SBody open={open} height={height} width={width}>
        {dataOptions &&
          dataOptions.map((opt) => (
            <div key={opt} onClick={() => onItemSelected(opt)}>
              {opt}
            </div>
          ))}
      </SBody>
    </SContainer>
  );
};

export default CustomSelect;
