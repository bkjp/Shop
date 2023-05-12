import { createReducer } from "@reduxjs/toolkit";
import {
  login_user,
  logout_user,
  register_user,
  request_refresh,
  resetAuthData,
} from "./actions.auth";

/////////////////////////////////     REGISTER      /////////////////////////////////////

type RegisterStateType = {
  loading: boolean;
  feedback: string;
  register_status: string;

  registerResult: {
    id: number;
    user_id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    title: string;

    social_number: string;
    driving_license: string;
    citizen_status: string;
    marital_status: string;

    profile_image: string;
    street_number: number;
    street_name: string;
    postal_code: string;
    metro_location: string;
    town: string;
    province: string;
    country: string;
    email_verified: boolean;

    is_active: boolean;
    is_superuser: boolean;
    is_staff: boolean;
    is_admin: boolean;

    created_at: string;
  };
};

const initialState: RegisterStateType = {
  loading: false,
  feedback: "",
  register_status: "",

  registerResult: {
    id: 0,
    user_id: 0,
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    title: "",

    social_number: "",
    driving_license: "",
    citizen_status: "",
    marital_status: "",

    profile_image: "",
    street_number: 0,
    street_name: "",
    postal_code: "",
    metro_location: "",
    town: "",
    province: "",
    country: "",
    email_verified: false,

    is_active: false,
    is_superuser: false,
    is_staff: false,
    is_admin: false,

    created_at: "",
  },
};

export const registerReducer = createReducer(initialState, (builder) => {
  builder.addCase(register_user.pending, (state) => {
    state.loading = true;
  });

  builder.addCase(register_user.fulfilled, (state, action) => {
    state.loading = false;
    state.register_status = "success";
    state.registerResult = action.payload.dataResponse;
    state.feedback = action.payload.feedbackResponse;
  });

  builder.addCase(register_user.rejected, (state, action) => {
    state.loading = false;
    state.feedback = action.payload;
    state.register_status = "fail";
  });
  builder.addCase(resetAuthData, (state) => {
    return initialState;
  });
});

////////////////////////////////////      LOGIN REDUCER        /////////////////////////////

interface LoginType {
  loading: boolean;
  isAuthenticated: boolean;
  feedback: string;

  loginResult: {
    id: string;
    _id: string;
    username: string;
    email: string;
    phone: string;
    isAdmin: boolean;
    isWorker: boolean;
    isJobOwner: boolean;
  };
}

const initialLoginState: LoginType = {
  loading: false,
  isAuthenticated: false,
  feedback: "",

  loginResult: {
    id: "",
    _id: "",
    username: "",
    email: "",
    phone: "",
    isAdmin: false,
    isWorker: false,
    isJobOwner: false,
  },
};

export const loginReducer = createReducer(initialLoginState, (builder) => {
  builder.addCase(login_user.pending, (state) => {
    state.loading = true;
    state.isAuthenticated = false;
  });

  builder.addCase(login_user.fulfilled, (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.loginResult = action.payload;
  });

  builder.addCase(login_user.rejected, (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.feedback = action.payload;
  });

  //////////////////////////       REFRESH TOKEN AND AUTHENTIFY   //////////////////

  builder.addCase(request_refresh.pending, (state) => {
    state.loading = true;
    state.isAuthenticated = false;
  });

  builder.addCase(request_refresh.fulfilled, (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.feedback = action.payload.feedbackResponse;
  });

  builder.addCase(request_refresh.rejected, (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.feedback = action.payload;
  });
  ///////////////////////////      LOGOUT    ////////////////////////////////

  builder.addCase(logout_user.pending, (state) => {
    state.loading = true;
    state.isAuthenticated = false;
  });

  builder.addCase(logout_user.fulfilled, (state, action) => {
    return initialLoginState;
  });

  builder.addCase(logout_user.rejected, (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
  });
});
