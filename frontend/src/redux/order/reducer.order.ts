import { createReducer } from "@reduxjs/toolkit";
import { IOrder } from "../../../types/custom-typing/interface";
import { addOrderAction } from "./actions.order";

//////////////////////////////////////////////////////////////////////////////////////////

// Initial value of state cart.
const initialState: IOrder = {
  feedbackResponse: "",
  dataResponse: {
    bar_code: "",
    billing_address: {
      id: 0,
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      town: "",
      province: "",
      country: "",
      address: "",
      zip_code: "",
      unit_number: "",
      created_at: "",
      updated_at: "",
      user: 0,
      order: 0,
    },
    coupon_price: 0,
    coupon_rate: 0,
    created_at: "",
    delivered_at: "",
    delivery_address: {
      id: 0,
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      town: "",
      province: "",
      country: "",
      address: "",
      zip_code: "",
      unit_number: "",
      created_at: "",
      updated_at: "",
      user: 0,
      order: 0,
    },
    id: 0,
    is_delivered: false,
    is_paid: false,
    order_items: [
      {
        created_at: "",
        id: 0,
        order: 0,
        name: "",
        price: 0,
        product: 0,
        qty: 0,
        updated_at: "",
      },
    ],
    paid_at: "",
    payement_method: "",
    qr_code: "",
    reference: "",
    shipping_price: 0,
    status: "",
    sub_total_price: 0,
    tax_price: 0,
    total_price: 0,
    updated_at: "",
  },
};

const orderReducer = createReducer(initialState, (builder) => {
  ////////////////////////////////   adding order  /////////////////////////

  // Adding deliveru address
  builder.addCase(addOrderAction, (state, action) => {
    state.feedbackResponse = action.payload.feedbackResponse;
    state.dataResponse = action.payload.dataResponse;
  });

  ////////////////////////////////   CLEAR ORDER  ///////////////////////
});

export default orderReducer;
