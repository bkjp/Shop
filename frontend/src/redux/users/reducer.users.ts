import { createReducer } from "@reduxjs/toolkit";
import { get_users, resetUserList } from "./action.users";

interface UserType {
  loading: boolean;
  feedback: string;

  userList: [
    {
      id: number;
      user_id?: number;
      first_name?: string;
      last_name?: string;
      email?: string;
      phone?: string;
      profile_image?: string;
      street_number?: string;
      street_name?: string;
      postal_code?: string;
      town?: string;
      province?: string;
      country?: string;
      created_at?: string;
      is_active?: boolean;
      is_superuser?: boolean;
      is_staff?: boolean;
      isAdmin?: boolean;
      is_worker?: boolean;
      is_job_owner?: boolean;
    }
  ];
}

const initialState: UserType = {
  loading: false,
  feedback: "",

  userList: [
    {
      id: 0,
      user_id: 0,
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      profile_image: "",
      street_number: "",
      street_name: "",
      postal_code: "",
      town: "",
      province: "",
      country: "",
      created_at: "",
      is_active: true,
      is_superuser: false,
      is_staff: false,
      isAdmin: false,
      is_worker: false,
      is_job_owner: false,
    },
  ],
};

export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(get_users.pending, (state) => {
    state.loading = true;
  });

  builder.addCase(get_users.fulfilled, (state, action) => {
    state.loading = false;
    state.userList = action.payload.dataResponse;
    state.feedback = action.payload.feedbackResponse;
  });

  builder.addCase(get_users.rejected, (state, action) => {
    state.loading = false;
    state.feedback = action.payload;
  });

  builder.addCase(resetUserList, (state) => {
    return initialState;
  });
});
