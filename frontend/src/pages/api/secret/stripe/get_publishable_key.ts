import axios from "axios";
import cookie from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";
import { API_BASE_URL } from "../../../../config/VariableConfig";

export default async (req: NextApiRequest, res: NextApiResponse<{}>) => {
  if (req.method === "GET") {
    try {
      // We retrieve publishable key from .env file
      const publishable_key = process.env.STRIPE_PUBLIC_KEY;

      // We send backe the response.
      return res.status(200).json({
        publishable_key,
      });
    } catch (error) {
      return;
    }
  }
};
