import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse<{}>) => {
  if (req.method === "GET") {
    try {
      // We retrieve publishable key from .env file
      const paypal_client_id = process.env.PAYPAL_CLIENT_ID;

      // We send backe the response.
      return res.status(200).json({
        paypal_client_id,
      });
    } catch (error) {
      return;
    }
  }
};
