import axios from "axios";
import cookie from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { API_BASE_URL } from "../../../config/VariableConfig";

export default async (req: NextApiRequest, res: NextApiResponse<{}>) => {
  if (req.method === "POST") {
    const secret = process.env.NEXTAUTH_SECRET;
    const token = await getToken({ req, secret });

    if (!token) {
      return res.status(401).json({
        feedbackResponse:
          "You are not authorized to make this request. Please login",
      });
    } else {
      //We retrieve access token
      const access = token.accessToken;

      // We retrieve the data coming from client.
      const { order } = req.body;

      // We construct the new order to send to the backend by adding the user to the incoming order.
      const newOrder = {
        user_id: token.id,
        cartItems: order.cartItems,
        payementMethod: order.payementMethod,
        deliveryAddress: order.deliveryAddress,
        billingAddress: order.billingAddress,
        subTotal: order.subTotal,
        couponRate: order.couponRate,
        couponPrice: order.couponPrice,
        shippingPrice: order.shippingPrice,
        taxPrice: order.taxPrice,
        totalPrice: order.totalPrice,
      };

      try {
        const { data, status, headers } = await axios({
          method: "post",
          url: `${API_BASE_URL}/api/orders/create/`,
          data: newOrder,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access}`,
          },
        });

        console.log("///////////////////////////////////////////");
        console.log(data.dataResponse);

        return res.status(200).json(data);
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.detail
        ) {
          return res.status(401).json({
            feedbackResponse: error.response.data.detail,
          });
        }

        if (error.response && error.response.data) {
          return res.status(error.response.status).json({
            feedbackResponse: error.response.data.feedbackResponse,
          });
        } else if (error.request) {
          return res
            .status(503)
            .json({ feedbackResponse: "Serveur Indisponible" });
        } else {
          return res.status(500).json({
            feedbackResponse: error.message,
          });
        }
      }
    }
  } else {
    res.status(500).json({ message: "Method not allowed" });
  }
};
