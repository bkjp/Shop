import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ICategoryAttributes {
  name: string;
  slug: string;
}

export const create_category = createAsyncThunk<
  any,
  ICategoryAttributes,
  {
    rejectValue: string;
  }
>("category/createCategoryStatus", async (props, thunkAPI) => {
  try {
    const { data, status, headers, config, request } = await axios({
      method: "get",
      url: "/api/category/register-category",
      data: props,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    return data;
  } catch (error) {
    // Since the response from Next.js Api is an object in the form
    // {feedbackResponse: "some strings here" }, to obtain the string we should do like this
    // error.response.data.feedbackresponse

    return thunkAPI.rejectWithValue(error.response.data.feedbackResponse);
  }
});
