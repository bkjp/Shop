import React from "react";
import axios from "axios";
import { NEXT_PUBLIC_API_BASE_URL } from "../../../config/VariableConfig";

export const loadCustomers = async () => {
  try {
    const { data } = await axios({
      method: "get",
      url: `${NEXT_PUBLIC_API_BASE_URL}/api/customers/all/`,
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

interface IId {
  id: string | number;
}

export const loadCustomer = async (id: IId) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `${NEXT_PUBLIC_API_BASE_URL}/api/customers/unique/`,
      params: {
        customer_id: id,
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
