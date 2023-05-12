import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { API_BASE_URL } from "../../../config/VariableConfig";

type Data = {
  success: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const body = req.body;

    try {
      const { data, status } = await axios({
        method: "post",
        url: `${API_BASE_URL}/api/register/email_verification/`,
        data: body,
        headers: {
          "Content-Type": "application/json",
        },
      });

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
};
