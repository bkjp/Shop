import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { API_BASE_URL } from "../../../config/VariableConfig";

export default async (req: NextApiRequest, res: NextApiResponse<{}>) => {
  if (req.method === "POST") {
    // We get the body request
    const couponCode = req.body.couponName;

    try {
      const { data, status } = await axios({
        method: "get",
        url: `${API_BASE_URL}/api/coupons/unique/`,
        data: {
          name: couponCode,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      return res.status(200).json(data);
    } catch (error) {
      if (error.response && error.response.data) {
        return res.status(error.response.status).json({
          feedbackResponse: error.response.data.feedbackResponse,
        });
      } else if (error.request) {
        return res.status(503).json({ feedbackResponse: "Indisponible" });
      } else {
        return res.status(500).json({
          feedbackResponse: error.message,
        });
      }
    }
  } else {
    res.status(500).json({ message: "Method not allowed" });
  }
};
