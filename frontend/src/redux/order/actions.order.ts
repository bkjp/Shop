import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { IOrder } from "../../../types/custom-typing/interface";

/////////////////////////////////////////////////////////////////////////////////////////////////
// Define all action involving with cart order

//-----------------------------------------------------------------------

///////////////////////   addresse   //////////////////////////////////////////

// Delivery address  action
export const addOrderAction = createAction<IOrder>("order/addingOrder");

///////////////////////   COUPON   //////////////////////////////////////////

// Add coupon action

// export const addCouponAction = createAsyncThunk<
//   any,
//   { couponName: string }, // Type of incoming props (type of payload of action)
//   {
//     rejectValue: string;
//   }
// >("category/createCategoryStatus", async (valuesFromClient, thunkAPI) => {
//   try {
//     const { data, status, headers, config, request } = await axios({
//       method: "post",
//       url: "/api/coupon/apply",
//       data: valuesFromClient,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       withCredentials: true,
//     });

//     return data;
//   } catch (error) {
//     // Since the response from Next.js Api is an object in the form
//     // {feedbackResponse: "some strings here" }, to obtain the string we should do like this
//     // error.response.data.feedbackresponse

//     return thunkAPI.rejectWithValue(error.response.data.feedbackResponse);
//   }
// });
