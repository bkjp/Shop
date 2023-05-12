import HomePageLayout from "../layouts/homePage/homePageLayout";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CategoriesBox from "../containers/homePage/categoriesBox";
import CBanner from "../containers/homePage/banner";
import ClientOnly from "../containers/clientOnly/clientOnly";

const SContainer = styled.div``;

const SBanner = styled.div`
  margin: 0 0 5vh;
`;

///////////////////////////////////////////////////////////////////////////////////////////////////

export default function index() {
  // Date fetched coming from server side
  //const categories = [];
  //const categories = response;

  return (
    <HomePageLayout>
      <SContainer>
        <ClientOnly>
          <CategoriesBox />
        </ClientOnly>
      </SContainer>
    </HomePageLayout>
  );
}

/////////////////////////////////    SERVER SIDE   //////////////////////////////////////////

import client from "../services/client/apollo-client";
import { gql } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { loadCategoriesProductsTags } from "../helpers/lib/loadDatas/loadCategories";

// export const getStaticProps = async () => {
//   //   //...............................

//   //const data = await loadCategoriesProductsTags();

//   const { data, error } = await client.query({
//     query: gql`
//       query GET_CATEGORIES {
//         categories {
//           edges {
//             node {
//               id
//               name
//               thumbnail
//             }
//           }
//         }
//       }
//     `,
//   });

//   console.log("/////////////////  AFTER QUEY  //////////////");

//   //console.log("ERROR", error?.networkError);

//   //console.log("DATA", data.categories.edges);
//   //console.log("DATA", data.categoriesJules);
//   //console.log("DATA", data);
//   //console.log("DATA", data.countries);

//   return {
//     props: {
//       response: data,
//     },
//   };
// };
