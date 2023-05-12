import axios from "axios";
import cookie from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";
import { API_BASE_URL } from "../../../config/VariableConfig";

export default async (req: NextApiRequest, res: NextApiResponse<{}>) => {
  if (req.method === "GET") {
    // We retrieve cookis from headers and refresh token from cookie
    const cookies = cookie.parse(req.headers.cookie ?? "");
    const refresh = cookies.refresh ?? false;

    // We send a response to the thunk using existence checking of refresh
    if (refresh === false) {
      return res.status(401).json({
        feedbackResponse:
          " You areNot authorize to make this request. Please login first",
      });
    }

    try {
      const { data } = await axios({
        method: "post",
        url: `${API_BASE_URL}/api/users/login/token/refresh/`,
        data: { refresh },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      // We store tokens into cookies
      res.setHeader("Set-Cookie", [
        cookie.serialize("access", data.access, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 30,
          sameSite: "strict",
          path: "/",
        }),
        cookie.serialize("refresh", data.refresh, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60 * 24,
          sameSite: "strict",
          path: "/",
        }),
      ]);

      return res.status(200).json({
        feedbackResponse: "Refresh request successfully",
      });
    } catch (error) {
      return res.status(error.response.status).json({
        feedbackResponse:
          error.response && error.response.data
            ? error.response.data
            : "something went wrong when configuring your request",
      });
    }
  }
};
