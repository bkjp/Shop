import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { json } from "stream/consumers";
import { API_BASE_URL } from "../../../config/VariableConfig";

export default async (req: NextApiRequest, res: NextApiResponse<{}>) => {
  if (req.method === "POST") {
    // The body is an object with credential coming from thunk of redux
    const body = req.body;

    try {
      const { data, status } = await axios({
        method: "post",
        url: `${API_BASE_URL}/api/users/register/`,
        data: body,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(data);
      // data is the return object as a response from the server

      return res.status(200).json(data);
    } catch (error) {
      if (error.response) {
        return res
          .status(error.response.status)
          .json({ feedbackResponse: error.response.data.feedbackResponse });
      } else {
        return res
          .status(500)
          .json({ feedbackResponse: "error of the server" });
      }
    }
  } else {
    res.status(500).json({ message: "Method not allowed" });
  }
};
