import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface IUserAttributes {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  re_password: string;
  metro_location: string;
  accept_tnc: boolean
}

export const register_user = createAsyncThunk<
  any,
  IUserAttributes,
  {
    rejectValue: string;
  }
>("user/registerStatus", async (props, thunkAPI) => {
  try {
    const { data } = await axios({
      method: "post",
      url: "/api/users/register",
      data: props,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.feedbackResponse);
  }
});

/////////////////////////// RESET REGISTER  ////////////////////////

export const resetAuthData = createAction("user/resetAuthState");

////////////////////////////////////////    LOGIN      //////////////////////////////////////

interface LoginAttributes {
  username: string;
  password: string;
}

export const login_user = createAsyncThunk<
  any,
  LoginAttributes,
  {
    rejectValue: string;
  }
>("user/loginStatus", async (props, thunkAPI) => {
  try {
    const { data, status } = await axios({
      method: "post",
      url: "/api/account/login",
      data: props,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.feedbackResponse);
  }
});

//////////////////////////////     LOGOUT      /////////////////////

export const logout_user = createAsyncThunk<
  any,
  string,
  {
    rejectValue?: string;
  }
>("user/logoutStatus", async (dummy, thunkAPI) => {
  try {
    const { data } = await axios({
      method: "post",
      url: "/api/account/logout",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    // Since we don't have an explicit response from Next.js Api endpoint, we customize a
    // response as a string to send to the store redux as a feedback
    return thunkAPI.rejectWithValue("logout failed from next.js Api");
  }
});

/////////////////////   REFRESH TOKEN ACTION     /////////////////////////////

export const request_refresh = createAsyncThunk<
  any,
  string,
  {
    rejectValue: string;
  }
>("user/refreshStatus", async (dummy, thunkAPI) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "/api/account/refresh",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    // Since the response from Next.js Api is an object in the form
    // {feedbackResponse: "some strings here" }, to obtain the string we should do like this
    // error.response.data.feedbackresponse
    return thunkAPI.rejectWithValue(error.response.data.feedbackResponse);
  }
});
