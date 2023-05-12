import axios from "axios";
import cookie from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { API_BASE_URL } from "../../../../config/VariableConfig";
import Stripe from "stripe";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req: NextApiRequest, res: NextApiResponse<{}>) => {
  const { total_price, payment_intent_id } = req.body;

  if (payment_intent_id) {
    try {
      // If a payment_intent_id is passed, retrieve the paymentIntent
      const current_intent = await stripe.paymentIntents.retrieve(
        payment_intent_id
      );

      // If a paymentIntent is retrieved update its amount
      if (current_intent) {
        const updated_intent = await stripe.paymentIntents.update(
          payment_intent_id,
          {
            amount: total_price,
          }
        );
        res.status(200).json(updated_intent);
        return;
      }
    } catch (e) {
      //Catch any error and return a status 500
      if (e.code !== "resource_missing") {
        const errorMessage =
          e instanceof Error ? e.message : "Internal server error";
        res.status(500).json({ statusCode: 500, message: errorMessage });
        return;
      }
    }
  }

  try {
    // Create PaymentIntent
    const payment_intent = await stripe.paymentIntents.create({
      amount: total_price,
      currency: "eur",
      description: "Payment description",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    // We can store the payement_intent in the cookie in order to reuse it if possible.
    //.......

    //Return the payment_intent object
    res.status(200).json(payment_intent);
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Internal server error";
    res.status(500).json({ statusCode: 500, message: errorMessage });
  }
};
