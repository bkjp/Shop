import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import cookie from "cookie";

///////////////////////////////////     USER   ////////////////////////////////////

export const get_user = createAsyncThunk<
  any,
  any,
  {
    rejectValue: string;
  }
>("user/getUserStatus", async (_, thunkAPI) => {
  try {
    const { data, status, headers, config, request } = await axios({
      method: "get",
      url: "/api/users/user",
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

//////////////////////////////////     USERS   ////////////////////////////////////

export const get_users = createAsyncThunk<
  any,
  any,
  {
    rejectValue: string;
  }
>("user/registerStatus", async (_, thunkAPI) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "/api/users/all",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//////////////////////////////////////  DELETE USER   ////////////////////////////////////

export const delete_user = createAsyncThunk<
  any,
  number,
  {
    rejectValue: string;
  }
>("user/deleteStatus", async (id, thunkAPI) => {
  try {
    const { data } = await axios({
      method: "delete",
      url: "api/user/delete",
      params: id,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

///////////////////////////////   RESET USER INFOS   /////////////////////////////

export const resetUserList = createAction("user/resetUserInfos");
