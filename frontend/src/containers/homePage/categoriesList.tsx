import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { ICategory } from "../../../types/custom-typing/interface";

const SContainer = styled.div`
  background-color: pink;
`;

/////////////////////////////////////////////////////////////////////////////

const CategoriesList = ({ categories, setProducts }) => {
  // Function used to fetch product for a specific category.
  const fetchProducts = async (id: number) => {
    console.log("fetch");
  };

  return (
    <SContainer>
      <h5>Categories</h5>
      <Grid container>
        {categories &&
          categories !== null &&
          categories !== undefined &&
          categories.length !== 0 &&
          categories.map((category: Partial<ICategory>) => (
            <Grid item key={category.id} xs={12} sm={12} md={12} lg={12}>
              <div onClick={() => fetchProducts(category.id)}>
                {category.name}
              </div>
            </Grid>
          ))}
      </Grid>
    </SContainer>
  );
};

export default CategoriesList;
