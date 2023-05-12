import axios from "axios";
import cookie from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { API_BASE_URL } from "../../../config/VariableConfig";

export default async (req: NextApiRequest, res: NextApiResponse<{}>) => {
  if (req.method === "GET") {
    const secret = process.env.NEXTAUTH_SECRET;
    const token = await getToken({ req, secret });
    console.log("ON CHERCHE LERREUR DE LA REQUETE DANS LE TERMINAL");

    if (!token) {
      return res.status(401).json({
        feedbackResponse:
          "You are not authorized to make this request. Please login",
      });
    } else {
      //We retrieve access token
      const access = token.accessToken;

      try {
        const { data, status, headers } = await axios({
          method: "get",
          url: `${API_BASE_URL}/api/users/all/`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access}`,
          },
        });

        return res.status(200).json(data);
      } catch (error) {
        // The response error coming from backend is in the form
        // {"feedbackResponse":"some strings"} for Rest Framework response
        // or in the form {"detail":" string", "code":"string", "messages":[....]} for unauthorize
        // authentication
        //, then we should have
        // error.response.data = {"feedbackResponse": "some strings here"} or
        // error.data.response = {"detail":" string", "code":"string", "messages":[....]}

        return res.status(error.response.status).json({
          feedbackResponse:
            error.response && error.response.data
              ? error.response.data.detail
              : "something went wrong when configuring your request",
        });
      }
    }
  }
};
