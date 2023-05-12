import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { API_BASE_URL } from "../../../config/VariableConfig";

export default async (req: NextApiRequest, res: NextApiResponse<{}>) => {
  if (req.method === "GET") {
    // The body is an object with credential coming from thunk of redux
    const cat_id = req.query.id;

    try {
      const { data, status } = await axios({
        method: "get",
        url: `${API_BASE_URL}/api/products/all/`,
        params: {
          category_id: cat_id,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      return res.status(200).json(data);
    } catch (error) {
      return res.status(error.response.status).json({
        feedbackResponse:
          error.response && error.response.data
            ? error.response.data.feedbackResponse
            : "something went wrong when configuring your request",
      });
    }
  } else {
    res.status(500).json({ message: "Method not allowed" });
  }
};
