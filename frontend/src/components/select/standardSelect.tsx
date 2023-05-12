import React from "react";
import styled from "styled-components";

const SContainer = styled.div``;

export default function CStandardSelectObject(props) {
  // dataOptions must be an array of object
  // [{id:"id", key1:"value1"}, {id:"id", key1:"value1"}, ....., {id:"id", key1:"value1"} ]
  const dataOptions = props.dataOptions;
  const value = props.value;
  const onChange = props.onChange;

  return (
    <SContainer>
      <select name="product_name" value={value} onChange={onChange}>
        <option>Select...</option>
        {dataOptions &&
          dataOptions.map((opt) => <option key={opt.id}>{opt}</option>)}
      </select>
    </SContainer>
  );
}
