import React from "react";
import styled from "styled-components";
import { ITags } from "../../../types/custom-typing/interface";

const SContainer = styled.div`
  background-color: green;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 10px;
`;

const STagItem = styled.div`
  background-color: #ffe7e7;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
`;

////////////////////////////////////////////////////////////////////////////

const TagsBox = ({ tags, setProducts }) => {
  // Function used to fetched product of a specified tag
  const fetchProducts = async (id: number) => {
    console.log("fetched");
  };

  //console.log("les tags", tags);

  return (
    <SContainer>
      {tags && tags !== null ? (
        tags.map((tag: Partial<ITags>) => (
          <STagItem key={tag.id} onClick={() => fetchProducts(tag.id)}>
            {tag.name}
          </STagItem>
        ))
      ) : (
        <div>Salut</div>
      )}
    </SContainer>
  );
};

export default TagsBox;
