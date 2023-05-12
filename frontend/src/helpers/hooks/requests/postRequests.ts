import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useState } from "react";

// const {data, feedback_error} = usePostrequest({
//       url: url,
//       body: body,
// });
//
// This hook return 4 value: (result, error, loading, status)
// and status can take also 4 value: ok, failed, finished,

interface IProps {
  url: string;
  token?: string;
  body: {};
}

interface IObjectResponse {
  loading?: boolean;
  error?: string;
  result?: {};
  token?: string;
}

export const usePostRequest = () => {
  // Local states
  const [result, setResult] = useState(null);
  const [error, setError] = useState<string>("jules");
  const [status, setStatus] = useState<number>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [failed, setFailed] = useState<boolean>(false);

  const postData = async ({ url, data }) => {
    //-----------------

    console.log(url);
    console.log(data);

    // axios params
    const axiosParams: AxiosRequestConfig = {
      method: "post",
      url: url,
      data: data,
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data, status } = await axios(axiosParams);

      // We update data response, status and success.
      setResult(data);
      setStatus(status);
      setSuccess(true);

      //-----------
    } catch (error) {
      // We retrieve the error sent by the backend if it exists
      const feedback_error =
        error.response && error.response.data
          ? error.response.data.feedbackResponse
          : "something went wrong when configuring your request";

      // We update error, failed.
      setError(feedback_error);
      setFailed(true);
    } finally {
      setFailed(false);
    }
  };

  return { result, error, status, success, failed, postData };
};
