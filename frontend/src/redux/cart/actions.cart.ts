import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  IBillingAddress,
  ICartItem,
  ICoupon,
  IDeliveryAddress,
} from "../../../types/custom-typing/interface";

/////////////////////////////////////////////////////////////////////////////////////////////////////
// Define all action involving with cart items

export const addToCart = createAction<ICartItem>("cart/addItem");

export const removeFromCart = createAction<number>("cart/removeItem");

export const clearCart = createAction("cart/clearItems");

//-----------------------------------------------------------------------

interface IUpdateQty {
  newQty: number;
  itemId: number;
}

export const updateQtyAction = createAction<IUpdateQty>("cart/updateQty");

// Payement method action
export const addPayementMethod = createAction<string>("cart/payementMethod");

///////////////////////   addresse   //////////////////////////////////////////

// Delivery address  action
export const addDeliveryAddress = createAction<IDeliveryAddress>(
  "cart/deliveryAddress"
);

// Billing address  action
export const addBillingAddress = createAction<IBillingAddress>(
  "cart/billingAddress"
);

///////////////////////   COUPON   //////////////////////////////////////////

// Add coupon action

export const addCouponAction = createAsyncThunk<
  any,
  { couponName: string }, // Type of incoming props (type of payload of action)
  {
    rejectValue: string;
  }
>("category/createCategoryStatus", async (valuesFromClient, thunkAPI) => {
  try {
    const { data, status, headers, config, request } = await axios({
      method: "post",
      url: "/api/coupon/apply",
      data: valuesFromClient,
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
