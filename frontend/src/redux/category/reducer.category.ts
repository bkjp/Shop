import { createReducer } from "@reduxjs/toolkit";
import { string } from "yup/lib/locale";
import { create_category } from "./actions.category";

interface CategoryType {
  loading: boolean;
  feedback: string;
  status: string;

  category: {
    name: string;
    slug: string;
    created_at: string;
    is_active: boolean;
  };
}

const initialState: CategoryType = {
  loading: false,
  feedback: "",
  status: "",

  category: {
    name: "",
    slug: "",
    created_at: "",
    is_active: true,
  },
};

export const categoryReducer = createReducer(initialState, (builder) => {
  builder.addCase(create_category.pending, (state) => {
    state.loading = true;
    state.status = "";
  });

  builder.addCase(create_category.fulfilled, (state, action) => {
    state.loading = false;
    state.category = action.payload.dataResponse;
    state.feedback = action.payload.feedbackResponse;
    state.status = "ok";
  });

  builder.addCase(create_category.rejected, (state, action) => {
    state.loading = false;
    state.feedback = action.payload;
    state.status = "failed";
  });
});
