import React from "react";
import axios from "axios";
import {
  NEXT_PUBLIC_API_BASE_URL,
  NEXT_PUBLIC_API_URL,
} from "../../../config/VariableConfig";

///////////////////////////////////////////////////////////////////////////////////////

interface IId {
  id: number;
}

/////////////////////////////////////////////////////////////////////////////////

export const loadCategories = async () => {
  try {
    const { data } = await axios({
      method: "get",
      url: `${NEXT_PUBLIC_API_URL}`,
    });

    return data;
  } catch (error) {
    const feedback_error =
      error.response && error.response.data
        ? error.response.data.feedbackResponse
        : "something went wrong when configuring your request";

    return feedback_error;
  }
};

//////////////////////////////////////////////////////////////////////////////

// Load categories children of a unique category using its id

export const loadChildrenOfCategory = async (id: IId) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `${NEXT_PUBLIC_API_BASE_URL}/api/categories/children/`,
      params: {
        id: id,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data;
  } catch (error) {
    const feedback_error =
      error.response && error.response.data
        ? error.response.data.feedbackResponse
        : "something went wrong when configuring your request";

    return feedback_error;
  }
};

///////////////////////////////////////////////////////////////////////////////

// Load a unique category using its id

export const loadCategory = async (id: IId) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `${NEXT_PUBLIC_API_BASE_URL}/api/categories/unique/`,
      params: {
        id: id,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data;
  } catch (error) {
    const feedback_error =
      error.response && error.response.data
        ? error.response.data.feedbackResponse
        : "something went wrong when configuring your request";

    return feedback_error;
  }
};

///////////////////////////////////////////////////////////

export const loadCategoriesProductsTags = async () => {
  try {
    const { data } = await axios({
      method: "post",
      url: "http://localhost:8000/graphql/",
      data: {
        operationName: "GET_CATEGORIES_PRODUCTS_TAGS",
        query: `
          query GET_CATEGORIES_PRODUCTS_TAGS{
            categories{
              edges{
                node{
                  id
                  name
                  thumbnail
                }
              }
            }
          }
        `,
        variables: {},
      },
    });

    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.detail) {
      const feedbackResponse = error.response.data.detail;
      return feedbackResponse;
    } else if (error.response && error.response.data) {
      const feedbackResponse = error.response.data.feedbackResponse;
      return feedbackResponse;
    } else if (error.request) {
      const feedbackResponse = "Serveur Indisponible";
      return feedbackResponse;
    } else {
      const feedbackResponse = error.message;
      return feedbackResponse;
    }
  }
};
