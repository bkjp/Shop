import React from "react";
import axios from "axios";
import { NEXT_PUBLIC_API_BASE_URL } from "../../../config/VariableConfig";
////////////////////////////////////////////////////////////////////////////

interface IId {
  id: string | string[];
}

//////////////////////////////////////////////////////////////////////////////

export const loadProducts = async () => {
  try {
    const { data } = await axios({
      method: "get",
      url: `${NEXT_PUBLIC_API_BASE_URL}/api/products/all/`,
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

// Load a unique category using its id

export const loadProduct = async (id: string) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `${NEXT_PUBLIC_API_BASE_URL}/api/products/unique/`,
      params: {
        product_id: id,
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

////////////////////////////////////////////////////////////////////////////////

export const loadProductsByCategory = async (id: IId) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `${NEXT_PUBLIC_API_BASE_URL}/api/products/unique/`,
      params: {
        category_id: id,
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
