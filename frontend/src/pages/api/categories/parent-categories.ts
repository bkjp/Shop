import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { API_BASE_URL } from "../../../config/VariableConfig";

export default async (req: NextApiRequest, res: NextApiResponse<{}>) => {
  if (req.method === "POST") {
    // The body is an object
    const incoming_data = req.body;

    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8000/graphql/",
        data: incoming_data,
      });

      return data;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.detail) {
        const feedbackResponse = error.response.data.detail;
        return feedbackResponse;
      } else if (error.response && error.response.data) {
        const feedbackResponse = error.response.data.feedbackResponse;
        return feedbackResponse;
      } else if (error.request) {
        const feedbackResponse = "Serveur Indisponible";
        return feedbackResponse;
      } else {
        const feedbackResponse = error.message;
        return feedbackResponse;
      }
    }
  } else {
    res.status(500).json({ message: "Method not allowed" });
  }
};
