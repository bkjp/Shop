import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import defaultImage from "../../assets/images/default/default_image.webp";
import {
  ICategory,
  ICategoryNode,
} from "../../../types/custom-typing/interface";
import { Grid } from "@mui/material";
import { useQuery, gql } from "@apollo/client";
import { log } from "console";
import { loadCategoriesProductsTags } from "../../helpers/lib/loadDatas/loadCategories";
import axios from "axios";
////////////////////////////////////////////////////////////////////////////

const SContainer = styled.div`
  padding: 2vh 0;
`;

const STitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0;
`;

const SSubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 3vh 0;
  padding: 0 10vw;
`;

const SImgWrapper = styled.div`
  background-color: green;
  display: block;
  width: 200px;
  height: 200px;
  cursor: pointer;
  border-radius: 20px;
  margin: 5px 10px;
  padding: 10px;
`;

/////////////////////////////////////////////////////////////////////////////

const CategoriesBox = () => {
  const router = useRouter();
  const [new_categories, setCategories] = useState();

  //const data = loadCategoriesProductsTags();

  const { loading, data, error } = useQuery(gql`
    query GET_CATEGORIES {
      categories {
        edges {
          node {
            id
            name
            thumbnail
          }
        }
      }
    }
  `);

  console.log("/////////////////////// APOLLO LOADING ///", loading);
  console.log("/////////////////////// APOLLO DATA ///", data);
  console.log("/////////////////////// APOLLO ERROR ///", error);

  if (loading) return <h1>Loading...</h1>;

  if (error) {
    return (
      <div>
        <h1>Error occured: </h1>
      </div>
    );
  }

  //const categories = [];
  const categories = data ? data.categories.edges : null;

  const one = categories[0].node.thumbnail;

  console.log("//////////////  ONE  ////", one);

  const onSelectCategoryId = (id: number) => {
    router.push(`/products/${id}`);
  };

  return (
    <SContainer>
      <div>
        <STitle>Magasinez par categories</STitle>
        <SSubTitle>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
        </SSubTitle>

        <SContent>
          {categories && categories !== null ? (
            categories.map((category: ICategoryNode) => (
              <SImgWrapper
                key={category.node?.id}
                onClick={() => onSelectCategoryId(category.node?.id)}
              >
                <Image
                  src={
                    category.node?.thumbnail
                      ? category.node?.thumbnail
                      : defaultImage
                  }
                  alt={category.node?.name}
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </SImgWrapper>
            ))
          ) : (
            <div>
              <h1>Category list empty</h1>
            </div>
          )}
        </SContent>
      </div>
    </SContainer>
  );
};

export default CategoriesBox;
