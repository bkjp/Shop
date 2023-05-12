import { createReducer } from "@reduxjs/toolkit";
import {
  IBillingAddress,
  ICartState,
  IDeliveryAddress,
} from "../../../types/custom-typing/interface";
import {
  addBillingAddress,
  addCouponAction,
  addDeliveryAddress,
  addPayementMethod,
  addToCart,
  clearCart,
  removeFromCart,
  updateQtyAction,
} from "./actions.cart";

//////////////////////////////////////////////////////////////////////////////////////////

// Initial value of state cart.
const initialState: ICartState = {
  cartItems: [],

  payementMethod: "",

  deliveryAddress: {
    deliveryFirstName: "",
    deliveryLastName: "",

    deliveryPhoneNumber: "",
    deliveryEmail: "",

    deliveryCountry: "",
    deliveryProvince: "",
    deliveryTown: "",

    deliveryAddress: "",
    deliveryZipCode: "",
    deliveryUnitNumber: 0,
  },

  billingAddress: {
    billingFirstName: "",
    billingLastName: "",

    billingEmail: "",
    billingPhoneNumber: "",

    billingCountry: "",
    billingProvince: "",
    billingTown: "",

    billingZipCode: "",
    billingAddress: "",
    billingUnitNumber: 0,
  },

  coupon: {
    loading: false,
    success: false,
    successMsg: "",
    error: false,
    errorMsg: "",
    couponResponse: {
      name: "",
      description: "",
      is_active: true,
      coupon_rate: 0,
      start_date: "",
      end_date: "",
      created_at: "",
      updated_at: "",
    },
  },

  taxe: [
    {
      name: "",
      country: "",
      description: "",
      taxe_percentage: 0,
      is_active: true,
      created_at: "",
      updated_at: "",
    },
  ],
};

const cartReducer = createReducer(initialState, (builder) => {
  // Adding item in the cart
  builder.addCase(addToCart, (state, action) => {
    const newItem = action.payload;
    const existsItem = state.cartItems.find((item) => item.id === newItem.id);

    state.cartItems = existsItem
      ? state.cartItems.map((item) =>
          item.name === existsItem.name ? newItem : item
        )
      : [...state.cartItems, newItem];
  });

  // Removing item from the cart
  builder.addCase(removeFromCart, (state, action) => {
    state.cartItems = state.cartItems.filter(
      (item) => item.id !== action.payload
    );
  });

  // Update quantity of item inside the cart
  builder.addCase(updateQtyAction, (state, action) => {
    // We retrieve the index
    const itemIndex = state.cartItems.findIndex(
      (item) => item.id === action.payload.itemId
    );
    // We set the new qty
    state.cartItems[itemIndex].qty = action.payload.newQty;
  });

  /////////////////////////////////////   PAYEMENT METHOD   /////////////////////////////////

  // Adding payement Method
  builder.addCase(addPayementMethod, (state, action) => {
    state.payementMethod = action.payload;
  });

  /////////////////////////////   DELIVERY AND BILLING ADDRESS   /////////////////////////

  // Adding deliveru address
  builder.addCase(addDeliveryAddress, (state, action) => {
    state.deliveryAddress = action.payload;
  });

  // adding billing address
  builder.addCase(addBillingAddress, (state, action) => {
    state.billingAddress = action.payload;
  });

  ////////////////////////////////   COUPON   /////////////////////////

  builder.addCase(addCouponAction.pending, (state) => {
    state.coupon.loading = true;
    state.coupon.success = false;
    state.coupon.error = false;
    state.coupon.errorMsg = "";
    state.coupon.successMsg = "";
  });

  builder.addCase(addCouponAction.fulfilled, (state, action) => {
    state.coupon.loading = false;
    state.coupon.success = true;
    state.coupon.error = false;
    state.coupon.successMsg = action.payload.feedbackResponse;
    state.coupon.couponResponse = action.payload.dataResponse;
  });

  builder.addCase(addCouponAction.rejected, (state, action) => {
    state.coupon.loading = false;
    state.coupon.success = false;
    state.coupon.error = true;
    state.coupon.errorMsg = action.payload;
    state.coupon.successMsg = "";
  });

  ////////////////////////////////   CLEAR CART  ///////////////////////

  builder.addCase(clearCart, (state, action) => {
    state.cartItems = [];
  });
});

export default cartReducer;
