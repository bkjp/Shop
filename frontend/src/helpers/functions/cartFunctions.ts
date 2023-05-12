/////////////////////////  FUNCTIONS USED TO MANAGE CART StateManagedSelect /////////////////////////

import { ICartItems, ICoupon } from "../../../types/custom-typing/interface";
import store from "../../redux/store";

// Function used to get the total number of items in the cart
export const getTotalItems = () => {
  // We get cartItems from the store on client side
  const { cartItems } = store.getState().cart;

  let count = 0;

  cartItems.forEach((item) => {
    count += item.qty;
  });

  return count;
};

//////////////////////////////////////////////////////////////////////////////////////

// The variable here will be the cartItems
export const getSubTotal = () => {
  // We get cartItems from the store on client side
  const { cartItems } = store.getState().cart;

  const subTotal = cartItems
    .reduce((acc, item) => acc + item.qty * item.price, 0)
    .toFixed(2);

  return subTotal;
};

export const getShippingPrice = () => {
  // We get cartItems from the store on client side
  const { cartItems } = store.getState().cart;

  const shippingPrice = cartItems
    .reduce((acc, item) => acc + (item.shipping_rate * item.price) / 100, 0)
    .toFixed(2);

  return shippingPrice;
};

// The variable here will be cartItems and coupon.
export const getCouponPrice = () => {
  // We get cartItems from the store on client side
  const { cartItems, coupon } = store.getState().cart;

  const subTotal = cartItems
    .reduce((acc, item) => acc + item.qty * item.price, 0)
    .toFixed(2);

  //   const couponPrice =
  //     (Number(subTotal) * coupon.couponResponse.coupon_rate) / 100;

  const couponPrice = (
    (cartItems.reduce((acc, item) => acc + item.qty * item.price, 0) *
      coupon.couponResponse.coupon_rate) /
    100
  ).toFixed(2);

  return couponPrice;
};

export const getTaxPrice = () => {
  return 0;
};

export const getTotalPrice = () => {
  const total =
    Number(getSubTotal()) -
    Number(getCouponPrice()) +
    getShippingPrice() +
    getTaxPrice();

  return total;
};
